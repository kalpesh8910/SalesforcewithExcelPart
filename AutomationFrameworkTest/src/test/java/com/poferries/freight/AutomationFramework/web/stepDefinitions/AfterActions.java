package com.poferries.freight.AutomationFramework.web.stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.poferries.freight.AutomationFramework.web.actions.HomePageActions;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Scenario;

public class AfterActions {
	public static List<String> screenshotPaths = new ArrayList<>();

	@AfterStep

	public static void tearDownAfterStep(Scenario scenario) {
		WebDriver driver = SeleniumDriver.getDriver();

		// Check if the WebDriver instance is not null and is an instance of
		// TakesScreenshot
		if (driver instanceof TakesScreenshot) {
			// Capture the screenshot as bytes
			byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);

			// Get the project directory
			String projectDirectory = System.getProperty("user.dir");

			// Specify the folder path for screenshots (relative to the project directory)
			String screenshotFolderPath = Paths.get(projectDirectory, "screenshotsWithSteps").toString();

			// Create the folder if it doesn't exist
			new File(screenshotFolderPath).mkdirs();

			// Generate a time stamp for the screenshot filename
			String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmssSSS").format(new Date());

			// Specify the screenshot file path with a unique filename
			String screenshotFileName = "Step_Screenshot_" + timestamp + ".png";
			String screenshotFilePath = Paths.get(screenshotFolderPath, screenshotFileName).toString();

			try {
				// Save the screenshot to the specified file path
				Files.write(Paths.get(screenshotFilePath), screenshotBytes);

				System.out.println("Screenshot captured after step in scenario: " + scenario.getName());

				// Store the screenshot file path in the shared variable
				screenshotPaths.add(screenshotFilePath);

			} catch (IOException e) {
				e.printStackTrace();
				System.err.println("Failed to save the screenshot: " + e.getMessage());
			}
		} else {
			// Log an error if the WebDriver instance is not as expected
			System.err.println("WebDriver instance is not of type TakesScreenshot or is null.");
		}
	}

	static HomePageActions homePageActions = new HomePageActions();

	@After
	public static void tearDown(Scenario scenario) {

		WebDriver driver = SeleniumDriver.getDriver();
		byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		String scenarioName = scenario.getName().replaceAll(" ", "_");
		Path path = Paths.get("ScreenShot", scenarioName + ".png");
		try {
			Files.createDirectories(path.getParent());
			Files.write(path, screenshotBytes);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// Quit and close the driver
		SeleniumDriver.tearDown();
	}
}