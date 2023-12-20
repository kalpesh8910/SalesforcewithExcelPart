package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.poferries.freight.AutomationFramework.web.locators.VehicleDetailsPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class VehicleDetailsPageActions {

	VehicleDetailsPageLocators vehicleDetailsPageLocators = null;

	// Constructor initialising the page factory elements
	public VehicleDetailsPageActions() {
		this.vehicleDetailsPageLocators = new VehicleDetailsPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), vehicleDetailsPageLocators);
	}

	// The below method enters the vehicle Reg in the vehicle Reg edit
	public void enterVehicleReg(String vehicleReg) throws InterruptedException {

		vehicleDetailsPageLocators.vehicleRegEdit.sendKeys(vehicleReg);
		Thread.sleep(1000);
	}

	// The below method returns the vehicle Reg error message
	public String getVehicleRegErrorMessage() {
		return vehicleDetailsPageLocators.vehicleRegError.getText();
	}

	// the below method enters the vehicle length in the vehicle length edit
	public void enterVehicleLength(String vehicleLength) {
		vehicleDetailsPageLocators.vehicleLengthEdit.sendKeys(vehicleLength);

	}

	// the below method is used to select the vehicle height
	public void selectVehicleHeight(String vehicleHeight) {
		Select heightSelect = new Select(vehicleDetailsPageLocators.vehicleHeight);
		heightSelect.selectByVisibleText(vehicleHeight);

	}

	// the below method clicks the vehicle width check box based on what input
	// has been provided
	public void makeVehicleWidthSelection(String yesNo) {

		String currentSelection = vehicleDetailsPageLocators.vehicleWidthTxt.getText();
		if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("YES")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("NO")) {
			vehicleDetailsPageLocators.vehicleWidthTxt.click();
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("NO")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("YES")) {
			vehicleDetailsPageLocators.vehicleWidthTxt.click();

		}

	}

	// the below method clicks the vehicle width check box based on what input
	// has been provided
	public void makeVehicleWeightSelection(String yesNo) {

		String currentSelection = vehicleDetailsPageLocators.vehicleWeightTxt.getText();
		if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("YES")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("YES") && currentSelection.toUpperCase().equals("NO")) {
			vehicleDetailsPageLocators.vehicleWeightTxt.click();
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("NO")) {
			// then do nothing
		} else if (yesNo.toUpperCase().equals("NO") && currentSelection.toUpperCase().equals("YES")) {
			vehicleDetailsPageLocators.vehicleWeightTxt.click();
		}

	}

	// The below method clicks the continue button on form2
	public void clickContinueVehicleReg() {
		vehicleDetailsPageLocators.vehicleRegContinue.click();
	}

	// the below method checks if vehicle Reg field is displayed
	public boolean isVehicleRegDisplayed() {
		return vehicleDetailsPageLocators.vehicleRegEdit.isDisplayed();
	}

	// the below method returns the error message displayed below the vehicle Reg
	// field
	public String getVehicleRegError() {
		return vehicleDetailsPageLocators.vehicleRegError.getText();
	}

	// The below method returns the width, weight error message
	public String getAbnormalWidthMessage() {
		return vehicleDetailsPageLocators.vehicleWidthMessage.getText();
	}

	// The below method returns the width, weight error message
	public String getAbnormalWeightMessage() {
		return vehicleDetailsPageLocators.vehicleWeightMessage.getText();
	}

	// The below method returns the width,weight port
	public String getAbnormalWidthtPort() {
		return vehicleDetailsPageLocators.vehicleWidthPort.getText();
	}

	// The below method returns the width,weight port
	public String getAbnormalWeightPort() {
		return vehicleDetailsPageLocators.vehicleWeightPort.getText();
	}

	// The below method returns the width,weight timing
	public String getAbnormalWidthTiming() {
		return vehicleDetailsPageLocators.vehicleWidthTiming.getText();
	}

	// The below method returns the width,weight timing
	public String getAbnormalWeightTiming() {
		return vehicleDetailsPageLocators.vehicleWeightTiming.getText();
	}

	// The below method returns the width,weight telephone No
	public String getAbnormalWidthTelephoneNo() {
		return vehicleDetailsPageLocators.vehicleWidthTelephoneNo.getText();
	}

	// The below method returns the width,weight telephone No
	public String getAbnormalWeightTelephoneNo() {
		return vehicleDetailsPageLocators.vehicleWeightTelephoneNo.getText();
	}

	// The below method returns the dangerous goods & pets timing
	public String getAbnormalWidthtEmail() {
		return vehicleDetailsPageLocators.vehicleWidthEmail.getText();
	}

	// The below method returns the dangerous goods & pets timing
	public String getAbnormalWeightEmail() {
		return vehicleDetailsPageLocators.vehicleWeightEmail.getText();
	}

	// The below method clicks back on the dangerous goods, pets error message page
	public void clickBackAbnormalWidthWeight() {
		vehicleDetailsPageLocators.abnormalWidthWeightBack.click();
	}

	// The below method returns the length error message
	public String getVehicleLengthErrorMessage() {
		return vehicleDetailsPageLocators.vehicleLengthMessage.getText();
	}

	// The below method returns the return length error message
	public String getReturnVehicleLengthErrorMessage() {
		return vehicleDetailsPageLocators.retVehicleLengthMessage.getText();
	}

	// The below method returns the vehicle length port
	public String getVehicleLengthPort() {
		return vehicleDetailsPageLocators.vehicleLengthPort.getText();
	}

	// The below method returns the vehicle length return depart port
	public String getVehicleLengthDepartPort() {
		return vehicleDetailsPageLocators.retVehicleLengthPort1.getText();
	}

	// The below method returns the vehicle length return depart port
	public String getVehicleLengthReturnPort() {
		return vehicleDetailsPageLocators.retVehicleLengthPort2.getText();
	}

	// The below method returns the vehicle length timing
	public String getVehicleLengthTiming() {
		return vehicleDetailsPageLocators.vehicleLengthTiming.getText();
	}

	// The below method returns the vehicle length return depart timing
	public String getVehicleLengthDepartTiming() {
		return vehicleDetailsPageLocators.retVehicleLengthTiming1.getText();
	}

	// The below method returns the vehicle length timing
	public String getVehicleLengthReturnTiming() {
		return vehicleDetailsPageLocators.retVehicleLengthTiming2.getText();
	}

	// The below method returns the width,weight telephone No
	public String getVehicleLengthTelephoneNo() {
		return vehicleDetailsPageLocators.vehicleLengthTelephoneNo.getText();
	}

	// The below method returns the telephone No
	public String getVehicleLengthDepartTelephoneNo() {
		return vehicleDetailsPageLocators.retVehicleLengthTelephoneNo1.getText();
	}

	// The below method returns the telephone No
	public String getVehicleLengthReturnTelephoneNo() {
		return vehicleDetailsPageLocators.retVehicleLengthTelephoneNo2.getText();
	}

	// The below method returns the width,weight telephone No
	public String getVehicleLengthEmail() {
		return vehicleDetailsPageLocators.vehicleLengthEmail.getText();
	}

	// The below method returns the width,weight telephone No
	public String getVehicleLengthDepartEmail() {
		return vehicleDetailsPageLocators.retVehicleLengthEmail1.getText();
	}

	// The below method returns the width,weight telephone No
	public String getVehicleLengthReturnEmail() {
		return vehicleDetailsPageLocators.retVehicleLengthEmail2.getText();
	}

	// The below method clicks back on the dangerous goods, pets error message page
	public void clickVehicleLengthBack() {
		vehicleDetailsPageLocators.vehicleLengthBack.click();
	}

}
