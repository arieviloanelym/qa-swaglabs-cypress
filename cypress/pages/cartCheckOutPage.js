class CartCheckoutPage {
  startCheckout() { cy.get("#checkout").click(); }
  fillInfoAndContinue(f,l,z){
    cy.get("#first-name").type(f);
    cy.get("#last-name").type(l);
    cy.get("#postal-code").type(z);
    cy.get("#continue").click();
  }
  title(){ return cy.get(".title"); }
}
export default new CartCheckoutPage();
