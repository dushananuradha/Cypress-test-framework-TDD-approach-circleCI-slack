export class NPM_HomePage {

    private input_search_packages: string = "//button[text()='Search']/ancestor::node()[1]/descendant::input[@placeholder='Search packages']";
    private btn_search: string = "//button[text()='Search']";
    private link_exact_result:string = "//span[text()='exact match']/parent::node()/descendant::h3";


    //------------------------------------------User Interactions------------------------------------------

    public type_packageToSearch(value:string) {
        cy.xpath(this.input_search_packages).clear().type(value);
        return this;
    }

    public click_search() {
        cy.xpath(this.btn_search).click();
        return this;
    }

    public click_exactSearchResult(value:string){
        cy.xpath(this.link_exact_result).click({force: true});
        return this;
    }

}