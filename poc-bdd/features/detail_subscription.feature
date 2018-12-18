Feature: Detail a subscription

  Scenario Outline: Request all the subscription    
    When I make a GET request to "/subscriptions/<id>"
    Then I get a "<statusCode>" response status code
    And the service name is "<serviceName>"
    And the subscription name is "<subscriptionName>"

  Examples:
  | id | serviceName | statusCode | subscriptionName |
  | 859385a0-02d8-11e9-beb5-570bcacb7a3e | MDM Service | 200 | My first subscription |
  | bbb | Resource not found! | 404 | undefined |
  | 286a6c20-02da-11e9-99e0-b750659c1277 | BLOB Service | 200 | My second subscription |