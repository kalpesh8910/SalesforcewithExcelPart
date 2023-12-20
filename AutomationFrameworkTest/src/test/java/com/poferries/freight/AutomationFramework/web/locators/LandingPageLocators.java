package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LandingPageLocators {

	@FindBy(how = How.LINK_TEXT, using = "Sign In")
	public WebElement signInLink;

	@FindBy(how = How.LINK_TEXT, using = "REGISTER")
	public WebElement registerLink;

	@FindBy(how = How.ID, using = "SmartAppCloseWeb")
	public WebElement closeStoreLink;

	@FindBy(how = How.LINK_TEXT, using = "Book Now")
	public WebElement bookNowLink;

}
