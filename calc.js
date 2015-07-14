window.onReady(function(){
	// Load hm/animal-parade.xml
	Z.ajax({
		url:'hm/animal-parade.xml',
		dataType:'xml',
		success:function(){
			// TODO: Build Form
		}
	})
})

// TODO: Given list of ingredients, calculate profit off various recipes

// TODO: Find Recipes that Require Given Item(s)
calc.findRecipes = function (item) {
	var recipes = []
	if (Array.isArray(item)) {
		for (i in item) recipes.push(findRecipes(item[i]))
		// TODO: Return Intersection
	}
	// TODO: Find Recipes that Require Given Item
	return recipes
}

calc.profit = function() {
	var items = [
		{name:'Decent Cucumber',qty:5,revenue:160},
		{name:'Good Egg',qty:5,revenue:80}
	], output = Z('output')
	//var recipes = calc.findRecipes(item)
	var recipes = [
		{name:'Stir Fry',revenue:244},
		{name:'Good Mayonnaise',revenue:100},
		{name:'Stir Fry + Good Mayonnaise'},
		{name:'Vegetable Salad',revenue:419}
	]
	recipes[0].profit = recipes[0].revenue - items[0].revenue
	recipes[1].profit = recipes[1].revenue - items[1].revenue
	recipes[2].profit = recipes[0].profit + recipes[1].profit
	recipes[3].profit = recipes[3].revenue - items[0].revenue - items[1].revenue
	recipes.forEach(function(r,i) {
		var div = Z('<div>')
		div.append('<h4>' + recipes[i].name)
		var txt = ''
		switch (r.name) {
			case 'Stir Fry':
				txt = items[0].name
				break;
			case 'Good Mayonnaise':
				txt = items[1].name
				break;
			case 'Stir Fry + Good Mayonnaise':
				txt = items[0].name + ', ' + items[1].name
				break;
			case 'Vegetable Salad':
				txt = items[0].name + ', ' + items[1].name
				break;
		}
		txt += ': ' + recipes[i].profit
		div.append('<div>' + txt)
		if (recipes[i].profit < 0)
			div.children('div').addClass('loss')
		output.append(div)
	})
}
calc.profit()
