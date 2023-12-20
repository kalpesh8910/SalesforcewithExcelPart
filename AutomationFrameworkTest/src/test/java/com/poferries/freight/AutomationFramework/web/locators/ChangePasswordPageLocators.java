package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ChangePasswordPageLocators {

	@FindBy(how = How.ID, using = "CurrentPassword")
	public WebElement currentPassword;

	@FindBy(how = How.ID, using = "CurrentPassword-error")
	public WebElement currentPasswordError;

	@FindBy(how = How.ID, using = "NewPassword")
	public WebElement newPassword;

	@FindBy(how = How.ID, using = "NewPassword-error")
	public WebElement newPasswordError;

	@FindBy(how = How.ID, using = "ConfirmPassword")
	public WebElement confirmPassword;

	@FindBy(how = How.ID, using = "ConfirmPassword-error")
	public WebElement confirmPasswordError;

	@FindBy(how = How.ID, using = "UpdatePasswordBtn")
	public WebElement updatePassword;

	@FindBy(how = How.XPATH, using = "/html/body/div[3]/div")
	public WebElement wrongPasswordError;

	@FindBy(how = How.ID, using = "ConfirmPassword-error")
	public WebElement passwordNotSameError;

	@FindBy(how = How.ID, using = "ChangePassErr")
	public WebElement differentPasswordError;

	@FindBy(how = How.XPATH, using = "//*[@id=\"passChangeSuccessModal\"]/div/div/div/p[1]")
	public WebElement passwordChangedSuccess;

	@FindBy(how = How.XPATH, using = "//*[@id=\"passChangeSuccessModal\"]/div/div/div/p[2]/a")
	public WebElement signInPasswordChangeSuccess;

}
