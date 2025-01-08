describe("Testing App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Should display the people", () => cy.get(".custom-star-box"));
  it("Click the first person on title, Should open modal, Verify data and Close", () => {
    cy.get(".custom-star-box:first h2").click();
    cy.get('[role="dialog"] h3').should("be.visible");
    cy.get('[role="dialog"] button[aria-label="Close"]').click();
  });
  it("Click on the page 4, Should display the people, Click on the third person and check the cicle again", () => {
    cy.get(".custom-pagination nav button").contains("4").click();
    cy.get(".custom-star-box");
    cy.get(".custom-star-box:nth(3) h2").click();
    cy.get('[role="dialog"] h3').should("be.visible");
    cy.get('[role="dialog"] button[aria-label="Close"]').click();
  });
  it("Now click with action button", () =>
    cy.get(".custom-star-box:first .absolute").click());
});
