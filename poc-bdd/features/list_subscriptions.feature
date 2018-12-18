Feature: List all subscriptions

  Scenario: Request all the subscription
    When I make a GET request to "/subscriptions"
    Then I get a "200" response status code
    And the response is:
    """
      [
        {
          "service": "MDM Service",
          "createdAt": 1545146458874,
          "id": "859385a0-02d8-11e9-beb5-570bcacb7a3e",
          "name": "My first subscription"
        },
        {
          "service": "BLOB Service",
          "createdAt": 1545147161570,
          "id": "286a6c20-02da-11e9-99e0-b750659c1277",
          "name": "My second subscription"
        }
      ]
    """