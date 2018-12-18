const AWS = require('aws-sdk');
const uuid = require('uuid');

module.exports = class SubscriptionService {
  constructor() {
    this.dbClient = new AWS.DynamoDB.DocumentClient();
  }

  async save(subscription) {
    if (!subscription.id) {
      subscription.id = uuid.v1();
      subscription.createdAt = new Date().getTime();
    }

    const params = {
      TableName: process.env.SUBSCRIPTION_TABLE,
      Item: subscription
    };

    await this.dbClient.put(params).promise();
    console.log(`Subscription registered with success: ${JSON.stringify(subscription)}`);

    return subscription;
  }

  async list() {
    const params = {
      TableName: process.env.SUBSCRIPTION_TABLE
    };

    const result = await this.dbClient.scan(params).promise()
    console.log(`Subscriptions fetched: ${JSON.stringify(result)}`);

    return result.Items;
  }

  async findById(subscriptionId) {
    const params = {
      TableName: process.env.SUBSCRIPTION_TABLE,
      Key: {
        id: subscriptionId
      }
    };

    const result = await this.dbClient.get(params).promise();
    console.log(`Subscription fetched: ${JSON.stringify(result)}`);

    return result.Item;
  }
}