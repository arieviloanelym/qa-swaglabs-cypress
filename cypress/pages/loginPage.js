class LoginPage {
  visit() { cy.visit("/"); }
  fillUser(u) { cy.get("#user-name").clear().type(u); }
  fillPass(p) { cy.get("#password").clear().type(p); }
  submit() { cy.get("#login-button").click(); }
  login(u, p) { this.fillUser(u); this.fillPass(p); this.submit(); }
  errorText() { return cy.get("[data-test='error']"); }
}
export default new LoginPage();
