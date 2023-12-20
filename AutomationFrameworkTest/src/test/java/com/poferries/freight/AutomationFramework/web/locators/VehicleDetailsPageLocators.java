package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class VehicleDetailsPageLocators {

	@FindBy(how = How.ID, using = "vehicleNumber")
	public WebElement vehicleRegEdit;

	@FindBy(how = How.ID, using = "vehicleNumber-error")
	public WebElement vehicleRegError;

	@FindBy(how = How.ID, using = "vehicleLength")
	public WebElement vehicleLengthEdit;

	@FindBy(how = How.ID, using = "vehicleWidth")
	public WebElement vehicleWidthChk;

	@FindBy(how = How.ID, using = "vehicleOverWeight")
	public WebElement vehicleWeightChk;

	@FindBy(how = How.ID, using = "StepTwoContinue")
	public WebElement vehicleRegContinue;

	@FindBy(how = How.ID, using = "vehicleHeight")
	public WebElement vehicleHeight;

	@FindBy(how = How.XPATH, using = "//*[@id=\"vehicleWidthCheckBoxTxt\"]")
	public WebElement vehicleWidthTxt;

	@FindBy(how = How.ID, using = "vehicleOverWeightCheckBoxTxt")
	public WebElement vehicleWeightTxt;

	@FindBy(how = How.ID, using = "StepTwoBack")
	public WebElement vehicleRegBack;

	@FindBy(how = How.LINK_TEXT, using = "Back")
	public WebElement abnormalWidthWeightBack;

	@FindBy(how = How.ID, using = "BookNowFormTwo")
	public WebElement vehicleDetailsForm;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[2]/span")
	public WebElement vehicleWidthMessage;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[2]/span")
	public WebElement vehicleWeightMessage;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[1]/span")
	public WebElement vehicleWidthPort;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[1]/span")
	public WebElement vehicleWeightPort;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[2]/span")
	public WebElement vehicleWidthTiming;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[2]/span")
	public WebElement vehicleWeightTiming;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[1]/a")
	public WebElement vehicleWidthTelephoneNo;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[1]/a")
	public WebElement vehicleWeightTelephoneNo;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[2]/a")
	public WebElement vehicleWidthEmail;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[2]/a")
	public WebElement vehicleWeightEmail;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[2]/span")
	public WebElement vehicleLengthMessage;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[1]/span")
	public WebElement vehicleLengthPort;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[2]/span")
	public WebElement vehicleLengthTiming;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[1]/a")
	public WebElement vehicleLengthTelephoneNo;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div/div[3]/p[2]/a")
	public WebElement vehicleLengthEmail;

	@FindBy(how = How.ID, using = "vehicleLengthBackBtn")
	public WebElement vehicleLengthBack;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[2]/span")
	public WebElement retVehicleLengthMessage;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[1]/div[1]/span")
	public WebElement retVehicleLengthPort1;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[2]/div[1]/span")
	public WebElement retVehicleLengthPort2;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[1]/div[2]/span")
	public WebElement retVehicleLengthTiming1;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[2]/div[2]/span")
	public WebElement retVehicleLengthTiming2;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[1]/p[1]/a")
	public WebElement retVehicleLengthTelephoneNo1;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[2]/p[1]/a")
	public WebElement retVehicleLengthTelephoneNo2;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[1]/p[2]/a")
	public WebElement retVehicleLengthEmail1;

	@FindBy(how = How.XPATH, using = "/html/body/div[1]/div[3]/div/div/div/div/div/div[3]/div[2]/p[2]/a")
	public WebElement retVehicleLengthEmail2;

}
