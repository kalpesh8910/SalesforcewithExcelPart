package com.poferries.freight.AutomationFramework.web.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.poferries.freight.AutomationFramework.web.locators.ChangePasswordPageLocators;
import com.poferries.freight.AutomationFramework.web.utilities.SeleniumDriver;

public class ChangePasswordPageActions {

	ChangePasswordPageLocators changePasswordPageLocators = null;

	// Constructor initialising the page factory elements
	public ChangePasswordPageActions() {
		this.changePasswordPageLocators = new ChangePasswordPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), changePasswordPageLocators);
	}

	// Enter current password
	public void enterCurrentPassword(String currentPassword) {
		changePasswordPageLocators.currentPassword.sendKeys(currentPassword);
	}

	// clear the current password
	public void clearCurrentPasswordField() {
		changePasswordPageLocators.currentPassword.clear();
	}

	// this method returns the current Password message
	public String getCurrentPasswordError() {
		return changePasswordPageLocators.currentPasswordError.getText();
	}

	// Enter new password
	public void enterNewPassword(String newPassword) {
		changePasswordPageLocators.newPassword.sendKeys(newPassword);
	}

	// clear the new password
	public void clearNewPasswordField() {
		changePasswordPageLocators.newPassword.clear();
	}

	// this method returns the new password error message
	public String getNewPasswordError() {
		return changePasswordPageLocators.newPasswordError.getText();
	}

	// Enter confirm password
	public void enterConfirmPassword(String confirmPassword) {
		changePasswordPageLocators.confirmPassword.sendKeys(confirmPassword);
	}

	// clear the confirm password field
	public void clearConfirmPasswordField() {
		changePasswordPageLocators.confirmPassword.clear();
	}

	// this method returns the confirm password error message
	public String getConfirmPasswordError() {
		return changePasswordPageLocators.confirmPasswordError.getText();
	}

	// the below method clicks on the update password button
	public void clickUpdatePassword() {
		changePasswordPageLocators.updatePassword.click();
	}

	// wait for the current password field to be displayed
	public void waitForCurrentPasswordLink() {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.visibilityOf(changePasswordPageLocators.currentPassword));
	}

	// wait for the current password field to be displayed
	public void waitForPasswordChangedSuccessfullyMessage() {
		SeleniumDriver.getWaitDriver()
				.until(ExpectedConditions.visibilityOf(changePasswordPageLocators.passwordChangedSuccess));
	}

	// this method returns the current Password message
	public String getWrongPasswordError() {
		return changePasswordPageLocators.wrongPasswordError.getText();
	}

	// this method returns the current Password message
	public String getDifferentPasswordError() {
		return changePasswordPageLocators.differentPasswordError.getText();
	}

	// get password changed success message
	public String getPasswordChangedSuccessMessage() {
		return changePasswordPageLocators.passwordChangedSuccess.getText();
	}

	// the below method clicks on the password change success SignIn
	public void clickOnPasswordChangeSuccessSignIn() {
		changePasswordPageLocators.signInPasswordChangeSuccess.click();
	}

}
