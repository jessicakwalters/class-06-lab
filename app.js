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
var firstAndPike = new Store(23, 65, 6.3, 6, 20, 'firstAndPike');
var seaTacAirport = new Store(3, 24, 1.2, 6, 20, 'seaTacAirport');
var seattleCenter = new Store(11, 38, 3.7, 6, 20, 'seattleCenter');
var capitolHill = new Store(20, 38, 2.3, 6, 20, 'capitolHill');
var alki = new Store(2, 16, 4.6, 6, 20, 'alki');

//stores array
var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

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
      for (var k = currentStore.openHour; k < currentStore.closeHour; k++) {
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

    // create function to write table header to page
    var createTableHeader = function() {
      var newTHead = document.createElement('thead');
      var newRow = document.createElement('tr');
      var positionTable = document.getElementById('table');
      positionTable.appendChild(newTHead);
      newTHead.appendChild(newRow);
      for (var j = 0; j < currentStore.Hours.length; j++) {
        var newTh = document.createElement('th');
        newRow.appendChild(newTh);
        newTh.textContent = currentStore.Hours[j];
      };
    };

    // call function and write header to page
    createTableHeader();
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

//call all stores
cookiesPerStore(stores);
/* OLD CODE
    //create new element
      var newLi = document.createElement('li');
      var liText = document.createTextNode(currentStore.cookiesDataArray[j]);
    //append to parent element
      newLi.appendChild(liText);
    //set position
      var positionLi = document.getElementById(currentStore.storeId);
      positionLi.appendChild(newLi);
*/
//write to table to create table header
/*
//step 1 - create element
var newTable = document.createElement('table');
var newThead = document.createElement('thead');
var newRow = document.createElement('tr');
var newThHours = document.createElement('th');
var newTh = document.createElement('th');

//step 2 - append to parent
var positionTable = document.getElementById(currentStore.storeId);
positionTable.appendChild(newTable);
newTable.appendChild(newThead);
newThead.appendChild(newRow);
newRow.appendChild(newTHours);
newThHours.textContent('Hours:');
newRow.appendChild(newTh);
newTh.textContent = currentStore.cookiesPerHourArray[j];
//step 3 - set position in DOM
*/

//Sample Code
/*
function makeRow(item){
  //Step 1 - create element
  var newRowEl = document.createElement('tr');

  //Step 2 - Configure/Mutate the ROW element
  var itemDataEl = document.createElement('td');
  itemDataEl.textContent = item.name;
  newRowEl.appendChild(itemDataEl);

  var priceDataEl = document.createElement('td');
  priceDataEl.textContent = item.price;
  newRowEl.appendChild(priceDataEl);

  var colorEl = document.createElement('td');
  colorEl.textContent = item.color;
  newRowEl.appendChild(colorEl);

  //Step 3 - Append element to the DOM
  tableBodyEl.appendChild(newRowEl);
}
*/
