package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PaymentPageLocators {

	@FindBy(how = How.ID, using = "amount")
	public WebElement paymentAmount;

	@FindBy(how = How.ID, using = "billingAddressName")
	public WebElement billingAddressName;

	@FindBy(how = How.ID, using = "billingAddressLine1")
	public WebElement billingAddressLine1;

	@FindBy(how = How.ID, using = "billingAddressLine2")
	public WebElement billingAddressLine2;

	@FindBy(how = How.ID, using = "billingAddressCity")
	public WebElement billingAddressCity;

	@FindBy(how = How.ID, using = "billingAddressCounty")
	public WebElement billingAddressCountry;

	@FindBy(how = How.ID, using = "billingAddressPostCode")
	public WebElement billingAddressPostCode;

	@FindBy(how = How.ID, using = "btnCancel")
	public WebElement paymentCancel;

	@FindBy(how = How.ID, using = "btnSubmit")
	public WebElement paymentPayNow;

	@FindBy(how = How.ID, using = "cardNumber")
	public WebElement cardNumber;

	@FindBy(how = How.ID, using = "csc")
	public WebElement cardSecurityCode;

	@FindBy(how = How.ID, using = "expiryMonth")
	public WebElement expiryMonth;

	@FindBy(how = How.ID, using = "expiryYear")
	public WebElement expiryYear;

	@FindBy(how = How.XPATH, using = "//*[@id='message']")
	public WebElement invalidCardNumberText;

}
