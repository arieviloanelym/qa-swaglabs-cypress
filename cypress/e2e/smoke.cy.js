import login from '../pages/loginPage';
import inventory from '../pages/inventoryPage';
import cart from '../pages/cartCheckOutPage';

describe('UI Smoke – Swag Labs', () => {
  it('Erro, login, item e checkout overview', () => {
    // 1) valida erro de login
    login.visit();
    login.login('user', 'password');
    login.errorText().should('contain.text', 'Epic sadface');

    // 2) login válido
    login.login('standard_user', 'secret_sauce');
    inventory.appTitle().should('have.text', 'Swag Labs');

    // 3) adiciona item e vai ao carrinho
    inventory.addFirstItem();
    inventory.cartBadge().should('contain.text', '1');
    inventory.goToCart();

    // 4) checkout até overview
    cart.startCheckout();
    cart.fillInfoAndContinue('Mylena', 'Oliveira', '80000-000');
    cart.title().should('have.text', 'Checkout: Overview');
  });
});