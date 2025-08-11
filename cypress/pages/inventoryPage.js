class InventoryPage {
  appTitle() { return cy.get(".app_logo"); }
  addFirstItem() { cy.get("button[data-test^='add-to-cart']").first().click(); }
  goToCart() { cy.get(".shopping_cart_link").click(); }
  cartBadge() { return cy.get(".shopping_cart_badge"); }
}
export default new InventoryPage();
