package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProfilePageLocators {

	@FindBy(how = How.ID, using = "firstname")
	public WebElement firstName;

	@FindBy(how = How.ID, using = "firstname-error")
	public WebElement firstNameError;

	@FindBy(how = How.ID, using = "lastname")
	public WebElement lastName;

	@FindBy(how = How.ID, using = "lastname-error")
	public WebElement lastNameError;

	@FindBy(how = How.ID, using = "phoneNumber")
	public WebElement phoneNumber;

	@FindBy(how = How.ID, using = "phoneNumber-error")
	public WebElement phoneNumberError;

	@FindBy(how = How.ID, using = "jobTitle")
	public WebElement companyTitle;

	@FindBy(how = How.ID, using = "jobTitle-error")
	public WebElement companyTitleError;

	@FindBy(how = How.ID, using = "businessName")
	public WebElement companyName;

	@FindBy(how = How.ID, using = "businessName-error")
	public WebElement companyNameError;

	@FindBy(how = How.ID, using = "postcode")
	public WebElement postCode;

	@FindBy(how = How.ID, using = "postcode-error")
	public WebElement postCodeError;

	@FindBy(how = How.ID, using = "SearchPostCodeIcon")
	public WebElement postCodeSearch;

	@FindBy(how = How.ID, using = "SaveProfileBtn")
	public WebElement saveProfile;

	@FindBy(how = How.ID, using = "town")
	public WebElement cityTown;

	@FindBy(how = How.ID, using = "town-error")
	public WebElement cityTownError;

	@FindBy(how = How.ID, using = "addressLine1")
	public WebElement addressLine1;

	@FindBy(how = How.ID, using = "addressLine1-error")
	public WebElement addressLine1Error;

	@FindBy(how = How.ID, using = "addressLine2")
	public WebElement addressLine2;

	@FindBy(how = How.ID, using = "addressLine2-error")
	public WebElement addressLine2Error;

	@FindBy(how = How.XPATH, using = "//*[@id=\"MyProfileForm\"]/div[1]/a")
	public WebElement changePasswordLink;

	@FindBy(how = How.XPATH, using = "/html/body/div[3]/div")
	public WebElement profileSuccessfullySaved;

	@FindBy(how = How.ID, using = "postcodeErrModal")
	public WebElement postCodeNotFoundPopup;

	@FindBy(how = How.ID, using = "postcodeErrYesBtn")
	public WebElement postCodeNotFoundYes;

}
