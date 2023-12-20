package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.HomePageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.ConfigReader;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class HomePageActions {

	HomePageLocators homePageLocators = null;
	ConfigReader configReader = new ConfigReader();

	// Constructor initialising the page factory elements
	public HomePageActions() {
		this.homePageLocators = new HomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), homePageLocators);
	}

	// the below method returns the title of the home Page
	public String getHomePageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}

	// method clicks the logout link
	public void clickLogOut() {
		homePageLocators.logOutLink.click();
	}

	// the below method clicks the book link
	public void clickBookLink() {
		homePageLocators.bookLink.click();
	}

	// wait for book now button to be displayed
	public void waitForBookThisRouteBtn() throws TimeoutException {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.visibilityOf(homePageLocators.bookNowBtn));
	}

	// the below method clicks the profile Link
	public void clickProfileLink() {
		homePageLocators.profileLink.click();
	}

	// the below method waits for the progress bar to dissapear
	public void waitForProgressbarToDissapear() {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.attributeToBe(homePageLocators.progressBar, "class",
				configReader.pagesWeb.getProperty("progressBarClass")));
	}

	// the below method waits for the progress bar to appear
	public void waitForProgressbarToappear() {
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.attributeToBe(homePageLocators.progressBar, "class",
				configReader.pagesWeb.getProperty("progressBarActiveClass")));
	}

	// enter the length and the currency options
	public void makeLengthAndLanguageSelections(String lengthUnit, String language) throws InterruptedException {

		// click the label and wait for lengthUnit select
		SeleniumDriver.getWaitDriver().until(ExpectedConditions.visibilityOf(homePageLocators.lengthUnitSelect));

		// make the language selection
		homePageLocators.languageSelect.click();
		Thread.sleep(1000);

		Actions act = new Actions(SeleniumDriver.getDriver());

		// based on the language in the spreadsheet click on the corresponding language
		if (language.equalsIgnoreCase("en")) {

			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ENTER).build().perform();

		} else if (language.equalsIgnoreCase("pl")) {

			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ENTER).build().perform();

		} else if (language.equalsIgnoreCase("de")) {

			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ENTER).build().perform();

		} else if (language.equalsIgnoreCase("fr")) {

			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ENTER).build().perform();

		} else if (language.equalsIgnoreCase("nl")) {

			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ENTER).build().perform();

		} else if (language.equalsIgnoreCase("es")) {

			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act.sendKeys(Keys.ENTER).build().perform();
		}

		waitForProgressbarToappear();
		waitForProgressbarToDissapear();

		// Now select the unit selection
		homePageLocators.lengthUnitSelect.click();
		Thread.sleep(1000);

		Actions act1 = new Actions(SeleniumDriver.getDriver());

		if (lengthUnit.equalsIgnoreCase("metre")) {

			act1.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act1.sendKeys(Keys.ENTER).build().perform();

		} else if (lengthUnit.equalsIgnoreCase("feet")) {

			act1.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act1.sendKeys(Keys.ARROW_DOWN).build().perform();
			Thread.sleep(100);
			act1.sendKeys(Keys.ENTER).build().perform();
		}

		waitForProgressbarToappear();
		waitForProgressbarToDissapear();

	}

}
