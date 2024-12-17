/// <reference types="cypress" />

describe("Testing mySQL DB", ()=>{
    it("check table: employees", ()=>{
        cy.task("queryDb", "select * from cypresstest.employees;").then(res =>{
            let record = res;
            const results:any = Object.values(record[0])
            cy.log(results[0])
            cy.log(results[1])
        })
    })

    it("check table: employees all records", () => {
        cy.task("queryDb", "SELECT * FROM cypresstest.employees;").then((res) => {
          // Ensure res is an array of records
          const records = Array.isArray(res) ? res : [res];
      
          // Loop through each record
          records.forEach((record, index) => {
            const values = Object.values(record);
            cy.log(`Row ${index + 1}:`);
            values.forEach((value, colIndex) => {
              cy.log(`  Column ${colIndex + 1}: ${value}`);
            });
          });
        });
      });
      
})