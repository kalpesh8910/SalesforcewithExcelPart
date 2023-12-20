package com.poferries.freight.AutomationFramework.web.stepDefinitions;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.poferries.freight.AutomationFramework.web.actions.ForgotPasswordPageActions;
import com.poferries.freight.AutomationFramework.web.actions.HomePageActions;
import com.poferries.freight.AutomationFramework.web.actions.LandingPageActions;
import com.poferries.freight.AutomationFramework.web.actions.LoginPageActions;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {

	LandingPageActions landingPageActions = new LandingPageActions();
	LoginPageActions loginPageActions = new LoginPageActions();
	HomePageActions homePageActions = new HomePageActions();
	ForgotPasswordPageActions forgotPasswordPageActions = new ForgotPasswordPageActions();

	ConfigReader configReader = new ConfigReader();

	public static WebDriver driver = null;

	@Given("I navigate to the salesforce Website")
	public void i_navigate_to_the_P_O_Ferries_Freight_Website() throws Throwable {
		SeleniumDriver.openPage(configReader.configWeb.getProperty("salesforceURL"));
	}

	@And("I close the playstore label")
	public void i_close_the_playstore_label() {
		landingPageActions.closeAppStorePlayStoreMessageLabel();
	}

	@And("I click the SignIn Link")
	public void i_click_the_SignIn_Link() throws Throwable {
		// Wait for the SignIn link to appear
		landingPageActions.waitForSignInLink();

		// Click on the sign in link
		landingPageActions.clickOnSignInLink();
	}

	@When("I enter the userName in the username edit Box")
	public void i_enter_the_in_the_username_edit_Box() throws Throwable {
		loginPageActions.enterUserName();
	}

	@When("I enter the \"([^\"]*)\" in the username edit Box")
	public void i_enter_the_in_the_username_edit_Box(String userName) throws Throwable {
		loginPageActions.enterUserName1(userName);
	}

	@And("I enter the password in the password edit Box")
	public void i_enter_the_in_the_password_edit_Box() throws Throwable {
		loginPageActions.enterPassword();
	}
/*
	@And("I enter the \"([^\"]*)\" in the password edit Box")
	public void i_enter_the_in_the_password_edit_Box(String password) throws Throwable {
		loginPageActions.enterPassword(password);
	}
*/
	@And("I click the LogIn button")
	public void i_click_the_LogIn_button() throws Throwable {
		loginPageActions.clickLogin();
	}

	@And("I click on dashBoard link")
	public void Dashboard_link() throws Throwable {
		loginPageActions.clickDashboardlink();
	}

	@And("I click on dont lose access close button")
	public void close_button1() throws Throwable {
		loginPageActions.clickcloseButton();
	}
	@And("I click on newDashboard link")
	public void newDashboard_link() throws Throwable {
		loginPageActions.clickNewDashboardlink();
	}

	@And("I click on close button")
	public void close_button() throws Throwable{
		loginPageActions.clickCloseButton();
	}

	@And("Enter name in new bashboard form from Excel")
	public void enterNameInNewDashboardFromExcel() throws Throwable {
		loginPageActions.enterNameinNewDashbaord();
	}

	@And("Enter description in the form")
	public void create_button() throws Throwable {
		loginPageActions.enterDescription();
	}

	@And("I click on create button")
	public void Click_Create_button() throws Throwable {
		loginPageActions.clickCreateButton();
	}

	@Then("Verify signOut button is displayed or not")
	public void veridyText() throws Throwable {
		loginPageActions.verifySignOutText();
	}

	@Then("Verify Success Contact \"([^\"]*)\"\"([^\"]*)\" was created Close")
	public void verify_Success_Contact_lemon_hanson_was_created_Close(String FirstName, String LastName) throws Throwable {
		String actualToastMsg=loginPageActions.generticmethod();
		String expectedToastMsg= "Contact \"Mr. "+FirstName+" "+LastName+"\" was created.";
		System.out.println("Actual toast message is:-"+actualToastMsg);
		System.out.println("Expected toast message is:-"+expectedToastMsg);
		Assert.assertEquals(actualToastMsg, expectedToastMsg);
		System.out.println("Verified the actual and expected message...");

	}

	@And("I click on profile image icon")
	public void ClickProfileImage() throws Throwable {
		loginPageActions.clickProfile();
	}

	@And("I click on Signout button")
	public void clickSignOutLink() throws Throwable {
		loginPageActions.clickSignOutLink();
	}
	@And("I click on accout link")
	public void click_Account_link() throws Throwable {
		loginPageActions.clickAccountLink();
	}

	@And("I click on contacts link")
	public void Contcts_link() throws Throwable {
		loginPageActions.clickCOntCtcLink();
	}

	@And("I click on New button link")
	public void clickNewButton() throws Throwable {
		loginPageActions.clickNewButton();
	}

	@And("I click on salutation field")
	public void clickSalutationlink() throws Throwable {
		loginPageActions.switchContactContainer();
	}

	@And("Enter data in firstname input field")
	public void enterFirstName() throws Throwable {
		loginPageActions.enterFirstName();
	}

	@And("Enter data in lastname input field")
	public void enterlastName() throws Throwable {
		loginPageActions.enterLastName();
	}

	@And("I click on account field")
	public void clickAcountfield() throws Throwable {
		loginPageActions.clickaccountfield();
	}

	@And("I click on save button on new contact")
	public void clickSaveButton() throws Throwable {
		loginPageActions.clickSaveBUtton();
		Thread.sleep(6000);
	}

	@And("I click the LogOut Link")
	public void i_click_the_LogOut_Link() throws Throwable {
		homePageActions.clickLogOut();
	}

	@And("I click the back arrow on the browser")
	public void i_click_the_back_arrow_on_the_browser() throws Throwable {
		SeleniumDriver.getDriver().navigate().back();
	}

	@Then("I should be presented with an Invalid credentials \"([^\"]*)\" error")
	public void i_should_be_presented_with_an_Invalid_credentials_error(String errorMessage) {
		String actualError = loginPageActions.getInvalidCredentialsErrorMessage().substring(1).trim();
		Assert.assertEquals(actualError, errorMessage);

	}

	@Then("an UserName \"([^\"]*)\" error message is displayed")
	public void an_UserName_error_message_is_displayed(String errorMessage) throws Throwable {
		Assert.assertEquals(loginPageActions.getUserNameError(), errorMessage);
	}

	@And("a Password \"([^\"]*)\" error message is displayed")
	public void a_Password_error_message_is_displayed(String errorMessage) throws Throwable {
		Assert.assertEquals(loginPageActions.getPasswordError(), errorMessage);
	}

	@And("I enter the \"([^\"]*)\" in the password edit Box five Times and click Login")
	public void i_enter_the_in_the_password_edit_Box_five_Times_and_click_Login(List<String> list) throws Throwable {

		for (int i = 1; i < list.size(); i++) {
			@SuppressWarnings("unused")
			String password = list.get(i);



			// first clear the password and enter the invalid password and then
			// click Login
			loginPageActions.clearPassword();
		//	loginPageActions.enterPassword(password);
			loginPageActions.clickLogin();

			// ensure that the validation error message is displayed
			Assert.assertEquals(loginPageActions.getInvalidCredentialsErrorMessage(),
					configReader.pagesWeb.getProperty("invalidCredentials"));
		}
	}

	@Then("I should be presented with reset password dialog")
	public void i_should_be_presented_with_reset_password_dialog() throws Throwable {
		String alertMessage = loginPageActions.getResetPasswordAlertMessage();
		Assert.assertEquals(alertMessage, configReader.pagesWeb.getProperty("resetPasswordAlert"));
	}

	@Then("I close the Reset password dialog")
	public void i_close_the_Reset_password_dialog() throws Throwable {
		loginPageActions.closeResetPasswordDialog();
	}

	@And("I click Reset Password on the displayed dialog")
	public void i_click_Reset_Password_on_the_displayed_dialog() throws Throwable {
		loginPageActions.acceptResetPasswordDialog();
	}

	@Then("I enter the username \"([^\"]*)\" on the forgot password page")
	public void i_enter_the_username_on_the_forgot_password_page(String userName) throws Throwable {
		forgotPasswordPageActions.enterUserName(userName);
	}

	@Then("I click Continue on the forgot password page")
	public void i_click_Continue_on_the_forgot_password_page() throws Throwable {
		forgotPasswordPageActions.clickContinue();
	}

	@And("an Email sent \"([^\"]*)\" message should be displayed")
	public void an_Email_sent_message_should_be_displayed(String emailSent) throws Throwable {
		Assert.assertEquals(forgotPasswordPageActions.getEmailSentText(), emailSent);
	}

	@And("I verify navigation to the Login page")
	public void i_verify_navigation_to_the_Login_page() throws Throwable {
		// wait for the user name edit to appear
		loginPageActions.waitForUserNameWebEdit();

		String actualTitle = loginPageActions.getLoginPageTitle();
		Assert.assertEquals(actualTitle, configReader.pagesWeb.getProperty("loginPage"));
	}

	@Then("I verify navigation to the Home Page")
	public void i_verify_navigation_to_the_Home_Page() throws Throwable {

		// wait for the BookNow Button to be visible and check the page title
		// homePageActions.waitForBookThisRouteBtn();
		homePageActions.waitForProgressbarToappear();
		homePageActions.waitForProgressbarToDissapear();

		String actualTitle = homePageActions.getHomePageTitle();
		Assert.assertEquals(actualTitle, configReader.pagesWeb.getProperty("homePage"));
	}

	@And("I verify navigation to the Landing Page")
	public void i_verify_navigation_to_the_Landing_Page() throws Throwable {

		Thread.sleep(1000);
		String actualTitle = landingPageActions.getLandingPageTitle();
		Assert.assertEquals(actualTitle, configReader.pagesWeb.getProperty("landingPage"));
	}

	@And("I verify navigation to the Forgot Password Page")
	public void i_verify_navigation_to_the_Forgot_Password_Page() throws Throwable {
		String actualTitle = forgotPasswordPageActions.getForgotPasswordPageTitle();
		Assert.assertEquals(actualTitle, configReader.pagesWeb.getProperty("forgotPasswordPage"));
	}

	@And("I click the Book Now Link")
	public void i_click_the_Book_Now_Link() {
		// Wait for the Book Now link to appear
		landingPageActions.waitForBookNowLink();

		// Click on the book now link
		landingPageActions.clickOnBookNowLink();

	}

}
