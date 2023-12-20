package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import com.poferries.freight.AutomationFramework.web.locators.PaymentPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class PaymentPageActions {

	PaymentPageLocators paymentPageLocators = null;

	// Constructor initialising the page factory elements
	public PaymentPageActions() {
		this.paymentPageLocators = new PaymentPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), paymentPageLocators);
	}

	// the below method selects the expiry month from the month drop down
	public void selectMonth(String monthToSelect) {
		Select monthDropDown = new Select(paymentPageLocators.expiryMonth);
		monthDropDown.selectByVisibleText(monthToSelect);
	}

	// the below method selects the expiry year from the year drop down
	public void selectYear(String yearToSelect) {
		Select yearDropDown = new Select(paymentPageLocators.expiryYear);
		yearDropDown.selectByVisibleText(yearToSelect);
	}

	// the below method enters the billing card No in the card Number field
	public void enterBillingCardNo(String cardNo) {
		paymentPageLocators.cardNumber.sendKeys(cardNo);
	}

	// the below method enters the card security code in the card security code
	// field
	public void enterCardSecurityCode(String securityCode) {
		paymentPageLocators.cardSecurityCode.sendKeys(securityCode);
	}

	// the below method clicks the cancel button to cancel the payment
	public void cancelPayment() {
		paymentPageLocators.paymentCancel.click();
	}

	// the below method clicks the pay now button to proceed with the payment
	public void proceedWithPayment() {
		paymentPageLocators.paymentPayNow.click();
	}

	// the below method returns the payment amount displayed
	public String getPaymentAmount() {
		return paymentPageLocators.paymentAmount.getText();
	}

	// the below method returns the payment amount displayed
	public String getBillingName() {
		return paymentPageLocators.billingAddressName.getText();
	}

	// the below method returns the first line of the billing address
	public String getBillingAddressFirstLine() {
		return paymentPageLocators.billingAddressLine1.getText();
	}

	// the below method returns the second line of the billing address
	public String getBillingAddressSecondLine() {
		return paymentPageLocators.billingAddressLine2.getText();
	}

	// the below method returns the billing city
	public String getBillingCity() {
		return paymentPageLocators.billingAddressCity.getText();
	}

	// the below method returns the billing country
	public String getBillingCountry() {
		return paymentPageLocators.billingAddressCountry.getText();
	}

	// the below method returns the billing post code
	public String getBillingPostCode() {
		return paymentPageLocators.billingAddressPostCode.getText();
	}

	// the below method returns the page title
	public String getPaymentPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// the below method waits for the card number editbox to be displayed
	public void waitForCardNumberEdit() {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.visibilityOf(paymentPageLocators.cardNumber));
	}

	// the below method returns the invalid card number details
	public String getInvalidCardDetailsMessage() {
		return paymentPageLocators.invalidCardNumberText.getText();
	}

	// the below method clicks on cancel on the page
	public void clickCancelPayment() {
		paymentPageLocators.paymentCancel.click();
	}

}
