package com.poferries.freight.AutomationFramework.web.runner;


import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import io.cucumber.testng.CucumberOptions;
import io.cucumber.testng.FeatureWrapper;
import io.cucumber.testng.PickleWrapper;
import io.cucumber.testng.TestNGCucumberRunner;

@CucumberOptions(features = {"src/test/resources/features/web/Login.feature"},
				 glue = {"com\\poferries\\freight\\AutomationFramework\\web\\stepDefinitions","com.web.hooks"},
				 plugin = {"com.web.hooks.CustomReportListener","io.qameta.allure.cucumber7jvm.AllureCucumber7Jvm",
						   "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
				 tags = "@Regression")

//@CucumberOptions(plugin = { "json:target/report/cucumber.json", "pretty",
//"html:target/report/cucumber.html" }, features = "src/test/resources/features/web", glue = "com\\poferries\\freight\\AutomationFramework\\web\\stepDefinitions", tags = {
//"@Regression" })

//public class RunCukes extends AbstractTestNGCucumberTests {
//@Listeners({TestListner.class})
public class RunTestNGTest {

	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber", description = "Runs Cucumber Scenarios", dataProvider = "features")
	public void feature(PickleWrapper pickleEvent, FeatureWrapper cucumberFeature) throws Throwable {
		testNGCucumberRunner.runScenario(pickleEvent.getPickle());

	}

	@DataProvider(name="features")
	public Object[][] scenarios() {
		return testNGCucumberRunner.provideScenarios();
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() {
		testNGCucumberRunner.finish();
		//MailSetup mailSetup = new MailSetup();
		//mailSetup.sendTestResultMailwithAttachments();
	}
}
