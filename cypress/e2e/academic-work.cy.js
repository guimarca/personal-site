it('should render the page properly', () => {
    const page = cy.visit('./dist/academic-work/index.html');

    page.get('.text-3xl').should('have.text', 'Academic Work');

    const subSections = ['Publications', 'Other Publications', 'Teaching', 'Conferences', 'Journal Refereeing'];
    page.get('.text-2xl').should('have.length', subSections.length).each((value, index) => {
        cy.wrap(value).should('have.text', subSections[index]);
    });
});
