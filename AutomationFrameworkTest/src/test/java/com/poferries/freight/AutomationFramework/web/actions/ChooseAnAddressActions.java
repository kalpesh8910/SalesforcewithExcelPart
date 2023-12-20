package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;

import com.poferries.freight.AutomationFramework.web.locators.ChooseAnAddressLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class ChooseAnAddressActions {

	ChooseAnAddressLocators chooseAnAddressLocators = null;

	// Constructor initialising the page factory elements
	public ChooseAnAddressActions() {
		this.chooseAnAddressLocators = new ChooseAnAddressLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), chooseAnAddressLocators);
	}

	// The below method clicks the continue button
	public void clickOnContinueButton() {
		chooseAnAddressLocators.continueBtn.click();
	}

}
