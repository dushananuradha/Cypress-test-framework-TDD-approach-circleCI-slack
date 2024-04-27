/// <reference types="cypress" />

const record = {
  userID : '010',
  name : 'Cummins'
};

describe("test db interactions", ()=>{
  it("insert record", ()=>{
    cy.insertOne(record).then((result) => {
      console.log(result);
      
    });
  }); 
})
