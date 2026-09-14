import education from "../../data/education.json";
import positions from "../../data/positions.json";

describe("cv page", () => {
  beforeEach(() => cy.visit("/cv"));

  it("renders the page title and its sections", () => {
    cy.get(".page-title").should("have.text", "CV");
    cy.get(".section-title").should("have.length", 2);
    cy.get("#title-experience").should("have.text", "Experience");
    cy.get("#title-education").should("have.text", "Education");
  });

  it("renders every position and degree", () => {
    cy.get(".position").should("have.length", positions.length);
    cy.get(".timeline--spaced .timeline__item").should("have.length", education.length);
  });
});
