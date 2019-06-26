var m = require("mithril")

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "http://localhost:5000/auth/google",
            withCredentials: true,
        })
        .then(function(result) {
            console.log(result)
            User.list = result.data
        })
    },
}

module.exports = User

