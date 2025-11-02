import BasePage from './Base.page.js';

const   SELECTORS = {
    formTitle: 'b=Enter Account Information',
    mr: '#id_gender1',
    mrs: '#id_gender2',
    password: '[data-qa="password"]',
    days: '[data-qa="days"]',
    months: '[data-qa="months"]',
    years: '[data-qa="years"]',
    newsletter: '#newsletter',
    optin: '#optin',
    firstName: '[data-qa="first_name"]',
    lastName: '[data-qa="last_name"]',
    company: '[data-qa="company"]',
    address1: '[data-qa="address"]',
    address2: '[data-qa="address2"]',
    country: '[data-qa="country"]',
    state: '[data-qa="state"]',
    city: '[data-qa="city"]',
    zipcode: '[data-qa="zipcode"]',
    mobile: '[data-qa="mobile_number"]',
    createBtn: '[data-qa="create-account"]'
};

class AccountInfoPage extends BasePage {
    get formTitle() { return $(SELECTORS.formTitle); }
    get mr() { return $(SELECTORS.mr); }
    get mrs() { return $(SELECTORS.mrs); }

    get password() { return $(SELECTORS.password); }
    get days() { return $(SELECTORS.days); }
    get months() { return $(SELECTORS.months); }
    get years() { return $(SELECTORS.years); }

    get newsletter() { return $(SELECTORS.newsletter); }
    get optin() { return $(SELECTORS.optin); }

    get firstName() { return $(SELECTORS.firstName); }
    get lastName() { return $(SELECTORS.lastName); }
    get company() { return $(SELECTORS.company); }
    get address1() { return $(SELECTORS.address1); }
    get address2() { return $(SELECTORS.address2); }
    get country() { return $(SELECTORS.country); }
    get state() { return $(SELECTORS.state); }
    get city() { return $(SELECTORS.city); }
    get zipcode() { return $(SELECTORS.zipcode); }
    get mobile() { return $(SELECTORS.mobile); }

    get createAccountBtn() { return $(SELECTORS.createBtn); }

    async assertLoaded() {
        await this.formTitle.waitForDisplayed();
    }

    async fillAccountForm(data) {
        
        await this.assertLoaded();

        if (data.title === 'Mr') await this.mr.click(); else await this.mrs.click();

        await this.password.setValue(data.password);
        await this.days.selectByVisibleText(String(data.birthDay));
        await this.months.selectByVisibleText(data.birthMonth);
        await this.years.selectByVisibleText(String(data.birthYear));

        if (data.newsletter) await this.newsletter.click();
        if (data.optin) await this.optin.click();

        await this.firstName.setValue(data.firstName);
        await this.lastName.setValue(data.lastName);
        await this.company.setValue(data.company);
        await this.address1.setValue(data.address1);
        if (data.address2) await this.address2.setValue(data.address2);
        await this.country.selectByVisibleText(data.country);
        await this.state.setValue(data.state);
        await this.city.setValue(data.city);
        await this.zipcode.setValue(data.zipcode);
        await this.mobile.setValue(data.mobile);
    }

    async submit() {
        await this.createAccountBtn.click();
    }
}

export default new AccountInfoPage();

