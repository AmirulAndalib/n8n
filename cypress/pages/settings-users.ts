import { BasePage } from './base';
import { InviteUsersModal as InviteUsersModalClass } from './modals/invite-users-modal';
import { WorkflowPage as WorkflowPageClass } from '../pages';

const InviteUsersModal = new InviteUsersModalClass();
const WorkflowPage = new WorkflowPageClass();

export class SettingsUsersPage extends BasePage {
	url = '/settings/users';
	getters = {
		setUpOwnerButton: () => cy.getByTestId('action-box').find('button').first(),
		inviteUsersButton: () => cy.getByTestId('invite-users-button'),
		userList: () => cy.getByTestId('user-list'),
		userListItems: () => cy.getByTestId('user-list-item'),
	};
	actions = {
		goToOwnerSetup: () => this.getters.setUpOwnerButton().click(),
		inviteUser: (email: string) => {
			this.getters.inviteUsersButton().realClick();
			InviteUsersModal.actions.fillInInviteForm(email);
			WorkflowPage.getters.successToast().should('contain', 'Invite link copied to clipboard');
			this.getters.userListItems().should('have.length', 2);
		},
	};
}
