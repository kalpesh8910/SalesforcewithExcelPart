package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PaymentSuccessPageLocators {

	@FindBy(how = How.XPATH, using = "//*[@id=\"confirm-booking\"]/div/div/div/div/div/div[2]/i")
	public WebElement paymentSuccess;

}
