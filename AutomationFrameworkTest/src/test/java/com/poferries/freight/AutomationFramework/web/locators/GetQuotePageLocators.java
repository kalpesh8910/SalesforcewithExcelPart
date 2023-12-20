package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class GetQuotePageLocators {

	@FindBy(how = How.ID, using = "StepThreeBack")
	public WebElement reviewBookingBack;

	@FindBy(how = How.ID, using = "rev-vehWidth")
	public WebElement reviewVehicleWidth;

	@FindBy(how = How.ID, using = "rev-vehWeight")
	public WebElement reviewVehicleWeight;

	@FindBy(how = How.ID, using = "rev-adults")
	public WebElement reviewPass;

	@FindBy(how = How.ID, using = "rev-routeFrom")
	public WebElement reviewRouteFrom;

	@FindBy(how = How.ID, using = "rev-routeTo")
	public WebElement reviewRouteTo;

	@FindBy(how = How.ID, using = "rev-bookingRoute")
	public WebElement reviewOnwardRoute;

	@FindBy(how = How.ID, using = "rev-returnRoute")
	public WebElement reviewReturnRoute;

	@FindBy(how = How.ID, using = "rev-netAmount")
	public WebElement reviewNetPrice;

	@FindBy(how = How.ID, using = "rev-vatAmount")
	public WebElement reviewVatAmount;

	@FindBy(how = How.ID, using = "rev-returnNetAmount")
	public WebElement reviewReturnNetPrice;

	@FindBy(how = How.ID, using = "rev-returnVatAmount")
	public WebElement reviewReturnVatAmount;

	@FindBy(how = How.ID, using = "rev-totalAmount")
	public WebElement reviewTotalPrice;

	@FindBy(how = How.ID, using = "rev-vehUnitId")
	public WebElement reviewVehicleReg;

	@FindBy(how = How.ID, using = "rev-vehLength")
	public WebElement reviewVehicleLen;

	@FindBy(how = How.ID, using = "rev-vehHeight")
	public WebElement reviewVehicleHeight;

	@FindBy(how = How.ID, using = "BillingAddrCB")
	public WebElement billingAddrChk;

	@FindBy(how = How.ID, using = "PaymentTermsCheckBox")
	public WebElement paymentTermsChk;

	@FindBy(how = How.ID, using = "proceedToPayBtn")
	public WebElement proceedToPayBtn;

}
