import { Page } from "@playwright/test";

export class AdminPage {


    adminPageLocators = {
        adminTab:()=> this.page.locator("//div[@class='oxd-sidepanel-body']//li[1]")
    }


    async goToAdminTab(){
        await this.adminPageLocators.adminTab().click()

    }



    constructor(public page: Page){
        this.page = page;
    }

}