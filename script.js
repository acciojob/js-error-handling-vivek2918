//your code here
class OutOfRangeError extends Error{
	constructor(arg){
		super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
		this.name = "OutOfRangeError";
	}
}

class InvalidExprError extends Error{
	constructor(){
		super("Expression should not have an invalid combination of expression");
		this.name = "InvalidExprError";
	}
}