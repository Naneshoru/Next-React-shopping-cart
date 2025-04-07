Feature: App
	Scenario: Navigating to a page
		Given Im on the initial page
		When I click on the button
		Then I navigate to the data page
		And I should see the data populating the input field