const m = require('mithril');

let result = null;

// making request on example API


m.request({
  method: 'GET',
  url: MITHRIL_SERVER_URL + "/api/current_user"
})
.then(data =>  {
  console.log(data)
  result = data });

function getResult() {
  return result;
} 

exports.getResult = getResult;
