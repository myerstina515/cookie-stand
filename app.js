'use strict';

var openHours = ['', '6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total'];
var parentElement = document.getElementById('thead');
var parentElement2 = document.getElementById('tbody');
var parentElement3 = document.getElementById('tfoot');
var allCitiesArray = [];

function City(name, min, max, cookiesPerCustomer){
  this.name = name;
  this.min = min;
  this.max = max;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.totalSales = 0;
  this.cookiesPerHour = [];
  allCitiesArray.push(this);
}

var formEl = document.getElementById('form');

function handleSubmit(event){
  event.preventDefault();

  var newLocationName = event.target.locationName.value;
  var minPeople = parseInt(event.target.minimumcustomers.value);
  var maxPeople = parseInt(event.target.maximumcustomers.value);
  var avgCookies = parseInt(event.target.avgCookiesPerCustomer.value);

  new City(newLocationName, minPeople, maxPeople, avgCookies);
  console.log(allCitiesArray);

  var retrieveTableHead = document.getElementById('thead');
  var retrieveTable = document.getElementById('tbody');
  var retrieveTable2 = document.getElementById('tfoot');
  retrieveTable.innerHTML = '';
  retrieveTable2.innerHTML = '';
  retrieveTableHead.innerHTML = '';
  generateTable();
}


formEl.addEventListener('submit', handleSubmit);

City.prototype.perHour= function () {
  var customers = Math.floor(Math.random() * (this.max-this.min + 1) + this.min);
  this.cookiesPerHour.push(Math.ceil(customers * this.cookiesPerCustomer));
};
City.prototype.dailySales= function (){

  for (var i=0; i<openHours.length; i++){
    this.perHour();
    // console.log(cookiesThisHour);
    this.totalSales += this.cookiesPerHour[i];
  }
};

function headerOfTable() {
  var trElement= document.createElement('tr');
  parentElement.appendChild(trElement);

  for (var i=0; i<openHours.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = openHours[i];
    trElement.appendChild(thElement);
  }
}

City.prototype.render= function () {
  this.dailySales();
  var tr2Element= document.createElement('tr');
  parentElement2.appendChild(tr2Element);
  var tdElement= document.createElement('td');
  tdElement.textContent = this.name;
  tr2Element.appendChild(tdElement);
  for (var i=0; i<openHours.length - 2; i++){
    var td2Element= document.createElement('td');
    td2Element.textContent = this.cookiesPerHour[i];
    tr2Element.appendChild(td2Element);
  }
  var tdTotalElement = document.createElement('td');
  tdTotalElement.textContent = this.totalSales;
  tr2Element.appendChild(tdTotalElement);
};


function footerOfTable(){
  var trFooter= document.createElement('tr');
  trFooter.textContent = 'Total';
  parentElement3.appendChild(trFooter);
  // var finalTotalPerHour = [
  //   // I need an array for the city rows
  //   [openHours],
  //   [allCitiesArray]
  // ];
  var totalOfTotals = 0;
  for (var j=0; j < openHours.length - 2; j++){
    var eachHourTotal = 0;
    // console.log('This is openHours[j]' + openHours[j]);
    for (var k=0; k < allCitiesArray.length; k++){
      //     // console.log('this is allCitiesArray[k]' + allCitiesArray[k]);
      //     // console.log('this is k' [k]);
      eachHourTotal += allCitiesArray[k].cookiesPerHour[j];
    }
    totalOfTotals += eachHourTotal;
    var td3Values = document.createElement('td');
    td3Values.textContent = eachHourTotal;
    trFooter.appendChild(td3Values);
  }
  var td4Value = document.createElement('td');
  td4Value.textContent = totalOfTotals;
  trFooter.appendChild(td4Value);
}




new City('Seattle', 23, 65, 6.3);

new City('Tokyo', 3, 24, 1.2);

new City('Dubai', 11, 38, 3.7);

new City('Paris', 20, 38, 2.3);

new City('Lima', 2, 16, 4.6);

// console.log(allCitiesArray);

function generateTable(){
  headerOfTable();

  for (var i=0; i<allCitiesArray.length; i++){
    allCitiesArray[i].render();
  }
  footerOfTable();
}
// parentElement3.innerHTML='';
// footerOfTable();

generateTable();

