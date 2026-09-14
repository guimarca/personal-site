describe("contact page", () => {
  beforeEach(() => cy.visit("/contact"));

  it("renders the page title", () => {
    cy.get(".page-title").should("have.text", "Contact");
  });

  it("obfuscates the e-mail address with hidden decoy text", () => {
    cy.get(".contact__email-address")
      .invoke("text")
      .should("include", "(at)")
      .and("include", "(dot) com");
    cy.get(".contact__email-address span").should("not.be.visible");
  });
});
