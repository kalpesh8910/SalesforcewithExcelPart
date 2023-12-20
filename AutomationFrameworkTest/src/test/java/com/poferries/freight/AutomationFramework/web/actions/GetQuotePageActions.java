package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.GetQuotePageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class GetQuotePageActions {

	GetQuotePageLocators getQuotePageLocators = null;

	// Constructor initialising the page factory elements
	public GetQuotePageActions() {
		this.getQuotePageLocators = new GetQuotePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), getQuotePageLocators);
	}

	// The below method returns the vehicle reg from the review booking page
	public String returnVehicleReg() {
		return getQuotePageLocators.reviewVehicleReg.getText();
	}

	// The below method returns the vehicle length from the review booking page
	public String returnVehicleLength() {
		return getQuotePageLocators.reviewVehicleLen.getText();
	}

	// The below method returns the vehicle height from the review booking page
	public String returnVehicleHeight() {
		return getQuotePageLocators.reviewVehicleHeight.getText();
	}

	// The below method returns the vehicle width from the review booking page
	public String returnVehicleWidth() {
		return getQuotePageLocators.reviewVehicleWidth.getText();
	}

	// The below method returns the vehicle weight from the review booking page
	public String returnVehicleWeight() {
		return getQuotePageLocators.reviewVehicleWeight.getText()
				.substring(getQuotePageLocators.reviewVehicleWeight.getText().length() - 7);
	}

	// The below method returns the number of passengers from the review booking
	// page
	public String returnPass() {
		return getQuotePageLocators.reviewPass.getText();
	}

	// The below method returns the departure port from the review booking page
	public String returnDeparturePort() {
		return getQuotePageLocators.reviewRouteFrom.getText();
	}

	// The below method returns the destination port from the review booking
	// page
	public String returnArrivalPort() {
		return getQuotePageLocators.reviewRouteTo.getText();
	}

	// The below method returns the onward journey from the review booking page
	public String getOnwardJourney() {
		return getQuotePageLocators.reviewOnwardRoute.getText();
	}

	// The below method returns the destination port from the review booking page
	public String getReturnJourney() {
		return getQuotePageLocators.reviewReturnRoute.getText();
	}

	// The below method returns the destination port from the review booking
	// page
	public String returnNetPrice() {
		return getQuotePageLocators.reviewNetPrice.getText();
	}

	// The below method returns the destination port from the review booking
	// page
	public String returnVATAmount() {
		return getQuotePageLocators.reviewVatAmount.getText();
	}

	// The below method returns the return net price from the review booking
	// page
	public String getReturnNetPrice() {
		return getQuotePageLocators.reviewReturnNetPrice.getText();
	}

	// The below method returns the return vat amount from the review booking
	// page
	public String getReturnVATAmount() {
		return getQuotePageLocators.reviewReturnVatAmount.getText();
	}

	// The below method returns the destination port from the review booking
	// page
	public String returnTotalPrice() {
		return getQuotePageLocators.reviewTotalPrice.getText();
	}

	// The below method clicks the proceed to payment Button
	public void clickProceedToPayBtn() {
		getQuotePageLocators.proceedToPayBtn.click();
	}

	// the below method clicks the back button on the review bookings page
	public void clickBackReviewBookings() {
		getQuotePageLocators.reviewBookingBack.click();
	}

	// The below method clicks the Billing Address Checkbox
	public void clickBillingAddressCheckBox() {
		getQuotePageLocators.billingAddrChk.click();
	}

	// the below method clicks the agree terms checkBox
	public void clickAgreeTermsCheckBox() {
		getQuotePageLocators.paymentTermsChk.click();
	}

	// the below method checks if terms and conditions Checkbox is displayed
	public boolean isTermsConditionsDisplayed() {
		return getQuotePageLocators.paymentTermsChk.isDisplayed();
	}

	// the below method waits for the terms and conditions check box to be displayed
	public void waitForTermsConditionsChk() {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.visibilityOf(getQuotePageLocators.paymentTermsChk));
	}

}
