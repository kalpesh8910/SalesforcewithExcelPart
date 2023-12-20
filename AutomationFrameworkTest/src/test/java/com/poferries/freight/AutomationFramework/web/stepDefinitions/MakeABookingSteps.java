/*
 * package com.poferries.freight.AutomationFramework.web.stepDefinitions;
 * 
 * import java.util.List;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.TimeoutException;
 * import org.openqa.selenium.WebElement; import org.testng.Assert;
 * 
 * import com.poferries.freight.AutomationFramework.web.actions.
 * AccountHoldersPageActions; import
 * com.poferries.freight.AutomationFramework.web.actions.BookNowPageActions;
 * import com.poferries.freight.AutomationFramework.web.actions.
 * BookingConfirmationPageActions; import
 * com.poferries.freight.AutomationFramework.web.actions.
 * ChangePasswordPageActions; import
 * com.poferries.freight.AutomationFramework.web.actions.ChooseAnAddressActions;
 * import
 * com.poferries.freight.AutomationFramework.web.actions.GetQuotePageActions;
 * import com.poferries.freight.AutomationFramework.web.actions.HomePageActions;
 * import
 * com.poferries.freight.AutomationFramework.web.actions.LandingPageActions;
 * import
 * com.poferries.freight.AutomationFramework.web.actions.LoginPageActions;
 * import com.poferries.freight.AutomationFramework.web.actions.
 * PaymentFailurePageActions; import
 * com.poferries.freight.AutomationFramework.web.actions.PaymentPageActions;
 * import com.poferries.freight.AutomationFramework.web.actions.
 * PaymentSuccessPageActions; import
 * com.poferries.freight.AutomationFramework.web.actions.ProfilePageActions;
 * import com.poferries.freight.AutomationFramework.web.actions.
 * VehicleDetailsPageActions; import
 * com.poferries.freight.AutomationFramework.web.utilities.ConfigReader; import
 * com.poferries.freight.AutomationFramework.web.utilities.DataUtils; import
 * com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;
 * import
 * com.poferries.freight.AutomationFramework.web.utilities.VehicleIterator;
 * 
 * import io.cucumber.java.en.And; import io.cucumber.java.en.Given; import
 * io.cucumber.java.en.Then; import io.cucumber.java.en.When;
 * 
 * public class MakeABookingSteps {
 * 
 * ConfigReader configReader = new ConfigReader(); LoginPageActions
 * loginPageActions = new LoginPageActions(); BookNowPageActions
 * bookNowPageActions = new BookNowPageActions(); HomePageActions
 * homePageActions = new HomePageActions(); PaymentPageActions
 * paymentPageActions = new PaymentPageActions(); BookingConfirmationPageActions
 * bookingConfirmationPageActions = new BookingConfirmationPageActions();
 * GetQuotePageActions getQuotePageActions = new GetQuotePageActions();
 * VehicleDetailsPageActions vehicleDetailsPageActions = new
 * VehicleDetailsPageActions(); LandingPageActions landingPageActions = new
 * LandingPageActions(); PaymentFailurePageActions paymentFailurePageActions =
 * new PaymentFailurePageActions(); ProfilePageActions profilePageActions = new
 * ProfilePageActions(); ChangePasswordPageActions changePasswordPageActions =
 * new ChangePasswordPageActions(); PaymentSuccessPageActions
 * paymentSuccessPageActions = new PaymentSuccessPageActions();
 * ChooseAnAddressActions chooseAnAddressActions = new ChooseAnAddressActions();
 * AccountHoldersPageActions accountHoldersPageActions = new
 * AccountHoldersPageActions();
 * 
 * private String dataFile = configReader.configWeb.getProperty("webDataLoc")
 * .concat(VehicleIterator.getScenarioName() + ".xls");
 * 
 * @Given("I navigate to the PO Ferries Freight Website") public void
 * i_navigate_to_the_PO_Ferries_Freight_Website() throws Throwable {
 * SeleniumDriver.openPage(configReader.configWeb.getProperty("webURL")); }
 * 
 * @And("I successfully login") public void i_successfully_login() throws
 * Throwable { loginPageActions.logIn(); // wait for the progress bar to
 * disappear Thread.sleep(5000);
 * homePageActions.waitForProgressbarToDissapear(); }
 * 
 * @And("I click the Book Link") public void i_click_the_Book_Link() throws
 * Throwable { homePageActions.clickBookLink(); }
 * 
 * @And("I verify navigation to the Book Now Page") public void
 * i_verify_navigation_to_the_Book_Now_Page() throws Throwable {
 * Assert.assertTrue(bookNowPageActions.isRouteDropDownDisplayed()); }
 * 
 * @And("I set the \"([^\"]*)\" and \"([^\"]*)\" units") public void
 * i_set_the_and_units(String language, String lengthUnit) throws Throwable { //
 * Update the vehicle iterator VehicleIterator.setLanguage(language);
 * VehicleIterator.setVehicleLengthUnit(lengthUnit);
 * 
 * // set the vehicle options
 * homePageActions.makeLengthAndLanguageSelections(lengthUnit, language);
 * Thread.sleep(1000); }
 * 
 * @And("I set the \"([^\"]*)\" and \"([^\"]*)\" units and \"([^\"]*)\"") public
 * void i_set_the_and_units_and(String language, String lengthUnit, String row)
 * throws InterruptedException {
 * 
 * String lang; String length;
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the excel sheet if (language.substring(0, 2).equalsIgnoreCase("dt")) {
 * lang = DataUtils.getCellData(dataFile, "Sheet1", Integer.parseInt(row),
 * language.substring(3)); } else { lang = language; }
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the // excel sheet if (lengthUnit.substring(0, 2).equalsIgnoreCase("dt"))
 * { length = DataUtils.getCellData(dataFile, "Sheet1", Integer.parseInt(row),
 * lengthUnit.substring(3)); } else { length = lengthUnit; }
 * 
 * // Update the vehicle iterator VehicleIterator.setLanguage(lang);
 * VehicleIterator.setVehicleLengthUnit(length);
 * VehicleIterator.setTestDataRow(Integer.parseInt(row));
 * 
 * // set the vehicle options
 * homePageActions.makeLengthAndLanguageSelections(length, lang);
 * Thread.sleep(2000); homePageActions.waitForProgressbarToDissapear();
 * 
 * }
 * 
 * @When("I select the \"([^\"]*)\" and \"([^\"]*)\"") public void
 * i_select_the_and(String route, String passengers) throws Throwable {
 * 
 * String routeInfo; String noPass;
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the // excel sheet if (route.substring(0, 2).equalsIgnoreCase("dt")) {
 * routeInfo = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), route.substring(3)); } else { routeInfo =
 * route; }
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the // excel sheet if (passengers.length() > 1 && passengers.substring(0,
 * 2).equalsIgnoreCase("dt")) { noPass = DataUtils.getCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), passengers.substring(3)); } else
 * { noPass = passengers; }
 * 
 * bookNowPageActions.selectRoute(routeInfo);
 * bookNowPageActions.selectNoOfPassengers(noPass); }
 * 
 * // The below method clicks on the journey Type radio button
 * 
 * @And("I select the journey type as \"([^\"]*)\"") public void
 * i_select_the_journey_type_as(String journeyType) throws InterruptedException
 * {
 * 
 * String journey;
 * 
 * // if the parameter received is a data table parameter then get data from
 * excel // sheet if (journeyType.length() > 2 && journeyType.substring(0,
 * 2).equalsIgnoreCase("dt")) { journey = DataUtils.getCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), journeyType.substring(3)); } else
 * { journey = journeyType; } // set the vehicle iterator and select the journey
 * Type VehicleIterator.setJourneyType(journey);
 * bookNowPageActions.selectJourneyType(journey); }
 * 
 * @When("I select the currency \"([^\"]*)\" and the country of origin \"([^\"]*)\""
 * ) public void i_select_the_currency_and_the_country_of_origin(String
 * currency, String countryOrigin) throws Throwable {
 * 
 * String curr; String originCountry;
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the excel sheet if (currency.length() > 1 && currency.substring(0,
 * 2).equalsIgnoreCase("dt")) { curr = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), currency.substring(3)); } else { curr =
 * currency; }
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the excel sheet if (countryOrigin.length() > 1 &&
 * countryOrigin.substring(0, 2).equalsIgnoreCase("dt")) { originCountry =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * countryOrigin.substring(3)); } else { originCountry = countryOrigin; }
 * 
 * // make the selections bookNowPageActions.selectCurrencyFromDropDown(curr);
 * bookNowPageActions.selectCountryOfOriginFromDropDown(originCountry);
 * 
 * }
 * 
 * @And("I make selections for \"([^\"]*)\" and \"([^\"]*)\"") public void
 * i_make_selections_for_and(String dangerousGoods, String pets) throws
 * Throwable {
 * 
 * String dangerGoods; String petsSelect;
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the // excel sheet if (dangerousGoods.length() > 1 &&
 * dangerousGoods.substring(0, 2).equalsIgnoreCase("dt")) { dangerGoods =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * dangerousGoods.substring(3)); } else { dangerGoods = dangerousGoods; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (pets.length() > 1 && pets.substring(0,
 * 2).equalsIgnoreCase("dt")) { petsSelect = DataUtils.getCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), pets.substring(3)); } else {
 * petsSelect = pets; }
 * 
 * bookNowPageActions.makeDangerousGoodsSelection(dangerGoods);
 * bookNowPageActions.makePetsSelection(petsSelect); }
 * 
 * @And("I click continue on the Select Route Form") public void
 * i_click_continue_on_the_Select_Route_Form() throws Throwable {
 * bookNowPageActions.clickContinueRouteSelect(); }
 * 
 * @And("I verify navigation to the Vehicle Reg Form") public void
 * i_verify_navigation_to_the_Vehicle_Reg_Form() throws Throwable {
 * Assert.assertTrue(vehicleDetailsPageActions.isVehicleRegDisplayed()); }
 * 
 * @And("I enter the Vehicle Reg \"([^\"]*)\" and \"([^\"]*)\"") public void
 * i_enter_the_Vehicle_Reg_and(String vehicleReg, String length) throws
 * Throwable {
 * 
 * String reg; String len;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (vehicleReg.length() > 1 && vehicleReg.substring(0,
 * 2).equalsIgnoreCase("dt")) { reg = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), vehicleReg.substring(3)); } else { reg =
 * vehicleReg; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (length.length() > 1 && length.substring(0,
 * 2).equalsIgnoreCase("dt")) { len = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), length.substring(3)); } else { len =
 * length; }
 * 
 * vehicleDetailsPageActions.enterVehicleReg(reg);
 * vehicleDetailsPageActions.enterVehicleLength(len);
 * 
 * // update the vehicle iterator with the vehicle length
 * VehicleIterator.setVehicleLength(len); }
 * 
 * @And("I slect the vehicle \"([^\"]*)\"") public void
 * i_slect_the_vehicle(String height) throws Throwable {
 * 
 * String ht;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (height.length() > 1 && height.substring(0,
 * 2).equalsIgnoreCase("dt")) { ht = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), height.substring(3)); } else { ht = height;
 * }
 * 
 * VehicleIterator.setVehicleHeight(ht); if (ht.toUpperCase().equals("NA")) { //
 * No need to enter the height } else {
 * vehicleDetailsPageActions.selectVehicleHeight(ht); } }
 * 
 * @And("I make selections for vehicle \"([^\"]*)\" and \"([^\"]*)\"") public
 * void i_make_selections_for_vehicle_and(String width, String weight) throws
 * Throwable {
 * 
 * String wdth; String wt;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (width.substring(0, 2).equalsIgnoreCase("dt")) { wdth =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * width.substring(3)); } else { wdth = width; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (weight.substring(0, 2).equalsIgnoreCase("dt")) { wt =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * weight.substring(3)); } else { wt = weight; }
 * 
 * // make selections and update the vehicle iterator
 * vehicleDetailsPageActions.makeVehicleWidthSelection(wdth);
 * vehicleDetailsPageActions.makeVehicleWeightSelection(wt);
 * 
 * // update the iterator class VehicleIterator.setVehicleWidth(wdth);
 * VehicleIterator.setVehicleWeight(wt);
 * 
 * }
 * 
 * @And("I click continue on the Vehicle Registration Form") public void
 * i_click_continue_on_the_Vehicle_Registration_Form() throws Throwable {
 * vehicleDetailsPageActions.clickContinueVehicleReg(); }
 * 
 * @And("I verify navigation to the Review Booking Details Form") public void
 * i_verify_navigation_to_the_Review_Booking_Details_Form() throws
 * TimeoutException { getQuotePageActions.waitForTermsConditionsChk(); }
 * 
 * @And("I verify the \"([^\"]*)\" and \"([^\"]*)\" ports") public void
 * i_verify_the_and_ports(String departure, String arrival) throws Throwable {
 * 
 * String depart; String arrive;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (departure.substring(0, 2).equalsIgnoreCase("dt")) {
 * depart = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), departure.substring(3)); } else { depart =
 * departure; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (arrival.substring(0, 2).equalsIgnoreCase("dt")) {
 * arrive = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), arrival.substring(3)); } else { arrive =
 * arrival; }
 * 
 * Assert.assertEquals(getQuotePageActions.returnDeparturePort(), depart);
 * Assert.assertEquals(getQuotePageActions.returnArrivalPort(), arrive); }
 * 
 * @And("I verify the onward route \"([^\"]*)\" and the return route \"([^\"]*)\""
 * ) public void i_verify_the_onward_route_and_the_return_route(String
 * onwardRoute, String returnRoute) {
 * 
 * // verify the onward and return routes if the journey type is return if
 * (VehicleIterator.getJourneyType().equalsIgnoreCase("return")) { String
 * onwardRt; String returnRt;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (onwardRoute.substring(0, 2).equalsIgnoreCase("dt")) {
 * onwardRt = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), onwardRoute.substring(3)); } else {
 * onwardRt = onwardRoute; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (returnRoute.substring(0, 2).equalsIgnoreCase("dt")) {
 * returnRt = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), returnRoute.substring(3)); } else {
 * returnRt = returnRoute; }
 * 
 * Assert.assertEquals(getQuotePageActions.getOnwardJourney(), onwardRt);
 * Assert.assertEquals(getQuotePageActions.getReturnJourney(), returnRt);
 * 
 * }
 * 
 * }
 * 
 * @And("I verify the vehicle \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_the_vehicle_and(String registrationNo, String length,
 * String height, String width, String weight) throws Throwable {
 * 
 * String regNo = null; String expectedVehicleWidth = null; String
 * expectedVehicleWeight = null; String expectedVehicleHeight = null; String
 * expectedVehicleLength = null;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (registrationNo.length() > 1 &&
 * registrationNo.substring(0, 2).equalsIgnoreCase("dt")) { regNo =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * registrationNo.substring(3)); } else { regNo = registrationNo; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (length.length() > 1 && length.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleLength =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * length.substring(3)); } else { expectedVehicleLength = length; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (height.length() > 1 && height.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleHeight =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * height.substring(3)); } else { expectedVehicleHeight = height; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (weight.length() > 1 && weight.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleWeight =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * weight.substring(3)); } else { expectedVehicleWeight = weight; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (width.length() > 1 && width.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleWidth =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * width.substring(3)); } else { expectedVehicleWidth = width; }
 * 
 * // Based on the vehicle length currency unit make the validation accordingly
 * if (VehicleIterator.getVehicleLengthUnit().equalsIgnoreCase("metre")) { //
 * Add meter to the vehicle length string expectedVehicleLength =
 * expectedVehicleLength + " " +
 * VehicleIterator.getVehicleLengthUnit().toLowerCase();
 * 
 * // width and weight selections are YES
 * 
 * if (expectedVehicleWidth.equalsIgnoreCase("YES")) { expectedVehicleWidth =
 * configReader.pagesWeb.getProperty("standardVehicleWidth"); }
 * 
 * if (expectedVehicleWeight.equalsIgnoreCase("YES")) { expectedVehicleWeight =
 * configReader.pagesWeb.getProperty("standardVehicleWeight"); }
 * 
 * Assert.assertEquals(getQuotePageActions.returnVehicleReg(), regNo);
 * Assert.assertEquals(getQuotePageActions.returnVehicleLength(),
 * expectedVehicleLength);
 * Assert.assertEquals(getQuotePageActions.returnVehicleWidth(),
 * expectedVehicleWidth);
 * Assert.assertEquals(getQuotePageActions.returnVehicleWeight(),
 * expectedVehicleWeight);
 * 
 * // vehicle height assertion if (expectedVehicleLength.equalsIgnoreCase("NA"))
 * { // No need of any assertion as no data is displayed } else if
 * (expectedVehicleLength.equalsIgnoreCase("Less than 2.5 metre")) {
 * expectedVehicleHeight =
 * configReader.pagesWeb.getProperty("normalVanHeightMetre");
 * Assert.assertEquals(getQuotePageActions.returnVehicleHeight(),
 * expectedVehicleHeight); } else if
 * (expectedVehicleLength.equalsIgnoreCase("2.5 to 4.5 metre")) {
 * expectedVehicleHeight =
 * configReader.pagesWeb.getProperty("hiVanHeightMetre");
 * Assert.assertEquals(getQuotePageActions.returnVehicleHeight(),
 * expectedVehicleHeight); } } else if
 * (VehicleIterator.getVehicleLengthUnit().equalsIgnoreCase("feet")) { // Add
 * meter to the vehicle length string expectedVehicleLength =
 * expectedVehicleLength + " " +
 * VehicleIterator.getVehicleLengthUnit().toLowerCase();
 * 
 * // width and weight selections are YES
 * 
 * if (expectedVehicleWidth.equalsIgnoreCase("YES")) { expectedVehicleWidth =
 * configReader.pagesWeb.getProperty("standardVehicleWidthFeet"); }
 * 
 * if (expectedVehicleWeight.equalsIgnoreCase("YES")) { expectedVehicleWeight =
 * configReader.pagesWeb.getProperty("standardVehicleWeight"); }
 * 
 * Assert.assertEquals(getQuotePageActions.returnVehicleReg(), regNo);
 * Assert.assertEquals(getQuotePageActions.returnVehicleLength(),
 * expectedVehicleLength);
 * Assert.assertEquals(getQuotePageActions.returnVehicleWidth(),
 * expectedVehicleWidth);
 * Assert.assertEquals(getQuotePageActions.returnVehicleWeight(),
 * expectedVehicleWeight);
 * 
 * // vehicle height assertion if (expectedVehicleLength.equalsIgnoreCase("NA"))
 * { // No need of any assertion as no data is displayed } else if
 * (expectedVehicleLength.equalsIgnoreCase("Less than 8.2 feet")) {
 * expectedVehicleHeight =
 * configReader.pagesWeb.getProperty("normalVanHeightFeet");
 * Assert.assertEquals(getQuotePageActions.returnVehicleHeight(),
 * expectedVehicleHeight); } else if
 * (expectedVehicleLength.equalsIgnoreCase("8.2 to 14.7 feet")) {
 * expectedVehicleHeight = configReader.pagesWeb.getProperty("hiVanHeightFeet");
 * Assert.assertEquals(getQuotePageActions.returnVehicleHeight(),
 * expectedVehicleHeight); }
 * 
 * }
 * 
 * }
 * 
 * @And("I verify the number of \"([^\"]*)\"") public void
 * i_verify_the_number_of(String passengers) throws Throwable {
 * 
 * String noPass;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (passengers.length() > 2) { if (passengers.substring(0,
 * 2).equalsIgnoreCase("dt")) { noPass = DataUtils.getCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), passengers.substring(3)); } else
 * { noPass = passengers; } } else { noPass = passengers; }
 * Assert.assertEquals(getQuotePageActions.returnPass(), noPass); }
 * 
 * @And("I verify the \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"") public void
 * i_verify_the_and(String netPrice, String vatAmount, String totalPrice) throws
 * Throwable {
 * 
 * String net; String vat; String total;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (netPrice.substring(0, 2).equalsIgnoreCase("dt")) { net
 * = DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * netPrice.substring(3)); } else { net = netPrice; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (totalPrice.substring(0, 2).equalsIgnoreCase("dt")) {
 * total = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), totalPrice.substring(3)); } else { total =
 * totalPrice; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (vatAmount.substring(0, 2).equalsIgnoreCase("dt")) {
 * vat = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), vatAmount.substring(3)); } else { vat =
 * vatAmount; }
 * 
 * Assert.assertEquals(getQuotePageActions.returnNetPrice(), net);
 * Assert.assertEquals(getQuotePageActions.returnVATAmount(), vat);
 * Assert.assertEquals(getQuotePageActions.returnTotalPrice(), total); }
 * 
 * @And("I verify the return  \"([^\"]*)\" and \"([^\"]*)\" if required") public
 * void i_verify_the_return_and_if_required(String returnNetPrice, String
 * returnVATAmount) {
 * 
 * String returnNet; String returnVAT;
 * 
 * if (VehicleIterator.getJourneyType().equalsIgnoreCase("return")) {
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (returnNetPrice.substring(0, 2).equalsIgnoreCase("dt"))
 * { returnNet = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), returnNetPrice.substring(3)); } else {
 * returnNet = returnNetPrice; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (returnVATAmount.substring(0,
 * 2).equalsIgnoreCase("dt")) { returnVAT = DataUtils.getCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), returnVATAmount.substring(3)); }
 * else { returnVAT = returnVATAmount; }
 * 
 * Assert.assertEquals(getQuotePageActions.getReturnNetPrice(), returnNet);
 * Assert.assertEquals(getQuotePageActions.getReturnVATAmount(), returnVAT);
 * 
 * }
 * 
 * }
 * 
 * @And("I click the \"([^\"]*)\" checkbox") public void
 * i_click_the_checkbox(String termsConditions) throws Throwable {
 * 
 * String terms;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (termsConditions.substring(0,
 * 2).equalsIgnoreCase("dt")) { terms = DataUtils.getCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), termsConditions.substring(3)); }
 * else { terms = termsConditions; }
 * 
 * if (terms.equalsIgnoreCase("yes")) {
 * getQuotePageActions.clickAgreeTermsCheckBox(); } }
 * 
 * @And("I make a selection for \"([^\"]*)\"") public void
 * i_make_a_selection_for(String billingAddress) throws Throwable {
 * 
 * String billAddr;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (billingAddress.substring(0, 2).equalsIgnoreCase("dt"))
 * { billAddr = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), billingAddress.substring(3)); } else {
 * billAddr = billingAddress; }
 * 
 * if (billAddr.toUpperCase().equals("YES")) {
 * getQuotePageActions.clickBillingAddressCheckBox(); } }
 * 
 * @And("I click the Proceed To Payment button") public void
 * i_click_the_Proceed_To_Payment_button() throws Throwable {
 * getQuotePageActions.clickProceedToPayBtn(); }
 * 
 * @And("I verify navigation to the Payment Page") public void
 * i_verify_navigation_to_the_Payment_Page() throws Throwable { // wait for the
 * Card Number edit box to be displayed
 * paymentPageActions.waitForCardNumberEdit(); // verify the page title
 * Assert.assertEquals(paymentPageActions.getPaymentPageTitle(),
 * configReader.pagesWeb.getProperty("paymentPage")); }
 * 
 * @And("I verify the \"([^\"]*)\"") public void i_verify_the(String
 * billingName) throws Throwable {
 * 
 * String billName;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (billingName.substring(0, 2).equalsIgnoreCase("dt")) {
 * billName = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), billingName.substring(3)); } else {
 * billName = billingName; }
 * Assert.assertEquals(paymentPageActions.getBillingName(), billName); }
 * 
 * @And("I verify the \"([^\"]*)\" and \"([^\"]*)\"") public void
 * i_verify_the_and(String billingName, String paymentPrice) throws Throwable {
 * 
 * String billName; String payPrice;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (billingName.substring(0, 2).equalsIgnoreCase("dt")) {
 * billName = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), billingName.substring(3)); } else {
 * billName = billingName; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (paymentPrice.substring(0, 2).equalsIgnoreCase("dt")) {
 * payPrice = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), paymentPrice.substring(3)); } else {
 * payPrice = paymentPrice; }
 * 
 * Assert.assertEquals(paymentPageActions.getBillingName(), billName);
 * Assert.assertEquals(paymentPageActions.getPaymentAmount(), payPrice); }
 * 
 * @And("I verify the \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_the_and(String addressLine1, String addressLine2,
 * String addressTown, String country, String postcode) throws Throwable {
 * 
 * String line1; String line2; String town; String cntry; String pCode;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (addressLine1.substring(0, 2).equalsIgnoreCase("dt")) {
 * line1 = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), addressLine1.substring(3)); } else { line1
 * = addressLine1; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (addressLine2.substring(0, 2).equalsIgnoreCase("dt")) {
 * line2 = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), addressLine2.substring(3)); } else { line2
 * = addressLine2; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (addressTown.substring(0, 2).equalsIgnoreCase("dt")) {
 * town = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), addressTown.substring(3)); } else { town =
 * addressTown; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (country.substring(0, 2).equalsIgnoreCase("dt")) {
 * cntry = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), country.substring(3)); } else { cntry =
 * country; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (postcode.substring(0, 2).equalsIgnoreCase("dt")) {
 * pCode = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), postcode.substring(3)); } else { pCode =
 * postcode; }
 * Assert.assertEquals(paymentPageActions.getBillingAddressFirstLine(), line1);
 * Assert.assertEquals(paymentPageActions.getBillingAddressSecondLine(), line2);
 * Assert.assertEquals(paymentPageActions.getBillingCity(), town);
 * Assert.assertEquals(paymentPageActions.getBillingCountry(), cntry);
 * Assert.assertEquals(paymentPageActions.getBillingPostCode(), pCode); }
 * 
 * @And("I enter the \"([^\"]*)\",\"([^\"]*)\" and the \"([^\"]*)\"") public
 * void i_enter_the_and_the(String cardNumber, String cardExpiryDate, String
 * securityCode) throws Throwable {
 * 
 * String cardNo; String expiryDate; String secCode;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (cardNumber.substring(0, 2).equalsIgnoreCase("dt")) {
 * cardNo = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), cardNumber.substring(3)); } else { cardNo =
 * cardNumber; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (cardExpiryDate.substring(0, 2).equalsIgnoreCase("dt"))
 * { expiryDate = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), cardExpiryDate.substring(3)); } else {
 * expiryDate = cardExpiryDate; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (securityCode.substring(0, 2).equalsIgnoreCase("dt")) {
 * secCode = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), securityCode.substring(3)); } else {
 * secCode = securityCode; }
 * 
 * paymentPageActions.enterBillingCardNo(cardNo);
 * paymentPageActions.selectMonth(expiryDate.substring(0, 2));
 * paymentPageActions.selectYear(expiryDate.substring(3));
 * paymentPageActions.enterCardSecurityCode(secCode);
 * 
 * }
 * 
 * @And("I click the PayNow button") public void i_click_the_PayNow_button()
 * throws Throwable { paymentPageActions.proceedWithPayment(); }
 * 
 * @Then("I verify navigation to the Booking Confirmation Page") public void
 * i_verify_navigation_to_the_Booking_Confirmation_Page() throws Throwable { //
 * wait for the Amend Booking link to be displayed
 * bookingConfirmationPageActions.waitForWayBillNo(); }
 * 
 * @And("I verify confirmed \"([^\"]*)\"") public void i_verify_confirmed(String
 * route) throws Throwable {
 * 
 * String routeDet;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (route.substring(0, 2).equalsIgnoreCase("dt")) {
 * routeDet = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), route.substring(3)); } else { routeDet =
 * route; }
 * 
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedRoute(),
 * routeDet); }
 * 
 * @Then("I verify the confirmed vehicle \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_the_confirmed_vehicle_and(String registrationNo,
 * String length, String height, String width, String weight) throws Throwable {
 * 
 * // define the expected vehicle weight and the vehicle width String regNo =
 * null; String expectedVehicleWidth = null; String expectedVehicleWeight =
 * null; String expectedVehicleHeight = null; String expectedVehicleLength =
 * null;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (registrationNo.substring(0, 2).equalsIgnoreCase("dt"))
 * { regNo = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), registrationNo.substring(3)); } else {
 * regNo = registrationNo; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (length.length() > 1 && length.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleLength =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * length.substring(3)); } else { expectedVehicleLength = length; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (height.length() > 1 && height.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleHeight =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * height.substring(3)); } else { expectedVehicleHeight = height; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (weight.length() > 1 && weight.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleWeight =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * weight.substring(3)); } else { expectedVehicleWeight = weight; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (width.length() > 1 && width.substring(0,
 * 2).equalsIgnoreCase("dt")) { expectedVehicleWidth =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * width.substring(3)); } else { expectedVehicleWidth = width; }
 * 
 * if (VehicleIterator.getVehicleLengthUnit().equalsIgnoreCase("metre")) { //
 * Add meter to the vehicle length string if (expectedVehicleLength.length() >
 * 3) { expectedVehicleLength = expectedVehicleLength + " " +
 * VehicleIterator.getVehicleLengthUnit().toLowerCase(); } else {
 * expectedVehicleLength = expectedVehicleLength.concat(".0") + " " +
 * VehicleIterator.getVehicleLengthUnit().toLowerCase(); }
 * 
 * // get the default values that are displayed from the config if the vehicle
 * // width and weight selections are YES
 * 
 * if (expectedVehicleWidth.equalsIgnoreCase("YES")) { expectedVehicleWidth =
 * configReader.pagesWeb.getProperty("standardVehicleWidth"); }
 * 
 * if (expectedVehicleWeight.equalsIgnoreCase("YES")) { expectedVehicleWeight =
 * configReader.pagesWeb.getProperty("confirmedStandardVehicleWeight"); }
 * 
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleReg(),
 * regNo);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleLength(
 * ), expectedVehicleLength);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleWidth()
 * , expectedVehicleWidth);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleWeight(
 * ), expectedVehicleWeight);
 * 
 * // vehicle height assertion if (expectedVehicleLength.equalsIgnoreCase("NA"))
 * { // No need of any assertion as no data is displayed } else if
 * (expectedVehicleLength.equalsIgnoreCase("Less than 2.5 metre")) {
 * expectedVehicleHeight =
 * configReader.pagesWeb.getProperty("normalVanHeightMetre");
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleHeight(
 * ), expectedVehicleHeight); } else if
 * (expectedVehicleLength.equalsIgnoreCase("2.5 to 4.5 metre")) {
 * expectedVehicleHeight =
 * configReader.pagesWeb.getProperty("hiVanHeightMetre");
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleHeight(
 * ), expectedVehicleHeight); } } else if
 * (VehicleIterator.getVehicleLengthUnit().equalsIgnoreCase("feet")) {
 * 
 * // Add meter to the vehicle length string if
 * (bookingConfirmationPageActions.getConfirmedVehicleLength().length() == 10) {
 * expectedVehicleLength = expectedVehicleLength + " " +
 * VehicleIterator.getVehicleLengthUnit().toLowerCase(); } else if
 * (bookingConfirmationPageActions.getConfirmedVehicleLength().length() == 7) {
 * expectedVehicleLength = expectedVehicleLength.substring(0, 2) + " " +
 * VehicleIterator.getVehicleLengthUnit().toLowerCase(); }
 * 
 * // get the default values that are displayed from the config if the vehicle
 * // width and weight selections are YES
 * 
 * if (expectedVehicleWidth.equalsIgnoreCase("YES")) { expectedVehicleWidth =
 * configReader.pagesWeb.getProperty("confirmedVehicleWidthFeet"); }
 * 
 * if (expectedVehicleWeight.equalsIgnoreCase("YES")) { expectedVehicleWeight =
 * configReader.pagesWeb.getProperty("confirmedStandardVehicleWeight"); }
 * 
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleReg(),
 * regNo);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleLength(
 * ), expectedVehicleLength);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleWidth()
 * , expectedVehicleWidth);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleWeight(
 * ), expectedVehicleWeight);
 * 
 * // vehicle height assertion if (expectedVehicleLength.equalsIgnoreCase("NA"))
 * { // No need of any assertion as no data is displayed } else if
 * (expectedVehicleLength.equalsIgnoreCase("Less than 8.2 feet")) {
 * expectedVehicleHeight =
 * configReader.pagesWeb.getProperty("normalVanHeightFeet");
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleHeight(
 * ), expectedVehicleHeight); } else if
 * (expectedVehicleLength.equalsIgnoreCase("8.2 to 14.7 feet")) {
 * expectedVehicleHeight = configReader.pagesWeb.getProperty("hiVanHeightFeet");
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVehicleHeight(
 * ), expectedVehicleHeight); }
 * 
 * } }
 * 
 * @And("I verify the confirmed number of \"([^\"]*)\"") public void
 * i_verify_the_confirmed_number_of(String passengers) throws Throwable {
 * 
 * String noPass;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (passengers.length() > 1 && passengers.substring(0,
 * 2).equalsIgnoreCase("dt")) { noPass = DataUtils.getCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), passengers.substring(3)); } else
 * { noPass = passengers; }
 * 
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedPass(),
 * noPass); }
 * 
 * @And("I verify the confirmed Payment Amounts \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_the_confirmed_Payment_Amounts_and(String netPrice,
 * String vatAmount, String totalPrice) throws Throwable {
 * 
 * String net; String vat; String total;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (vatAmount.substring(0, 2).equalsIgnoreCase("dt")) {
 * vat = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), vatAmount.substring(3)); } else { vat =
 * vatAmount; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (netPrice.substring(0, 2).equalsIgnoreCase("dt")) { net
 * = DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * netPrice.substring(3)); } else { net = netPrice; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (totalPrice.substring(0, 2).equalsIgnoreCase("dt")) {
 * total = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), totalPrice.substring(3)); } else { total =
 * totalPrice; } // do the assertions
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedNetPrice(),
 * net);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVATAmount(),
 * vat);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedTotalPrice(),
 * total); }
 * 
 * @And("I verify the confirmed onward route \"([^\"]*)\" and the confirmed return route \"([^\"]*)\" if required"
 * ) public void
 * i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required
 * (String confirmedOnwardRt, String confirmedReturnRt) {
 * 
 * // verify the onward and return routes if the journey type is return if
 * (VehicleIterator.getJourneyType().equalsIgnoreCase("return")) { String
 * confirmOnwardRt; String confirmReturnRt;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (confirmedOnwardRt.substring(0,
 * 2).equalsIgnoreCase("dt")) { confirmOnwardRt =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * confirmedOnwardRt.substring(3)); } else { confirmOnwardRt =
 * confirmedOnwardRt; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (confirmedReturnRt.substring(0,
 * 2).equalsIgnoreCase("dt")) { confirmReturnRt =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * confirmedReturnRt.substring(3)); } else { confirmReturnRt =
 * confirmedReturnRt; }
 * 
 * Assert.assertEquals(bookingConfirmationPageActions.getOnwardJourney(),
 * confirmOnwardRt);
 * Assert.assertEquals(bookingConfirmationPageActions.getReturnJourney(),
 * confirmReturnRt);
 * 
 * }
 * 
 * }
 * 
 * @And("I verify the confirmed return  \"([^\"]*)\" and \"([^\"]*)\" if required"
 * ) public void i_verify_the_confirmed_return_and_if_required(String
 * confirmedReturnNet, String confirmedReturnVAT) { String confirmReturnNet;
 * String confirmReturnVAT;
 * 
 * if (VehicleIterator.getJourneyType().equalsIgnoreCase("return")) {
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (confirmedReturnNet.substring(0,
 * 2).equalsIgnoreCase("dt")) { confirmReturnNet =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * confirmedReturnNet.substring(3)); } else { confirmReturnNet =
 * confirmedReturnNet; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (confirmedReturnVAT.substring(0,
 * 2).equalsIgnoreCase("dt")) { confirmReturnVAT =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * confirmedReturnVAT.substring(3)); } else { confirmReturnVAT =
 * confirmedReturnVAT; }
 * 
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedNetPrice(),
 * confirmReturnNet);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedVATAmount(),
 * confirmReturnVAT);
 * 
 * } }
 * 
 * @Then("I verify the confirmed Payment Details \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_the_confirmed_Payment_Details_and(String paymentDate,
 * String paymentType, String paymentStatus) throws Throwable {
 * 
 * String payDate; String payType; String payStatus;
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (paymentDate.substring(0, 2).equalsIgnoreCase("dt")) {
 * payDate = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), paymentDate.substring(3)); } else { payDate
 * = paymentDate; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (paymentType.substring(0, 2).equalsIgnoreCase("dt")) {
 * payType = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), paymentType.substring(3)); } else { payType
 * = paymentType; }
 * 
 * // If the parameter received is a datatable parameter then get the data from
 * the // excel sheet if (paymentStatus.substring(0, 2).equalsIgnoreCase("dt"))
 * { payStatus = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), paymentStatus.substring(3)); } else {
 * payStatus = paymentStatus; } // Do the assertions
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedPayDate(),
 * payDate);
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedPayType(),
 * payType); bookingConfirmationPageActions.moveToPayStatus();
 * Assert.assertEquals(bookingConfirmationPageActions.getConfirmedPayStatus(),
 * payStatus); }
 * 
 * @And("I caputure the waybillNumber") public void
 * i_caputure_the_waybillNumber() throws Throwable {
 * 
 * String returnWaybill = null; String waybill =
 * bookingConfirmationPageActions.getWaybillNo(); // update the vehicleIterator
 * with the Waybill No VehicleIterator.setWaybillNo(waybill); // write the
 * waybill no to Excel DataUtils.setCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), "wayBillNo", waybill);
 * 
 * // if the journey is a return journey then capture the return waybill No and
 * if (VehicleIterator.getJourneyType().equalsIgnoreCase("return")) {
 * returnWaybill = bookingConfirmationPageActions.getReturnWaybillNo(); // Write
 * the return waybill number to the excel sheet DataUtils.setCellData(dataFile,
 * "Sheet1", VehicleIterator.getTestDataRow(), "returnWayBillNo",
 * returnWaybill);
 * 
 * }
 * 
 * }
 * 
 * @And("I click the Cancel button") public void i_click_the_Cancel_button()
 * throws Throwable { paymentPageActions.cancelPayment(); }
 * 
 * @Then("I should be navigated to the Payment Failure screen") public void
 * i_should_be_navigated_to_the_Payment_Failure_screen() throws Throwable {
 * Assert.assertEquals(bookingConfirmationPageActions.
 * getPaymentCancellationError(),
 * configReader.pagesWeb.getProperty("paymentCancelledError")); }
 * 
 * @And("I click the Go To Home button") public void
 * i_click_the_Go_To_Home_button() throws Throwable {
 * bookingConfirmationPageActions.clickGoToHomeLink(); }
 * 
 * @And("I verfy navigation to the Home Page") public void
 * i_verfy_navigation_to_the_Home_Page() throws Throwable {
 * 
 * // wait for the book Now link to appear
 * homePageActions.waitForBookThisRouteBtn(); // make sure that the page titles
 * match Assert.assertEquals(homePageActions.getHomePageTitle(),
 * configReader.pagesWeb.getProperty("homePage")); }
 * 
 * @And("I enter Vehicle \"([^\"]*)\" and \"([^\"]*)\"") public void
 * i_enter_Vehicle_and(String registrationNo, String length) throws Throwable {
 * vehicleDetailsPageActions.enterVehicleReg(registrationNo);
 * vehicleDetailsPageActions.enterVehicleLength(length); }
 * 
 * @Then("I verify vehicleRegError message") public void
 * i_verify_vehicleRegError_message() throws Throwable {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleRegError(),
 * configReader.pagesWeb.getProperty("vehicleRegError")); }
 * 
 * @And("I verify that I am not navigated from the page.") public void
 * i_verify_that_I_am_not_navigated_from_the_page() throws Throwable {
 * Assert.assertTrue(vehicleDetailsPageActions.isVehicleRegDisplayed()); }
 * 
 * 
 * @And("I click enter") public void i_click_enter() throws Throwable { Actions
 * actions = new Actions(SeleniumDriver.getDriver());
 * actions.sendKeys(Keys.ENTER); }
 * 
 * 
 * @And("I Logout of Application") public void i_logout_of_application() throws
 * Throwable { bookingConfirmationPageActions.logoutFromApplication();
 * 
 * }
 * 
 * @Then("I verify the dangerousGoods or pets \"([^\"]*)\" displayed") public
 * void i_verify_the_dangerousGoods_or_pets_displayed(String errorMessage)
 * throws Throwable {
 * Assert.assertEquals(bookNowPageActions.getDangerousGoodsPetsMessage(
 * errorMessage), errorMessage); }
 * 
 * @And("I verify the departure \"([^\"]*)\" and \"([^\"]*)\" based on \"([^\"]*)\" and \"([^\"]*)\" selection"
 * ) public void i_verify_the_departure_and_based_on_and_selection(String port,
 * String contact, String dangerousGoods, String pets) throws Throwable {
 * 
 * // verify the port of origin if (dangerousGoods.equalsIgnoreCase("YES") &&
 * pets.equalsIgnoreCase("YES")) { Thread.sleep(2000);
 * Assert.assertEquals(bookNowPageActions.getPetsPort(), port); } else if
 * (dangerousGoods.equalsIgnoreCase("NO") && pets.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(bookNowPageActions.getPetsPort(), port);
 * Thread.sleep(2000); } else if (dangerousGoods.equalsIgnoreCase("YES") &&
 * pets.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(bookNowPageActions.getDangerousGoodsPort(), port);
 * Thread.sleep(2000); }
 * 
 * // verify the contact details if (dangerousGoods.equalsIgnoreCase("YES") &&
 * pets.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(bookNowPageActions.getPetsTiming(), contact); } else if
 * (dangerousGoods.equalsIgnoreCase("NO") && pets.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(bookNowPageActions.getPetsTiming(), contact); } else if
 * (dangerousGoods.equalsIgnoreCase("YES") && pets.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(bookNowPageActions.getDangerousGoodsTiming(), contact); }
 * 
 * }
 * 
 * @And("I verify the contact centre \"([^\"]*)\" and \"([^\"]*)\" based on \"([^\"]*)\" and \"([^\"]*)\" selection"
 * ) public void i_verify_the_contact_centre_and_based_on_and_selection(String
 * telephone, String email, String dangerousGoods, String pets) throws Throwable
 * {
 * 
 * // verify the telephone No if (dangerousGoods.equalsIgnoreCase("YES") &&
 * pets.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(bookNowPageActions.getPetsTelephoneNo(), telephone); }
 * else if (dangerousGoods.equalsIgnoreCase("NO") &&
 * pets.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(bookNowPageActions.getPetsTelephoneNo(), telephone); }
 * else if (dangerousGoods.equalsIgnoreCase("YES") &&
 * pets.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(bookNowPageActions.getDangerousGoodsTelephoneNo(),
 * telephone); }
 * 
 * // verify the email address if (dangerousGoods.equalsIgnoreCase("YES") &&
 * pets.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(bookNowPageActions.getPetsEmail(), email); } else if
 * (dangerousGoods.equalsIgnoreCase("NO") && pets.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(bookNowPageActions.getPetsEmail(), email); } else if
 * (dangerousGoods.equalsIgnoreCase("YES") && pets.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(bookNowPageActions.getDangerousGoodsEmail(), email); }
 * 
 * }
 * 
 * @Then("I verify the abnormal width or weight \"([^\"]*)\" displayed based on \"([^\"]*)\" and \"([^\"]*)\" selections"
 * ) public void
 * i_verify_the_abnormal_width_or_weight_displayed_based_on_and_selections(
 * String message, String width, String weight) throws Throwable {
 * 
 * Thread.sleep(5000); // verify the displayed message if
 * (width.equalsIgnoreCase("NO") && weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightMessage(),
 * message); } else if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWidthMessage(),
 * message); } else if (width.equalsIgnoreCase("YES") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightMessage(),
 * message); } }
 * 
 * @And("I verify the depart \"([^\"]*)\" and \"([^\"]*)\" displayed based on \"([^\"]*)\" and \"([^\"]*)\" selections"
 * ) public void
 * i_verify_the_depart_and_displayed_based_on_and_selections(String port, String
 * contactTiming, String width, String weight) throws Throwable {
 * 
 * // verify the displayed message if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightPort(), port);
 * } else if (width.equalsIgnoreCase("NO") && weight.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWidthtPort(), port);
 * } else if (width.equalsIgnoreCase("YES") && weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightPort(), port);
 * }
 * 
 * // verify the displayed message if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightTiming(),
 * contactTiming); } else if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWidthTiming(),
 * contactTiming); } else if (width.equalsIgnoreCase("YES") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightTiming(),
 * contactTiming); }
 * 
 * }
 * 
 * @And("I verify the contact \"([^\"]*)\" and \"([^\"]*)\" displayed based on \"([^\"]*)\" and \"([^\"]*)\" selections"
 * ) public void
 * i_verify_the_contact_and_displayed_based_on_and_selections(String
 * telephoneNo, String emailAddress, String width, String weight) throws
 * Throwable {
 * 
 * // verify the displayed message if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightTelephoneNo(),
 * telephoneNo); } else if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWidthTelephoneNo(),
 * telephoneNo); } else if (width.equalsIgnoreCase("YES") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightTelephoneNo(),
 * telephoneNo); }
 * 
 * // verify the displayed message if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightEmail(),
 * emailAddress); } else if (width.equalsIgnoreCase("NO") &&
 * weight.equalsIgnoreCase("YES")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWidthtEmail(),
 * emailAddress); } else if (width.equalsIgnoreCase("YES") &&
 * weight.equalsIgnoreCase("NO")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getAbnormalWeightEmail(),
 * emailAddress); } }
 * 
 * @And("I verify the contact centre \"([^\"]*)\" and \"([^\"]*)\"") public void
 * i_verify_the_contact_centre_and(String telephoneNumber, String emailNumber)
 * throws Throwable {
 * Assert.assertEquals(bookNowPageActions.getDangerousGoodsTelephoneNo(),
 * telephoneNumber);
 * Assert.assertEquals(bookNowPageActions.getDangerousGoodsEmail(),
 * emailNumber); }
 * 
 * @And("I click the dangerousGoods or pets Back Link") public void
 * i_click_the_dangerousGoods_or_pets_Back_Link() throws Throwable {
 * bookNowPageActions.clickBackDangerousGoodsPets(); }
 * 
 * @And("I click the abnormal width or weight Back Link") public void
 * i_click_the_abnormal_width_or_weight_Back_Link() throws Throwable {
 * vehicleDetailsPageActions.clickBackAbnormalWidthWeight(); }
 * 
 * @Then("I verify the Invalid card \"([^\"]*)\" displayed") public void
 * i_verify_the_Invalid_card_displayed(String errorMessage) throws Throwable {
 * Assert.assertEquals(paymentPageActions.getInvalidCardDetailsMessage(),
 * errorMessage); }
 * 
 * @And("I click Cancel on the payment Page") public void
 * i_click_Cancel_on_the_payment_Page() throws Throwable {
 * paymentPageActions.cancelPayment(); }
 * 
 * @And("I verify navigation to the Payment Failure Screen") public void
 * i_verify_navigation_to_the_Payment_Failure_Screen() throws Throwable {
 * paymentFailurePageActions.waitForGoToHomeButton(); }
 * 
 * @And("I click the Go To Home button on the Payment Failure Screen") public
 * void i_click_the_Go_To_Home_button_on_the_Payment_Failure_Screen() throws
 * Throwable { paymentFailurePageActions.clickOnGoToHomeButton(); }
 * 
 * @And("I verify the payment \"([^\"]*)\"") public void
 * i_verify_the_payment(String errorMessage) throws Throwable {
 * Assert.assertEquals(paymentFailurePageActions.getPaymentFailureMessage(),
 * errorMessage); }
 * 
 * @When("I wait for the dangerousGoods or pets message") public void
 * i_wait_for_the_dangerousGoods_or_pets_message() throws Throwable {
 * bookNowPageActions.waitForDangerousGoodsPetsEmail(); }
 * 
 * @Then("I close the payment success survey popup if required") public void
 * i_close_the_payment_success_survey_popup_if_required() throws Throwable {
 * 
 * // wait for the payment success to appear
 * paymentSuccessPageActions.waitUntilPaymentSuccessIsVisible();
 * 
 * // Wait for the waybill No to appear
 * bookingConfirmationPageActions.waitForWayBillNo();
 * 
 * // If the popup exists then close it if
 * (bookingConfirmationPageActions.isPaymentSuccessSurveyPopupDisplayed()) {
 * bookingConfirmationPageActions.closePaymentSuccessSurveyPopup(); }
 * 
 * }
 * 
 * @And("I close the survey popup") public void i_close_the_survey_popup()
 * throws Throwable {
 * 
 * // If the popup exists then close it if
 * (bookingConfirmationPageActions.isPaymentSuccessSurveyPopupDisplayed()) {
 * paymentFailurePageActions.closeSurveyPopup(); }
 * 
 * }
 * 
 * @Then("I verify the large vehicle length \"([^\"]*)\"") public void
 * i_verify_the_large_vehicle_length(String message) throws Throwable {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthErrorMessage(),
 * message); }
 * 
 * @And("I verify the  large vehicle length depart \"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_the_large_vehicle_length_depart_and(String port,
 * String contactTiming) throws Throwable {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthPort(), port);
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthTiming(),
 * contactTiming); }
 * 
 * @And("I verify the large vehicle length contact \"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_the_large_vehicle_length_contact_and(String
 * telephoneNo, String emailAddress) throws Throwable {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthTelephoneNo(),
 * telephoneNo);
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthEmail(),
 * emailAddress); }
 * 
 * @And("I click the Vehicle Length Back Link") public void
 * i_click_the_Vehicle_Length_Back_Link() {
 * vehicleDetailsPageActions.clickVehicleLengthBack(); }
 * 
 * @And("I click the Amend Booking Link") public void
 * i_click_the_Amend_Booking_Link() throws Throwable {
 * bookingConfirmationPageActions.clickAmendBookingLink(); }
 * 
 * @And("I verify navigation to the Amend Booking Page") public void
 * i_verify_navigation_to_the_Amend_Booking_Page() throws Throwable {
 * bookingConfirmationPageActions.waitForAmendBookingPage(); }
 * 
 * @And("I click Back on the Amend Booking Page") public void
 * i_click_Back_on_the_Amend_Booking_Page() {
 * bookingConfirmationPageActions.clickBackOnAmendBookingPage(); }
 * 
 * @And("I verify the amend Booking \"([^\"]*)\" and the \"([^\"]*)\"") public
 * void i_verify_the_amend_Booking_and_the(String message, String secondMessage)
 * throws Throwable {
 * Assert.assertEquals(bookingConfirmationPageActions.getAmendBookingMessage(),
 * message); Assert.assertEquals(bookingConfirmationPageActions.
 * getAmendBookingSecondMessage(), secondMessage); }
 * 
 * @And("I verify the amend Booking port \"([^\"]*)\" and timing \"([^\"]*)\"")
 * public void i_verify_the_amend_Booking_port_and_timing(String portOffice,
 * String openTiming) throws Throwable {
 * Assert.assertEquals(bookingConfirmationPageActions.getAmendBookingPortOffice(
 * ), portOffice);
 * Assert.assertEquals(bookingConfirmationPageActions.getAmendBookingOpenTiming(
 * ), openTiming); }
 * 
 * @And("I verify the amend Booking telephone \"([^\"]*)\" and email \"([^\"]*)\""
 * ) public void i_verify_the_amend_Booking_telephone_and_email(String
 * telephoneNo, String emailAddress) throws Throwable {
 * Assert.assertEquals(bookingConfirmationPageActions.getAmendBookingTelephoneNo
 * (), telephoneNo); Assert.assertEquals(bookingConfirmationPageActions.
 * getAmendBookingEmailAddress(), emailAddress); }
 * 
 * @Then("I verify the large vehicle length {string} based on {string}") public
 * void i_verify_the_large_vehicle_length_based_on(String vehicleMessage, String
 * journeyType) throws Throwable {
 * 
 * // currently vehicle message is not the same for both journey types if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthErrorMessage(),
 * vehicleMessage); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.
 * getReturnVehicleLengthErrorMessage(), vehicleMessage); }
 * 
 * }
 * 
 * @And("I verify the  large vehicle length depart \"([^\"]*)\" and \"([^\"]*)\" based on \"([^\"]*)\""
 * ) public void i_verify_the_large_vehicle_length_depart_and_based_on(String
 * departPort, String departContactTiming, String journeyType) throws Throwable
 * {
 * 
 * // verify the messages abased on the journey Type if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthPort(),
 * departPort); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthDepartPort(),
 * departPort); }
 * 
 * // verify the messages abased on the journey Type if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthTiming(),
 * departContactTiming); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthDepartTiming(),
 * departContactTiming); }
 * 
 * }
 * 
 * @And("I verify the  large vehicle length return \"([^\"]*)\" and \"([^\"]*)\" based on \"([^\"]*)\""
 * ) public void i_verify_the_large_vehicle_length_return_and_based_on(String
 * returnPort, String returnContactTiming, String journeyType) throws Throwable
 * {
 * 
 * // verify the messages abased on the journey Type if
 * (!returnPort.equalsIgnoreCase("NA")) { if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthPort(),
 * returnPort); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthReturnPort(),
 * returnPort); } }
 * 
 * // verify the messages abased on the journey Type if
 * (!returnContactTiming.equalsIgnoreCase("NA")) { if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthTiming(),
 * returnContactTiming); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthReturnPort(),
 * returnContactTiming); } } }
 * 
 * @And("I verify the large vehicle length contact \"([^\"]*)\" and \"([^\"]*)\" based on \"([^\"]*)\""
 * ) public void i_verify_the_large_vehicle_length_contact_and_based_on(String
 * departTelephone, String departEmail, String journeyType) throws Throwable {
 * 
 * // verify the messages abased on the journey Type if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthTelephoneNo(),
 * departTelephone); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.
 * getVehicleLengthDepartTelephoneNo(), departTelephone); }
 * 
 * // verify the messages abased on the journey Type if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthEmail(),
 * departEmail); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthDepartEmail(),
 * departEmail); } }
 * 
 * @And("I verify the large vehicle length return contact \"([^\"]*)\" and \"([^\"]*)\" based on \"([^\"]*)\""
 * ) public void
 * i_verify_the_large_vehicle_length_return_contact_and_based_on(String
 * returnTelephone, String returnEmail, String journeyType) throws Throwable {
 * 
 * // verify the messages abased on the journey Type if
 * (!returnTelephone.equalsIgnoreCase("NA")) { if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthTelephoneNo(),
 * returnTelephone); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.
 * getVehicleLengthDepartTelephoneNo(), returnTelephone); } }
 * 
 * // verify the messages abased on the journey Type if
 * (!returnEmail.equalsIgnoreCase("NA")) { if
 * (journeyType.equalsIgnoreCase("oneway")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthEmail(),
 * returnEmail); } else if (journeyType.equalsIgnoreCase("return")) {
 * Assert.assertEquals(vehicleDetailsPageActions.getVehicleLengthReturnEmail(),
 * returnEmail); } } }
 * 
 * @When("I click the profile link and verify navigation to the profile page")
 * public void
 * i_click_the_profile_link_and_verify_navigation_to_the_profile_page() { //
 * Click the profile link homePageActions.clickProfileLink(); // verify
 * navigation profilePageActions.waitForFirstNameField();
 * 
 * }
 * 
 * @And("I click the change password link and verify navigation") public void
 * i_click_the_change_password_link_and_verify_navigation() { // Click on the
 * change password link profilePageActions.clickChangePassword();
 * 
 * // ensure navigation changePasswordPageActions.waitForCurrentPasswordLink();
 * }
 * 
 * @And("I enter the \"([^\"]*)\" in the current password field") public void
 * i_enter_the_in_the_current_password_field(String currentPassword) { // enter
 * the current password in the current password field if
 * (!currentPassword.equalsIgnoreCase("NA")) {
 * changePasswordPageActions.enterCurrentPassword(currentPassword); } else if
 * (currentPassword.equalsIgnoreCase("NA")) {
 * changePasswordPageActions.clearCurrentPasswordField(); }
 * 
 * }
 * 
 * @And("I enter the \"([^\"]*)\" in the new password field") public void
 * i_enter_the_in_the_new_password_field(String newPassword) { // enter the new
 * password in the new password field if (!newPassword.equalsIgnoreCase("NA")) {
 * changePasswordPageActions.enterNewPassword(newPassword); } else if
 * (newPassword.equalsIgnoreCase("NA")) {
 * changePasswordPageActions.clearNewPasswordField(); } }
 * 
 * @And("I enter the \"([^\"]*)\" in the confirm password field") public void
 * i_enter_the_in_the_confirm_password_field(String confirmPassword) { // enter
 * the confirm password in the confirm password field if
 * (!confirmPassword.equalsIgnoreCase("NA")) {
 * changePasswordPageActions.enterConfirmPassword(confirmPassword); } else if
 * (confirmPassword.equalsIgnoreCase("NA")) {
 * changePasswordPageActions.clearConfirmPasswordField(); } }
 * 
 * @And("I click the Update password button") public void
 * i_click_the_Update_password_button() { // click on update password
 * changePasswordPageActions.clickUpdatePassword();
 * 
 * }
 * 
 * @Then("I verify the displayed current password \"([^\"]*)\" message") public
 * void i_verify_the_displayed_current_password_message(String
 * currentPasswordMessage) { // verify the displayed message if
 * (!currentPasswordMessage.equalsIgnoreCase("NA")) { String actualMessage =
 * changePasswordPageActions.getCurrentPasswordError();
 * Assert.assertEquals(actualMessage, currentPasswordMessage); } }
 * 
 * @Then("I verify the displayed new password \"([^\"]*)\" message") public void
 * i_verify_the_displayed_new_password_message(String newPasswordMessage) { //
 * verify the displayed message if (!newPasswordMessage.equalsIgnoreCase("NA"))
 * { String actualMessage = changePasswordPageActions.getNewPasswordError();
 * Assert.assertEquals(actualMessage, newPasswordMessage); } }
 * 
 * @Then("I verify the displayed confirm password \"([^\"]*)\" message") public
 * void i_verify_the_displayed_confirm_password_message(String
 * confirmPasswordMessage) { // verify the displayed message if
 * (!confirmPasswordMessage.equalsIgnoreCase("NA")) { String actualMessage =
 * changePasswordPageActions.getConfirmPasswordError();
 * Assert.assertEquals(actualMessage, confirmPasswordMessage); } }
 * 
 * @Then("I verify the displayed changePassword \"([^\"]*)\" message") public
 * void i_verify_the_displayed_changePassword_message(String errorMessage) { //
 * verify the displayed message
 * 
 * if (errorMessage.equalsIgnoreCase(configReader.pagesWeb.getProperty(
 * "currentPasswordError"))) { String actualMessage =
 * changePasswordPageActions.getWrongPasswordError();
 * Assert.assertEquals(actualMessage, errorMessage); } else if
 * (errorMessage.equalsIgnoreCase(configReader.pagesWeb.getProperty(
 * "newAndCurrentPasswordError"))) { String actualMessage =
 * changePasswordPageActions.getDifferentPasswordError();
 * Assert.assertEquals(actualMessage, errorMessage); } else if
 * (errorMessage.equalsIgnoreCase(configReader.pagesWeb.getProperty(
 * "newAndConfirmPasswordErrorr"))) { String actualMessage =
 * changePasswordPageActions.getConfirmPasswordError();
 * Assert.assertEquals(actualMessage, errorMessage); }
 * 
 * }
 * 
 * @Then("I verify the password successfully updated \"([^\"]*)\"") public void
 * i_verify_the_password_successfully_updated(String successMessage) {
 * 
 * // wait for the message to appear
 * changePasswordPageActions.waitForPasswordChangedSuccessfullyMessage();
 * 
 * // verify the displayed message String actualMessage =
 * changePasswordPageActions.getPasswordChangedSuccessMessage();
 * Assert.assertEquals(actualMessage, successMessage); }
 * 
 * @And("I make selection to Login with new password") public void
 * i_make_selection_to_Login_with_new_password() throws InterruptedException {
 * Thread.sleep(2000);
 * changePasswordPageActions.clickOnPasswordChangeSuccessSignIn(); }
 * 
 * @Then("I verify the displayed vehicle reg \"([^\"]*)\"") public void
 * i_verify_the_displayed_vehicle_reg(String errorMessage) {
 * 
 * // verify the displayed message String actualMessage =
 * vehicleDetailsPageActions.getVehicleRegErrorMessage();
 * Assert.assertEquals(actualMessage, errorMessage); }
 * 
 * @And("I enter the \"([^\"]*)\" in the first name field") public void
 * i_enter_the_in_the_first_name_field(String firstName) throws
 * InterruptedException {
 * 
 * // enter the first name in the first name field if
 * (!firstName.equalsIgnoreCase("NA")) {
 * profilePageActions.clearFirstNameField(); Thread.sleep(1000);
 * profilePageActions.enterFirstName(firstName); } else if
 * (firstName.equalsIgnoreCase("NA")) {
 * profilePageActions.clearFirstNameField(); } }
 * 
 * @And("I enter the \"([^\"]*)\" in the last name field") public void
 * i_enter_the_in_the_last_name_field(String lastName) throws
 * InterruptedException {
 * 
 * // enter the last name in the last name field if
 * (!lastName.equalsIgnoreCase("NA")) { profilePageActions.clearLastNameField();
 * Thread.sleep(1000); profilePageActions.enterLastName(lastName); } else if
 * (lastName.equalsIgnoreCase("NA")) { profilePageActions.clearLastNameField();
 * }
 * 
 * }
 * 
 * @And("I enter the \"([^\"]*)\" in the mobile number field") public void
 * i_enter_the_in_the_mobile_number_field(String mobileNumber) throws
 * InterruptedException {
 * 
 * // enter the mobile number in the mobileNumber field if
 * (!mobileNumber.equalsIgnoreCase("NA")) {
 * profilePageActions.clearPhoneNumberField(); Thread.sleep(1000);
 * profilePageActions.enterPhoneNumber(mobileNumber); } else if
 * (mobileNumber.equalsIgnoreCase("NA")) {
 * profilePageActions.clearPhoneNumberField(); } }
 * 
 * @And("I enter the \"([^\"]*)\" in the company title field") public void
 * i_enter_the_in_the_company_title_field(String companyTitle) throws
 * InterruptedException {
 * 
 * // enter the company title in the company Title field if
 * (!companyTitle.equalsIgnoreCase("NA")) {
 * profilePageActions.clearCompanyTitleField(); Thread.sleep(1000);
 * profilePageActions.enterCompanyTitle(companyTitle); } else if
 * (companyTitle.equalsIgnoreCase("NA")) {
 * profilePageActions.clearCompanyTitleField(); } }
 * 
 * @And("I enter the \"([^\"]*)\" in the company name field") public void
 * i_enter_the_in_the_company_name_field(String companyName) throws
 * InterruptedException {
 * 
 * // enter the company name in the company name field. if
 * (!companyName.equalsIgnoreCase("NA")) {
 * profilePageActions.clearCompanyNameField(); Thread.sleep(1000);
 * profilePageActions.enterCompanyName(companyName); } else if
 * (companyName.equalsIgnoreCase("NA")) {
 * profilePageActions.clearCompanyNameField(); } }
 * 
 * @And("I enter the \"([^\"]*)\" in the post code field") public void
 * i_enter_the_in_the_post_code_field(String postCode) throws
 * InterruptedException {
 * 
 * // enter the postcode in the postcode field if
 * (!postCode.equalsIgnoreCase("NA")) { profilePageActions.clearPostCodeField();
 * Thread.sleep(1000); profilePageActions.enterPostCode(postCode); } else if
 * (postCode.equalsIgnoreCase("NA")) { profilePageActions.clearPostCodeField();
 * } }
 * 
 * @And("I enter the \"([^\"]*)\" in the city field") public void
 * i_enter_the_in_the_city_field(String city) throws InterruptedException {
 * 
 * // enter the city field if (!city.equalsIgnoreCase("NA")) {
 * profilePageActions.clearcityTownField(); Thread.sleep(1000);
 * profilePageActions.entercityTown(city); } else if
 * (city.equalsIgnoreCase("NA")) { profilePageActions.clearcityTownField(); } }
 * 
 * @And("I enter the \"([^\"]*)\" in the addressLine One Field") public void
 * i_enter_the_in_the_addressLine_One_Field(String addressLine1) throws
 * InterruptedException {
 * 
 * // enter the adddess line 1 field if (!addressLine1.equalsIgnoreCase("NA")) {
 * profilePageActions.clearAddressLine1Field(); Thread.sleep(1000);
 * profilePageActions.enterAddressLine1(addressLine1); } else if
 * (addressLine1.equalsIgnoreCase("NA")) {
 * profilePageActions.clearAddressLine1Field(); } }
 * 
 * @And("I enter the \"([^\"]*)\" in the addressLine two Field") public void
 * i_enter_the_in_the_addressLine_two_Field(String addressLine2) throws
 * InterruptedException {
 * 
 * // enter the address Line 2 field if (!addressLine2.equalsIgnoreCase("NA")) {
 * profilePageActions.clearAddressLine2Field(); Thread.sleep(1000);
 * profilePageActions.enterAddressLine2(addressLine2); } else if
 * (addressLine2.equalsIgnoreCase("NA")) {
 * profilePageActions.clearAddressLine2Field(); }
 * 
 * }
 * 
 * @And("I click the save profile button") public void
 * i_click_the_save_profile_button() { profilePageActions.saveProfile(); }
 * 
 * @And("I verify the first name \"([^\"]*)\" error message") public void
 * i_verify_the_first_name_error_message(String firstNameError) { // verify the
 * displayed firstName error message if (!firstNameError.equalsIgnoreCase("NA"))
 * { String actualMessage = profilePageActions.getFirstNameError();
 * Assert.assertEquals(actualMessage, firstNameError); } }
 * 
 * @And("I verify the last name \"([^\"]*)\" error message") public void
 * i_verify_the_last_name_error_message(String lastNameError) {
 * 
 * // verify the displayed lastName error message if
 * (!lastNameError.equalsIgnoreCase("NA")) { String actualMessage =
 * profilePageActions.getLastNameError(); Assert.assertEquals(actualMessage,
 * lastNameError); } }
 * 
 * @And("I verify the mobileNumber \"([^\"]*)\" error message") public void
 * i_verify_the_mobileNumber_error_message(String phoneNoError) {
 * 
 * // verify the displayed phoneNumber error message if
 * (!phoneNoError.equalsIgnoreCase("NA")) { String actualMessage =
 * profilePageActions.getPhoneNumberError(); Assert.assertEquals(actualMessage,
 * phoneNoError); } }
 * 
 * @And("I verify the company title \"([^\"]*)\" error message") public void
 * i_verify_the_company_title_error_message(String companyTitleError) {
 * 
 * // verify the displayed lastName error message if
 * (!companyTitleError.equalsIgnoreCase("NA")) { String actualMessage =
 * profilePageActions.getCompanyTitleError(); Assert.assertEquals(actualMessage,
 * companyTitleError); }
 * 
 * }
 * 
 * @And("I verify the company name \"([^\"]*)\" error message") public void
 * i_verify_the_company_name_error_message(String companyNameError) {
 * 
 * // verify the displayed companyName error message if
 * (!companyNameError.equalsIgnoreCase("NA")) { String actualMessage =
 * profilePageActions.getCompanyNameError(); Assert.assertEquals(actualMessage,
 * companyNameError); } }
 * 
 * @And("I verify the postCode \"([^\"]*)\" error message") public void
 * i_verify_the_postCode_error_message(String postCodeError) { // verify the
 * displayed companyName error message if
 * (!postCodeError.equalsIgnoreCase("NA")) { String actualMessage =
 * profilePageActions.getPostCoceError(); Assert.assertEquals(actualMessage,
 * postCodeError); } }
 * 
 * @And("I verify the city \"([^\"]*)\" error message") public void
 * i_verify_the_city_error_message(String cityError) { // verify the displayed
 * city error message if (!cityError.equalsIgnoreCase("NA")) { String
 * actualMessage = profilePageActions.getcityTownError();
 * Assert.assertEquals(actualMessage, cityError); } }
 * 
 * @And("I verify the address Line One \"([^\"]*)\" error message") public void
 * i_verify_the_address_Line_One_error_message(String addressLine1Error) { //
 * verify the displayed city error message if
 * (!addressLine1Error.equalsIgnoreCase("NA")) { String actualMessage =
 * profilePageActions.getAddressLine1Error(); Assert.assertEquals(actualMessage,
 * addressLine1Error); } }
 * 
 * @And("I verify the address Line two \"([^\"]*)\" error message") public void
 * i_verify_the_address_Line_two_error_message(String addressLine2Error) { //
 * verify the displayed city error message if
 * (!addressLine2Error.equalsIgnoreCase("NA")) { String actualMessage =
 * profilePageActions.getAddressLine2Error(); Assert.assertEquals(actualMessage,
 * addressLine2Error); } }
 * 
 * // the below method clicks the postcode search icon
 * 
 * @When("I click the postcode search icon") public void
 * i_click_the_postcode_search_icon() throws InterruptedException {
 * profilePageActions.clickSearchPostCodeIcon(); }
 * 
 * @And("I select the address corresponding to \"([^\"]*)\"") public void
 * i_select_the_address_corresponding_to(String address) throws Exception {
 * 
 * String addressSelectXPath;
 * 
 * Thread.sleep(5000); List<WebElement> listOfElements =
 * SeleniumDriver.getDriver()
 * .findElements(By.name(configReader.pagesWeb.getProperty("addressOptions")));
 * 
 * if (listOfElements.size() > 0) {
 * 
 * for (int i = 0; i < listOfElements.size(); i++) {
 * 
 * addressSelectXPath =
 * configReader.pagesWeb.getProperty("addressSelectStartXpath") + (i + 1) +
 * configReader.pagesWeb.getProperty("addressSelectEndXpath");
 * 
 * String addressValue =
 * SeleniumDriver.getDriver().findElement(By.xpath(addressSelectXPath)).getText(
 * ); System.out.println(addressValue);
 * 
 * if (addressValue.toUpperCase().startsWith(address.toUpperCase())) {
 * listOfElements.get(i).click(); break; } }
 * 
 * } else { throw new Exception("Elements Not Found"); } }
 * 
 * @And("I click the continue button") public void i_click_the_continue_button()
 * { chooseAnAddressActions.clickOnContinueButton(); }
 * 
 * @And("I verify that the profile has been saved") public void
 * i_verify_that_the_profile_has_been_saved() {
 * 
 * }
 * 
 * @And("I verify that the address fields are populated with \"([^\"]*)\" and \"([^\"]*)\""
 * ) public void i_verify_that_the_address_fields_are_populated_with_and(String
 * postCode, String address) throws Exception {
 * 
 * String actualPostCode = profilePageActions.getPostCode();
 * Assert.assertEquals(actualPostCode, postCode);
 * 
 * String actualAddressLine1 = profilePageActions.getAddressLine1();
 * Assert.assertEquals(actualAddressLine1, address);
 * 
 * // make sure that addressLine1 and addressLine2 are populated as well String
 * addressLine2 = profilePageActions.getAddressLine2(); if
 * (addressLine2.isEmpty()) { throw new
 * Exception("Address Line2 is not populated."); }
 * 
 * String cityTown = profilePageActions.getCityTown(); if (cityTown.isEmpty()) {
 * throw new Exception("CityTown field is not populated"); }
 * 
 * }
 * 
 * @When("I enter an invalid \"([^\"]*)\" in the post code field") public void
 * i_enter_an_invalid_in_the_post_code_field(String postCode) throws Throwable {
 * 
 * // Enter the postcode and click the search icon
 * profilePageActions.clearPostCodeField(); Thread.sleep(1000);
 * profilePageActions.enterPostCode(postCode); Thread.sleep(1000);
 * profilePageActions.clickSearchPostCodeIcon();
 * 
 * // Wait for the invalid postcode popup to appear and click Yes
 * profilePageActions.waitForPostCodeNotFoundPopup();
 * profilePageActions.clickYesPostCodeNotFoundPopup(); Thread.sleep(1000);
 * 
 * }
 * 
 * @And("I verify the saved first name \"([^\"]*)\"") public void
 * i_verify_the_saved_first_name(String firstName) { // get the actual firstname
 * and compare it with the test data String actualFirstName =
 * profilePageActions.getFirstName(); Assert.assertEquals(actualFirstName,
 * firstName);
 * 
 * }
 * 
 * @And("I verify the saved last name \"([^\"]*)\"") public void
 * i_verify_the_saved_last_name(String lastName) { // get the actual last name
 * and compare it with the test data String actualLastName =
 * profilePageActions.getLastName(); Assert.assertEquals(actualLastName,
 * lastName);
 * 
 * }
 * 
 * @And("I verify the saved phone number \"([^\"]*)\"") public void
 * i_verify_the_saved_phone_number(String phoneNumber) { // get the actual phone
 * number and compare it with the test data String actualPhone =
 * profilePageActions.getPhoneNumber(); Assert.assertEquals(actualPhone,
 * phoneNumber); }
 * 
 * @And("I verify the saved company title \"([^\"]*)\"") public void
 * i_verify_the_saved_company_title(String companyTitle) { // get the actual
 * company Title and compare it with the test data String actualCompanyTitle =
 * profilePageActions.getCompanyTitle(); Assert.assertEquals(actualCompanyTitle,
 * companyTitle); }
 * 
 * @And("I verify the saved company name \"([^\"]*)\"") public void
 * i_verify_the_saved_company_name(String companyName) { // get the actual
 * company name and compare it with the test data String actualCompanyName =
 * profilePageActions.getCompanyName(); Assert.assertEquals(actualCompanyName,
 * companyName); }
 * 
 * @And("I verify the saved post code \"([^\"]*)\"") public void
 * i_verify_the_saved_post_code(String postCode) { // get the actual post code
 * and compare it with the test data String actualPostCode =
 * profilePageActions.getPostCode(); Assert.assertEquals(actualPostCode,
 * postCode); }
 * 
 * @And("I verify the saved city \"([^\"]*)\"") public void
 * i_verify_the_saved_city(String cityTown) { // get the actual cityTown and
 * compare it with the test data String actualCityTown =
 * profilePageActions.getCityTown(); Assert.assertEquals(actualCityTown,
 * cityTown); }
 * 
 * @And("I verify the saved addressLineOne \"([^\"]*)\"") public void
 * i_verify_the_saved_addressLineOne(String addressLine1) throws Throwable { //
 * get the actual addressLine1 and compare it with the test data String
 * actualAddressLine1 = profilePageActions.getAddressLine1();
 * Assert.assertEquals(actualAddressLine1, addressLine1);
 * 
 * }
 * 
 * @And("I verify the saved addressLineTwo \"([^\"]*)\"") public void
 * i_verify_the_saved_addressLineTwo(String addressLine2) throws Throwable { //
 * get the actual addressLine1 and compare it with the test data String
 * actualAddressLine2 = profilePageActions.getAddressLine2();
 * Assert.assertEquals(actualAddressLine2, addressLine2); }
 * 
 * @And("I verfy navigation to the Account holders Page") public void
 * i_verfy_navigation_to_the_Account_holders_Page() { // wait for the sign in
 * link to appear accountHoldersPageActions.waitForSignUpLink();
 * 
 * String currentTitle = accountHoldersPageActions.getAccountHolderPageTitle();
 * Assert.assertEquals(currentTitle,
 * configReader.pagesWeb.getProperty("accountHoldersPage"));
 * 
 * }
 * 
 * @And("I click the PayAndGo SignIn Link") public void
 * i_click_the_PayAndGo_SignIn_Link() {
 * accountHoldersPageActions.clickOnSignInLink(); }
 * 
 * @When("I select the {string}") public void i_select_the(String route) {
 * 
 * String routeInfo;
 * 
 * // If the parameter received is a data table parameter then get the data from
 * // the // excel sheet if (route.substring(0, 2).equalsIgnoreCase("dt")) {
 * routeInfo = DataUtils.getCellData(dataFile, "Sheet1",
 * VehicleIterator.getTestDataRow(), route.substring(3)); } else { routeInfo =
 * route; }
 * 
 * bookNowPageActions.selectRoute(routeInfo); }
 * 
 * @And("I select the number of passengers {string}") public void
 * i_select_the_number_of_passengers(String passengers) {
 * 
 * String noPass; // If the parameter received is a data table parameter then
 * get the data from // the // excel sheet if (passengers.length() > 1 &&
 * passengers.substring(0, 2).equalsIgnoreCase("dt")) { noPass =
 * DataUtils.getCellData(dataFile, "Sheet1", VehicleIterator.getTestDataRow(),
 * passengers.substring(3)); } else { noPass = passengers; }
 * 
 * bookNowPageActions.selectNoOfPassengers(noPass); }
 * 
 * }
 */