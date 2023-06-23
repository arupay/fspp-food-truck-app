describe("Successful user log in", () => {
  it("visits home page", () => {
    const username = "abc123@gmail.com";
    const pw = "123456";
    cy.visit("http://localhost:3000/");
    cy.get("#login").contains("sign in").click();
    cy.url().should("include", "login");
    cy.get('#loginform input[name="email"]').type(username, { force: true });
    cy.get('#loginform input[name="password"]').type(pw, { force: true });
    cy.get("button[name='submit']").contains("log in").click();
    cy.url().should("include", "/trucks");
  });
  // it("Has a login button", () => {
  //   cy.get("#login").contains("sign in");
  // });
});
