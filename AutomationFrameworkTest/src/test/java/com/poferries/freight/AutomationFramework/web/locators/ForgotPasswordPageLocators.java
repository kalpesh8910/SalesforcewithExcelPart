package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ForgotPasswordPageLocators {

	@FindBy(how = How.XPATH, using = "//*[@id='ForgotPassBtn']")
	public WebElement emailUserNameEdit;

	@FindBy(how = How.XPATH, using = "//*[@id='ForgotPassBtn']")
	public WebElement continueBtn;

	@FindBy(how = How.XPATH, using = "//*[@id='ForgotPassForm']/div[3]/a")
	public WebElement forgotUserNameLink;

	@FindBy(how = How.XPATH, using = "//*[@id=\'ForgotPassSent\']/p[3]")
	public WebElement emailSentText;

}
