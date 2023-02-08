import { BasePage } from "../base";

export class InviteUsersModal extends BasePage {
	getters = {
		modalContainer: () => cy.getByTestId('inviteUser-modal'),
		userEmailInput: () => cy.getByTestId('emails').find('input[name=emails]').first(),
		inviteUserButton: () => cy.getByTestId('invite-user-button'),
	};
	actions = {
		fillInInviteForm: (email: string) => {
			this.getters.modalContainer().should('be.visible');
			this.getters.userEmailInput().realType(email);
			this.getters.inviteUserButton().realClick();
		}
	};
};
