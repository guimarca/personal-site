it('should render the page properly', () => {
    const page = cy.visit('./dist/contact/index.html');

    page.get('.text-3xl').should('have.text', 'Contact');
});
