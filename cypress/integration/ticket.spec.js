describe("Tickets", () =>{

beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

	it("Preencher campos de texto", () => {

		const firstName = "Deyvis";
		const lastName = "Ferreira";

		cy.get("#first-name").type(firstName);
		cy.get("#last-name").type(lastName);
		cy.get("#email").type("deyvis@gmail.com");
		cy.get("#requests").type("Corinthiano");
		cy.get("#signature").type(`${firstName} ${lastName}`);
	});

	it("Selecionar 2 tickes para compra", () => {
		cy.get("#ticket-quantity").select("2");
	});

	it("Selecionar radio button Vip", () => {
		cy.get("#vip").check();

	});

	it("Selecionar checkbox Friends", () => {
		cy.get("#friend").check();
	});

	it("Selecionar Friends, Publication e desmacar Friends", () => {
		cy.get("#friend").check();
		cy.get("#publication").check();
		cy.get("#friend").uncheck();
	});

	it("Validar se o texto `TICKETBOX` é exibido.", () => {
		cy.get("header h1").should("contain", "TICKETBOX");
	});

	it.only("Validar se o alerta é exibido para preenchimento de e-mail inválido", () => {
		cy.get("#email")
			.as("email")
			.type("deyvis-gmail.com");
		cy.get("#email.invalid").should("exist");

		cy.get("@email")
			.clear()
			.type("deyvis@gmail.com");
		cy.get("#email.invalid").should("not.exist");

	});
});
