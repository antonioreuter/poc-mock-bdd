const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const restUtil = require('../../helpers/restUtil');

When('I make a GET request to {string}', async function (endpoint) {
  this.response = await restUtil.get(endpoint);  
});

Then('I get a {string} response status code', function (statusCode) {
  assert.equal(this.response.status, statusCode);
});

Then('the response is:', function (docString) {
  assert.deepEqual(this.response.data, JSON.parse(docString));
});

Then('the service name is {string}', function (serviceName) {
  if (this.response.status === 200) {
    assert.equal(this.response.data.service, serviceName);
  } else {
    assert.equal(this.response.data.message, serviceName);
  }
});

Then('the subscription name is {string}', function (subscriptionName) {
  if (this.response.status === 200) {
    assert.equal(this.response.data.name, subscriptionName);
  }
});