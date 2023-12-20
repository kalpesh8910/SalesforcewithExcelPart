package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import com.poferries.freight.AutomationFramework.web.locators.BookNowPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class BookNowPageActions {

	BookNowPageLocators bookNowPageLocators = null;

	// Constructor initialising the page factory elements
	public BookNowPageActions() {
		this.bookNowPageLocators = new BookNowPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), bookNowPageLocators);
	}

	// the below method returns the BookNow page title
	public String getBookNowPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// the below method selects the route from the route drop down
	public void selectRoute(String routeToSelect) {
		Select routeDropDown = new Select(bookNowPageLocators.routeDropDown);
		routeDropDown.selectByVisibleText(routeToSelect);

	}

	// the below method checks if vehicle Reg field is displayed
	public boolean isRouteDropDownDisplayed() {
		return bookNowPageLocators.routeDropDown.isDisplayed();
	}

	// the below method clicks the radio button concerning the journey type
	public void selectJourneyType(String journeyType) throws InterruptedException {

		// wait till the element is ready
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.elementToBeClickable(bookNowPageLocators.journeyType.get(0)));

		// based on the journey type click the one way or return journey types
		if (journeyType.equalsIgnoreCase("oneway")) {
			bookNowPageLocators.journeyType.get(0).click();
		} else if (journeyType.equalsIgnoreCase("return")) {
			bookNowPageLocators.journeyType.get(1).click();
		}

	}

	// the below method selects the number of passengers from the passengers
	// drop down
	public void selectNoOfPassengers(String noPassengers) {
		Select passDropDown = new Select(bookNowPageLocators.noPassengersDropDown);
		passDropDown.selectByVisibleText(noPassengers);
	}

	// the below method selects the currency from the drop down
	public void selectCurrencyFromDropDown(String currency) {
		Select currencyDropDown = new Select(bookNowPageLocators.currencyDropDown);
		currencyDropDown.selectByVisibleText(currency);
	}

	// the below method selects the country of origin from the drop down
	public void selectCountryOfOriginFromDropDown(String country) {
		Select countryDropDown = new Select(bookNowPageLocators.originCountryDropDown);
		countryDropDown.selectByVisibleText(country);
	}

	// the below method clicks the dangerous goods check box based on what
	// input value has been provided
	public void makeDangerousGoodsSelection(String yesNo) {

		String currentSelection = bookNowPageLocators.goodsChkTxt.getText();
		if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("YES")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("NO")) {
			bookNowPageLocators.goodsChkTxt.click();
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("NO")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("YES")) {
			bookNowPageLocators.goodsChkTxt.click();
		}

	}

	// the below method clicks the pets check box based on what input has been
	// provided
	public void makePetsSelection(String yesNo) {
		String currentSelection = bookNowPageLocators.petsChkTxt.getText();
		if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("YES")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("NO")) {
			bookNowPageLocators.petsChkTxt.click();
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("NO")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("YES")) {
			bookNowPageLocators.petsChkTxt.click();
		}

	}

	// The below method clicks the continue button on form1
	public void clickContinueRouteSelect() {
		bookNowPageLocators.routeSelectionContinue.click();
	}

	// The below method returns the dangerous goods & pets error message

	public String getDangerousGoodsPetsMessage(String errorMessage) throws InterruptedException {

		int loopCount = 0;
		String dangerGoodsPetsMessage = null;

		do {

			if (errorMessage.contains("pets")) {

				dangerGoodsPetsMessage = bookNowPageLocators.dangerousPetsMessage.getText();
				Thread.sleep(1000);
				loopCount++;
			} else if (errorMessage.contains("goods")) {
				dangerGoodsPetsMessage = bookNowPageLocators.dangerousGoodsMessage.getText();
				Thread.sleep(1000);
				loopCount++;
			}

		} while (!dangerGoodsPetsMessage.contains(" ") && loopCount < 5);

		return dangerGoodsPetsMessage;
	}

	// The below method returns the dangerous goods & pets port public String
	public String getDangerousGoodsPort() throws InterruptedException {

		int loopCount = 0;
		String port = null;

		do {

			port = bookNowPageLocators.dangerousGoodsPort.getText();
			Thread.sleep(1000);
			loopCount++;
		} while (!port.contains(" ") && loopCount < 10);

		return port;
	}

	// The below method returns the dangerous goods & pets port public String
	public String getPetsPort() throws InterruptedException {

		int loopCount = 0;
		String port = null;

		do {

			port = bookNowPageLocators.petsPort.getText();
			Thread.sleep(1000);
			loopCount++;
		} while (!port.contains(" ") && loopCount < 10);

		return port;

	}

	// The below method returns the dangerous goods & pets timing
	public String getDangerousGoodsTiming() {
		return bookNowPageLocators.dangerousGoodsTiming.getText();
	}

	// The below method returns the dangerous goods & pets timing
	public String getPetsTiming() {
		return bookNowPageLocators.petsTiming.getText();
	}

	// The below method returns the dangerous goods & pets timing
	public String getDangerousGoodsTelephoneNo() throws InterruptedException {

		int loopCount = 0;
		String telephone = null;

		do {

			telephone = bookNowPageLocators.dangerousGoodsTelephoneNo.getText();
			Thread.sleep(1000);
			loopCount++;
		} while (!telephone.contains(" ") && loopCount < 10);

		return telephone;

	}

	// The below method returns the dangerous goods & pets timing
	public String getPetsTelephoneNo() throws InterruptedException {

		int loopCount = 0;
		String telephone = null;

		do {

			telephone = bookNowPageLocators.PetsTelephoneNo.getText();
			Thread.sleep(1000);
			loopCount++;
		} while (!telephone.contains(" ") && loopCount < 10);

		return telephone;

	}

	// The below method returns the dangerous goods & pets timing
	public String getDangerousGoodsEmail() {
		return bookNowPageLocators.dangerousGoodsEmail.getText();
	}

	// The below method returns the dangerous goods & pets timing
	public String getPetsEmail() {
		return bookNowPageLocators.petsEmail.getText();
	}

	// The below method clicks back on the dangerous goods, pets error message page
	public void clickBackDangerousGoodsPets() {
		bookNowPageLocators.dangerousGoodsPetsBack.click();
	}

	// The below method waits for the dangerous goods pets email to be displayed
	public void waitForDangerousGoodsPetsEmail() {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.visibilityOf(bookNowPageLocators.dangerousGoodsEmail));
	}

}
