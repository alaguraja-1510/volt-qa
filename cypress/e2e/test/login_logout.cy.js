import swag_labs from "../src/configs/pages";
describe("swaglabs test", () => {
    beforeEach('Update Later',()=>
    {    
        swag_labs.weburl(); // visit the url
    })
    it("login1", () => {
        swag_labs.login1(); // login with standard_user
    });
    it("login2", () => {
        swag_labs.login2(); // login with locked_out_user
    });
    it("login3", () => {
        swag_labs.login3(); // login with problem_user
    });
    it("login4", () => {
        swag_labs.login4();  // login with performance_glitch_user
    });
    it("login5", () => {
        swag_labs.login5(); // login with error_user
    });
    it("login6", () => {
        swag_labs.login6(); // login with visual_user
    });
    it("login7", () => {
        swag_labs.login7(); // login with wrong username and wrong password
    });
    it("login1_wrong", () => {
        swag_labs.login1_wrong(); // login with standard_user and wrong password (asserting error message)
    });
    it("login2_wrong", () => {
        swag_labs.login2_wrong(); // login with locked_out_user and wrong password (asserting error message)
    });
    it("login3_wrong", () => {
        swag_labs.login3_wrong(); // login with problem_user and wrong password (asserting error message)
    });
    it("login4_wrong", () => {
        swag_labs.login4_wrong(); // login with performance_glitch_user and wrong password (asserting error message)
    });
    it("login5_wrong", () => {
        swag_labs.login5_wrong(); // login with error_user and wrong password (asserting error message)
    });
    it("login6_wrong", () => {
        swag_labs.login6_wrong(); // login with visual_user and wrong password (asserting error message)
    });
});