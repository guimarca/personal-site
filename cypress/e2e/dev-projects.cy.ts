describe("dev projects page", () => {
  beforeEach(() => cy.visit("/dev-projects"));

  it("renders the page title and a section per company", () => {
    cy.get(".page-title").should("have.text", "Dev Projects");
    cy.get(".section-title").then((titles) =>
      expect([...titles].map((title) => title.textContent)).to.deep.equal([
        "@ UNICC",
        "@ Sopra Steria",
        "@ LINEEX",
        "freelance",
      ]),
    );
  });

  it("links the resources of a project", () => {
    cy.get(".tag--resource a").first().should("have.attr", "href").and("include", "http");
  });
});
