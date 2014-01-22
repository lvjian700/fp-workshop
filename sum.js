function sum (term, a, next, b) {
	function iter (a, result) {
		if (a > b) {
			return result;
		}

		var ret = term(a) + result;
		return iter(next(a), ret);
	}

	return iter(a, 0);
}

var all = sum(function(x) {
	return x;	
}, 1, 
function(x) {
	return x + 1;	
}, 100);

console.log(all);



