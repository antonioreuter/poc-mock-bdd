'use strict';

const SubscriptionService = require('../../services/subscriptionService');

const service = new SubscriptionService();

module.exports.perform = async (event, context) => {
  console.log('Listing all subscriptions...');

  try {
    const result = await service.list();

    return {
      statusCode: 200,
      body: JSON.stringify(result)
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
