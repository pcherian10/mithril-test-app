const m = require('mithril');
const { baseURL } = require('../baseURL')

let result = null;

// making request on example API
m.request({
  method: 'GET',
  url: baseURL + '/auth/google',
})
.then((data) => {
  result = data;
});

function getResult() {
  return result;
} 

exports.getResult = getResult;
