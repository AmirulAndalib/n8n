import {DEFAULT_USER_EMAIL, DEFAULT_USER_PASSWORD} from "../constants";
import {randFirstName, randLastName, randEmail} from "@ngneat/falso";
import { MainSidebar as MainSidebarClass } from '../pages/sidebar/main-sidebar';
import { SettingsSidebar as SettingsSidebarClass } from "../pages/sidebar";
import { SettingsUsersPage as SettingsUsersPageClass } from "../pages";
import { InviteUsersModal as InviteUsersModalClass } from './../pages/modals/invite-users-modal';

const email = DEFAULT_USER_EMAIL;
const password = DEFAULT_USER_PASSWORD;
const firstName = randFirstName();
const lastName = randLastName();

const MainSidebar = new MainSidebarClass();
const SettingsSidebar = new SettingsSidebarClass();
const UserSettings = new SettingsUsersPageClass();

describe('User Management', () => {
    beforeEach(() => {
			cy.resetAll();
			cy.setup({ email, firstName, lastName, password });
			MainSidebar.actions.goToSettings();
			SettingsSidebar.actions.goToUsers();
    });

		it('should invite users', () => {
			UserSettings.actions.inviteUser(randEmail());
		});
});
