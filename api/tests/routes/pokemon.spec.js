/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");
var request = require("supertest");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

//const type = "Harina";

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  //aca ya tengo el poke creado
  describe("GET /pokemons", () => {
    it("should get 200", () => agent.get("/pokemons").expect(200));
    it("should respond with json", () =>
      agent.get("/pokemons").expect("Content-Type", /json/));
    /* it("should respond with existing pokemon", () =>
      agent.get("/pokemons").expect([]));*/
  });

  describe("GET /types", () => {
    it("should get 200", () => agent.get("/types").expect(200));
    it("should respond with json", () =>
      agent.get("/types").expect("Content-Type", /json/));
    /* it("returns all types", (res) => {
      agent.get("/types").expect(res).toEqual; //expect(foo)
    });*/

    describe("GET /pokemons/:id", () => {
      /*it("should get 200", () => agent.get("/pokemons/:id").expect(200));*/
      it("should respond with html text", () =>
        agent
          .get("/pokemons/:id")
          .expect("Content-Type", "text/html; charset=utf-8"));
    });
  });

  describe("POST /pokemons", function () {
    it("Should return 200 status code", function (done) {
      let pokemon = {
        name: "perro",
        height: 20,
        weight: 10,
        health: 10,
        attack: 10,
        defense: 20,
        speed: 10,
        type: "grass",
      };

      agent.post("/pokemons").send(pokemon).expect(200, done);

      it("should return 500 if there's no pokemon created", () =>
        agent.post("/pokemons").expect(500, done));
    });

    /*
      .expect("name", "perro", done);
     */
  });
});
