describe("Successful user log in", () => {
  it("visits home page", () => {
    const username = "abc123@gmail.com";
    const pw = "123456";
    const newTruck = {
      name: "Terry And Yaki",
      address: "159 E 68th St",
      zip: "10065",
      borough: "Manhattan",
      category: "Japanese",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPDBtwqSbFHTQ3qJn37h7jkVH_wPOBVk_-51px-=s1360-w1360-h1020",
      about:
        "Terry and Yaki is the first and only halal Asian food cart in NYC that specializes in a unique custom teriyaki recipe. Using locally sourced ingredients, Terry and Yaki offers a delicious variety of teriyaki dishes that never lose their greatness. Enjoy your tender chicken or steak served either on a bed of rice, crispy sweet potatoes drenched chipotle mayo or kale salad mixed with chickpeas, tomatoes, and lemon vinaigrette. And for our vegetarian friends, Terry and Yaki’s got you covered with the vegan teriyaki tofu puffs served with Chinese vegetables and pickled carrots.  ",
    };
    cy.visit("http://localhost:3000/");

    cy.get("#login").contains("sign in").click();

    cy.url().should("include", "login");

    cy.get('#loginform input[name="email"]').type(username, { force: true });

    cy.get('#loginform input[name="password"]').type(pw, { force: true });
    cy.get("button[name='submit']").contains("log in").click();
    cy.url().should("include", "/trucks");
    cy.visit("http://localhost:3000/trucks/new");
    cy.get("#test_addTruck").contains("Add Truck").click();
    cy.url().should("include", "/trucks/new");
    cy.get('.addtruckform input[name="name"]').type(newTruck.name, {
      force: true,
    });
    cy.get('.addtruckform input[name="address"]').type(newTruck.address, {
      force: true,
    });
    cy.get('.addtruckform input[name="zip"]').type(newTruck.zip, {
      force: true,
    });
    cy.get("select").select("Manhattan", { force: true });
    cy.get('.addtruckform input[name="category"]').type(newTruck.category, {
      force: true,
    });
    cy.get('.addtruckform input[name="image_url"]').type(newTruck.image, {
      force: true,
    });
    cy.get('.addtruckform input[name="about"]').type(newTruck.about, {
      force: true,
    });
  });
});
