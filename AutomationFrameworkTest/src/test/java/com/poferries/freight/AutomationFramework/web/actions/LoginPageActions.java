package com.poferries.freight.AutomationFramework.web.actions;


import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.LoginPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.DataUtils;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;
import com.poferries.freight.AutomationFramework.web.utilities.UtilityMethods;

public class LoginPageActions {

	
	LoginPageLocators loginPageLocators = null;
	ConfigReader configReader = new ConfigReader();
	UtilityMethods utitlitymethods = new UtilityMethods();
	String sheetName = "Sheet1";
	
	// Constructor initialising the page factory elements
	public LoginPageActions() {
		this.loginPageLocators = new LoginPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), loginPageLocators);
	}

	// the below method returns the title of the login Page
	public String getLoginPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// the below method returns the invalid credentials error message
	public String getInvalidCredentialsErrorMessage() {
		return loginPageLocators.invalidCredentialsError.getText();
	}

	// the below method returns the error message displayed below the useraname edit
	public String getUserNameError() {
		return loginPageLocators.usernameError.getText();
	}

	// the below method returns the error message displayed below the password edit
	public String getPasswordError() {
		return loginPageLocators.passwordError.getText();
	}

	// method to enter the username
	public void enterUserName() throws Throwable {
		Thread.sleep(7000);
		loginPageLocators.userNameEdit.sendKeys("holoschool1-c5qt@force.com");
	}

	// method to enter the username
		public void enterUserName1(String username) throws Throwable {
			Thread.sleep(7000);
			loginPageLocators.userNameEdit.sendKeys(username);
		}

	// method to enter the password details
	public void enterPassword() throws Throwable {
		Thread.sleep(7000);
		loginPageLocators.passwordEdit.sendKeys("Kpk8910123@");
	}

	// method to clear the password details
	public void clearPassword() {
		loginPageLocators.passwordEdit.clear();
	}

	// method to click the signIn Link
	public void clickLogin() throws Throwable {
		Thread.sleep(8000);
		loginPageLocators.loginUserBtn.click();
		Thread.sleep(8000);
	}

	public void clickDashboardlink() throws Throwable {

		utitlitymethods.javaScriptExecutorClick(loginPageLocators.Dashboardlink);

//		loginPageLocators.Dashboardlink.wait(12000);
//		loginPageLocators.Dashboardlink.isDisplayed();
		//loginPageLocators.Dashboardlink.click();


/*		// Create an instance of JavascriptExecutor
		JavascriptExecutor js = (JavascriptExecutor) SeleniumDriver.getDriver();

		// Use JavaScript Executor to click the element
		js.executeScript("arguments[0].click();", loginPageLocators.Dashboardlink);
		Thread.sleep(8000);*/
	}

	public void clickcloseButton() throws Throwable {
		Thread.sleep(8000);
		loginPageLocators.DontLoseAccessCloseButton.click();
	}

	public void clickNewDashboardlink() throws Throwable {
		Thread.sleep(5000);
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.NewDashboardlink);
	//	loginPageLocators.NewDashboardlink.click();
		Thread.sleep(5000);
	}

	public void clickCloseButton() throws InterruptedException
	{
		loginPageLocators.closeButton.click();
		Thread.sleep(5000);
	}

	public void enterNameinNewDashbaord() throws InterruptedException {

		System.out.println("******start*****");
		Thread.sleep(5000);
		SeleniumDriver.getDriver().switchTo().frame(loginPageLocators.frameElement);
		System.out.println("******stop*****");
		Thread.sleep(5000);
		loginPageLocators.ENterNemeNewDashboardlink.sendKeys(DataUtils.getCellValueGPT(sheetName, 1, 0));
		String text = loginPageLocators.ENterNemeNewDashboardlink.getText();
		System.out.println("text is:-"+text);
		Thread.sleep(5000);
	}

	public void enterNameInNewDashboardFromExcel() {
        System.out.println("******start*****");

        // Assuming your Excel file is named "TestData.xlsx" and the sheet is named "Sheet1"
        String filePath = "C:\\Users\\HP\\eclipse-workspace\\AutomationFramework 1\\AutomationFramework\\testData\\data.xlsx";
        String sheetName = "Sheet1";

        try (FileInputStream fileInputStream = new FileInputStream(filePath);
             Workbook workbook = new XSSFWorkbook(fileInputStream)) {

            // Assuming the name is in the first column (column index 0) of the first row (row index 0)
            Sheet sheet = workbook.getSheet(sheetName);
            Row row = sheet.getRow(0);
            Cell cell = row.getCell(0);

            String name = cell.getStringCellValue();

            SeleniumDriver.getDriver().switchTo().frame(loginPageLocators.frameElement);
            System.out.println("******stop*****");
            Thread.sleep(5000);

            loginPageLocators.ENterNemeNewDashboardlink.sendKeys(name);

            String text = loginPageLocators.ENterNemeNewDashboardlink.getText();
            System.out.println("text is: " + text);

            Thread.sleep(5000);

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

	public void enterDescription() throws Throwable {
		loginPageLocators.EnterDescription.sendKeys(DataUtils.getCellValueGPT(sheetName, 0, 1));
		Thread.sleep(6000);
	}

	public void clickCreateButton() throws Throwable {
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.Create_button);

//		loginPageLocators.Create_button.click();
		Thread.sleep(10000);
		SeleniumDriver.getDriver().switchTo().defaultContent();
	}

	public void switchContactContainer() throws Throwable {
		Thread.sleep(5000);
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.Salutationfield);
		//loginPageLocators.Salutationfield.click();
		Thread.sleep(2000);
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.select_MR);
		//loginPageLocators.select_MR.click();
		Thread.sleep(5000);
	}

	public void enterFirstName() throws Throwable {
		loginPageLocators.firstName.sendKeys(DataUtils.getCellValueGPT(sheetName, 1, 2));
		Thread.sleep(5000);
	}

	public void enterLastName() throws Throwable {
		loginPageLocators.lastName.sendKeys(DataUtils.getCellValueGPT(sheetName, 1, 3));
		Thread.sleep(5000);
	}

	public void clickaccountfield() throws Throwable {
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.AccoutField);
	//	loginPageLocators.AccoutField.click();
		Thread.sleep(5000);
		loginPageLocators.select_testa_account.click();
	}

	public void clickSaveBUtton() throws Throwable {
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.Save_button_new_contact);

	//	loginPageLocators.Save_button_new_contact.click();
		//Thread.sleep(5000);
		//System.out.println("toast message is:-"+loginPageLocators.toastMessageContacts.getText());
	}

	public String generticmethod() throws Throwable {

		String actualToastMsg = loginPageLocators.toastMessageContacts.getText();
		System.out.println("actual toast message:-"+actualToastMsg);
		//Thread.sleep(5000);
		return actualToastMsg;

	//	String finalVal = "Success Contact Mr. "+FirstName+" "+LastName+" was created. Close";
		//System.out.println("final value is:-"+finalVal);

	}

	public void clickProfile() throws Throwable {
		Thread.sleep(5000);
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.ProfileImage);
	//	loginPageLocators.ProfileImage.click();
		Thread.sleep(5000);
	}

	public void clickSignOutLink() throws Throwable {
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.SignoutButton);

	//	loginPageLocators.SignoutButton.click();
		Thread.sleep(5000);
	}

	public void clickAccountLink() throws Throwable {

		utitlitymethods.javaScriptExecutorClick(loginPageLocators.Account_link);

		//SeleniumDriver.getDriver().switchTo().defaultContent();
		Thread.sleep(8000);
		//loginPageLocators.Account_link.click();
		Thread.sleep(10000);
	}

	public void verifySignOutText() throws Throwable {
		loginPageLocators.SignoutButton.isDisplayed();
		System.out.println("After verified text...");
		Thread.sleep(10000);
	}

	public void clickCOntCtcLink() throws Throwable {
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.contact_Link);

	//	loginPageLocators.contact_Link.click();
		Thread.sleep(10000);
	}

	public void clickNewButton() throws Throwable {
		utitlitymethods.javaScriptExecutorClick(loginPageLocators.NewButton);

		Thread.sleep(10000);
	//	loginPageLocators.NewButton.click();
		Thread.sleep(10000);
	}

	public void clickSalutation() {
		loginPageLocators.Salutationfield.click();
	}

	// method to get the reset password alert text
	public String getResetPasswordAlertMessage() {
		return SeleniumDriver.getDriver().switchTo().alert().getText();
	}

	// method to close the reset password alert
	public void closeResetPasswordDialog() {
		SeleniumDriver.getDriver().switchTo().alert().dismiss();
	}

	// method to accept the reset password alert
	public void acceptResetPasswordDialog() {
		SeleniumDriver.getDriver().switchTo().alert().accept();
	}

	// this method enters the username ,password and clicks login
	public void logIn() {
	//	enterUserName(configReader.configWeb.getProperty("userName"));
	//	enterPassword(configReader.configWeb.getProperty("password"));
	//	clickLogin();
	}

	// wait for book now button to be displayed
	public void waitForUserNameWebEdit() throws TimeoutException {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.visibilityOf(loginPageLocators.userNameEdit));
	}

}
