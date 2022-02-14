Feature: NAM Login

# Scenario: NAM Login with valid creds

# Given I will navigate to "HS" website
# When I enter "ngp-admin", "Pa55w0rd" and click on login button
# Then I should be navigated to "Common Services" homepage
# When I click on the "DMS" link
# Then I should be navigated to "Data Management" homepage
# When I select the pipeline with name "DWDM_cache"
# Then I should be navigated to "Data Management" homepage

Scenario: Login to NAM with valid creds

Given I will navigate to "NAM" website
When I enter "ngp-admin", "Subex@123" and click on login button
Then I should be navigated to "Common Services" homepage


Scenario: Navigate to Asset Inventory screen and validate violation details of an asset

When I click on the "Asset Management" link
Then I should be navigated to "Asset Management" homepage
When I expand 1 row asset details
And I navigate to "Violations" tab
Then I should be able to see valid violation details of the asset

Scenario Outline: Validate asset details of an asset

Given I navigate to "Asset view" tab
Then I should be able to see valid "<section>" of the Asset

Examples:
    |section       |
    |Asset Details |
    |Network       |
    |Warehouse     |
    |Purchase Order|
