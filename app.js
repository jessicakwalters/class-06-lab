'use strict';

//Variables & objects
var stores = [];
//var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
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
  stores.push(this);
}

Store.prototype.customersPerHour = function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
};

//create table header function
var createTableHeader = function(array) {
  var newThRow = document.createElement('tr');
  positionTable.appendChild(newTHead);
  newTHead.appendChild(newThRow);
  for (var j = 0; j < array.length; j++) {
    var newTh = document.createElement('th');
    newThRow.appendChild(newTh);
    newTh.textContent = array[j];
    if (j === 0){
      newTh.id = 'firstItem';
    };
  };
};
//createTableBody functin
var createTableBody = function(array) {
  positionTable.appendChild(newTBody);
  for (var i = 0; i < array.length; i++) {
    array[i].createTableTbRow();
  };
};

Store.prototype.createTableTbRow = function() {
  var newTbRow = document.createElement('tr');
  newTBody.appendChild(newTbRow);
  //write table data to page
  for (var j = 0; j < this.cookiesPerHourArray.length; j++) {
    var newTbTd = document.createElement('td');
    if (j === 0){
      newTbTd.id = 'firstItem';
    };
    newTbRow.appendChild(newTbTd);
    newTbTd.textContent = this.cookiesPerHourArray[j];
  };
};
//create table footer
var createTableFooter = function(array) {
  //calculate cookies per hour across every location
  // for (var l = 1; l <= 16; l++){
  //   var hourlyTotal = 0;
  //   for (var i = 0; i < stores.length; i++){
  //   //set current store
  //     var currentStore = stores[i];
  //     hourlyTotal = hourlyTotal + currentStore.cookiesPerHourArray[l];
  //   };
  //   totalHourlyCookies.push(hourlyTotal);
  // }
  //write to page logic
  var newTFoot = document.createElement('tfoot');
  var newTfRow = document.createElement('tr');
  positionTable.appendChild(newTFoot);
  newTFoot.appendChild(newTfRow);
  for (var j = 0; j < totalHourlyCookies.length; j++) {
    var newTfTh = document.createElement('th');
    newTfTh.textContent = totalHourlyCookies[j];
    newTfRow.appendChild(newTfTh);
    if (j === 0){
      newTfTh.id = 'firstItem';
    };
  };
};

//calculate table footer data
var tableFooterData = function(array) {
  for (var l = 1; l < universalStoreHours.length; l++){
    var hourlyTotal = 0;
    for (var i = 0; i < array.length; i++){
    //set current store
      var currentStore = array[i];
      hourlyTotal = hourlyTotal + currentStore.cookiesPerHourArray[l];
    };
    totalHourlyCookies.push(hourlyTotal);
  }
};
//create objects
var firstAndPike = new Store(23, 65, 6.3, 6, 20, '1st and Pike');
var seaTacAirport = new Store(3, 24, 1.2, 6, 20, 'SeaTac Airport');
var seattleCenter = new Store(11, 38, 3.7, 6, 20, 'Seattle Center');
var capitolHill = new Store(20, 38, 2.3, 6, 20, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 6, 20, 'Alki');

//stores & hours array
var totalHourlyCookies = ['Total:'];
var universalStoreHours = ['Hours:', '6:00am', '7:00am' , '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];

//DOM Variables
var positionTable = document.getElementById('table');
var newTHead = document.createElement('thead');
var newTBody = document.createElement('tbody');

//Create an array for each store that stores total cookies produced each hour
var calculateTotalCookies = function(array) {
  for (var i = 0; i < array.length; i++){

    //set current store
    var currentStore = array[i];
    console.log(currentStore.storeId);

  // calculate total cookies per hour
    currentStore.calcCookiesPerHour = function() {
      for (var k = currentStore.openHour; k < currentStore.closeHour + 1; k++) {

    //make sure to round amount becuase you can't bake/sell partial cookies
        currentStore.cookiesPerHour = Math.ceil(currentStore.avgCookiesPerSale * currentStore.customersPerHour());
        currentStore.cookiesPerHourArray.push(currentStore.cookiesPerHour);
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
    currentStore.cookiesPerHourArray.push(currentStore.totalCookiesPerDay);
    currentStore.cookiesPerHourArray.unshift(currentStore.storeId);
  };
};

console.log(stores);
//Form Element Handler
var formEl = document.getElementById('newLocation');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();

  var storeName = event.target.storeName.value;
  var openHour = parseInt(event.target.openHour.value);
  var closeHour = parseInt(event.target.closeHour.value);
  var avgCookiesPerSale = parseInt(event.target.avgCookiesPerSale.value);
  var minHourlyCustomers = parseInt(event.target.minHourlyCustomers.value);
  var maxHourlyCustomers = parseInt(event.target.maxHourlyCustomers.value);

  var newStore = new Store(minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale, openHour, closeHour, storeName);
  console.log(newStore);
  console.log(stores);
  var newStores = [newStore];
  calculateTotalCookies(newStores);
  newStore.createTableTbRow();
  document.getElementById('table').deleteRow(-1);
  totalHourlyCookies = ['Total:'];
  console.log(stores);
  tableFooterData(stores);
  console.log(totalHourlyCookies);
  createTableFooter(stores);
};

calculateTotalCookies(stores);
createTableHeader(universalStoreHours);
createTableBody(stores);
tableFooterData(stores);
createTableFooter(stores);
// calculateTotalCookies(stores);
// createTableHeader(universalStoreHours);
// createTableBody(stores);
// tableFooterData(stores);
// createTableFooter(stores);

//END
