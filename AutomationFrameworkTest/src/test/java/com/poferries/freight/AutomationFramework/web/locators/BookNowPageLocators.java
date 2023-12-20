package com.poferries.freight.AutomationFramework.web.locators;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.How;

public class BookNowPageLocators {

	@FindBy(how = How.ID, using = "route")
	public WebElement routeDropDown;

	@FindBy(how = How.ID, using = "UserDefCurrency")
	public WebElement currencyDropDown;

	@FindBy(how = How.ID, using = "UserDefCountry")
	public WebElement originCountryDropDown;

	@FindBy(how = How.LINK_TEXT, using = "Logout")
	public WebElement logOutLink;

	@FindBy(how = How.ID, using = "passengerAdults")
	public WebElement noPassengersDropDown;

	@FindBy(how = How.ID, using = "StepOneContinue")
	public WebElement routeSelectionContinue;

	@FindBy(how = How.ID, using = "goods")
	public WebElement dangerousGoodsChk;

	@FindBy(how = How.ID, using = "pets")
	public WebElement petsChk;

	@FindBy(how = How.ID, using = "goodsCheckBoxTxt")
	public WebElement goodsChkTxt;

	@FindBy(how = How.ID, using = "petsCheckBoxTxt")
	public WebElement petsChkTxt;

	@FindBy(how = How.ID, using = "HeaderDefVals")
	public WebElement lengthLanguageLabel;

	@FindBy(how = How.ID, using = "UserDefCurrency")
	public WebElement currencySelect;

	@FindBy(how = How.ID, using = "SaveUserMeasures")
	public WebElement languageCurrencySave;

	@FindBy(how = How.ID, using = "CloseUserMeasures")
	public WebElement languageCurrencyClose;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[2]/span")
	public WebElement dangerousPetsMessage;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[2]/span")
	public WebElement dangerousGoodsMessage;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[1]/span")
	public WebElement dangerousGoodsPort;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[1]/span")
	public WebElement petsPort;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[2]/span")
	public WebElement dangerousGoodsTiming;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[2]/span")
	public WebElement petsTiming;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[1]/a")
	public WebElement dangerousGoodsTelephoneNo;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[1]/a")
	public WebElement PetsTelephoneNo;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[2]/a")
	public WebElement dangerousGoodsEmail;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[2]/a")
	public WebElement petsEmail;

	@FindBy(how = How.LINK_TEXT, using = "Back")
	public WebElement dangerousGoodsPetsBack;

	@FindBys({ @FindBy(how = How.NAME, using = "journeytype") })
	public List<WebElement> journeyType;

}
