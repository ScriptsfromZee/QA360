describe("QA Playground Tests", () => {
  beforeEach(() => {
    cy.visit("index.html"); // adjust to actual URL.I use this because I have the project locally so I just point to the index file
    // https://qaplayground.netlify.app/ This is the deployed URL of the project
  });

  it("This handles Dynamic ID Element", () => {
    cy.contains("Inspect Me").should("be.visible").click();
  }); // the id of this button always changes when the page is refreshed so make sure you always go back to change it in your script but you can use the same method I used here.

  it("Type in the Hidden Layer Blocking Input", () => {
    const text = "I am typing through the blocker";
    cy.contains(".card", "2. Hidden Layer")
      .find('input[type="text"]')
      .type(text, { force: true })
      .should("have.value", text); // Confirm input value was entered. Also Try to input text without using force
  });

  it("Loads and Interacts with AJAX Form", () => {
    cy.get("#ajax-btn").click();
    cy.contains("Loading form...");
    cy.contains("Choose your role:").should("exist");
    cy.get('input[type="radio"][value="Tester"]').check(); // This selects the Tester radio button
    cy.get('input[type="checkbox"][value="HTML"], [value="JavaScript"]').check(); // This checks the HTML and JavaScript checkboxes
    cy.wait (2500); // This is just to visually see the selection before submitting
    cy.contains("Close Form").click(); //This closes the Form
    cy.get("#ajax-container").should("be.empty");
  });

  it("Shows Secret Text on Hover", () => {
    cy.get("#hover-area").trigger("mouseover");
    cy.get("#secret-text").should("be.visible");
    // This can also be done by using the line below. It is faster and simpler
    cy.get("#hover-area").invoke('show')
  });

  it("Handles JavaScript Alert", () => {
    cy.get("#alert-btn").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.eq("Peek-a-boo!");
    });
  });

  it("Interact with the button using different selectors", () => {
    cy.get(".primary-button").click(); // This selects the button by class
    cy.get("#class-feature-btn").click(); // This selects the button by the id
  });

  it("Handles Load Delay Display", () => {
    cy.get("#load-delay-btn").click();
    cy.get("#delayed-section")
      .should("be.visible")
      .and("contain", "Loading...");
    //cy.wait(3000); Add this if you wish. It would still wait regardless
    cy.get("#delayed-section").should(
      "contain",
      "I hope I did not take too much time"
    );
  });

  it("Handles Client-Side Delay Task", () => {
    cy.get("#client-delay-btn").click();
    cy.get("#client-content").should("contain", "Calculating...");
    //cy.wait(3000); Add this if you wish. It would still wait regardless
    cy.get("#client-content").should("contain", "Calculation complete!");
  });

  it("Simulates a Broken Button (Needs Multiple Clicks)", () => {
    cy.get("#broken-button").click();
    cy.get("#click-result").should("contain", "Button didn’t work");
    cy.get("#broken-button").click();
    cy.get("#click-result").should("contain", "Button clicked successfully!");
  });

  it("Text Input", () => {
    const sampleText = "I will get better, one test script at a time"; // You can always change the text to what you like
    cy.get("#text-problem").type(sampleText);
    cy.get("#text-display").should("contain", sampleText);
  });

  it("Clears Read-Only Text and adds New Text", () => {
    cy.get("#clear-me").invoke("removeAttr", "readonly").clear();
    // You can also type in the text field after clearing it and using the code commented below
    //cy.get('#clear-me').type('I have finally cleared you')
  });

  it("12. Checks Dynamic Table Updates", () => {
    cy.wait(3000);
    cy.get("#dynamic-table-body tr").should("have.length.at.least", 1); // This tests that at least one row is present in the table
  });

  it("Creates a file, Uploads it and Removes Uploaded File", () => {
    const fileName = "sample.txt";
    cy.writeFile(fileName, "Test content"); // This creates a sample file in our project
    cy.get("#file-upload").selectFile(fileName, { force: true }); //This uploads your created file
    cy.get("#file-list li").should("contain", fileName);
    cy.contains("Remove").click(); // To remove uploaded file
    cy.get("#file-list").should("contain", "No files uploaded yet.");
  });

  it("Uploads Existing File and Removes Uploaded File", () => {
    const fileName = "sample.pdf"; // This file was created in the fixtures folder. 
    cy.get("#file-upload").selectFile(`cypress/fixtures/${fileName}`, { force: true });
    cy.get("#file-list li").should("contain", fileName);
    cy.contains("Remove").click();
    cy.get("#file-list").should("contain", "No files uploaded yet.");
  });

  it("Adjusts Country Count and Validates", () => {
    cy.get("#country-count-slider").invoke("val", 17).trigger("input"); // This Shifts the slider to whatever number of countries you want to display 
    cy.get("#get-countries-btn").click();
    cy.get("#countries-list li").should("have.length", 17);
    cy.get("#validation-message").should("contain", "Showing 17 countries.");
  });

  it.only('fills the form with fixture data', () => {
    cy.fixture('user').then((user) => {
      cy.get("#first-name").type(user.firstName);
      cy.get("#last-name").type(user.lastName);
      cy.get("#email").type(user.email);
      cy.wait(2000);
      cy.get("#country-codes").select(user.countryCode);
      cy.get("#phone-number").type(user.phoneNumber);
      cy.get("#address1").type(user.address1);
      cy.get("#address2").type(user.address2);
      cy.get("#state").type(user.state);
      cy.get("#postal-code").type(user.postalCode);
      cy.wait(2000);
      cy.get("#country").select(user.country);
      cy.get("#dob").type(user.dob);
      cy.get(`input[type="radio"][value="${user.gender}"]`).check();
      if (user.acceptTerms) {
        cy.get('input[type="checkbox"]').check();
      }
      cy.get("#full-form").submit();
    });
  });
});
