const axios = require('axios')
axios.get('https://peaceful-inlet-88854.herokuapp.com/api/employees')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })

axios.post('https://peaceful-inlet-88854.herokuapp.com/api/employees', {
    "id": "824",
    "name": "Kaiju Sentinel",
    "phone": "5478736785",
    "email": "sentinels@seven.com",
    "title": "Cool game"
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })

axios.put('https://peaceful-inlet-88854.herokuapp.com/api/employees/824?name=13 Sentinels&phone=1234565432&title=Therapist&email=beef.com')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })

axios.delete('https://peaceful-inlet-88854.herokuapp.com/api/employees/824')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })

