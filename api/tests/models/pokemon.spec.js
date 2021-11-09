const { Type, Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "Pikachu" })
          .then(() => {
            return Type.findOne({ where: { name: "Pikachu" } });
          })
          .then((respuesta) => {
            expect(respuesta.toJSON().name).to.equal("Pikachu");
          });
      });
    });
  });
});

describe("Type model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validation Type model ", () => {
    beforeEach(() => Type.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Type.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Type.create({ name: "Harina" })
          .then(() => {
            return Type.findOne({ where: { name: "Harina" } });
          })
          .then((respuesta) => {
            expect(respuesta.toJSON().name).to.equal("Harina");
          });
      });
    });
  });
});
