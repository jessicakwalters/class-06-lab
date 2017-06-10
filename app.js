'use strict';

//Variables & objects

//First and Pike object
var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  openHour: 6,
  closeHour: 20,
  storeId: 'firstAndPike',
//generate random number for number of customers per hour
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};

//seaTacAirport object
var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  openHour: 6,
  closeHour: 20,
  storeId: 'seaTacAirport',
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};

//SeattleCenter Object
var seattleCenter = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  openHour: 6,
  closeHour: 20,
  storeId: 'seattleCenter',
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};

//Capitol Hill Object
var capitolHill = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  openHour: 6,
  closeHour: 20,
  storeId: 'capitolHill',
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};

//alki object
var alki = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  openHour: 6,
  closeHour: 20,
  storeId: 'alki',
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};

//stores array
var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

//function
function cookiesPerStore(array){
//loop through stores array
  for (var i = 0; i < array.length; i++){
    //set current store
    var currentStore = array[i];
    console.log(currentStore.storeId);
// total cookies per hour
    currentStore.calcCookiesPerHour = function() {
      console.log('Hours: ' + currentStore.openHour + ' to ' + currentStore.closeHour);
      for (var k = currentStore.openHour; k < currentStore.closeHour; k++) {
    //make sure to round amount becuase you can't bake/sell partial cookies
        currentStore.cookiesPerHour = Math.round(currentStore.avgCookiesPerSale * currentStore.customersPerHour());
        //add number of cookies to array
        currentStore.cookiesPerHourArray.push(currentStore.cookiesPerHour);
        //add number of cookies and time to array
        currentStore.cookiesDataArray.push(k + ':00 ' + currentStore.cookiesPerHour + ' cookies');
      }
    };
    //call cookies per hour function
    currentStore.calcCookiesPerHour();
    //calculate total cookies per day

    currentStore.totalCookiesPerDay = currentStore.cookiesPerHourArray.reduce(function(previousVal, currentVal) {
      return previousVal + currentVal;
    }, 0);
    console.log('Total Cookies Per Day: ' + currentStore.totalCookiesPerDay);

    //add total cookies sold per day to array
    currentStore.cookiesDataArray.push('Total Daily Cookies: ' + currentStore.totalCookiesPerDay);
    console.log('Cookies Data Array: ' + currentStore.cookiesDataArray);

    currentStore.cookiesPerHourArray.push(currentStore.totalCookiesPerDay);
    console.log('Cookies Per Hour Array: ' + currentStore.cookiesPerHourArray);

    // write info to page
    for (var j = 0; j < currentStore.cookiesDataArray.length; j++) {
    //create new element
      var newLi = document.createElement('li');
      var liText = document.createTextNode(currentStore.cookiesDataArray[j]);
    //append to parent element
      newLi.appendChild(liText);
    //set position
      var positionLi = document.getElementById(currentStore.storeId);
      positionLi.appendChild(newLi);
    };

  }
};

//call all stores
cookiesPerStore(stores);
