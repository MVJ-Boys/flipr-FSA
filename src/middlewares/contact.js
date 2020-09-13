const request = require('request')

const url="https://api.rootnet.in/covid19-in/contacts"

request({url, json:true},(error, {body}={})=>{
    if(error) {
        return console.log("Unable to fetch the API")
    }
    console.log(body.data.contacts.regional)
})