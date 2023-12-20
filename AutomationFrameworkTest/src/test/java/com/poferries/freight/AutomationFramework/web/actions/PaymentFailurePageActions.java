package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.PaymentFailurePageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class PaymentFailurePageActions {

	PaymentFailurePageLocators paymentFailurePageLocators = null;

	// Constructor initialising the page factory elements
	public PaymentFailurePageActions() {
		this.paymentFailurePageLocators = new PaymentFailurePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), paymentFailurePageLocators);
	}

	// the below method waits for the Go To Home Button to be displayed
	public void waitForGoToHomeButton() {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.visibilityOf(paymentFailurePageLocators.goToHomeButton));
	}

	// The below method clicks on the Go To Home Button
	public void clickOnGoToHomeButton() {
		paymentFailurePageLocators.goToHomeButton.click();
	}

	// The below method retrieves the payment failure message
	public String getPaymentFailureMessage() {
		return paymentFailurePageLocators.paymentFailureMessage.getText();
	}

	// The below method closes the survey popup
	public void closeSurveyPopup() {
		paymentFailurePageLocators.surveyNoThanks.click();
	}

}
