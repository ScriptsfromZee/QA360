describe('QA Playground Tests', () => {
    beforeEach(() => {
      cy.visit('index.html'); // adjust to actual URL if deployed on netlify or any hosting site
    });
  
    it('Handles Dynamic ID Element', () => {
      cy.contains('Inspect Me').should('be.visible').click();
    }); // the id of this button always changes when the page is refreshed
  
    it('Type in  the Hidden Layer Blocking Input', () => {
      const text = 'I am typing through the blocker'
      cy.contains('.card', '2. Hidden Layer').find('input[type="text"]')
    .type(text, { force: true })
    .should('have.value', text); // Confirm input value was entered. Also Try to input text without using force
    })

    it('Loads and Interacts with AJAX Form', () => {
      cy.get('#ajax-btn').click();
      cy.contains('Loading form...');
      cy.contains('Choose your role:').should('exist');
      cy.get('input[type="radio"][value="Tester"]').check();
      cy.get('input[type="checkbox"][value="HTML"]').check();
      cy.contains('Close Form').click();
      cy.get('#ajax-container').should('be.empty');
    });
  
    it('Shows Secret Text on Hover', () => {
      cy.get('#hover-area').trigger('mouseover');
      cy.get('#secret-text').should('be.visible');
    });
  
    it('Handles JavaScript Alert', () => {
      cy.get('#alert-btn').click();
      cy.on('window:alert', (txt) => {
        expect(txt).to.eq('Peek-a-boo!');
      });
    });
  
    it('Interact with the button using different selectors', () => {
      cy.get('.primary-button').click(); // This selects the button by class
      cy.get('#class-feature-btn').click(); // This selects the button by the id
    });
  
    it('Handles Load Delay Display', () => {
      cy.get('#load-delay-btn').click();
      cy.get('#delayed-section').should('be.visible').and('contain', 'Loading...');
      //cy.wait(3000); Add this if you wish. It would still wait regardless
      cy.get('#delayed-section').should('contain', 'I hope I did not take too much time');
    });
  
    it('Handles Client-Side Delay Task', () => {
      cy.get('#client-delay-btn').click();
      cy.get('#client-content').should('contain', 'Calculating...');
     //cy.wait(3000); Add this if you wish. It would still wait regardless
      cy.get('#client-content').should('contain', 'Calculation complete!');
    });
  
    it('Simulates a Broken Button (Needs Multiple Clicks)', () => {
      cy.get('#broken-button').click();
      cy.get('#click-result').should('contain', "Button didn’t work");
      cy.get('#broken-button').click();
      cy.get('#click-result').should('contain', 'Button clicked successfully!');
    });
  
    it('Text Input', () => {
      const sampleText = "I will get better, one test script at a time"; // You can always change the text to what you like
      cy.get('#text-problem').type(sampleText);
      cy.get('#text-display').should('contain', sampleText);
    });
  
    it('Clears Read-Only Text and adds New Text', () => {
      cy.get('#clear-me').invoke('removeAttr', 'readonly').clear();
      // You can also type in the text field after clearing it and using the code commented below
      //cy.get('#clear-me').type('I have finally cleared you')
    });
  
    it('12. Checks Dynamic Table Updates', () => {
      cy.wait(3000)
      cy.get('#dynamic-table-body tr').should('have.length.at.least', 1); // This tests that at least one row is present in the table
  });
  
    it('Uploads and Removes File', () => {
      const fileName = 'sample.txt';
      cy.writeFile(fileName, 'Test content'); // This creates a sample file in our project 
      cy.get('#file-upload').selectFile(fileName, { force: true }); //This uploads your created file
      cy.get('#file-list li').should('contain', fileName);
      cy.contains('Remove').click(); // To remove uploaded file
      cy.get('#file-list').should('contain', 'No files uploaded yet.');
    });
  
    it('Adjusts Country Count and Validates', () => {
      cy.get('#country-count-slider').invoke('val', 50).trigger('input');
      cy.get('#get-countries-btn').click();
      cy.get('#countries-list li').should('have.length', 50);
      cy.get('#validation-message').should('contain', 'Showing 50 countries.');
    });
  
    it('Submits Full Feature Form', () => {
      cy.get('#first-name').type('Bug');
      cy.get('#last-name').type('Hunter');
      cy.get('#email').type('bughunter@qa.com');
      cy.wait(2000)
      cy.get('#country-codes').select('Nigeria (+234)');
      cy.get('#phone-number').type('8012345678');
      cy.get('#address1').type('UI Bug');
      cy.get('#address2').type('Perfomance Bug');
      cy.get('#state').type('Transition');
      cy.get('#postal-code').type('100001');
      cy.wait(2000)
      cy.get('#country').select('Nigeria');
      cy.get('#dob').type('1990-01-01');
      cy.get('input[type="radio"][value="male"]').check();
      cy.get('input[type="checkbox"]').check();
      cy.get('#full-form').submit();
    });
  });
  