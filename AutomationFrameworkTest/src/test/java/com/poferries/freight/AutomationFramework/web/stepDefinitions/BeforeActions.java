package com.poferries.freight.AutomationFramework.web.stepDefinitions;

import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;
import com.poferries.freight.AutomationFramework.web.utilities.VehicleIterator;

import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class BeforeActions {

	@Before
	public void setUpDriver() {
		SeleniumDriver.setUpDriver();
	}

	// the below method sets the scenario name in the vehicle Iterator
	@Before
	public void setScenarioName(Scenario scenario) {
		VehicleIterator.setScenarioName(scenario.getName());
	}

}
