@Regression
Feature: Signing in to Web with correct account details
  As User I should be able to sign in once I provide the correct account details.

  Background: 
    Given I navigate to the salesforce Website

  #  And I click the Book Now Link
  #  And I verfy navigation to the Account holders Page
  #  And I click the PayAndGo SignIn Link
  #  And I verify navigation to the Login page
  
  Scenario Outline: LogIn and Logout with Valid Credentials
  
    When I enter the userName in the username edit Box
    #   When I enter the "<UserName>" in the username edit Box
    And I enter the password in the password edit Box
    And I click the LogIn button
    # And I click on dont lose access close button
    And I click on dashBoard link
    And I click on newDashboard link
    And Enter name in new bashboard form from Excel
    And Enter description in the form
    And I click on create button
    And I click on accout link
    And I click on contacts link
    And I click on New button link
    And I click on salutation field
    And Enter data in firstname input field
    And Enter data in lastname input field
    And I click on account field
	  And I click on save button on new contact
    #Then Verify Success Contact "<FirstName>""<lastName>" was created Close
    And I click on profile image icon
    Then Verify signOut button is displayed or not
    And I click on Signout button

    # When I enter the "<userName>" in the username edit Box
    # And I enter the "<password>" in the password edit Box
    # And I click the LogIn button
    #Then I verify navigation to the Home Page
    # And I click the LogOut Link
    # And I verify navigation to the Landing Page
    Examples: 
      | userName                  | password    |
      | tcsitltd41-tnbh@force.com | kpk8910123@ |
