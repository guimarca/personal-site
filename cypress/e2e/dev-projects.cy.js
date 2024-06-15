it('should render the page properly', () => {
    const page = cy.visit('./dist/dev-projects/index.html');

    page.get('.text-3xl').should('have.text', 'Dev Projects');

    const subSections = ['@ UNICC', '@ Sopra Steria', '@ LINEEX', 'freelance'];
    page.get('.text-2xl').should('have.length', subSections.length).each((value, index) => {
        cy.wrap(value).should('have.text', subSections[index]);
    });
});
