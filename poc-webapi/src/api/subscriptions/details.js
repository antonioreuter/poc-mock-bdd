'use strict';

const SubscriptionService = require('../../services/subscriptionService');

const service = new SubscriptionService();

module.exports.perform = async (event, context) => {
  const subscriptionId = event.pathParameters.id;
  console.log(`Fetching the subscription ${subscriptionId}`);

  try {
    const result = await service.findById(subscriptionId);
    if (result) {
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Resource not found!"
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message
      })
    };
  }
};
