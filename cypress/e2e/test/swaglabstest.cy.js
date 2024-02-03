import swag_labs from "../src/configs/pages";
describe("swaglabs test", () => {
    beforeEach('Update Later',()=>
    {   
        swag_labs.weburl(); // visit the url
        swag_labs.login1(); // login with standard_user
        swag_labs.addtocart(); // add product to cart
    })
    it("removecart", () => { // remove product from cart
        swag_labs.removecart();
    });
    it("checkout", () => { // checkout flow
        swag_labs.checkout();
      });
    it("logout", () => { // logout 
        swag_labs.logout();
    });
});