//const { Router } = require("express");
const axios = require("axios");
const { Type, Pokemon } = require("../db");

//const router = Router();
const express = require("express");

//const db = require("../db");
const router = express();
router.use(express.json());

const API = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40";

//console.log(API)

//LLAMADOS API y DB

const getApiInfo = async () => {
  const { data } = await axios.get(API); // Esta info representa el resultado del endpoint principal
  // pokemonPromises es un array promesas que generamos mapeando el array data.results y dentro del map hacemos
  //un request a otro endpoint para traer los detalles del pokemon.
  const pokemonPromises = await data.results.map(async (pokemon) => {
    const { data } = await axios.get(pokemon.url);
    return data;
  });
  const allPokemons = await Promise.all(pokemonPromises);
  const parsedPokemons = allPokemons.map((pk) => ({
    id: pk.id,
    name: pk.name,
    height: pk.height,
    weight: pk.weight,
    image:
      pk.sprites.other["dream_world"].front_default ||
      pk.sprites.other["official-artwork"].front_default,
    attack: pk.stats[1].base_stat,
    defense: pk.stats[2].base_stat,
    speed: pk.stats[5].base_stat,
    health: pk.stats[0].base_stat,
    types: pk.types.map((ty) => ty.type.name),
  }));

  return parsedPokemons;
};

const getDbInfo = async () => {
  //me traigo info de LA BASE DE DATOS
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokemons = async () => {
  // aca junto todaa la info traida de la api y de mi bd
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  // console.log("ACA DB INFO", dbInfo);
  /*
  const dbNormalized = function () {
    const type = dbInfo.types;
    //console.log(type);
     if (type.length > 0) {
      return type.map((p) => p.name).join(",");
    }
  };*/
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};
//console.log(getAllPokemons());

const APItypes = "https://pokeapi.co/api/v2/type"; //llega ok, me trae url

const getApiTypes = async () => {
  const { data } = await axios.get(APItypes); // Esta info representa el resultado del endpoint principal
  //console.log(data);

  const typePromises = await data.results.map(async (ty) => {
    const { data } = await axios.get(ty.url);
    //console.log(data);
    return data; // tengo la data dentro de results, osea toda la info de ese type de poke
  });
  const allTypes = await Promise.all(typePromises);
  const parsedTypes = allTypes.map((ty) => ({
    type: ty.name,
    pokemons: ty.pokemon.map((el) => el.pokemon.name), //genero un array con todos los typos existentes
  }));
  //console.log(parsedTypes);

  return parsedTypes;
};

//ROUTES
/*
router.get("/pokemons", async (req, res) => {
    const dataApi = await getApiInfo();
    res.json(dataApi);
});*/

//OK
router.get("/types", async (req, res, next) => {
  try {
    const dataApi = await getApiTypes();
    const eachType = dataApi.map((x) => x);

    eachType.forEach((el) => {
      Type.findOrCreate({ where: { name: el.type } }); //conecto aca la api con la db, gracias a MODEL.FIND-OR-CREATE
    });
    const allTypesArray = await Type.findAll();
    res.json(allTypesArray); //guardo tipos en el modelo
  } catch (error) {
    next(error);
  }
});

//OK
router.get("/pokemons", async (req, res, next) => {
  try {
    const name = req.query.name;
    let pokemonsTotal = await getAllPokemons(); //llamo toda la info de api y db para la ruta POKEMONS
    if (name) {
      let pokemonName = await pokemonsTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      pokemonName.length
        ? res.status(200).send(pokemonName)
        : res.status(404).send("no exise ese pokemon");
    } else {
      res.status(200).send(pokemonsTotal);
    }
  } catch (error) {
    next(error);
  }
});

//OK
router.post("/pokemons", async (req, res, next) => {
  try {
    let { name, height, weight, health, attack, defense, speed, type } =
      req.body;
    // desconst de body todo lo q me trae el form (seria con lo q lleno cada POKE NUEVO)
    let createdPokemon = await Pokemon.create({
      name,
      height: parseInt(height),
      weight: parseInt(weight),
      health: parseInt(health),
      attack: parseInt(attack),
      defense: parseInt(defense),
      speed: parseInt(speed),
    });
    let typeDb = await Type.findAll({ where: { name: type } });
    await createdPokemon.addTypes(typeDb); // metodo de SEQUALIZE(add) junto lo q traje de BODY () y le agrego lo que traje de DB( que coincida con lo que mande del body)

    res.send("Felicitaciones! creaste un POKEMON");
  } catch (error) {
    next(error);
  }
});
//OK
router.get("/pokemons/:id", async (req, res, next) => {
  const id = req.params.id;
  const pokemonsTotal = await getAllPokemons();
  if (id) {
    let pokemonId = pokemonsTotal.filter((el) => el.id == id);
    pokemonId.length
      ? res.status(200).json(pokemonId)
      : res.status(404).send("no hay personaje");
  }
});

module.exports = router;
