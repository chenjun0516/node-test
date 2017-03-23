var globalVariable  = 'this is global variable'

function globalFunction() {
	var localVariable = 'this is local variable'

	console.log(globalVariable)
	console.log(localVariable)

	globalVariable = 'this is changed variable'
	console.log("1" + globalVariable)
	function localFunction() {
		console.log(2 + globalVariable)
	}
	localFunction()
	console.log(3+globalVariable)
}

globalFunction()