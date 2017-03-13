module.exports = {
getPrimes :function (number){
	upperLimit = Math.sqrt(number)
	prime = []
	if (typeof(number)==='string' || number <= 0){
	    return "invalid input"
	  }
	for (var i = 0; i <= number; i++) {
	 var isPrime = true
		for (var j = 2; j < upperLimit; j++) {
			if( i % j === 0  && i !== j){
				isPrime = false;
			}
		}
		if (isPrime){
			prime.push(i); 
		}
	}
		return prime	
}
}
