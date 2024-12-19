// /// <reference types="cypress" />

// import { User } from "../../support/types";

// const record = {
//   userID: "088",
//   name: "Head",
// };

// const query = {
//   name: "Head",
// };

// describe("test db interactions", () => {
//   it("Should be able to create new user", () => {
//     cy.task("createUser", {
//       record: record,
//     });
//   });

//   it("Should be able to assert existing user", () => {
//     cy.task("getUser", {
//       query: query,
//     }).then((result: User) => {
//       expect(result).to.exist;
//       expect(result.userID).to.equal("088");
//       expect(result.name).to.equal("Head");
//     });
//   });

//   it("Should be able to delete existing user", () => {
//     cy.task("deleteUser", {
//       query: query,
//     }).then(() => {
//       cy.task("getUser", {
//         query: query,
//       }).then((result) => {
//         expect(result).to.be.null;
//       });
//     });
//   });
// });
