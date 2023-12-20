package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountHoldersPageLocators {

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/section/div/div[1]/div/div/div[1]/a")
	public WebElement payAndGoSignIn;

	@FindBy(how = How.LINK_TEXT, using = "Sign Up")
	public WebElement payAndGoSignUp;

}
