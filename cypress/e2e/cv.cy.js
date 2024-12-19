it('should render the page properly', () => {
    const page = cy.visit('./dist/cv/index.html');

    page.get('.text-3xl').should('have.text', 'CV');

    const subSections = ['Education', 'Experience'];
    page.get('.text-2xl').should('have.length', subSections.length).each((value, index) => {
        cy.wrap(value).should('have.text', subSections[index]);
    });
});
