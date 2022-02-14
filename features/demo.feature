Feature: Calculator feature

@FirstTest
Scenario Outline: Validate add functionality in calculator

Given I will navigate to "Calc" website
When I add two numbers "<key1>" and "<key2>"
Then The output displayed should be "<key3>"

Examples:
    | key1  | key2   | key3 |
    | 3     | 5      | 8    |
    | 2     | 2      | 4    |
    | 3     | 4      | 7    |

@SecondTest
Scenario Outline: Validate add functionality in calculator

Given I will navigate to "Calc" website
When I add two numbers "<key1>" and "<key2>"
Then The output displayed should be "<key3>"

Examples:
    | key1  | key2   | key3 |
    | 3     | 5      | 8    |
    | 2     | 2      | 4    |
    | 3     | 4      | 7    |
