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
}
