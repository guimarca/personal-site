describe("not found page", () => {
  it("renders without a sidebar", () => {
    cy.visit("/404.html");
    cy.get(".not-found__code").should("have.text", "404");
    cy.get(".sidebar").should("not.exist");
  });
});
