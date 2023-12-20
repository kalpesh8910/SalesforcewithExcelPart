package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ChooseAnAddressLocators {

	@FindBy(how = How.CLASS_NAME, using = "form-check my-1")
	public WebElement addressOption;

	@FindBy(how = How.ID, using = "multiAddrBtn")
	public WebElement continueBtn;

}
