import description from '../../data/description.json'

it('should have the menu', () => {
    const page = cy.visit('./dist/index.html');

    page.get('.menu').should('have.text', ' Home CV  Dev Projects   Academic work  Contact ')
});

it('should render the page properly', () => {
    const page = cy.visit('./dist/index.html');

    page.get('.text-5xl.font-bold').should('have.text', 'Guillem Martínez-Cànovas')
    page.get('.text-3xl.py-3.font-bold').should('have.text', description.jobTitle)
});
