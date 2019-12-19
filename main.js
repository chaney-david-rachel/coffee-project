"use strict";

// CONSTRUCTS COFFEE LIST
function renderCoffee(coffee) {
	var html = '<li id='+coffee.id+'>';
	html += '<h2>' + coffee.name + '</h2>'
		+ '<p>' + coffee.roast +'</p>';
	html += '</li>';
	return html;
}
// test for li click events
// locate your element and add the Click Event Listener
document.getElementById("coffee").addEventListener("click",function(e) {
	// e.target is our targetted element.
	// try doing console.log(e.target.nodeName), it will result LI
	if(e.target && e.target.nodeName == "LI") {
		console.log(e.target.id + " was clicked");
	}
});

// SORTS LIST
function renderCoffees(coffees) {
	var html = '';
	// for(var i = coffees.length - 1; i >= 0; i--) {
	for (var i = 0; i < coffees.length; i++) { //switched to increment for ascending order
		html += renderCoffee(coffees[i]);
	}
	return html;
}

// ROAST SELECTOR LOGIC
function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	var filteredCoffees = [];
	coffees.forEach(function (coffee) {
		if (selectedRoast === 'all') {
			filteredCoffees = coffees;
		} else if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
		}
	});
	coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// SEARCH BAR LOGIC
function searchCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var searchInput = userInput.value.toLowerCase();
	var filteredCoffees = [];
	coffees.forEach(function (coffee) {
		var currentRoast = coffee.roast.toLowerCase();
		var currentName = coffee.name.toLowerCase();
		if (currentRoast.includes(searchInput) || currentName.includes(searchInput)) {
			filteredCoffees.push(coffee);
		}
	});
	coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// CUSTOM COFFEE LOGIC

function addToCoffees() {
	var customObject={};
	customObject.id = coffees.length+1;
	customObject.name = document.getElementById('custom-coffee-name').value;
	customObject.roast = document.getElementById('custom-roast-selection').value;
	coffees.push(customObject);
	document.getElementById('custom-coffee-name').value = '';
}

// COFFEE LIST
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
	{id: 1, name: 'Light City', roast: 'light', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Light City.'},
	{id: 2, name: 'Half City', roast: 'light', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Half City.'},
	{id: 3, name: 'Cinnamon', roast: 'light', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Cinnamon.'},
	{id: 4, name: 'City', roast: 'medium', img:'https://picsum.photos/200', flavorText: 'This is a sentence about City.'},
	{id: 5, name: 'American', roast: 'medium', img:'https://picsum.photos/200', flavorText: 'This is a sentence about American.'},
	{id: 6, name: 'Breakfast', roast: 'medium', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Breakfast.'},
	{id: 7, name: 'High', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about High.'},
	{id: 8, name: 'Continental', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Continental.'},
	{id: 9, name: 'New Orleans', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about New Orleans.'},
	{id: 10, name: 'European', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about European.'},
	{id: 11, name: 'Espresso', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Espresso.'},
	{id: 12, name: 'Viennese', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Viennese.'},
	{id: 13, name: 'Italian', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Italian.'},
	{id: 14, name: 'French', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about French.'},
];

// VARS FOR HTML
var coffeeList = document.querySelector('#coffees'); //changed variable name to match ul
var submitButton = document.querySelector('#roast-submit');
var roastSelection = document.querySelector('#roast-selection');
var userInput = document.querySelector('#search-bar');
var searchSubmit = document.querySelector("#search-btn");
var customSubmit = document.querySelector('#custom-submit');

// DISPLAY FULL COFFEE LIST ON LOAD
coffeeList.innerHTML = renderCoffees(coffees);

// EVENT LISTENERS
submitButton.addEventListener('click', updateCoffees);
searchSubmit.addEventListener('click', searchCoffees);
userInput.addEventListener("keyup", searchCoffees);
customSubmit.addEventListener('click', addToCoffees);
