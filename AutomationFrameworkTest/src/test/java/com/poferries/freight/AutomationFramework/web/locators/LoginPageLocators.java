package com.poferries.freight.AutomationFramework.web.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPageLocators {

	@FindBy(how = How.ID, using = "username")
	public WebElement userNameEdit;

	@FindBy(how = How.ID, using = "password")
	public WebElement passwordEdit;

	@FindBy(how = How.ID, using = "Login")
	public WebElement loginUserBtn;

	@FindBy(how = How.XPATH, using = "//one-app-nav-bar-item-root[@data-id='Dashboard']//a[@title='Dashboards']")
	public WebElement Dashboardlink;

	@FindBy(how = How.XPATH, using = "//a[@title='New Dashboard']")
	public WebElement NewDashboardlink;

	@FindBy(how = How.XPATH, using = "//iframe[@title='dashboard']")
	public WebElement frameElement;

	@FindBy(how = How.XPATH, using = "//div[@class='slds-modal__content']/descendant::div//input[@id='dashboardNameInput']")
	public WebElement ENterNemeNewDashboardlink;

	@FindBy(how = How.ID, using = "dashboardDescriptionInput")
	public WebElement EnterDescription;

	@FindBy(how = How.ID, using = "submitBtn")
	public WebElement Create_button;

	@FindBy(how = How.XPATH, using = "//h3[contains(text(),'No items to display.')]")
	public WebElement Noitem_text;

	@FindBy(how = How.XPATH, using = "//span[@class='photoContainer forceSocialPhoto']")
	public WebElement ProfileImage;

	@FindBy(how = How.XPATH, using = "//a[@href='/secur/logout.jsp']")
	public WebElement SignoutButton;

	@FindBy(how = How.XPATH, using = "//a[@title='Contacts']")
	public WebElement contact_Link;

	@FindBy(how = How.XPATH, using = "//div[@title='New']")
	public WebElement NewButton;

	@FindBy(how = How.XPATH, using = "//button[@name='salutation']")
	public WebElement Salutationfield;

	@FindBy(how = How.XPATH, using = "//span[@title='Mr.']")
	public WebElement select_MR;

	@FindBy(how = How.XPATH, using = "//button[@name='salutation']")
	public WebElement SalutationfieldForseldctvalue;

	@FindBy(how = How.XPATH, using = "//div[@class='modal-body scrollable slds-modal__content slds-p-around--medium']")
	public WebElement ContactContainer;

	@FindBy(how = How.XPATH, using = "//a[@title='Accounts']")
	public WebElement Account_link;

	@FindBy(how = How.XPATH, using = "//span[@title='test account']")
	public WebElement select_testa_account;

	@FindBy(how = How.XPATH, using = "//button[@name='SaveEdit']")
	public WebElement Save_button_new_contact;

	@FindBy(how = How.XPATH, using = "//button[@class='slds-button slds-button_icon-inverse slds-button_icon slds-modal__close']")
	public WebElement closeButton;

	@FindBy(how = How.XPATH, using = "//input[@name='firstName']")
	public WebElement firstName;

	@FindBy(how = How.XPATH, using = "//input[@name='lastName']")
	public WebElement lastName;

	@FindBy(how = How.XPATH, using = "//input[@class='slds-combobox__input slds-input']")
	public WebElement AccoutField;

	@FindBy(how = How.XPATH, using = "//span[@class='toastMessage slds-text-heading--small forceActionsText']")
	public WebElement toastMessageContacts;

	@FindBy(how = How.XPATH, using = "html/body/div[3]/div")
	public WebElement invalidCredentialsError;

	@FindBy(how = How.XPATH, using = "//*[@class='slds-icon slds-icon_xx-small'][@data-key='close']")
	public WebElement DontLoseAccessCloseButton;

	@FindBy(how = How.XPATH, using = "//*[@id='LoginPass-error']")
	public WebElement passwordError;

	@FindBy(how = How.XPATH, using = "//*[@id='LoginEmail-error']")
	public WebElement usernameError;



}
