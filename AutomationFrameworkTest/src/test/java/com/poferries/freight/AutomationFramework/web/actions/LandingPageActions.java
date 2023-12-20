package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.LandingPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class LandingPageActions {

	LandingPageLocators landingPageLocators = null;
	ConfigReader configReader = new ConfigReader();

	// Constructor initialising the page factory elements
	public LandingPageActions() {
		this.landingPageLocators = new LandingPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), landingPageLocators);
	}

	// method to navigate to the user LogIn Page
	public void clickOnSignInLink() {
		landingPageLocators.signInLink.click();
	}

	// the below method returns the title of the landing Page
	public String getLandingPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// wait for the SignIn Link to appear
	public void waitForSignInLink() throws TimeoutException {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(landingPageLocators.signInLink));
	}

	// the below method closes the play store, app store message label
	public void closeAppStorePlayStoreMessageLabel() {

		if (SeleniumDriver.getDriver().findElements(By.id(configReader.pagesWeb.getProperty("closeStoreLinkID")))
				.size() > 0) {
			landingPageLocators.closeStoreLink.click();
		}

	}

	// method to click the Book Now link
	public void clickOnBookNowLink() {
		landingPageLocators.bookNowLink.click();
	}

	// wait for the BookNow Link to appear
	public void waitForBookNowLink() throws TimeoutException {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(landingPageLocators.bookNowLink));
	}

}
