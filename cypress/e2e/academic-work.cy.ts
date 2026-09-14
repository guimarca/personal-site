import conferences from "../../data/conferences.json";
import publications from "../../data/publications.json";

describe("academic work page", () => {
  beforeEach(() => cy.visit("/academic-work"));

  it("renders the page title and its sections", () => {
    cy.get(".page-title").should("have.text", "Academic Work");
    cy.get(".section-title").then((titles) =>
      expect([...titles].map((title) => title.textContent)).to.deep.equal([
        "Publications",
        "Other Publications",
        "Teaching",
        "Conferences",
        "Journal Refereeing",
      ]),
    );
  });

  it("renders every publication and conference", () => {
    cy.get(".section").eq(0).find(".entry").should("have.length", publications.length);
    cy.get(".section").eq(3).find(".entry").should("have.length", conferences.length);
  });
});
