package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PaymentFailurePageLocators {

	@FindBy(how = How.XPATH, using = "//*[@id=\"confirm-booking\"]/p/a[1]")
	public WebElement goToHomeButton;

	@FindBy(how = How.XPATH, using = "//*[@id=\"confirm-booking\"]/p/a[2]")
	public WebElement newBookingButton;

	@FindBy(how = How.XPATH, using = "//*[@id=\"confirm-booking\"]/div/div/div/div/div")
	public WebElement paymentFailureMessage;

	@FindBy(how = How.XPATH, using = "//*[@class='btn btn-secondary float-left'")
	public WebElement surveyNoThanks;

}
