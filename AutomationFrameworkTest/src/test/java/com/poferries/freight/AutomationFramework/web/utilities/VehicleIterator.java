package com.poferries.freight.AutomationFramework.web.utilities;

public class VehicleIterator {

	private static String vehicleCurrencyUnit;
	private static String vehicleLengthUnit;
	private static String vehicleLength;
	private static String vehicleWidth;
	private static String vehicleHeight;
	private static String vehicleWeight;
	private static String waybillNo;
	private static int testDataRow;
	private static String scenarioName;
	private static String country;
	private static String language;
	private static String journeyType;

	public static String getScenarioName() {
		return scenarioName;
	}

	public static void setScenarioName(String scenarioName) {
		VehicleIterator.scenarioName = scenarioName;
	}

	public static int getTestDataRow() {
		return testDataRow;
	}

	public static String getVehicleCurrencyUnit() {
		return vehicleCurrencyUnit;
	}

	public static String getVehicleHeight() {
		return vehicleHeight;
	}

	public static String getVehicleLength() {
		return vehicleLength;
	}

	public static String getVehicleLengthUnit() {
		return vehicleLengthUnit;
	}

	public static String getVehicleWeight() {
		return vehicleWeight;
	}

	public static String getVehicleWidth() {
		return vehicleWidth;
	}

	public static String getWaybillNo() {
		return waybillNo;
	}

	public static void setTestDataRow(int testDataRow) {
		VehicleIterator.testDataRow = testDataRow;
	}

	public static void setVehicleCurrencyUnit(String vehicleCurrencyUnit) {
		VehicleIterator.vehicleCurrencyUnit = vehicleCurrencyUnit;
	}

	public static void setVehicleHeight(String vehicleHeight) {
		VehicleIterator.vehicleHeight = vehicleHeight;
	}

	public static void setVehicleLength(String vehicleLength) {
		VehicleIterator.vehicleLength = vehicleLength;
	}

	public static void setVehicleLengthUnit(String vehicleLengthUnit) {
		VehicleIterator.vehicleLengthUnit = vehicleLengthUnit;
	}

	public static void setVehicleWeight(String vehicleWeight) {
		VehicleIterator.vehicleWeight = vehicleWeight;
	}

	public static void setVehicleWidth(String vehicleWidth) {
		VehicleIterator.vehicleWidth = vehicleWidth;
	}

	public static void setWaybillNo(String waybillNo) {
		VehicleIterator.waybillNo = waybillNo;
	}

	public static String getCountry() {
		return country;
	}

	public static void setCountry(String country) {
		VehicleIterator.country = country;
	}

	public static String getLanguage() {
		return language;
	}

	public static void setLanguage(String language) {
		VehicleIterator.language = language;
	}

	public static String getJourneyType() {
		return journeyType;
	}

	public static void setJourneyType(String journeyType) {
		VehicleIterator.journeyType = journeyType;
	}

}
