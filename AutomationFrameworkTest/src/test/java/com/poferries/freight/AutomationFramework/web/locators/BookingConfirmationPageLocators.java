package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BookingConfirmationPageLocators {

	@FindBy(how = How.LINK_TEXT, using = "Logout")
	public WebElement logOutBtn;

	@FindBy(how = How.ID, using = "rev-vehUnitId")
	public WebElement confirmedVehicleReg;

	@FindBy(how = How.ID, using = "rev-vehLength")
	public WebElement confirmedVehicleLen;

	@FindBy(how = How.ID, using = "rev-vehHeight")
	public WebElement confirmedVehicleHeight;

	@FindBy(how = How.ID, using = "rev-vehWidth")
	public WebElement confirmedVehicleWidth;

	@FindBy(how = How.XPATH, using = "//*[@id='confirm-booking']/div/div[2]/div[1]/div/div[2]/div[2]")
	public WebElement confirmedVehicleWeight;

	@FindBy(how = How.ID, using = "rev-adults")
	public WebElement confirmedPass;

	@FindBy(how = How.ID, using = "rev-netAmount")
	public WebElement confirmedNetPrice;

	@FindBy(how = How.ID, using = "rev-vatAmount")
	public WebElement confirmedVatAmount;

	@FindBy(how = How.ID, using = "rev-totalAmount")
	public WebElement confirmedTotalPrice;

	@FindBy(how = How.ID, using = "rev-returnNetAmount")
	public WebElement confirmedReturnNetPrice;

	@FindBy(how = How.ID, using = "rev-returnVatAmount")
	public WebElement confirmedReturnVatAmount;

	@FindBy(how = How.XPATH, using = "//*[@id='confirm-booking']/div/div[1]/div[2]/div/p[4]/span[2]")
	public WebElement singleJourneyWaybillNo;

	@FindBy(how = How.XPATH, using = "// *[@id=\"confirm-booking\"]/div/div[1]/div[2]/div/p[5]/span[2]")
	public WebElement returnJourneyOutwardWaybillNo;

	@FindBy(how = How.XPATH, using = "// *[@id=\"confirm-booking\"]/div/div[1]/div[2]/div/p[6]/span[2]")
	public WebElement returnJourneyReturnWaybillNo;

	@FindBy(how = How.XPATH, using = "//*[@id='confirm-booking']/div/div[1]/div[1]/div/div[1]/div[2]/div/span[1]")
	public WebElement confirmedRouteFrom;

	@FindBy(how = How.XPATH, using = "//*[@id='confirm-booking']/div/div[1]/div[1]/div/div[1]/div[2]/div/span[2]")
	public WebElement confirmedRouteTo;

	@FindBy(how = How.ID, using = "rev-bookingRoute")
	public WebElement confirmedOnwardRoute;

	@FindBy(how = How.ID, using = "rev-returnRoute")
	public WebElement confirmedReturnRoute;

	@FindBy(how = How.XPATH, using = "//*[@id='confirm-booking']/div/div[3]/div[2]/div/p[4]/span[2]")
	public WebElement confirmedPayStatus;

	@FindBy(how = How.XPATH, using = "// *[@id='confirm-booking']/div/div[3]/div[2]/div/p[2]/span[2]")
	public WebElement confirmedPayDate;

	@FindBy(how = How.XPATH, using = "//*[@id='confirm-booking']/div/div[3]/div[2]/div/p[3]/span[2]")
	public WebElement confirmedPayType;

	@FindBy(how = How.LINK_TEXT, using = "Go To Home")
	public WebElement goToHomeLink;

	@FindBy(how = How.LINK_TEXT, using = "New Booking")
	public WebElement newBookingLink;

	@FindBy(how = How.XPATH, using = "//*[@id=\'confirm-booking\']/div/div/div/div/p[2]/span[2]")
	public WebElement paymentCancelledError;

	@FindBy(how = How.XPATH, using = "//*[@class='btn btn-orange text-white ml-3']")
	public WebElement amendBookingLink;

	@FindBy(how = How.ID, using = "PaySuccessSurveyCancel")

	public WebElement paySurveyNoThanks;

	@FindBy(how = How.ID, using = "SurveyModal")
	public WebElement paySurveyPopup;

	@FindBy(how = How.XPATH, using = "//*[@id=\"SurveyModal\"]/div/div/div[1]/h5")
	public WebElement paySurveyText;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/h2")
	public WebElement amendBookingHeader;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/p[1]")
	public WebElement amendBookingMessage;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div[1]/div/div[1]/span")
	public WebElement amendBookingPortOffice;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div[1]/div/div[2]/span")
	public WebElement amendBookingOpenTiming;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div[1]/div/p[1]")
	public WebElement amendBookingTelephoneNo;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div[1]/div/p[2]/a")
	public WebElement amendBookingEmailAddress;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/p[3]")
	public WebElement amendBookingSecondMessage;

	@FindBy(how = How.LINK_TEXT, using = "Back")
	public WebElement amendBookingBack;

}
