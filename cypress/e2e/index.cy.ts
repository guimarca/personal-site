import description from "../../data/description.json";

describe("home page", () => {
  beforeEach(() => cy.visit("/"));

  it("lists every menu entry", () => {
    cy.get(".menu a").should("have.length", 5);
    cy.get(".menu a").then((items) =>
      expect([...items].map((item) => item.textContent?.trim())).to.deep.equal([
        "Home",
        "CV",
        "Dev Projects",
        "Academic work",
        "Contact",
      ]),
    );
  });

  it("marks the current menu entry as active", () => {
    cy.get(".menu a.is-active").should("have.attr", "id", "home");
  });

  it("renders the presentation", () => {
    cy.get(".home__name").should("have.text", "Guillem Martínez-Cànovas");
    cy.get(".home__job-title").should("have.text", description.jobTitle);
    cy.get(".home__intro p").should("have.length", description.text.length);
  });
});
