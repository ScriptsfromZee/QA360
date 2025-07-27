# QA360
An interactive demo site for software testers featuring real-world challenges like dynamic elements, hidden layers, delays and tricky clicks. Perfect for beginners to practice and build automated or manual test cases in a safe, hands-on environment.

# QA 360 a.k.a. QA Playground  

Welcome to the QA Playground: a hands-on, interactive demo site created specifically for software testers. This project offers a collection of real-world testing challenges and scenarios that QA engineers may encounter in web applications.

## Features & Descriptions

Dynamic IDs: Elements change their ID every time the page reloads. This is useful for practicing robust selectors in test automation.

 Hidden Layer Blocking Input: An invisible layer is positioned over an input field to simulate UI blockers. Testers must detect and work around this obstacle.

 Form Loader: A delayed form appears after a button is clicked, mimicking real-world AJAX loading behavior with radio buttons and checklists.

 Mouseover Reveal: Text or elements appear only when hovered, helping testers practice hover-based interactions and visibility checks.

JavaScript Alerts: A button triggers a native browser alert. This tests alert handling capabilities in automation tools.

Class Attribute Targeting: Buttons or elements styled with shared classes, ideal for practicing XPath or CSS selector strategies.

Load Delay: Simulates a delayed UI element. When a button is clicked, content appears after a few seconds. It is useful for wait strategy testing.

Client-Side Delay: Imitates a long-running task handled entirely on the client-side, such as calculations or rendering-heavy operations.

Broken Button Logic: Clicking a button once doesn't work, it requires multiple clicks. This is designed to simulate flakiness or user frustration scenarios.

Text Input Tracker: As users type into the input box, the text is displayed in real-time. It supports edge cases like long inputs and text wrapping.

 Dynamic Table: A simple table that updates status fields periodically, simulating real-time UI changes.

 File Upload: Supports drag-and-drop file uploads, including a remove button to practice file list manipulation and upload flows.

 Country Generator: Lets users choose how many countries to display via a slider. Countries are added or removed without resetting the list, simulating dynamic content updates.

## How to Run the Project

You don’t need any frameworks, installations or servers. This project is built using pure HTML, CSS and JavaScript.

### Option 1: Run Locally
1. Download or clone the repo:
  
   git clone https://github.com/ScriptsfromZee/QA360.git


2. Open the folder.
3. Double-click `index.html` or right-click and choose "Open with browser".

### Option 2: Use Live Server (Optional for auto-refresh)

If you have VS Code installed:

1. Install the "Live Server" extension.
2. Open the folder in VS Code.
3. Right-click `index.html` and select "Open with Live Server".

## Who Is This For?

1.  QA Engineers practicing UI automation

2.  Manual testers exploring web elements

3.  Students and beginners learning testing fundamentals

4. Trainers and mentors running QA workshops

## Testing
   This project uses Cypress for end-to-end testing.

The test script included in the project folder covers key user interactions and behaviors to ensure consistent functionality. As I get better with automation, I will update my scripts. 

To run the Cypress tests:

"npx cypress open"

This will launch the Cypress Test Runner for an interactive testing experience.

Make sure to run "npm install" before running the tests to install all required dependencies.

While Cypress is the primary testing tool used, the project is built in a way that allows testing with any automation framework of your choice such as Playwright, Selenium or WebdriverIO depending on your preferred stack.

