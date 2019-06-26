const m = require("mithril")
const { baseURL } = require("../../URL")


const User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: `${baseURL}auth/google`,
            withCredentials: true,
        })
        .then(function(result) {
            console.log(result)
            User.list = result.data
        })
    },
}

module.exports = User


