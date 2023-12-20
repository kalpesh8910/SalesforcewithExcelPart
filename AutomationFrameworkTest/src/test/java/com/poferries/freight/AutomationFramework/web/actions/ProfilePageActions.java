package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.ProfilePageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class ProfilePageActions {

	ProfilePageLocators profilePageLocators = null;
	ConfigReader configReader = new ConfigReader();

	// Constructor initialising the page factory elements
	public ProfilePageActions() {
		this.profilePageLocators = new ProfilePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), profilePageLocators);
	}

	// Enter the first Name
	public void enterFirstName(String firstName) {
		profilePageLocators.firstName.clear();
		profilePageLocators.firstName.sendKeys(firstName);
	}

	// get the first name value
	public String getFirstName() {
		return profilePageLocators.firstName.getAttribute("value");
	}

	// clear the first Name field
	public void clearFirstNameField() throws InterruptedException {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.firstName));

		profilePageLocators.firstName.click();
		Thread.sleep(1000);
		profilePageLocators.firstName.clear();
	}

	// this method returns the first name field error message
	public String getFirstNameError() {
		return profilePageLocators.firstNameError.getText();
	}

	// Enter the last Name
	public void enterLastName(String lastName) {
		profilePageLocators.lastName.sendKeys(lastName);
	}

	// clear the last Name field
	public void clearLastNameField() throws InterruptedException {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.lastName));

		profilePageLocators.lastName.click();
		Thread.sleep(1000);
		profilePageLocators.lastName.clear();
	}

	// this method returns the last name field error message
	public String getLastNameError() {
		return profilePageLocators.lastNameError.getText();
	}

	// this method returns the first name value
	public String getLastName() {
		return profilePageLocators.lastName.getAttribute("value");
	}

	// Enter the Phone number
	public void enterPhoneNumber(String phoneNumber) {
		profilePageLocators.phoneNumber.sendKeys(phoneNumber);
	}

	// clear the phone field
	public void clearPhoneNumberField() {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.phoneNumber));

		profilePageLocators.phoneNumber.click();
		profilePageLocators.phoneNumber.clear();
	}

	// this method returns the phone number field error message
	public String getPhoneNumberError() {
		return profilePageLocators.phoneNumberError.getText();
	}

	// get Phone number
	public String getPhoneNumber() {
		return profilePageLocators.phoneNumber.getAttribute("value");
	}

	// Enter the company Title
	public void enterCompanyTitle(String companyTitle) {
		profilePageLocators.companyTitle.sendKeys(companyTitle);
	}

	// clear the company Title field
	public void clearCompanyTitleField() {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.companyTitle));

		profilePageLocators.companyTitle.click();
		profilePageLocators.companyTitle.clear();
	}

	// this method returns the company Title field error message
	public String getCompanyTitleError() {
		return profilePageLocators.companyTitleError.getText();
	}

	// the below method returns the company title
	public String getCompanyTitle() {
		return profilePageLocators.companyTitle.getAttribute("value");
	}

	// Enter the company Name
	public void enterCompanyName(String companyName) {
		profilePageLocators.companyName.sendKeys(companyName);
	}

	// clear the company Name field
	public void clearCompanyNameField() {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.companyName));

		profilePageLocators.companyName.click();
		profilePageLocators.companyName.clear();
	}

	// this method returns the company Title field error message
	public String getCompanyNameError() {
		return profilePageLocators.companyNameError.getText();
	}

	// this method returns the company name
	public String getCompanyName() {
		return profilePageLocators.companyName.getAttribute("value");
	}

	// Enter the postCode
	public void enterPostCode(String postCode) {
		profilePageLocators.postCode.sendKeys(postCode);
	}

	// clear the postCode field
	public void clearPostCodeField() throws InterruptedException {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.postCode));

		profilePageLocators.postCode.click();
		Thread.sleep(1000);
		profilePageLocators.postCode.clear();
		Thread.sleep(1000);
	}

	// this method returns the post code field error message
	public String getPostCoceError() {
		return profilePageLocators.postCodeError.getText();
	}

	// this method returns the post code value
	public String getPostCode() {
		return profilePageLocators.postCode.getAttribute("value");
	}

	// click on the search address Button
	public void clickSearchPostCodeIcon() throws InterruptedException {
		Thread.sleep(1000);
		profilePageLocators.postCodeSearch.click();
	}

	// Enter the cityTown
	public void entercityTown(String cityTown) {
		profilePageLocators.cityTown.sendKeys(cityTown);
	}

	// clear the cityTown field
	public void clearcityTownField() {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.cityTown));

		profilePageLocators.cityTown.click();
		profilePageLocators.cityTown.clear();
	}

	// this method returns the city Town field error message
	public String getcityTownError() {
		return profilePageLocators.cityTownError.getText();
	}

	// the below method returns the cityTown field value
	public String getCityTown() {
		return profilePageLocators.cityTown.getAttribute("value");
	}

	// Enter the addressLine1
	public void enterAddressLine1(String addressLine1) {
		profilePageLocators.addressLine1.sendKeys(addressLine1);
	}

	// clear the addressLine1 field
	public void clearAddressLine1Field() {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.addressLine1));

		profilePageLocators.addressLine1.click();
		profilePageLocators.addressLine1.clear();
	}

	// this method returns the addressLine1 error message
	public String getAddressLine1Error() {
		return profilePageLocators.addressLine1Error.getText();
	}

	// the below method returns the addressLine1 field value
	public String getAddressLine1() {
		return profilePageLocators.addressLine1.getAttribute("value");
	}

	// Enter the addressLine2
	public void enterAddressLine2(String addressLine2) {
		profilePageLocators.addressLine2.sendKeys(addressLine2);
	}

	// clear the addressLine2 field
	public void clearAddressLine2Field() {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.addressLine2));

		profilePageLocators.addressLine2.click();
		profilePageLocators.addressLine2.clear();
	}

	// this method returns the addressLine2 error message
	public String getAddressLine2Error() {
		return profilePageLocators.addressLine2Error.getText();
	}

	// the below method returns the addressLine2
	public String getAddressLine2() {
		return profilePageLocators.addressLine2.getAttribute("value");
	}

	// the below method clears the address details
	public void clearAddressDetails() {

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.postCode));
		profilePageLocators.postCode.click();
		profilePageLocators.postCode.clear();

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.cityTown));
		profilePageLocators.cityTown.click();
		profilePageLocators.cityTown.clear();

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.addressLine1));
		profilePageLocators.addressLine1.click();
		profilePageLocators.addressLine1.clear();

		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.addressLine2));
		profilePageLocators.addressLine2.click();
		profilePageLocators.addressLine2.clear();

	}

	// wait for first Name field to be displayed
	public void waitForFirstNameField() throws TimeoutException {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.visibilityOf(profilePageLocators.firstName));
		// also verify that the first name field is clickable
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.elementToBeClickable(profilePageLocators.firstName));

	}

	// click on change password link
	public void clickChangePassword() {
		profilePageLocators.changePasswordLink.click();
	}

	// click on the save profile button
	public void saveProfile() {
		profilePageLocators.saveProfile.click();
	}

	// the below method waits for the profile saved successfully message
	public void waitForProfileSavedMessage() {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.attributeToBe(profilePageLocators.profileSuccessfullySaved, "style",
						configReader.pagesWeb.getProperty("pofileSavedStyle")));
	}

	// the below method waits for the postcode not found popup to appear
	public void waitForPostCodeNotFoundPopup() {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.attributeToBe(profilePageLocators.postCodeNotFoundPopup,
				"style", configReader.pagesWeb.getProperty("postCodeNotFoundStyle")));
	}

	// click on the postcode not found yes
	public void clickYesPostCodeNotFoundPopup() {
		profilePageLocators.postCodeNotFoundYes.click();
	}

}
