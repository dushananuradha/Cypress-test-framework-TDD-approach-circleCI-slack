/// <reference types="cypress" />

import { Player } from "../../support/types";

const collectionToQuery = Cypress.env('COLLECTION_NAME');
const newPlayerObject = {
  name: "AB De Villiers",
  sport: "Cricket",
};

const queryUpdate = { name: "Kulasekara" };
const updateObject = { sport: "Cricket", name: "Nuwan Kulasekara" };

const playerToDelete = { name: "Fahim" };

describe("test db interactions", () => {
//   it("Should create a new player", () => {
//     cy.task("createPlayer", {
//       record: newPlayerObject,
//     }).then((result) => {
//       expect(result).to.be.exist;
//     });
//   });

//   it("should update existing player", () => {
//     cy.task("updatePlayer", { queryUpdate, updateObject }).then(
//       (updatedPlayer: Player) => {
//         expect(updatedPlayer).to.exist;
//         expect(updatedPlayer.name).to.equal(updateObject.name);
//       }
//     );
//   });

//   it("Should delete existing user", () => {
//     cy.task("deletePlayer", { findQueryToDelete: playerToDelete });
//   });

  it("Should retrieve all players", () => {
    cy.task("getPlayers", {
      dbCollection: collectionToQuery,
    }).then((result) => {
      expect(result).to.be.exist;
    });
  });
});
