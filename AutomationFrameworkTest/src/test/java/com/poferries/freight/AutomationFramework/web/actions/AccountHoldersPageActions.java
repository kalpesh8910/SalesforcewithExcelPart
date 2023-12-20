package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.AccountHoldersPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class AccountHoldersPageActions {

	AccountHoldersPageLocators accountHoldersPageLocators = null;
	ConfigReader configReader = new ConfigReader();

	// Constructor initialising the page factory elements
	public AccountHoldersPageActions() {
		this.accountHoldersPageLocators = new AccountHoldersPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), accountHoldersPageLocators);
	}

	// method to navigate to the user LogIn Page
	public void clickOnSignInLink() {
		accountHoldersPageLocators.payAndGoSignIn.click();
	}

	// wait for the SignIn Link to appear
	public void waitForSignInLink() throws TimeoutException {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.elementToBeClickable(accountHoldersPageLocators.payAndGoSignIn));
	}

	// the below method returns the title of the Account holders Page
	public String getAccountHolderPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// wait for the SignIn Link to appear
	public void waitForSignUpLink() throws TimeoutException {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.elementToBeClickable(accountHoldersPageLocators.payAndGoSignUp));
	}

}
