'use strict';

//Variables & objects
//constructor object
function Store(minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale, openHour, closeHour, storeId) {
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.openHour = openHour;
  this.closeHour = closeHour;
  this.storeId = storeId;
  this.Hours = ['Hours:'];
  this.cookiesPerHourArray = [];
  this.cookiesDataArray = [];
  this.customersPerHour = function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;};
}
//create objects
var firstAndPike = new Store(23, 65, 6.3, 6, 20, '1st and Pike');
var seaTacAirport = new Store(3, 24, 1.2, 6, 20, 'SeaTac Airport');
var seattleCenter = new Store(11, 38, 3.7, 6, 20, 'Seattle Center');
var capitolHill = new Store(20, 38, 2.3, 6, 20, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 6, 20, 'Alki');

//stores array
var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
var totalHourlyCookies = ['Total:'];
//function to generate store data
function cookiesPerStore(array){
//loop through stores array
  for (var i = 0; i < array.length; i++){
    //set current store
    var currentStore = array[i];
    console.log(currentStore.storeId);
// total cookies per hour
    currentStore.calcCookiesPerHour = function() {
      console.log('Hours: ' + currentStore.openHour + ' to ' + currentStore.closeHour);
      for (var k = currentStore.openHour; k < currentStore.closeHour + 1; k++) {
    //make sure to round amount becuase you can't bake/sell partial cookies
        currentStore.Hours.push(k + ':00');
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
    currentStore.cookiesPerHourArray.unshift(currentStore.storeId);
    console.log('Cookies Per Hour Array: ' + currentStore.cookiesPerHourArray);
    currentStore.Hours.push('Total');

    //Create table body
    var createTableBody = function() {
      var newTBody = document.createElement('tbody');
      var positionTable = document.getElementById('table');
      positionTable.appendChild(newTBody);
      var newRow = document.createElement('tr');
      newTBody.appendChild(newRow);
      //write table data to page
      for (var j = 0; j < currentStore.cookiesPerHourArray.length; j++) {
        //var newThHours = document.createElement('th');
        var newTd = document.createElement('td');
        newRow.appendChild(newTd);
        newTd.textContent = currentStore.cookiesPerHourArray[j];
      };
    };
    createTableBody();
  }
};
//END
//call all stores
cookiesPerStore(stores);

var universalStoreHours = ['Hours:','6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];

var newTHead = document.createElement('thead');
var newRow = document.createElement('tr');
var positionTable = document.getElementById('table');

var createTableHeader = function() {
  positionTable.appendChild(newTHead);
  newTHead.appendChild(newRow);
  for (var j = 0; j < universalStoreHours.length; j++) {
    var newTh = document.createElement('th');
    newRow.appendChild(newTh);
    newTh.textContent = universalStoreHours[j];
  };
};
// call function and write header to page
createTableHeader();

var createTableFooter = function(array) {
  for (var l = 1; l <= 16; l++){
    var hourlyTotal = 0;
    for (var i = 0; i < array.length; i++){
    //set current store
      var currentStore = array[i];
      hourlyTotal = hourlyTotal + currentStore.cookiesPerHourArray[l];
    };
    totalHourlyCookies.push(hourlyTotal);
  }
  var newTFoot = document.createElement('tfoot');
  var newRow = document.createElement('tr');
  var positionTable = document.getElementById('table');
  positionTable.appendChild(newTFoot);
  newTFoot.appendChild(newRow);
  for (var j = 0; j < totalHourlyCookies.length; j++) {
    var newTh = document.createElement('th');
    newRow.appendChild(newTh);
    newTh.textContent = totalHourlyCookies[j];
  };
};

createTableFooter(stores);
