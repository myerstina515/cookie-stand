'use strict';

var seattle = {
    cookiesPerCustomer: 6.3,
    min: 23,
    max: 65,
    dayCookieSales: [],
    totalSales: 0,
    cookiesPerHour: function (){
        var customers = Math.floor(Math.random() * (this.max-this.min + 1) + this.min)
        return Math.round(customers * this.cookiesPerCustomer)
    },
    openHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    calculateDailySales: function (){
        for (var i=0; i<this.openHours.length; i++){
            var cookiesThisHour = this.cookiesPerHour();
            this.totalSales += cookiesThisHour;
            this.dayCookieSales.push(cookiesThisHour)
        }
    },
render: function () {
    var seattleCookies = document.getElementById('seattle');
    var ulSeattle = document.createElement('ul');
    for (var i=0; i<this.openHours.length; i++) {
        var list = document.createElement('li');
        list.textContent= `${this.openHours[i]} ${this.dayCookieSales[i]} cookies`
        ulSeattle.appendChild(list)
    }
    var totalSalesToday = document.createElement('li');
        totalSalesToday.textContent = `Total ${this.totalSales} cookies`;
        ulSeattle.appendChild(totalSalesToday);
        seattleCookies.appendChild(ulSeattle)
}
}

seattle.calculateDailySales()
seattle.render()

var tokyo = {
    cookiesPerCustomer: 1.2,
    min: 3,
    max: 24,
    dayCookieSales: [],
    totalSales: 0,
    cookiesPerHour: function (){
        var customers = Math.floor(Math.random() * (this.max-this.min + 1) + this.min)
        return Math.round(customers * this.cookiesPerCustomer)
    },
    openHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    calculateDailySales: function (){
        for (var i=0; i<this.openHours.length; i++){
            var cookiesThisHour = this.cookiesPerHour();
            this.totalSales += cookiesThisHour;
            this.dayCookieSales.push(cookiesThisHour)
        }
    },
render: function () {
    var tokyoCookies = document.getElementById('tokyo');
    var ulTokyo = document.createElement('ul');
    for (var i=0; i<this.openHours.length; i++) {
        var list = document.createElement('li');
        list.textContent= `${this.openHours[i]} ${this.dayCookieSales[i]} cookies`
        ulTokyo.appendChild(list)
        }
    var totalSalesToday = document.createElement('li');
        totalSalesToday.textContent = `Total ${this.totalSales} cookies`;
        ulTokyo.appendChild(totalSalesToday);
        tokyoCookies.appendChild(ulTokyo)
}
}
tokyo.calculateDailySales()
tokyo.render()


var dubai = {
    cookiesPerCustomer: 3.7,
    min: 11,
    max: 38,
    dayCookieSales: [],
    totalSales: 0,
    cookiesPerHour: function (){
        var customers = Math.floor(Math.random() * (this.max-this.min + 1) + this.min)
        return Math.round(customers * this.cookiesPerCustomer)
    },
    openHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    calculateDailySales: function (){
        for (var i=0; i<this.openHours.length; i++){
            var cookiesThisHour = this.cookiesPerHour();
            this.totalSales += cookiesThisHour;
            this.dayCookieSales.push(cookiesThisHour)
        }
    },
render: function () {
    var dubaiCookies = document.getElementById('dubai');
    var ulDubai = document.createElement('ul');
    for (var i=0; i<this.openHours.length; i++) {
        var list = document.createElement('li');
            list.textContent= `${this.openHours[i]} ${this.dayCookieSales[i]} cookies`
            ulDubai.appendChild(list)
    }
    var totalSalesToday = document.createElement('li');
        totalSalesToday.textContent = `Total ${this.totalSales} cookies`;
        ulDubai.appendChild(totalSalesToday);
        dubaiCookies.appendChild(ulDubai)
}
}
dubai.calculateDailySales()
dubai.render()

var paris = {
    cookiesPerCustomer: 2.3,
    min: 20,
    max: 38,
    dayCookieSales: [],
    totalSales: 0,
    cookiesPerHour: function (){
        var customers = Math.floor(Math.random() * (this.max-this.min + 1) + this.min)
        return Math.round(customers * this.cookiesPerCustomer)
    },
    openHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    calculateDailySales: function (){
        for (var i=0; i<this.openHours.length; i++){
            var cookiesThisHour = this.cookiesPerHour();
            this.totalSales += cookiesThisHour;
            this.dayCookieSales.push(cookiesThisHour)
        }
    },
render: function () {
    var parisCookies = document.getElementById('paris');
    var ulParis = document.createElement('ul');
    for (var i=0; i<this.openHours.length; i++) {
        var list = document.createElement('li');
            list.textContent= `${this.openHours[i]} ${this.dayCookieSales[i]} cookies`
            ulParis.appendChild(list)
        }
    var totalSalesToday = document.createElement('li');
        totalSalesToday.textContent = `Total ${this.totalSales} cookies`;
        ulParis.appendChild(totalSalesToday);
        parisCookies.appendChild(ulParis)
    }
}
paris.calculateDailySales()
paris.render()

var lima = {
    cookiesPerCustomer: 4.6,
    min: 2,
    max: 16,
    dayCookieSales: [],
    totalSales: 0,
    cookiesPerHour: function (){
        var customers = Math.floor(Math.random() * (this.max-this.min + 1) + this.min)
        return Math.round(customers * this.cookiesPerCustomer)
    },
    openHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    calculateDailySales: function (){
        for (var i=0; i<this.openHours.length; i++){
            var cookiesThisHour = this.cookiesPerHour();
            this.totalSales += cookiesThisHour;
            this.dayCookieSales.push(cookiesThisHour)
        }
    },
render: function () {
    var limaCookies = document.getElementById('lima');
    var ulLima = document.createElement('ul');
    for (var i=0; i<this.openHours.length; i++) {
        var list = document.createElement('li');
            list.textContent= `${this.openHours[i]} ${this.dayCookieSales[i]} cookies`
            ulLima.appendChild(list)
        }
    var totalSalesToday = document.createElement('li');
        totalSalesToday.textContent = `Total ${this.totalSales} cookies`;
        ulLima.appendChild(totalSalesToday);
        limaCookies.appendChild(ulLima)
    }
}
lima.calculateDailySales()
lima.render()