package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.PaymentSuccessPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class PaymentSuccessPageActions {

	PaymentSuccessPageLocators paymentSuccessPageLocators = null;
	ConfigReader configReader = new ConfigReader();

	// Constructor initialising the page factory elements
	public PaymentSuccessPageActions() {
		this.paymentSuccessPageLocators = new PaymentSuccessPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), paymentSuccessPageLocators);
	}

	// the below method checks if the payment success web element is no longer
	// visible
	/*
	 * public void waitUntilPaymentSuccessNotVisible() throws InterruptedException {
	 *
	 * boolean exitLoop = false; boolean paymentSuccessStillExists = true; int count
	 * = 0;
	 *
	 * do {
	 *
	 * if (SeleniumDriver.getDriver().findElements(By.xpath(configReader.pagesWeb.
	 * getProperty("paymentSuccess"))) .size() < 0) { exitLoop = true;
	 * paymentSuccessStillExists = false;
	 *
	 * } else if (SeleniumDriver.getDriver()
	 * .findElements(By.xpath(configReader.pagesWeb.getProperty("paymentSuccess"))).
	 * size() > 0) { Thread.sleep(5000); count++; }
	 *
	 * if (paymentSuccessStillExists == true && count > 6) { exitLoop = true; }
	 *
	 * } while (exitLoop == false); }
	 */

	// the below method checks if the payment success web element is visible
	public void waitUntilPaymentSuccessIsVisible() throws InterruptedException {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.visibilityOf(paymentSuccessPageLocators.paymentSuccess));
	}

	// the below method checks if the payment success web element is no longer
	// visible
	public void waitUntilPaymentSuccessNotVisible() throws InterruptedException {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.invisibilityOf(paymentSuccessPageLocators.paymentSuccess));
	}

}
