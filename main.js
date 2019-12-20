// (function () {


"use strict";

// CONSTRUCTS COFFEE LIST
function renderCoffee(coffee) {
	var html = '<li class="coffee-list-item" id='+coffee.id+'>';
	html += '<h3>' + coffee.name + '</h3>'
		+ '<p>' + coffee.roast +'</p>';
	html += '</li>';
	return html;
}

//new event listener (didn't quite work right)

// document.addEventListener('DOMContentLoaded', function () {
// 	var coffeeListItem = document.getElementsByClassName("coffee-list-item");
// 	// console.log(coffeeListItem);
// 	// console.log(coffeeListItem.length);
//
// 	for (var i = 0; i < coffeeListItem.length; i++){
// 		// console.log(i);
// 		coffeeListItem[i].addEventListener("click", function(){
// 			// console.log("coffee item clicked");
// 			document.getElementById('coffee-info-div').innerHTML=
// 				'<img src="'+coffees[0].img+'" alt="">'+
// 				"<h1>"+coffees[0].name+"</h1>"+
// 				'<p>'+coffees[0].flavorText+'</p>';
// 			console.log(document.getElementById(i));
// 		})
// 	}
// });

// click event generator for each list item

document.getElementById("coffee").addEventListener("click",function(e) {
	// e.target is our targeted element.
	if(e.target && e.target.nodeName === "LI") {
		document.getElementById('coffee-info-div').innerHTML=
			'<img src="'+coffees[e.target.id-1].img+'" alt="" style="height:400px;">'+
			"<h1>"+coffees[e.target.id-1].name+"</h1>"+
			'<p>'+coffees[e.target.id-1].flavorText+'</p>';
		//create tabs on click
		if(document.getElementsByClassName("active-list-item").length===0){
			document.getElementById(e.target.id).classList.add("active-list-item");
		} else {
			document.getElementsByClassName("active-list-item")[0].classList.remove("active-list-item");
			document.getElementById(e.target.id).classList.add("active-list-item");
		}
		// console.log(e.target.id + " was clicked"); //displays which id was clicked
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
	customObject.img = 'https://picsum.photos/400/350';
	customObject.flavorText = 'This is a coffee that you just added to our database. E-mail us at newCoffee@coffeeDB.net to tell us a bit about it!';
	coffees.push(customObject);
	document.getElementById('custom-coffee-name').value = '';
}

// COFFEE LIST
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// 	var coffees = [
// 		{id: 1, name: 'Light City', roast: 'light', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Light City.'},
// 		{id: 2, name: 'Half City', roast: 'light', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Half City.'},
// 		{id: 3, name: 'Cinnamon', roast: 'light', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Cinnamon.'},
// 		{id: 4, name: 'City', roast: 'medium', img:'https://picsum.photos/200', flavorText: 'This is a sentence about City.'},
// 		{id: 5, name: 'American', roast: 'medium', img:'https://picsum.photos/200', flavorText: 'This is a sentence about American.'},
// 		{id: 6, name: 'Breakfast', roast: 'medium', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Breakfast.'},
// 		{id: 7, name: 'High', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about High.'},
// 		{id: 8, name: 'Continental', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Continental.'},
// 		{id: 9, name: 'New Orleans', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about New Orleans.'},
// 		{id: 10, name: 'European', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about European.'},
// 		{id: 11, name: 'Espresso', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Espresso.'},
// 		{id: 12, name: 'Viennese', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Viennese.'},
// 		{id: 13, name: 'Italian', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about Italian.'},
// 		{id: 14, name: 'French', roast: 'dark', img:'https://picsum.photos/200', flavorText: 'This is a sentence about French.'},
// 	];

// new coffee list (for style points)
	var coffees = [
		{id: 1, name: 'Toddy Blend', roast: 'light', img:'img/imgToddy.png', flavorText:'Stands up to multiple brewing processes but really shines through via slower cold brew methods. Chocolate and light berry flavors round out this coffee.'},
		{id: 2, name: 'Cowboy Blend', roast: 'light', img:'img/imgCowboy.png', flavorText:'Traditional blend makes for a great all-day coffee. Nuttiness and citrus abound in this medium bodied coffee.'},
		{id: 3, name:'Do The Work Blend', roast:'light', img:'img/imgDoTheWork.jpg', flavorText:'Cupping notes: caramel, citrus, slight fruit and fuzzy feelings that come from doing good',},
		{id: 4, name:'Driveway Blend', roast:'light', img:'img/imgDriveway.jpg', flavorText:'The blend itself boldly features Ethiopian and Sumatran offerings that add some punch to this medium body coffee. ',},
		{id: 5, name:'Espresso Blend', roast:'light', img:'img/imgEspresso.png', flavorText:'Great citrus pumps through in the espresso brewing process with strong body and nutty crema. Often used to brew a solid cup through other methods.',},
		{id: 6, name:'Heywood Hotel Blend', roast:'medium', img:'img/imgHeywood.jpg', flavorText:'This blend was created exclusively for our long-time partners at the Heywood Hotel in East Austin. Their coffee is as unique as their award-winning ' +
				'boutique hotel and provides the same attention to detail they are known for. Many guests ask how to procure the coffee once they leave Austin so the Heywood team has decided to make it available to you!\n' + '\n' +
				'Cupping notes: Gently acidic with strong cacao and nuttiness with slight berry/citrus',},
		{id: 7, name:'House Blend', roast:'medium', img:'img/imgHouse.png', flavorText:'Full bodied smokiness from a balanced medium roast. Lightly sweet berries with a crisp finish.',},
		{id: 8, name:'It\'s A Boy Blend', roast:'medium', img:'img/imgBoy.jpg', flavorText:'Celebrate the birth of a new baby boy with a gift everyone loves, coffee!\n' + '\n' + 'This classic blend provides a solid body and smooth finish.\n' + '\n' + 'Congrats!',},
		{id: 9, name:'It\'s A Girl Blend', roast:'medium', img:'img/imgGirl.jpg', flavorText:'Celebrate the birth of a new baby girl with a gift everyone loves, coffee!\n' + '\n' + 'This classic blend provides a solid body and smooth finish.\n' + '\n' + 'Congrats!',},
		{id: 10, name:'Mohawk Blend', roast:'medium', img:'img/imgMohawk.png', flavorText:'A full-bodied low acid velvety cup of coffee. This coffee blend is bold enough to shine through various brewing methods. Some love it hot and others prefer it as a cold brew. The unsung hero beneath it all is a complex Sumatran Mandheling.',},
		{id: 11, name:'Mother\'s Blend', roast:'dark', img:'img/imgMother.png', flavorText:'This began in honor of Mother\'s Day years ago and was so popular it stuck around! Mother\'s Day is year-round anyway, right? The blend provides a gentle citric acidity that is balanced by wine-like berry and dark chocolate notes.',},
		{id: 12, name:'Sleep Slayer Blend', roast:'dark', img:'img/imgSlayer.jpg', flavorText:'Kick your morning in the teeth! Bold falls short of describing this punchy mix of Organic Mexican and Ethiopian powerhouses. Full bodied coffee that surprises you with a slight citrus finish and a mouthful of stonefruit',},
		{id: 13, name:'Ethiopian Single Origin', roast:'dark', img:'img/imgEthiopian.png', flavorText:'The Harrar region lies in the Eastern Highlands of Ethiopia. As one of the main growing regions in Ethiopia, Harrar has a reputation for producing distinctive wild-varietal Arabica.\n' + '\n' +
				'Cupping notes: heavy berry, lemon, stonefruit, dark chocolate, typical moka flavor, marked blueberry and blackberry\n' + '\n' + 'Heavy body but fair to light acidity ',},
		{id: 14, name:'Guatemalan Single Origin', roast:'dark', img:'img/imgGuatemalan.png', flavorText:'This type comes from the rich volcanic soils of the Santa Rosa valleys located in the South Central region of Guatemala. ' +
				'The Central Highlands of the country are ideal for coffee cultivation due to high altitudes and rich soil from surrounding volcanoes. The climate allows the coffee to mature slowly, which is said to concentrate the coffee beans flavors. The coffee grown in the Santa Rosa region boasts a balanced cup with chocolate notes.',},
		{id: 15, name:'Sumatran Single Origin', roast:'dark', img:'img/imgSumatran.jpeg', flavorText:'The unique method used in its production results in a very full body with a concentrated flavor, garnished with herbal nuances and a spicy finish. Giling Basah, the name of the ' +
				'traditional Sumatran process, involves hulling the parchment off of the bean at roughly 50% moisture content; for comparison, most other processes hull coffee at around 10-12% moisture. This unique Sumatran process results in a trademark flavor profile (low acidity and a richness that lingers on the back of the palate) and gives the green beans a signature dark color. Notes of chocolate are evident in the finish.',},
		{id: 16, name:'Italian Single Origin', roast:'dark', img:'img/imgItalian.png', flavorText:'This dark chocolaty roast is full bodied with no acidity. You will notice a caramel sweetness similar to a creme brule. A tingling of anise and pepper will round your taste buds for an enjoyable finish. ',},
	];

// VARS FOR HTML
var coffeeList = document.querySelector('#containerLi'); //changed variable name to match ul
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
roastSelection.addEventListener("change", updateCoffees);

// })();