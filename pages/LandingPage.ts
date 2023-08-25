import { Page, errors, expect } from "@playwright/test";
import { AdminPage } from "./AdminPage";

export class LoginPage{

    
    LoginPageLocators = {
        username:() => this.page.locator("//div[@class='orangehrm-login-container']//input[@name='username']").fill('Admin'),
        password:() => this.page.locator("//div[@class='orangehrm-login-container']//input[@name='password']").fill('admin123'),
        loginBtn:() => this.page.locator("//button[@type='submit']").click()
    }


    


    async visitPageAndLoginUser() {
     let adminPage = new AdminPage(this.page)
     adminPage.goToAdminTab()
       await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       await this.LoginPageLocators.username()
       await this.LoginPageLocators.password()
       await this.LoginPageLocators.loginBtn()
       expect(this.page.getByText('Time at Work')).toBeAttached()

       
       
    }

    constructor(public page : Page){
        this.page = page;
    }
}