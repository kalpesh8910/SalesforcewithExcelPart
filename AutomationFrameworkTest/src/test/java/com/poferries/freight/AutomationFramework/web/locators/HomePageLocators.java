package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePageLocators {

	@FindBy(how = How.ID, using = "route")
	public WebElement routeDropDown;

	@FindBy(how = How.LINK_TEXT, using = "Logout")
	public WebElement logOutLink;

	@FindBy(how = How.XPATH, using = "//*[contains(@href,'BookNow')]")
	public WebElement bookLink;

	@FindBy(how = How.ID, using = "HomeBookNowBtn")
	public WebElement bookNowBtn;

	@FindBy(how = How.LINK_TEXT, using = "PROFILE")
	public WebElement profileLink;

	@FindBy(how = How.ID, using = "PregressDiv")
	public WebElement progressBar;

	@FindBy(how = How.ID, using = "dropdownM")
	public WebElement lengthUnitSelect;

	@FindBy(how = How.XPATH, using = "//a[@data-value='Metre']")
	public WebElement metre;

	@FindBy(how = How.ID, using = "//a[@data-value='feet']")
	public WebElement feet;

	@FindBy(how = How.ID, using = "dropdownLanguage")
	public WebElement languageSelect;

	@FindBy(how = How.XPATH, using = "//div[@id='dropdownLanguageItems']/child::a[1]")
	public WebElement englishLang;

	@FindBy(how = How.ID, using = "//div[@id='dropdownLanguageItems']/child::a[2]")
	public WebElement polishLang;

	@FindBy(how = How.ID, using = "//div[@id='dropdownLanguageItems']/child::a[3]")
	public WebElement germanLang;

	@FindBy(how = How.ID, using = "//div[@id='dropdownLanguageItems']/child::a[4]")
	public WebElement frenchLang;

	@FindBy(how = How.ID, using = "//div[@id='dropdownLanguageItems']/child::a[5]")
	public WebElement dutchLang;

	@FindBy(how = How.ID, using = "//div[@id='dropdownLanguageItems']/child::a[6]")
	public WebElement spannishLang;

}
