package com.poferries.freight.AutomationFramework.web.utilities;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class UtilityMethods {

	public static void moveToElement(WebElement element) {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(element);
		action.perform();

	}

	public void javaScriptExecutorClick(WebElement locator)
	{
		// Create an instance of JavascriptExecutor
		JavascriptExecutor js = (JavascriptExecutor) SeleniumDriver.getDriver();

		// Use JavaScript Executor to click the element
		js.executeScript("arguments[0].click();", locator);
	}

}
