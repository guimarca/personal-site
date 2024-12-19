it('should render the page properly', () => {
    const page = cy.visit('./dist/cv/index.html');

    page.get('.text-3xl').should('have.text', 'CV');

    page.get('.text-2xl').should('have.length', 2);
    page.get('#title-experience').should('have.text', '\nExperience\n');
    page.get('#title-education').should('have.text', 'Education');
});
