package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.BookingConfirmationPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;
import com.poferries.freight.AutomationFramework.web.utilities.UtilityMethods;
import com.poferries.freight.AutomationFramework.web.utilities.VehicleIterator;

public class BookingConfirmationPageActions {

	BookingConfirmationPageLocators bookingConfirmationPagelocators = null;
	ConfigReader configReader = new ConfigReader();

	// Constructor initialising the page factory elements
	public BookingConfirmationPageActions() {
		this.bookingConfirmationPagelocators = new BookingConfirmationPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), bookingConfirmationPagelocators);
	}

	// The below method returns the vehicle reg from the booking confirmation
	// page
	public String getConfirmedVehicleReg() {
		return bookingConfirmationPagelocators.confirmedVehicleReg.getText();
	}

	// The below method returns the vehicle length from the booking confirmation
	// page
	public String getConfirmedVehicleLength() {
		return bookingConfirmationPagelocators.confirmedVehicleLen.getText();
	}

	// The below method returns the vehicle height from the booking confirmation
	// page
	public String getConfirmedVehicleHeight() {
		return bookingConfirmationPagelocators.confirmedVehicleHeight.getText();
	}

	// The below method returns the vehicle width from the booking confirmation
	// page
	public String getConfirmedVehicleWidth() {
		return bookingConfirmationPagelocators.confirmedVehicleWidth.getText();
	}

	// The below method returns the vehicle weight from the booking confirmation
	// page
	public String getConfirmedVehicleWeight() {
		// using substring to get the weight as 44 tons text is currently not present in
		// the right tag
		return bookingConfirmationPagelocators.confirmedVehicleWeight.getText()
				.substring(bookingConfirmationPagelocators.confirmedVehicleWeight.getText().length() - 7);
	}

	// The below method returns the number of passengers from the booking
	// confirmation page
	public String getConfirmedPass() {
		return bookingConfirmationPagelocators.confirmedPass.getText();
	}

	// The below method returns the confirmed net price from the booking
	// confirmation page
	public String getConfirmedNetPrice() {
		return bookingConfirmationPagelocators.confirmedNetPrice.getText();
	}

	// The below method returns the confirmed VAT Amount from the booking
	// confirmation page
	public String getConfirmedVATAmount() {
		return bookingConfirmationPagelocators.confirmedVatAmount.getText();
	}

	// The below method returns the confirmed total price from the booking
	// confirmation page
	public String getConfirmedTotalPrice() {
		return bookingConfirmationPagelocators.confirmedTotalPrice.getText();
	}

	// The below method returns the wayBillNo from the booking confirmation page
	public String getWaybillNo() {

		String wayBill = null;
		// based on weather the journey is return or single get the waybill no
		if (VehicleIterator.getJourneyType().equalsIgnoreCase("oneway")) {
			wayBill = bookingConfirmationPagelocators.singleJourneyWaybillNo.getText();
		} else if (VehicleIterator.getJourneyType().equalsIgnoreCase("return")) {
			wayBill = bookingConfirmationPagelocators.returnJourneyOutwardWaybillNo.getText();
		}

		return wayBill;
	}

	// The below method returns the return waybill No
	public String getReturnWaybillNo() {
		return bookingConfirmationPagelocators.returnJourneyReturnWaybillNo.getText();
	}

	// The below method returns the confirmed pay status from the booking
	// confirmation page
	public String getConfirmedPayStatus() {
		return bookingConfirmationPagelocators.confirmedPayStatus.getText();
	}

	// The below method returns the confirmed route from the booking
	// confirmation page
	public String getConfirmedRoute() {
		return bookingConfirmationPagelocators.confirmedRouteFrom.getText() + " " + "to" + " "
				+ bookingConfirmationPagelocators.confirmedRouteTo.getText();
	}

	// The below method returns the onward journey from the review booking page
	public String getOnwardJourney() {
		return bookingConfirmationPagelocators.confirmedOnwardRoute.getText();
	}

	// The below method returns the destination port from the review booking page
	public String getReturnJourney() {
		return bookingConfirmationPagelocators.confirmedReturnRoute.getText();
	}

	// The below method returns the confirmed route from the booking
	// confirmation page
	public String getConfirmedPayDate() {
		return bookingConfirmationPagelocators.confirmedPayDate.getText();
	}

	// The below method returns the confirmed route from the booking
	// confirmation page
	public String getConfirmedPayType() {
		return bookingConfirmationPagelocators.confirmedPayType.getText();
	}

	// the below method returns the page title of the booking confirmation page
	public String getBookingConfirmationPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// The below method clicks the Go To Home Link
	public void clickGoToHomeLink() {
		bookingConfirmationPagelocators.goToHomeLink.click();
	}

	// the below function gets the payment cancellation error message
	public String getPaymentCancellationError() {
		return bookingConfirmationPagelocators.paymentCancelledError.getText();
	}

	// the below method waits for the amend booking link to be displayed
	public void waitForAmendBookingsLink() throws Throwable {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.visibilityOf(bookingConfirmationPagelocators.amendBookingLink));
	}

	// method to enter the login details and click the signIn Link
	public void logoutFromApplication() {
		bookingConfirmationPagelocators.logOutBtn.click();
	}

	// the below method checks if the payment success pop up is displayed
	public boolean isPaymentSuccessSurveyPopupDisplayed() throws InterruptedException {

		boolean isPopUpDisplayed = false;
		int count = 0;
		boolean exitLoop = false;

		do {

			if (bookingConfirmationPagelocators.paySurveyPopup.getAttribute("class")
					.equalsIgnoreCase("modal fade show")) {
				isPopUpDisplayed = true;
			}

			Thread.sleep(1000);
			count++;

			if (isPopUpDisplayed || count > 10) {
				exitLoop = true;
			}

		} while (!exitLoop);

		return isPopUpDisplayed;

	}

	// the below method closes the payment success survey pop up
	public void closePaymentSuccessSurveyPopup() throws InterruptedException {
		bookingConfirmationPagelocators.paySurveyNoThanks.click();
		Thread.sleep(2000);
	}

	// the below method waits for the waybill No to be displayed.
	public void waitForWayBillNo() {

		// based on the journey type wait for the corresponding elements

		if (VehicleIterator.getJourneyType().equalsIgnoreCase("oneway")) {
			SeleniumDriver.getWaitDriver()
					.until(ExpectedConditions.visibilityOf(bookingConfirmationPagelocators.singleJourneyWaybillNo));
		} else if (VehicleIterator.getJourneyType().equalsIgnoreCase("return")) {
			SeleniumDriver.getWaitDriver().until(
					ExpectedConditions.visibilityOf(bookingConfirmationPagelocators.returnJourneyOutwardWaybillNo));
		}

	}

	// the below method clicks on the amend booking link
	public void clickAmendBookingLink() {
		bookingConfirmationPagelocators.amendBookingLink.click();
	}

	// the below method waits for the amend booking link to be displayed
	public void waitForAmendBookingPage() throws Throwable {

		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.visibilityOf(bookingConfirmationPagelocators.amendBookingHeader));
	}

	// the below method returns the amend booking message
	public String getAmendBookingMessage() {
		return bookingConfirmationPagelocators.amendBookingMessage.getText();
	}

	// the below method returns the amend Booking Port Office.
	public String getAmendBookingPortOffice() {
		return bookingConfirmationPagelocators.amendBookingPortOffice.getText();
	}

	// the below method returns the amend Booking Open timing.
	public String getAmendBookingTelephoneNo() {
		return bookingConfirmationPagelocators.amendBookingTelephoneNo.getText();
	}

	// the below method returns the amend Booking email address.
	public String getAmendBookingEmailAddress() {
		return bookingConfirmationPagelocators.amendBookingEmailAddress.getText();
	}

	// the below method returns the amend Booking second message
	public String getAmendBookingSecondMessage() {
		return bookingConfirmationPagelocators.amendBookingSecondMessage.getText();
	}

	// the below method returns the amend Booking second message
	public String getAmendBookingOpenTiming() {
		return bookingConfirmationPagelocators.amendBookingOpenTiming.getText();
	}

	// the below method clicks the back link on the amend booking page
	public void clickBackOnAmendBookingPage() {
		bookingConfirmationPagelocators.amendBookingBack.click();
	}

	// the below method moves to the pay status
	public void moveToPayStatus() {
		UtilityMethods.moveToElement(bookingConfirmationPagelocators.confirmedPayStatus);
	}

}
