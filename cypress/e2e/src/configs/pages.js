
class swag_labs{
    weburl(){
        cy.visit("https://www.saucedemo.com/"); // visit the url
    }
    login1(){ // login with standard_user
        cy.get('[data-test="username"]').click().type('standard_user');
        cy.get('[data-test="password"]').click().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('.inventory_list').should('be.visible');
    } 
    login2(){ // login with locked_out_user
        cy.get('[data-test="username"]').click().type('locked_out_user');
        cy.get('[data-test="password"]').click().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').should('have.text','Epic sadface: Sorry, this user has been locked out.');
        } 
    login3(){ // login with problem_user
        cy.get('[data-test="username"]').click().type('problem_user');
        cy.get('[data-test="password"]').click().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        } 
    login4(){ // login with performance_glitch_user
        cy.get('[data-test="username"]').click().type('performance_glitch_user');
        cy.get('[data-test="password"]').click().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        }
    login5(){ // login with error_user
        cy.get('[data-test="username"]').click().type('error_user');
        cy.get('[data-test="password"]').click().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        }
    login6(){ // login with visual_user
        cy.get('[data-test="username"]').click().type('visual_user');
        cy.get('[data-test="password"]').click().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        }
    login7(){ // login with wrong username and wrong password
        cy.get('[data-test="username"]').click().type('standard_users');
        cy.get('[data-test="password"]').click().type('secret_sauces');
        cy.get('[data-test="login-button"]').click();
        }
    login1_wrong(){ // login with standard_user and wrong password (asserting error message)
        cy.get('[data-test="username"]').click().type('standard_user');
        cy.get('[data-test="password"]').click().type('secret_sauce1');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').should('have.text','Epic sadface: Username and password do not match any user in this service');
    }
    login2_wrong(){ // login with locked_out_user and wrong password (asserting error message)
        cy.get('[data-test="username"]').click().type('locked_out_user');
        cy.get('[data-test="password"]').click().type('secret_sauce2');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').should('have.text','Epic sadface: Username and password do not match any user in this service');
    }
    login3_wrong(){ // login with problem_user and wrong password (asserting error message)
        cy.get('[data-test="username"]').click().type('problem_user');
        cy.get('[data-test="password"]').click().type('secret_sauce3');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').should('have.text','Epic sadface: Username and password do not match any user in this service');
    }
    login4_wrong(){ // login with performance_glitch_user and wrong password (asserting error message)
        cy.get('[data-test="username"]').click().type('performance_glitch_user');
        cy.get('[data-test="password"]').click().type('secret_sauce4');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').should('have.text','Epic sadface: Username and password do not match any user in this service');
    }
    login5_wrong(){ // login with error_user and wrong password (asserting error message)
        cy.get('[data-test="username"]').click().type('error_user');
        cy.get('[data-test="password"]').click().type('secret_sauce5');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').should('have.text','Epic sadface: Username and password do not match any user in this service');
    }
    login6_wrong(){ // login with visual_user and wrong password (asserting error message)
        cy.get('[data-test="username"]').click().type('visual_user');
        cy.get('[data-test="password"]').click().type('secret_sauce6');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').should('have.text','Epic sadface: Username and password do not match any user in this service');
    }
    addtocart(){ // add product to cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[id="shopping_cart_container"]').click();
    }
    checkout(){  // checkout flow
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').click().type('ABCDEF');
        cy.get('[data-test="lastName"]').click().type('GHIJKL');
        cy.get('[data-test="postalCode"]').click().type('123456');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('be.visible').should('have.text','Thank you for your order!');
        cy.get('[data-test="back-to-products"]').click();
    }
    removecart(){ // remove product from cart
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="remove-sauce-labs-onesie"]').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
    }
    logout(){  // logout
        cy.get('[id="react-burger-menu-btn"]').click();
        cy.get('#logout_sidebar_link').click();
    }
};
export default new swag_labs()