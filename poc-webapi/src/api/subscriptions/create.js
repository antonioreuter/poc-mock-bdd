'use strict';

const SubscriptionService = require('../../services/subscriptionService');

const service = new SubscriptionService();

module.exports.perform = async (event, context) => {
  const subscription = JSON.parse(event.body);
  console.log(`Saving subscription: ${subscription.name}`);

  try {
    const result = await service.save(subscription);

    return {
      statusCode: 201,
      body: JSON.stringify(result)
    };

  } catch(err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message
      }),
    };
  }
};
