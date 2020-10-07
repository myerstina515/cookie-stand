'use strict';

var openHours = ['', '6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total'];
var parentElement = document.getElementById('thead');
var parentElement2 = document.getElementById('tbody');
var parentElement3 = document.getElementById('tfoot');
var overallTotal = [];
function City(name, min, max, cookiesPerCustomer){
  this.name = name;
  this.min = min;
  this.max = max;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.totalSales = 0;
  this.cookiesPerHour = [];
  overallTotal.push(this);
}
City.prototype.perHour= function () {
  var customers = Math.floor(Math.random() * (this.max-this.min + 1) + this.min);
  //   return Math.ceil(customers * this.cookiesPerCustomer);
  this.cookiesPerHour.push(Math.ceil(customers * this.cookiesPerCustomer));
};
City.prototype.dailySales= function (){

  for (var i=0; i<openHours.length; i++){
    var cookiesThisHour = this.perHour();
    console.log(cookiesThisHour);
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
  for (var i=0; i<openHours.length; i++){
    var td2Element= document.createElement('td');
    td2Element.textContent = this.cookiesPerHour[i];
    tr2Element.appendChild(td2Element);
  }
};

function footerOfTable(){
  var trFooter= document.createElement('tr');
  trFooter.textContent = 'Total';
  parentElement3.appendChild(trFooter);
// //   for (i=0; i<this.name.length; i++){
//     for (j=1; j<openHours.length; i++){
//        var tdElement = document.createElement('td');
//        tdElement.textContent =
//     }
// //   }
}
footerOfTable();




new City('Seattle', 23, 65, 6.3);

new City('Tokyo', 3, 24, 1.2);

new City('Dubai', 11, 38, 3.7);

new City('Paris', 20, 38, 2.3);

new City('Lima', 2, 16, 4.6);

// console.log(overallTotal);

headerOfTable();

for (var i=0; i<openHours.length; i++){
  var cityFinal = overallTotal[i];
  //   console.log(cityFinal);
  if (cityFinal){
    cityFinal.render();
  }
}
