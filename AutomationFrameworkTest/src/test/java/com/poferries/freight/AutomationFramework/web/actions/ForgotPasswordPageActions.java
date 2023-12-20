package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;

import com.poferries.freight.AutomationFramework.web.locators.ForgotPasswordPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class ForgotPasswordPageActions {

	ForgotPasswordPageLocators forgotPasswordPageLocators = null;

	// Constructor initialising the page factory elements
	public ForgotPasswordPageActions() {
		this.forgotPasswordPageLocators = new ForgotPasswordPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), forgotPasswordPageLocators);
	}

	// the below method returns the title of the Forgot password page
	public String getForgotPasswordPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// the below method enters username in the editBox
	public void enterUserName(String userName) {
		forgotPasswordPageLocators.emailUserNameEdit.sendKeys(userName);
	}

	// the below method clicks continue
	public void clickContinue() {
		forgotPasswordPageLocators.continueBtn.click();
	}

	// get email sent text
	public String getEmailSentText() {
		return forgotPasswordPageLocators.emailSentText.getText();
	}

}
