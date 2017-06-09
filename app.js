'use strict';
//seaTacAirport
var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};
firstAndPike.calcCookiesPerHour = function() {
  for (var i = 6; i < 20; i++) {
    firstAndPike.cookiesPerHour = Math.round(firstAndPike.avgCookiesPerSale * firstAndPike.customersPerHour());
    firstAndPike.cookiesPerHourArray.push(firstAndPike.cookiesPerHour);
    firstAndPike.cookiesDataArray.push(i + ':00 ' + firstAndPike.cookiesPerHour + ' cookies');
  }
};
firstAndPike.calcCookiesPerHour();
console.log(firstAndPike.cookiesPerHourArray);
console.log(firstAndPike.cookiesDataArray);
firstAndPike.totalCookiesPerDay = firstAndPike.cookiesPerHourArray.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(firstAndPike.totalCookiesPerDay);
firstAndPike.cookiesDataArray.push('Total Daily Cookies: ' + firstAndPike.totalCookiesPerDay);
firstAndPike.cookiesPerHourArray.push(firstAndPike.totalCookiesPerDay);
console.log(firstAndPike.cookiesPerHourArray);
console.log(firstAndPike.cookiesDataArray);

for (var i = 0; i < firstAndPike.cookiesDataArray.length; i++) {
  var newLi = document.createElement('li');
  var liText = document.createTextNode(firstAndPike.cookiesDataArray[i]);
  newLi.appendChild(liText);
  var positionLi = document.getElementById('firstAndPike');
  positionLi.appendChild(newLi);
};

//seaTacAirport
var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};
seaTacAirport.calcCookiesPerHour = function() {
  for (var i = 6; i < 20; i++) {
    seaTacAirport.cookiesPerHour = Math.round(seaTacAirport.avgCookiesPerSale * seaTacAirport.customersPerHour());
    seaTacAirport.cookiesPerHourArray.push(seaTacAirport.cookiesPerHour);
    seaTacAirport.cookiesDataArray.push(i + ':00 ' + seaTacAirport.cookiesPerHour + ' cookies');
  }
};
seaTacAirport.calcCookiesPerHour();
console.log(seaTacAirport.cookiesPerHourArray);
console.log(seaTacAirport.cookiesDataArray);
seaTacAirport.totalCookiesPerDay = seaTacAirport.cookiesPerHourArray.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(seaTacAirport.totalCookiesPerDay);
seaTacAirport.cookiesDataArray.push('Total Daily Cookies: ' + seaTacAirport.totalCookiesPerDay);
seaTacAirport.cookiesPerHourArray.push(seaTacAirport.totalCookiesPerDay);
console.log(seaTacAirport.cookiesPerHourArray);
console.log(seaTacAirport.cookiesDataArray);

for (var i = 0; i < seaTacAirport.cookiesDataArray.length; i++) {
  var newLi = document.createElement('li');
  var liText = document.createTextNode(seaTacAirport.cookiesDataArray[i]);
  newLi.appendChild(liText);
  var positionLi = document.getElementById('seaTacAirport');
  positionLi.appendChild(newLi);
};

//SeattleCenterseattleCenter
var seattleCenter = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};
seattleCenter.calcCookiesPerHour = function() {
  for (var i = 6; i < 20; i++) {
    seattleCenter.cookiesPerHour = Math.round(seattleCenter.avgCookiesPerSale * seattleCenter.customersPerHour());
    seattleCenter.cookiesPerHourArray.push(seattleCenter.cookiesPerHour);
    seattleCenter.cookiesDataArray.push(i + ':00 ' + seattleCenter.cookiesPerHour + ' cookies');
  }
};
seattleCenter.calcCookiesPerHour();
console.log(seattleCenter.cookiesPerHourArray);
console.log(seattleCenter.cookiesDataArray);
seattleCenter.totalCookiesPerDay = seattleCenter.cookiesPerHourArray.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(seattleCenter.totalCookiesPerDay);
seattleCenter.cookiesDataArray.push('Total Daily Cookies: ' + seattleCenter.totalCookiesPerDay);
seattleCenter.cookiesPerHourArray.push(seattleCenter.totalCookiesPerDay);
console.log(seattleCenter.cookiesPerHourArray);
console.log(seattleCenter.cookiesDataArray);

for (var i = 0; i < seattleCenter.cookiesDataArray.length; i++) {
  var newLi = document.createElement('li');
  var liText = document.createTextNode(seattleCenter.cookiesDataArray[i]);
  newLi.appendChild(liText);
  var positionLi = document.getElementById('seattleCenter');
  positionLi.appendChild(newLi);
};

//Capitol Hillcapitol
var capitolHill = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};
capitolHill.calcCookiesPerHour = function() {
  for (var i = 6; i < 20; i++) {
    capitolHill.cookiesPerHour = Math.round(capitolHill.avgCookiesPerSale * capitolHill.customersPerHour());
    capitolHill.cookiesPerHourArray.push(capitolHill
.cookiesPerHour);
    capitolHill.cookiesDataArray.push(i + ':00 ' + capitolHill.cookiesPerHour + ' cookies');
  }
};
capitolHill.calcCookiesPerHour();
console.log(capitolHill.cookiesPerHourArray);
console.log(capitolHill.cookiesDataArray);
capitolHill.totalCookiesPerDay = capitolHill.cookiesPerHourArray.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(capitolHill.totalCookiesPerDay);
capitolHill.cookiesDataArray.push('Total Daily Cookies: ' + capitolHill.totalCookiesPerDay);
capitolHill.cookiesPerHourArray.push(capitolHill.totalCookiesPerDay);
console.log(capitolHill.cookiesPerHourArray);
console.log(capitolHill.cookiesDataArray);

for (var i = 0; i < capitolHill.cookiesDataArray.length; i++) {
  var newLi = document.createElement('li');
  var liText = document.createTextNode(capitolHill.cookiesDataArray[i]);
  newLi.appendChild(liText);
  var positionLi = document.getElementById('capitolHill');
  positionLi.appendChild(newLi);
};

//alki
var alki = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: function () { return Math.round(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;},
  cookiesPerHourArray: [],
  cookiesDataArray:[]
};
alki.calcCookiesPerHour = function() {
  for (var i = 6; i < 20; i++) {
    alki.cookiesPerHour = Math.round(alki.avgCookiesPerSale * alki.customersPerHour());
    alki.cookiesPerHourArray.push(alki
.cookiesPerHour);
    alki.cookiesDataArray.push(i + ':00 ' + alki.cookiesPerHour + ' cookies');
  }
};
alki.calcCookiesPerHour();
console.log(alki.cookiesPerHourArray);
console.log(alki.cookiesDataArray);
alki.totalCookiesPerDay = alki.cookiesPerHourArray.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(alki.totalCookiesPerDay);
alki.cookiesDataArray.push('Total Daily Cookies: ' + alki.totalCookiesPerDay);
alki.cookiesPerHourArray.push(alki.totalCookiesPerDay);
console.log(alki.cookiesPerHourArray);
console.log(alki.cookiesDataArray);

for (var i = 0; i < alki.cookiesDataArray.length; i++) {
  var newLi = document.createElement('li');
  var liText = document.createTextNode(alki.cookiesDataArray[i]);
  newLi.appendChild(liText);
  var positionLi = document.getElementById('alki');
  positionLi.appendChild(newLi);
};
