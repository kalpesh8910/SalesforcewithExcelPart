$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/web/AbnormalWeightWidth.feature");
formatter.feature({
  "name": "Abnormal weight width selection.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"\u003clanguage\u003e\" and \"\u003clengthUnit\u003e\" units",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"\u003croute\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"\u003ccurrencyUnit\u003e\" and the country of origin \"\u003coriginCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Vehicle Reg \"\u003cregistrationNo\u003e\" and \"\u003clength\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I slect the vehicle \"\u003cheight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for vehicle \"\u003cwidth\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the abnormal width or weight \"\u003cmessage\u003e\" displayed based on \"\u003cwidth\u003e\" and \"\u003cweight\u003e\" selections",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify the depart \"\u003cport\u003e\" and \"\u003ccontactTiming\u003e\" displayed based on \"\u003cwidth\u003e\" and \"\u003cweight\u003e\" selections",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the contact \"\u003ctelephoneNo\u003e\" and \"\u003cemailAddress\u003e\" displayed based on \"\u003cwidth\u003e\" and \"\u003cweight\u003e\" selections",
  "keyword": "And "
});
formatter.step({
  "name": "I click the abnormal width or weight Back Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currencyUnit",
        "lengthUnit",
        "language",
        "originCountry",
        "route",
        "journeyType",
        "passengers",
        "dangerousGoods",
        "pets",
        "registrationNo",
        "length",
        "height",
        "width",
        "weight",
        "message",
        "port",
        "contactTiming",
        "telephoneNo",
        "emailAddress"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "OneWay",
        "2",
        "NO",
        "NO",
        "AKHILAUTO1",
        "10",
        "NA",
        "NO",
        "YES",
        "Abnormal vehicle width",
        "Dover",
        "24/7",
        "+44 (0)1304 862539",
        "freightops.dover@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "OneWay",
        "2",
        "NO",
        "NO",
        "AKHILAUTO2",
        "10",
        "NA",
        "YES",
        "NO",
        "Please call or email us to book your +44 tonnes vehicle.",
        "Dover",
        "24/7",
        "+44 (0)1304 862539",
        "freightops.dover@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "OneWay",
        "2",
        "NO",
        "NO",
        "AKHILAUTO3",
        "10",
        "NA",
        "NO",
        "NO",
        "Please call or email us to book your +44 tonnes vehicle.",
        "Dover",
        "24/7",
        "+44 (0)1304 862539",
        "freightops.dover@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "OneWay",
        "2",
        "NO",
        "NO",
        "AKHILAUTO4",
        "10",
        "NA",
        "NO",
        "YES",
        "Abnormal vehicle width",
        "Calais",
        "24/7",
        "+33 (0)321 461020",
        "freightops.calais@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "OneWay",
        "2",
        "NO",
        "NO",
        "AKHILAUTO5",
        "10",
        "NA",
        "YES",
        "NO",
        "Please call or email us to book your +44 tonnes vehicle.",
        "Calais",
        "24/7",
        "+33 (0)321 461020",
        "freightops.calais@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "OneWay",
        "2",
        "NO",
        "NO",
        "AKHILAUTO6",
        "10",
        "NA",
        "NO",
        "NO",
        "Please call or email us to book your +44 tonnes vehicle.",
        "Calais",
        "24/7",
        "+33 (0)321 461020",
        "freightops.calais@poferries.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d79.0.3945.79)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KISPH7H\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.79, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\AKHIL\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57032}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 896dbaa182d620c54d170964c1aa7ed6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:134)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.getAttribute(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$37.apply(ExpectedConditions.java:1052)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$37.apply(ExpectedConditions.java:1047)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.poferries.freight.AutomationFramework.web.actions.HomePageActions.waitForProgressbarToappear(HomePageActions.java:57)\r\n\tat com.poferries.freight.AutomationFramework.web.actions.HomePageActions.makeLengthAndLanguageSelections(HomePageActions.java:165)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_set_the_and_units(MakeABookingSteps.java:85)\r\n\tat ✽.I set the \"en\" and \"Metre\" units(file:src/test/resources/features/web/AbnormalWeightWidth.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO1\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I make selections for vehicle \"NO\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the abnormal width or weight \"Abnormal vehicle width\" displayed based on \"NO\" and \"YES\" selections",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_abnormal_width_or_weight_displayed_based_on_and_selections(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the depart \"Dover\" and \"24/7\" displayed based on \"NO\" and \"YES\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_depart_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the contact \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" displayed based on \"NO\" and \"YES\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the abnormal width or weight Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_abnormal_width_or_weight_Back_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO2\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the abnormal width or weight \"Please call or email us to book your +44 tonnes vehicle.\" displayed based on \"YES\" and \"NO\" selections",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_abnormal_width_or_weight_displayed_based_on_and_selections(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the depart \"Dover\" and \"24/7\" displayed based on \"YES\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_depart_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" displayed based on \"YES\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the abnormal width or weight Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_abnormal_width_or_weight_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO3\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the abnormal width or weight \"Please call or email us to book your +44 tonnes vehicle.\" displayed based on \"NO\" and \"NO\" selections",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_abnormal_width_or_weight_displayed_based_on_and_selections(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the depart \"Dover\" and \"24/7\" displayed based on \"NO\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_depart_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" displayed based on \"NO\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the abnormal width or weight Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_abnormal_width_or_weight_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO4\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"NO\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the abnormal width or weight \"Abnormal vehicle width\" displayed based on \"NO\" and \"YES\" selections",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_abnormal_width_or_weight_displayed_based_on_and_selections(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the depart \"Calais\" and \"24/7\" displayed based on \"NO\" and \"YES\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_depart_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" displayed based on \"NO\" and \"YES\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the abnormal width or weight Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_abnormal_width_or_weight_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO5\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the abnormal width or weight \"Please call or email us to book your +44 tonnes vehicle.\" displayed based on \"YES\" and \"NO\" selections",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_abnormal_width_or_weight_displayed_based_on_and_selections(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the depart \"Calais\" and \"24/7\" displayed based on \"YES\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_depart_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" displayed based on \"YES\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the abnormal width or weight Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_abnormal_width_or_weight_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO6\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the abnormal width or weight \"Please call or email us to book your +44 tonnes vehicle.\" displayed based on \"NO\" and \"NO\" selections",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_abnormal_width_or_weight_displayed_based_on_and_selections(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the depart \"Calais\" and \"24/7\" displayed based on \"NO\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_depart_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" displayed based on \"NO\" and \"NO\" selections",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_and_displayed_based_on_and_selections(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the abnormal width or weight Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_abnormal_width_or_weight_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/AmendBooking.feature");
formatter.feature({
  "name": "Amend Booking",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Amend Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"\u003clanguage\u003e\" and \"\u003clengthUnit\u003e\" units",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"\u003croute\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"\u003ccurrencyUnit\u003e\" and the country of origin \"\u003coriginCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Vehicle Reg \"\u003cregistrationNo\u003e\" and \"\u003clength\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I slect the vehicle \"\u003cheight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for vehicle \"\u003cwidth\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.step({
  "name": "I click the \"\u003ctermsConditions\u003e\" checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "I make a selection for \"\u003cbillingAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccardNumber\u003e\",\"\u003ccardExpiryDate\u003e\" and the \"\u003csecurityCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the Amend Booking Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Amend Booking Page",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the amend Booking \"\u003cmessage\u003e\" and the \"\u003csecondMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the amend Booking port \"\u003cportOffice\u003e\" and timing \"\u003copenTiming\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the amend Booking telephone \"\u003ctelephoneNo\u003e\" and email \"\u003cemailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click Back on the Amend Booking Page",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currencyUnit",
        "lengthUnit",
        "language",
        "originCountry",
        "route",
        "passengers",
        "journeyType",
        "dangerousGoods",
        "pets",
        "registrationNo",
        "length",
        "height",
        "width",
        "weight",
        "departure",
        "arrival",
        "termsConditions",
        "billingAddress",
        "cardNumber",
        "cardExpiryDate",
        "securityCode",
        "message",
        "secondMessage",
        "portOffice",
        "openTiming",
        "telephoneNo",
        "emailAddress"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHILENG",
        "10",
        "NA",
        "YES",
        "YES",
        "Dover",
        "Calais",
        "YES",
        "YES",
        "4111 1111 1111 1111",
        "08/20",
        "345",
        "If you wish to make a change to this booking please call or email",
        "Please have your booking details to hand and we\u0027ll do the rest.",
        "Dover Port Office",
        "24/7",
        "+44 (0)1304 862539",
        "freightops.dover@poferries.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Amend Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILENG\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 1111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Amend Booking Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Amend_Booking_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Amend Booking Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Amend_Booking_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the amend Booking \"If you wish to make a change to this booking please call or email\" and the \"Please have your booking details to hand and we\u0027ll do the rest.\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_amend_Booking_and_the(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the amend Booking port \"Dover Port Office\" and timing \"24/7\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_amend_Booking_port_and_timing(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the amend Booking telephone \"+44 (0)1304 862539\" and email \"freightops.dover@poferries.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_amend_Booking_telephone_and_email(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Back on the Amend Booking Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_Back_on_the_Amend_Booking_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/ChangeAddressProfilePage.feature");
formatter.feature({
  "name": "Verify address has been changed from profile Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify error messages when invalid data is entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the \"\u003cpostCode\u003e\" in the post code field",
  "keyword": "And "
});
formatter.step({
  "name": "I click the postcode search icon",
  "keyword": "And "
});
formatter.step({
  "name": "I select the address corresponding to \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the continue button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify that the address fields are populated with \"\u003cpostCode\u003e\" and \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify that the profile has been saved",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "postCode",
        "address"
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "MK8 0DL",
        "10 Nelson Close"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify error messages when invalid data is entered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"MK8 0DL\" in the post code field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_post_code_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the postcode search icon",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_postcode_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the address corresponding to \"10 Nelson Close\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_address_corresponding_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the address fields are populated with \"MK8 0DL\" and \"10 Nelson Close\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_that_the_address_fields_are_populated_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_save_profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the profile has been saved",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_that_the_profile_has_been_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/ChangePassword.feature");
formatter.feature({
  "name": "Change password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Change password Successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccurrentPassword\u003e\" in the current password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cnewPassword\u003e\" in the new password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cconfirmPassword\u003e\" in the confirm password field",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the password successfully updated \"\u003csuccessMessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I make selection to Login with new password",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cnewPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cnewPassword\u003e\" in the current password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccurrentPassword\u003e\" in the new password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccurrentPassword\u003e\" in the confirm password field",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the password successfully updated \"\u003csuccessMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selection to Login with new password",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "currentPassword",
        "newPassword",
        "confirmPassword",
        "successMessage"
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "Shogun5050",
        "Shogun7070",
        "Shogun7070",
        "Password successfully changed"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Change password Successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun7070\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun7070\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the password successfully updated \"Password successfully changed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_password_successfully_updated(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selection to Login with new password",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selection_to_Login_with_new_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun7070\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun7070\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the password successfully updated \"Password successfully changed\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_password_successfully_updated(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selection to Login with new password",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selection_to_Login_with_new_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Logout\"}\n  (Session info: chrome\u003d79.0.3945.79)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KISPH7H\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.79, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\AKHIL\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57340}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 55c27ec3539c00b06a5d1b05806160d8\n*** Element info: {Using\u003dlink text, value\u003dLogout}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.poferries.freight.AutomationFramework.web.actions.HomePageActions.clickLogOut(HomePageActions.java:31)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.LoginSteps.i_click_the_LogOut_Link(LoginSteps.java:67)\r\n\tat ✽.I click the LogOut Link(file:src/test/resources/features/web/ChangePassword.feature:44)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Click Update password with Blank fields",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccurrentPassword\u003e\" in the current password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cnewPassword\u003e\" in the new password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cconfirmPassword\u003e\" in the confirm password field",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the displayed current password \"\u003ccurrentPasswordMessage\u003e\" message",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify the displayed new password \"\u003cnewPasswordMessage\u003e\" message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the displayed confirm password \"\u003cconfirmPasswordMessage\u003e\" message",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "currentPassword",
        "newPassword",
        "confirmPassword",
        "currentPasswordMessage",
        "newPasswordMessage",
        "confirmPasswordMessage"
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "NA",
        "NA",
        "Shogun6060",
        "NA",
        "NA",
        "New Password and Confirm Password must be same."
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "NA",
        "Shogun6060",
        "NA",
        "Current Password is required.",
        "NA",
        "Confirm Password is required."
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "NA",
        "NA",
        "NA",
        "Current Password is required.",
        "New Password is required.",
        "Confirm Password is required."
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "Shogun5050",
        "NA",
        "NA",
        "NA",
        "New Password is required.",
        "Confirm Password is required."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click Update password with Blank fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun6060\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed current password \"NA\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_current_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed new password \"NA\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_new_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed confirm password \"New Password and Confirm Password must be same.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_confirm_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click Update password with Blank fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun6060\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed current password \"Current Password is required.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_current_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed new password \"NA\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_new_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed confirm password \"Confirm Password is required.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_confirm_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click Update password with Blank fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed current password \"Current Password is required.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_current_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed new password \"New Password is required.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_new_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed confirm password \"Confirm Password is required.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_confirm_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click Update password with Blank fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed current password \"NA\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_current_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed new password \"New Password is required.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_new_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed confirm password \"Confirm Password is required.\" message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_confirm_password_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Click Update password with Invalid Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccurrentPassword\u003e\" in the current password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cnewPassword\u003e\" in the new password field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cconfirmPassword\u003e\" in the confirm password field",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the displayed changePassword \"\u003cerrorMessage\u003e\" message",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "currentPassword",
        "newPassword",
        "confirmPassword",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "Shogun6060",
        "Shogun7070",
        "Shogun7070",
        "×Your password does not match."
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "Shogun5050",
        "Shogun5050",
        "Shogun5050",
        "Please enter a different password. Your new password should not be same as your current password."
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "Shogun5050",
        "Shogun7070",
        "Shogun6060",
        "New Password and Confirm Password must be same."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click Update password with Invalid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun6060\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun7070\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun7070\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed changePassword \"×Your password does not match.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_changePassword_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click Update password with Invalid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed changePassword \"Please enter a different password. Your new password should not be same as your current password.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_changePassword_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click Update password with Invalid Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the change password link and verify navigation",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_change_password_link_and_verify_navigation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the current password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_current_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun7070\" in the new password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_new_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun6060\" in the confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Update password button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Update_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed changePassword \"New Password and Confirm Password must be same.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_changePassword_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/DangerousGoodsAnimals.feature");
formatter.feature({
  "name": "Dangerous goods and Pets selection",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"\u003clanguage\u003e\" and \"\u003clengthUnit\u003e\" units",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"\u003croute\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"\u003ccurrencyUnit\u003e\" and the country of origin \"\u003coriginCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the dangerousGoods or pets \"\u003cmessage\u003e\" displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify the departure \"\u003cport\u003e\" and \"\u003ccontactTiming\u003e\" based on \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\" selection",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the contact centre \"\u003ctelephoneNo\u003e\" and \"\u003cemailAddress\u003e\" based on \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\" selection",
  "keyword": "And "
});
formatter.step({
  "name": "I click the dangerousGoods or pets Back Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currencyUnit",
        "lengthUnit",
        "language",
        "originCountry",
        "route",
        "passengers",
        "journeyType",
        "dangerousGoods",
        "pets",
        "message",
        "port",
        "contactTiming",
        "telephoneNo",
        "emailAddress"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "1",
        "OneWay",
        "YES",
        "NO",
        "As you are carrying dangerous goods",
        "Dover",
        "24/7",
        "+44 (0)1304 862539",
        "freightops.dover@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "1",
        "OneWay",
        "NO",
        "YES",
        "Please call or email us to make a booking with pets/animals",
        "Calais",
        "24/7",
        "+33 (0)321 461020",
        "freightops.calais@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "1",
        "OneWay",
        "NO",
        "YES",
        "Please call or email us to make a booking with pets/animals",
        "Dover",
        "24/7",
        "+44 (0)1304 862539",
        "freightops.dover@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "1",
        "OneWay",
        "YES",
        "YES",
        "Please call or email us to make a booking with pets/animals",
        "Dover",
        "24/7",
        "+44 (0)1304 862539",
        "freightops.dover@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "2",
        "OneWay",
        "YES",
        "NO",
        "As you are carrying dangerous goods",
        "Calais",
        "24/7",
        "+33 (0)321 461020",
        "freightops.calais@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "2",
        "OneWay",
        "YES",
        "YES",
        "Please call or email us to make a booking with pets/animals",
        "Calais",
        "24/7",
        "+33 (0)321 461020",
        "freightops.calais@poferries.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"YES\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the dangerousGoods or pets \"As you are carrying dangerous goods\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_dangerousGoods_or_pets_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the departure \"Dover\" and \"24/7\" based on \"YES\" and \"NO\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_departure_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact centre \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" based on \"YES\" and \"NO\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_centre_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the dangerousGoods or pets Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_dangerousGoods_or_pets_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the dangerousGoods or pets \"Please call or email us to make a booking with pets/animals\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_dangerousGoods_or_pets_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the departure \"Calais\" and \"24/7\" based on \"NO\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_departure_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact centre \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" based on \"NO\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_centre_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the dangerousGoods or pets Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_dangerousGoods_or_pets_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the dangerousGoods or pets \"Please call or email us to make a booking with pets/animals\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_dangerousGoods_or_pets_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the departure \"Dover\" and \"24/7\" based on \"NO\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_departure_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact centre \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" based on \"NO\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_centre_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the dangerousGoods or pets Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_dangerousGoods_or_pets_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the dangerousGoods or pets \"Please call or email us to make a booking with pets/animals\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_dangerousGoods_or_pets_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the departure \"Dover\" and \"24/7\" based on \"YES\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_departure_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact centre \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" based on \"YES\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_centre_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the dangerousGoods or pets Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_dangerousGoods_or_pets_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"YES\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the dangerousGoods or pets \"As you are carrying dangerous goods\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_dangerousGoods_or_pets_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the departure \"Calais\" and \"24/7\" based on \"YES\" and \"NO\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_departure_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact centre \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" based on \"YES\" and \"NO\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_centre_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the dangerousGoods or pets Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_dangerousGoods_or_pets_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the dangerousGoods or pets \"Please call or email us to make a booking with pets/animals\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_dangerousGoods_or_pets_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the departure \"Calais\" and \"24/7\" based on \"YES\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_departure_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the contact centre \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" based on \"YES\" and \"YES\" selection",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_contact_centre_and_based_on_and_selection(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the dangerousGoods or pets Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_dangerousGoods_or_pets_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/InvalidCardDetailsAndCancelPayment.feature");
formatter.feature({
  "name": "Invalid Card Details and Cancel Payment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Make a booking for a prelodgement with invalid card Details and cancelling the payment",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"\u003clanguage\u003e\" and \"\u003clengthUnit\u003e\" units",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"\u003croute\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"\u003ccurrencyUnit\u003e\" and the country of origin \"\u003coriginCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Vehicle Reg \"\u003cregistrationNo\u003e\" and \"\u003clength\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I slect the vehicle \"\u003cheight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for vehicle \"\u003cwidth\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.step({
  "name": "I click the \"\u003ctermsConditions\u003e\" checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "I make a selection for \"\u003cbillingAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccardNumber\u003e\",\"\u003ccardExpiryDate\u003e\" and the \"\u003csecurityCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the Invalid card \"\u003cmessage\u003e\" displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "I click Cancel on the payment Page",
  "keyword": "And "
});
formatter.step({
  "name": "I close the survey popup",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Payment Failure Screen",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the payment \"\u003cfailureMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Go To Home button on the Payment Failure Screen",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currencyUnit",
        "lengthUnit",
        "language",
        "originCountry",
        "route",
        "passengers",
        "journeyType",
        "dangerousGoods",
        "pets",
        "registrationNo",
        "length",
        "height",
        "width",
        "weight",
        "termsConditions",
        "billingAddress",
        "billingName",
        "cardNumber",
        "cardExpiryDate",
        "securityCode",
        "message",
        "failureMessage"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHILWEB02",
        "10",
        "NA",
        "YES",
        "YES",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "4111 2111 1111 1111",
        "08/20",
        "345",
        "Invalid card number",
        "Unfortunately your payment has been unsuccessful, please call us on +44 (0)1304 863875 or email on freightsupport@poferries.com"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "1",
        "OneWay",
        "NO",
        "NO",
        "AKHILWEB01",
        "12",
        "NA",
        "YES",
        "YES",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "4111 3111 2111 5111",
        "08/20",
        "345",
        "Invalid card number",
        "Unfortunately your payment has been unsuccessful, please call us on +44 (0)1304 863875 or email on freightsupport@poferries.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement with invalid card Details and cancelling the payment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILWEB02\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 2111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Invalid card \"Invalid card number\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_Invalid_card_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Cancel on the payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_Cancel_on_the_payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the survey popup",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_survey_popup()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@class\u003d\u0027btn btn-secondary float-left\u0027 because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@class\u003d\u0027btn btn-secondary float-left\u0027\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d79.0.3945.79)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KISPH7H\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.79, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\AKHIL\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57807}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e4c0e37740922e51a94cb9f48008772b\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-secondary float-left\u0027}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.poferries.freight.AutomationFramework.web.actions.PaymentFailurePageActions.closeSurveyPopup(PaymentFailurePageActions.java:37)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_close_the_survey_popup(MakeABookingSteps.java:1377)\r\n\tat ✽.I close the survey popup(file:src/test/resources/features/web/InvalidCardDetailsAndCancelPayment.feature:42)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify navigation to the Payment Failure Screen",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Failure_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the payment \"Unfortunately your payment has been unsuccessful, please call us on +44 (0)1304 863875 or email on freightsupport@poferries.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_payment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Go To Home button on the Payment Failure Screen",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Go_To_Home_button_on_the_Payment_Failure_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement with invalid card Details and cancelling the payment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILWEB01\" and \"12\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 3111 2111 5111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Invalid card \"Invalid card number\" displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_Invalid_card_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Cancel on the payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_Cancel_on_the_payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the survey popup",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_survey_popup()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@class\u003d\u0027btn btn-secondary float-left\u0027 because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@class\u003d\u0027btn btn-secondary float-left\u0027\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d79.0.3945.79)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KISPH7H\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.79, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\AKHIL\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57867}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5e3390ca785df81b66ef53e44414cd11\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-secondary float-left\u0027}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.poferries.freight.AutomationFramework.web.actions.PaymentFailurePageActions.closeSurveyPopup(PaymentFailurePageActions.java:37)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_close_the_survey_popup(MakeABookingSteps.java:1377)\r\n\tat ✽.I close the survey popup(file:src/test/resources/features/web/InvalidCardDetailsAndCancelPayment.feature:42)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify navigation to the Payment Failure Screen",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Failure_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the payment \"Unfortunately your payment has been unsuccessful, please call us on +44 (0)1304 863875 or email on freightsupport@poferries.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_payment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Go To Home button on the Payment Failure Screen",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Go_To_Home_button_on_the_Payment_Failure_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/Login.feature");
formatter.feature({
  "name": "Signing in to Web with correct account details",
  "description": "  As User I should be able to sign in once I provide the correct account details.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "LogIn and Logout with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the \"\u003cPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Landing Page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "akhilraju@hotmail.com",
        "Shogun6666"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LogIn and Logout with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilraju@hotmail.com\" in the username edit Box",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun6666\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Landing Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LogIn with InValid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the \"\u003cInvalidPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be presented with an Invalid credentials \"\u003cErrorMessage\u003e\" error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "InvalidPassword",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "akhilraju@hotmail.com",
        "Shogun998",
        "Invalid login credentials. Please try again."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LogIn with InValid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilraju@hotmail.com\" in the username edit Box",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun998\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be presented with an Invalid credentials \"Invalid login credentials. Please try again.\" error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_presented_with_an_Invalid_credentials_error(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/MakeABookingDataDriven.feature");
formatter.feature({
  "name": "Validate the Booking process for a prelodgement",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"\u003crow\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "row"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "6"
      ]
    },
    {
      "cells": [
        "7"
      ]
    },
    {
      "cells": [
        "8"
      ]
    },
    {
      "cells": [
        "9"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "11"
      ]
    },
    {
      "cells": [
        "12"
      ]
    },
    {
      "cells": [
        "13"
      ]
    },
    {
      "cells": [
        "14"
      ]
    },
    {
      "cells": [
        "15"
      ]
    },
    {
      "cells": [
        "121"
      ]
    },
    {
      "cells": [
        "122"
      ]
    },
    {
      "cells": [
        "123"
      ]
    },
    {
      "cells": [
        "124"
      ]
    },
    {
      "cells": [
        "125"
      ]
    },
    {
      "cells": [
        "126"
      ]
    },
    {
      "cells": [
        "127"
      ]
    },
    {
      "cells": [
        "128"
      ]
    },
    {
      "cells": [
        "129"
      ]
    },
    {
      "cells": [
        "130"
      ]
    },
    {
      "cells": [
        "131"
      ]
    },
    {
      "cells": [
        "132"
      ]
    },
    {
      "cells": [
        "133"
      ]
    },
    {
      "cells": [
        "134"
      ]
    },
    {
      "cells": [
        "135"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [29-May-2020] but found [28-May-2020]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(MakeABookingSteps.java:1111)\r\n\tat ✽.I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [29-May-2020] but found [28-May-2020]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(MakeABookingSteps.java:1111)\r\n\tat ✽.I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [29-May-2020] but found [28-May-2020]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(MakeABookingSteps.java:1111)\r\n\tat ✽.I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"4\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [29-May-2020] but found [28-May-2020]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(MakeABookingSteps.java:1111)\r\n\tat ✽.I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [29-May-2020] but found [28-May-2020]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(MakeABookingSteps.java:1111)\r\n\tat ✽.I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"6\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [29-May-2020] but found [28-May-2020]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(MakeABookingSteps.java:1111)\r\n\tat ✽.I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"7\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [29-May-2020] but found [28-May-2020]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(MakeABookingSteps.java:1111)\r\n\tat ✽.I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"8\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"9\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"11\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"12\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"13\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"14\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"15\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"121\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"122\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"124\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"125\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d79.0.3945.79)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KISPH7H\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.79, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\AKHIL\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58947}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a46eb993f0a6f6044eb2e8c2126739cf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:134)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.getAttribute(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$37.apply(ExpectedConditions.java:1052)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$37.apply(ExpectedConditions.java:1047)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.poferries.freight.AutomationFramework.web.actions.HomePageActions.waitForProgressbarToappear(HomePageActions.java:57)\r\n\tat com.poferries.freight.AutomationFramework.web.actions.HomePageActions.makeLengthAndLanguageSelections(HomePageActions.java:141)\r\n\tat com.poferries.freight.AutomationFramework.web.stepDefinitions.MakeABookingSteps.i_set_the_and_units_and(MakeABookingSteps.java:118)\r\n\tat ✽.I set the \"dt_language\" and \"dt_lengthUnit\" units and \"125\"(file:src/test/resources/features/web/MakeABookingDataDriven.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"126\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"127\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"128\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"129\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"130\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"131\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"132\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"133\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"134\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a DataDriven booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"dt_language\" and \"dt_lengthUnit\" units and \"135\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"dt_route\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"dt_journeyType\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"dt_currencyUnit\" and the country of origin \"dt_originCountry\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"dt_dangerousGoods\" and \"dt_pets\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"dt_registrationNo\" and \"dt_length\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"dt_height\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_departure\" and \"dt_arrival\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the onward route \"dt_onwardRoute\" and the return route \"dt_returnRoute\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_onward_route_and_the_return_route(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"dt_termsConditions\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"dt_billingAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_billingName\" and \"dt_paymentPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"dt_addressLine1\",\"dt_addressLine2\",\"dt_addressTown\",\"dt_country\" and \"dt_postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"dt_cardNumber\",\"dt_cardExpiryDate\" and the \"dt_securityCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"dt_route\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"dt_registrationNo\",\"dt_length\",\"dt_height\",\"dt_width\" and \"dt_weight\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"dt_passengers\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed onward route \"dt_onwardRoute\" and the confirmed return route \"dt_returnRoute\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_onward_route_and_the_confirmed_return_route_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"dt_netPrice\",\"dt_vatAmount\" and \"dt_totalPrice\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed return  \"dt_returnNetPrice\" and \"dt_returnVatAmount\" if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_return_and_if_required(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"dt_paymentDate\",\"dt_paymentType\" and \"dt_paymentStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I caputure the waybillNumber",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_caputure_the_waybillNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Logout of Application",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_logout_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/MakeABookingMultipleLanguages.feature");
formatter.feature({
  "name": "Validate the Booking process for a prelodgement for multiple languages",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"\u003clanguage\u003e\" and \"\u003clengthUnit\u003e\" units",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"\u003croute\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"\u003ccurrencyUnit\u003e\" and the country of origin \"\u003coriginCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Vehicle Reg \"\u003cregistrationNo\u003e\" and \"\u003clength\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I slect the vehicle \"\u003cheight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for vehicle \"\u003cwidth\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"\u003cdeparture\u003e\" and \"\u003carrival\u003e\" ports",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the vehicle \"\u003cregistrationNo\u003e\",\"\u003clength\u003e\",\"\u003cheight\u003e\",\"\u003cwidth\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the number of \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"\u003cnetPrice\u003e\",\"\u003cvatAmount\u003e\" and \"\u003ctotalPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the \"\u003ctermsConditions\u003e\" checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "I make a selection for \"\u003cbillingAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"\u003cbillingName\u003e\" and \"\u003cpaymentPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"\u003caddressLine1\u003e\",\"\u003caddressLine2\u003e\",\"\u003caddressTown\u003e\",\"\u003ccountry\u003e\" and \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccardNumber\u003e\",\"\u003ccardExpiryDate\u003e\" and the \"\u003csecurityCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify confirmed \"\u003croute\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed vehicle \"\u003cregistrationNo\u003e\",\"\u003clength\u003e\",\"\u003cheight\u003e\",\"\u003cwidth\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed number of \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"\u003cnetPrice\u003e\",\"\u003cvatAmount\u003e\" and \"\u003ctotalPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"\u003cpaymentDate\u003e\",\"\u003cpaymentType\u003e\" and \"\u003cpaymentStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I capture the waybillNumber",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currencyUnit",
        "lengthUnit",
        "language",
        "originCountry",
        "route",
        "passengers",
        "journeyType",
        "dangerousGoods",
        "pets",
        "registrationNo",
        "length",
        "height",
        "width",
        "weight",
        "departure",
        "arrival",
        "netPrice",
        "vatAmount",
        "totalPrice",
        "termsConditions",
        "billingAddress",
        "billingName",
        "paymentPrice",
        "addressLine1",
        "addressLine2",
        "addressTown",
        "country",
        "postcode",
        "cardNumber",
        "cardExpiryDate",
        "securityCode",
        "paymentDate",
        "paymentType",
        "paymentStatus"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "de",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHGERMAN",
        "7",
        "Less than 2.5 metre",
        "YES",
        "YES",
        "Dover",
        "Calais",
        "£ 89.76",
        "£ 17.95",
        "£ 107.71",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "£107.71",
        "10 Nelson Close",
        "Crownhill",
        "Milton Keynes",
        "GB",
        "MK8 0DL",
        "4111 1111 1111 1111",
        "08/20",
        "345",
        "29-May-2020",
        "VISA",
        "BEZAHLT"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "fr",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHFRENCH",
        "10",
        "NA",
        "YES",
        "YES",
        "Dover",
        "Calais",
        "£ 155.66",
        "£ 31.13",
        "£ 186.79",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "£186.79",
        "10 Nelson Close",
        "Crownhill",
        "Milton Keynes",
        "GB",
        "MK8 0DL",
        "4111 1111 1111 1111",
        "08/20",
        "345",
        "29-May-2020",
        "VISA",
        "PAYÉ"
      ]
    },
    {
      "cells": [
        "Euro",
        "Feet",
        "nl",
        "United Kingdom",
        "Calais to Dover",
        "1",
        "OneWay",
        "NO",
        "NO",
        "AKHDUTCH",
        "46.00",
        "NA",
        "YES",
        "YES",
        "Calais",
        "Dover",
        "€ 207.53",
        "€ 41.51",
        "€ 249.04",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "€249.04",
        "10 Nelson Close",
        "Crownhill",
        "Milton Keynes",
        "GB",
        "MK8 0DL",
        "4111 1111 1111 1111",
        "08/20",
        "345",
        "29-May-2020",
        "VISA",
        "BETAALD"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "es",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHSPANNISH",
        "7",
        "Less than 2.5 metre",
        "YES",
        "YES",
        "Dover",
        "Calais",
        "£ 89.76",
        "£ 17.95",
        "£ 107.71",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "£107.71",
        "10 Nelson Close",
        "Crownhill",
        "Milton Keynes",
        "GB",
        "MK8 0DL",
        "4111 1111 1111 1111",
        "08/20",
        "345",
        "29-May-2020",
        "VISA",
        "PAGADO"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHILENG",
        "10",
        "NA",
        "YES",
        "YES",
        "Dover",
        "Calais",
        "£ 155.66",
        "£ 31.13",
        "£ 186.79",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "£186.79",
        "10 Nelson Close",
        "Crownhill",
        "Milton Keynes",
        "GB",
        "MK8 0DL",
        "4111 1111 1111 1111",
        "08/20",
        "345",
        "29-May-2020",
        "VISA",
        "PAID"
      ]
    },
    {
      "cells": [
        "Euro",
        "Feet",
        "pl",
        "United Kingdom",
        "Calais to Dover",
        "1",
        "OneWay",
        "NO",
        "NO",
        "AKHILPOLISH",
        "46.00",
        "NA",
        "YES",
        "YES",
        "Calais",
        "Dover",
        "€ 207.53",
        "€ 41.51",
        "€ 249.04",
        "YES",
        "YES",
        "Akhil Pinnamaraju",
        "€249.04",
        "10 Nelson Close",
        "Crownhill",
        "Milton Keynes",
        "GB",
        "MK8 0DL",
        "4111 1111 1111 1111",
        "08/20",
        "345",
        "29-May-2020",
        "VISA",
        "PŁATNY"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"de\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHGERMAN\" and \"7\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"Less than 2.5 metre\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Dover\" and \"Calais\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"AKHGERMAN\",\"7\",\"Less than 2.5 metre\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"£ 89.76\",\"£ 17.95\" and \"£ 107.71\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Akhil Pinnamaraju\" and \"£107.71\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"10 Nelson Close\",\"Crownhill\",\"Milton Keynes\",\"GB\" and \"MK8 0DL\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 1111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"Dover to Calais\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"AKHGERMAN\",\"7\",\"Less than 2.5 metre\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"£ 89.76\",\"£ 17.95\" and \"£ 107.71\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"29-May-2020\",\"VISA\" and \"BEZAHLT\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I capture the waybillNumber",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"fr\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHFRENCH\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Dover\" and \"Calais\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"AKHFRENCH\",\"10\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"£ 155.66\",\"£ 31.13\" and \"£ 186.79\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Akhil Pinnamaraju\" and \"£186.79\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"10 Nelson Close\",\"Crownhill\",\"Milton Keynes\",\"GB\" and \"MK8 0DL\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 1111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"Dover to Calais\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"AKHFRENCH\",\"10\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"£ 155.66\",\"£ 31.13\" and \"£ 186.79\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"29-May-2020\",\"VISA\" and \"PAYÉ\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I capture the waybillNumber",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"nl\" and \"Feet\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"Euro\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHDUTCH\" and \"46.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Calais\" and \"Dover\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"AKHDUTCH\",\"46.00\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"€ 207.53\",\"€ 41.51\" and \"€ 249.04\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Akhil Pinnamaraju\" and \"€249.04\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"10 Nelson Close\",\"Crownhill\",\"Milton Keynes\",\"GB\" and \"MK8 0DL\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 1111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"Calais to Dover\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"AKHDUTCH\",\"46.00\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"€ 207.53\",\"€ 41.51\" and \"€ 249.04\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"29-May-2020\",\"VISA\" and \"BETAALD\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I capture the waybillNumber",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"es\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHSPANNISH\" and \"7\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"Less than 2.5 metre\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Dover\" and \"Calais\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"AKHSPANNISH\",\"7\",\"Less than 2.5 metre\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"£ 89.76\",\"£ 17.95\" and \"£ 107.71\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Akhil Pinnamaraju\" and \"£107.71\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"10 Nelson Close\",\"Crownhill\",\"Milton Keynes\",\"GB\" and \"MK8 0DL\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 1111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"Dover to Calais\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"AKHSPANNISH\",\"7\",\"Less than 2.5 metre\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"£ 89.76\",\"£ 17.95\" and \"£ 107.71\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"29-May-2020\",\"VISA\" and \"PAGADO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I capture the waybillNumber",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILENG\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Dover\" and \"Calais\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"AKHILENG\",\"10\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"£ 155.66\",\"£ 31.13\" and \"£ 186.79\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Akhil Pinnamaraju\" and \"£186.79\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"10 Nelson Close\",\"Crownhill\",\"Milton Keynes\",\"GB\" and \"MK8 0DL\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 1111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"Dover to Calais\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"AKHILENG\",\"10\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"£ 155.66\",\"£ 31.13\" and \"£ 186.79\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"29-May-2020\",\"VISA\" and \"PAID\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I capture the waybillNumber",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"pl\" and \"Feet\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"Euro\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILPOLISH\" and \"46.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I slect the vehicle \"NA\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_slect_the_vehicle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for vehicle \"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_vehicle_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Vehicle Registration Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Vehicle_Registration_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Review Booking Details Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Review_Booking_Details_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Calais\" and \"Dover\" ports",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and_ports(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the vehicle \"AKHILPOLISH\",\"46.00\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the number of \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"€ 207.53\",\"€ 41.51\" and \"€ 249.04\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the \"YES\" checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_checkbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a selection for \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_a_selection_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Proceed To Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Proceed_To_Payment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Payment_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Akhil Pinnamaraju\" and \"€249.04\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"10 Nelson Close\",\"Crownhill\",\"Milton Keynes\",\"GB\" and \"MK8 0DL\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"4111 1111 1111 1111\",\"08/20\" and the \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_and_the(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayNow button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the payment success survey popup if required",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_close_the_payment_success_survey_popup_if_required()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify confirmed \"Calais to Dover\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_confirmed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed vehicle \"AKHILPOLISH\",\"46.00\",\"NA\",\"YES\" and \"YES\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_vehicle_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed number of \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_number_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Amounts \"€ 207.53\",\"€ 41.51\" and \"€ 249.04\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Amounts_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the confirmed Payment Details \"29-May-2020\",\"VISA\" and \"PŁATNY\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_confirmed_Payment_Details_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I capture the waybillNumber",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/Profile.feature");
formatter.feature({
  "name": "Verify Profile Page field validations",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify error messages when invalid data is entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the \"\u003cfirstName\u003e\" in the first name field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003clastName\u003e\" in the last name field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cmobileNumber\u003e\" in the mobile number field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccompanyTitle\u003e\" in the company title field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccompanyName\u003e\" in the company name field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cpostCode\u003e\" in the post code field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccity\u003e\" in the city field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003caddressLine1\u003e\" in the addressLine One Field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003caddressLine2\u003e\" in the addressLine two Field",
  "keyword": "And "
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the first name \"\u003cfirstNameError\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the last name \"\u003clastNameError\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the mobileNumber \"\u003cmobileNumberError\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the company title \"\u003ccompanyTitleError\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the company name \"\u003ccompanyNameError\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the postCode \"\u003cpostCodeError\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the city \"\u003ccityError\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the address Line One \"\u003cAddressLine1Error\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the address Line two \"\u003cAddressLine2Error\u003e\" error message",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "firstName",
        "lastName",
        "mobileNumber",
        "companyTitle",
        "companyName",
        "postCode",
        "city",
        "addressLine1",
        "addressLine2",
        "firstNameError",
        "lastNameError",
        "mobileNumberError",
        "companyTitleError",
        "companyNameError",
        "postCodeError",
        "cityError",
        "AddressLine1Error",
        "AddressLine2Error"
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "First name is required.",
        "Last Name is required.",
        "This field is required.",
        "NA",
        "NA",
        "Postcode is required.",
        "Town is required.",
        "Address Line One is required.",
        "Address Line Two is required."
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "£$@@",
        "@£$$£",
        "+44 7968837678",
        "£$!£",
        "£!££!£!!£",
        "@££$%",
        "@££$",
        "121212212",
        "213131313",
        "Enter a valid name",
        "Enter a valid name.",
        "Invalid telephone number! Please use numbers only. For example, +44 should be entered as 0044.",
        "Letters and numbers only please.",
        "NA",
        "Please remove special characters, use letters and numbers only.",
        "Letters and numbers only please.",
        "Please include the full street name as well as the number.",
        "Please include the full street name as well as the number."
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "213323223",
        "2113213",
        "(0)44 7969958462",
        "£$!£",
        "£!££!£!!£",
        "@££$%",
        "@££$",
        "@££$%",
        "^\u0026*()",
        "Enter a valid name",
        "Enter a valid name.",
        "Invalid telephone number! Please use numbers only. For example, +44 should be entered as 0044.",
        "Letters and numbers only please.",
        "NA",
        "Please remove special characters, use letters and numbers only.",
        "Letters and numbers only please.",
        "Please include the full street name as well as the number.",
        "Please include the full street name as well as the number."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify error messages when invalid data is entered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the first name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_first_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the last name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_last_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the company title field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_title_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the company name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the post code field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_post_code_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the city field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_city_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the addressLine One Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_One_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"NA\" in the addressLine two Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_two_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_save_profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the first name \"First name is required.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_first_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the last name \"Last Name is required.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_last_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the mobileNumber \"This field is required.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_mobileNumber_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the company title \"NA\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_company_title_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the company name \"NA\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_company_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the postCode \"Postcode is required.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_postCode_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the city \"Town is required.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_city_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the address Line One \"Address Line One is required.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_address_Line_One_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the address Line two \"Address Line Two is required.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_address_Line_two_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify error messages when invalid data is entered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"£$@@\" in the first name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_first_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"@£$$£\" in the last name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_last_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"+44 7968837678\" in the mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"£$!£\" in the company title field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_title_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"£!££!£!!£\" in the company name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"@££$%\" in the post code field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_post_code_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"@££$\" in the city field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_city_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"121212212\" in the addressLine One Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_One_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"213131313\" in the addressLine two Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_two_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_save_profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the first name \"Enter a valid name\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_first_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the last name \"Enter a valid name.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_last_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the mobileNumber \"Invalid telephone number! Please use numbers only. For example, +44 should be entered as 0044.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_mobileNumber_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the company title \"Letters and numbers only please.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_company_title_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the company name \"NA\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_company_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the postCode \"Please remove special characters, use letters and numbers only.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_postCode_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the city \"Letters and numbers only please.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_city_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the address Line One \"Please include the full street name as well as the number.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_address_Line_One_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the address Line two \"Please include the full street name as well as the number.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_address_Line_two_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify error messages when invalid data is entered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"213323223\" in the first name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_first_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"2113213\" in the last name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_last_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"(0)44 7969958462\" in the mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"£$!£\" in the company title field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_title_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"£!££!£!!£\" in the company name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"@££$%\" in the post code field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_post_code_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"@££$\" in the city field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_city_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"@££$%\" in the addressLine One Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_One_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"^\u0026*()\" in the addressLine two Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_two_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_save_profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the first name \"Enter a valid name\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_first_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the last name \"Enter a valid name.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_last_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the mobileNumber \"Invalid telephone number! Please use numbers only. For example, +44 should be entered as 0044.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_mobileNumber_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the company title \"Letters and numbers only please.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_company_title_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the company name \"NA\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_company_name_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the postCode \"Please remove special characters, use letters and numbers only.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_postCode_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the city \"Letters and numbers only please.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_city_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the address Line One \"Please include the full street name as well as the number.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_address_Line_One_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the address Line two \"Please include the full street name as well as the number.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_address_Line_two_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify wheather profile changes have been updated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the \"\u003cUserName\u003e\" in the username edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cPassword\u003e\" in the password edit Box",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the \"\u003cfirstName\u003e\" in the first name field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003clastName\u003e\" in the last name field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003cmobileNumber\u003e\" in the mobile number field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccompanyTitle\u003e\" in the company title field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccompanyName\u003e\" in the company name field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter an invalid \"\u003cpostCode\u003e\" in the post code field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003ccity\u003e\" in the city field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003caddressLine1\u003e\" in the addressLine One Field",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \"\u003caddressLine2\u003e\" in the addressLine two Field",
  "keyword": "And "
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify that the profile has been saved",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify the saved first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved phone number \"\u003cmobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved company title \"\u003ccompanyTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved company name \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved post code \"\u003cpostCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved addressLineOne \"\u003caddressLine1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the saved addressLineTwo \"\u003caddressLine2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "firstName",
        "lastName",
        "mobileNumber",
        "companyTitle",
        "companyName",
        "postCode",
        "city",
        "addressLine1",
        "addressLine2"
      ]
    },
    {
      "cells": [
        "akhilpinnamaraju004@yahoo.com",
        "Shogun5050",
        "Akhil",
        "Raju",
        "07678847271",
        "Mr",
        "POFerries",
        "MK105BS",
        "Milton Keynes",
        "5 Road",
        "Close"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the P\u0026O Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_P_O_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify wheather profile changes have been updated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"akhilpinnamaraju004@yahoo.com\" in the username edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_username_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Shogun5050\" in the password edit Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_in_the_password_edit_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the profile link and verify navigation to the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_profile_link_and_verify_navigation_to_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Akhil\" in the first name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_first_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Raju\" in the last name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_last_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"07678847271\" in the mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Mr\" in the company title field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_title_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"POFerries\" in the company name field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_company_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an invalid \"MK105BS\" in the post code field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_an_invalid_in_the_post_code_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Milton Keynes\" in the city field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_city_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"5 Road\" in the addressLine One Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_One_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"Close\" in the addressLine two Field",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_in_the_addressLine_two_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the save profile button",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_save_profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the profile has been saved",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_that_the_profile_has_been_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved first name \"Akhil\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved last name \"Raju\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved phone number \"07678847271\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved company title \"Mr\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_company_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved company name \"POFerries\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_company_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved post code \"MK105BS\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_post_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved city \"Milton Keynes\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved addressLineOne \"5 Road\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_addressLineOne(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the saved addressLineTwo \"Close\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_saved_addressLineTwo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/VehicleLengthGreaterThan22m.feature");
formatter.feature({
  "name": "Vehicle length greater than TwentyTwo metre.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"\u003clanguage\u003e\" and \"\u003clengthUnit\u003e\" units",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"\u003croute\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"\u003ccurrencyUnit\u003e\" and the country of origin \"\u003coriginCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Vehicle Reg \"\u003cregistrationNo\u003e\" and \"\u003clength\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the large vehicle length \"\u003cmessage\u003e\" based on \"\u003cjourneyType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify the  large vehicle length depart \"\u003cport\u003e\" and \"\u003ccontactTiming\u003e\" based on \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the  large vehicle length return \"\u003creturnPort\u003e\" and \"\u003creturnContactTiming\u003e\" based on \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the large vehicle length contact \"\u003ctelephoneNo\u003e\" and \"\u003cemailAddress\u003e\" based on \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the large vehicle length return contact \"\u003creturnTelephoneNo\u003e\" and \"\u003creturnEmailAddress\u003e\" based on \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Vehicle Length Back Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currencyUnit",
        "lengthUnit",
        "language",
        "originCountry",
        "route",
        "passengers",
        "journeyType",
        "dangerousGoods",
        "pets",
        "registrationNo",
        "length",
        "message",
        "port",
        "returnPort",
        "contactTiming",
        "returnContactTiming",
        "telephoneNo",
        "returnTelephoneNo",
        "emailAddress",
        "returnEmailAddress"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHILAUTO1",
        "23",
        "Please contact Dover operations team for larger vehicles.",
        "Dover",
        "NA",
        "24/7",
        "NA",
        "+44 (0)1304 862539",
        "NA",
        "freightops.dover@poferries.com",
        "NA"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHILAUTO2",
        "22.01",
        "Please contact Dover operations team for larger vehicles.",
        "Calais",
        "NA",
        "24/7",
        "NA",
        "+33 (0)321 461020",
        "NA",
        "freightops.calais@poferries.com",
        "NA"
      ]
    },
    {
      "cells": [
        "GBP",
        "Feet",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHILAUTO1",
        "72.19",
        "Please contact Dover operations team for larger vehicles.",
        "Dover",
        "NA",
        "24/7",
        "NA",
        "+44 (0)1304 862539",
        "NA",
        "freightops.dover@poferries.com",
        "NA"
      ]
    },
    {
      "cells": [
        "GBP",
        "Feet",
        "en",
        "United Kingdom",
        "Calais to Dover",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHILAUTO2",
        "72.20",
        "Please contact Dover operations team for larger vehicles.",
        "Calais",
        "NA",
        "24/7",
        "NA",
        "+33 (0)321 461020",
        "NA",
        "freightops.calais@poferries.com",
        "NA"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO1\" and \"23\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length \"Please contact Dover operations team for larger vehicles.\" based on \"OneWay\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_based_on(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length depart \"Dover\" and \"24/7\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_depart_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length return \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length contact \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length return contact \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Vehicle Length Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Vehicle_Length_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO2\" and \"22.01\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length \"Please contact Dover operations team for larger vehicles.\" based on \"OneWay\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_based_on(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length depart \"Calais\" and \"24/7\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_depart_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length return \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length contact \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length return contact \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Vehicle Length Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Vehicle_Length_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Feet\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO1\" and \"72.19\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length \"Please contact Dover operations team for larger vehicles.\" based on \"OneWay\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_based_on(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length depart \"Dover\" and \"24/7\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_depart_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length return \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length contact \"+44 (0)1304 862539\" and \"freightops.dover@poferries.com\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length return contact \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Vehicle Length Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Vehicle_Length_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a booking for a prelodgement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Feet\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Calais to Dover\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHILAUTO2\" and \"72.20\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length \"Please contact Dover operations team for larger vehicles.\" based on \"OneWay\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_based_on(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length depart \"Calais\" and \"24/7\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_depart_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the  large vehicle length return \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length contact \"+33 (0)321 461020\" and \"freightops.calais@poferries.com\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the large vehicle length return contact \"NA\" and \"NA\" based on \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_large_vehicle_length_return_contact_and_based_on(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Vehicle Length Back Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Vehicle_Length_Back_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/web/VehicleReg.feature");
formatter.feature({
  "name": "Vehicle Registration Field",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Amend Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I set the \"\u003clanguage\u003e\" and \"\u003clengthUnit\u003e\" units",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.step({
  "name": "I select the \"\u003croute\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I select the journey type as \"\u003cjourneyType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the currency \"\u003ccurrencyUnit\u003e\" and the country of origin \"\u003coriginCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I select the number of passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I make selections for \"\u003cdangerousGoods\u003e\" and \"\u003cpets\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Vehicle Reg \"\u003cregistrationNo\u003e\" and \"\u003clength\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the displayed vehicle reg \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currencyUnit",
        "lengthUnit",
        "language",
        "originCountry",
        "route",
        "passengers",
        "journeyType",
        "dangerousGoods",
        "pets",
        "registrationNo",
        "length",
        "message"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "AKHIL ENG",
        "10",
        "Letters and numbers only please"
      ]
    },
    {
      "cells": [
        "GBP",
        "Metre",
        "en",
        "United Kingdom",
        "Dover to Calais",
        "2",
        "OneWay",
        "NO",
        "NO",
        "£*^%$",
        "10",
        "Letters and numbers only please"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Amend Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"AKHIL ENG\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed vehicle reg \"Letters and numbers only please\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_vehicle_reg(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the PO Ferries Freight Website",
  "keyword": "Given "
});
formatter.match({
  "location": "MakeABookingSteps.i_navigate_to_the_PO_Ferries_Freight_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Now Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_Book_Now_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verfy navigation to the Account holders Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verfy_navigation_to_the_Account_holders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the PayAndGo SignIn Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_PayAndGo_SignIn_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_verify_navigation_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Amend Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I set the \"en\" and \"Metre\" units",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_set_the_and_units(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Book Link",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_the_Book_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Book Now Page",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Book_Now_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the \"Dover to Calais\"",
  "keyword": "When "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the journey type as \"OneWay\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_journey_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the currency \"GBP\" and the country of origin \"United Kingdom\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_currency_and_the_country_of_origin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the number of passengers \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_select_the_number_of_passengers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make selections for \"NO\" and \"NO\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_make_selections_for_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click continue on the Select Route Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_click_continue_on_the_Select_Route_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation to the Vehicle Reg Form",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_navigation_to_the_Vehicle_Reg_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Vehicle Reg \"£*^%$\" and \"10\"",
  "keyword": "And "
});
formatter.match({
  "location": "MakeABookingSteps.i_enter_the_Vehicle_Reg_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the displayed vehicle reg \"Letters and numbers only please\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeABookingSteps.i_verify_the_displayed_vehicle_reg(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the LogOut Link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_the_LogOut_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});