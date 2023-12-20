package com.poferries.freight.AutomationFramework.web.utilities;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

/**
 * The SeleniumDriver class returns an instance of WebDriver and has methods for
 * teardown after the session has ended
 *
 * @author AKHIL
 *
 */

public class SeleniumDriver {

	private static SeleniumDriver seleniumDriver;
	private static WebDriver driver;
	private static WebDriverWait waitDriver;
	public final static int TIMEOUT = 300;
	public final static int PAGE_LOAD_TIMEOUT = 300;
	public final static int SHORT_TIMEOUT = 60;

	// returns an instance of the driver
	public static WebDriver getDriver() {
		return driver;
	}

	// the below method returns the webdriverwait instance to be used
	public static WebDriverWait getWaitDriver() {
		return waitDriver;
	}

	// navigate to a particular URL
	public static void openPage(String url) {
		driver.get(url);
	}

	// invokes the private constructor of the SeleniumDriver class
	public static void setUpDriver() {
		if (seleniumDriver == null) {
			seleniumDriver = new SeleniumDriver();
		}
	}

	// The tear down method is used to close an instance of the driver and quit it.
	public static void tearDown() {
		if (driver != null) {
			driver.close();
			driver.quit();
		}
		seleniumDriver = null;
	}

	// the constructor is private and we have a method to invoke
	private SeleniumDriver() {
		WebDriverManager.chromedriver();

//		System.setProperty("webdriver.chrome.driver",
//				"C:\\Users\\AKHIL\\POFerriesAutomation\\AutomationFramework\\src\\test\\resources\\tools\\web\\chromedriver.exe");

		// Set desirable options, e.g.
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--incognito");
		options.addArguments("â€“-disable-application-cache");
		options.addArguments("--disable-default-apps");
		options.addArguments("--disable-infobars");
		options.addArguments("--disable-popup-blocking");
		options.addArguments("--ignore-certificate-errors");
		options.addArguments("--no-sandbox");
		options.addArguments("--window-size=1920,1080");

		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(TIMEOUT));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(PAGE_LOAD_TIMEOUT));
		waitDriver = new WebDriverWait(driver, Duration.ofSeconds(TIMEOUT));

	}

}
