// Complete the js code
function Car(make, model) {
	this.make=make
		this.model=model
}

Car.prototype.getMakeModel=function(){
		let str=this.make + " "+this.model;
		return str;
	}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model)
	this.topSpeed=topSpeed
}
SportsCar.prototype.getTopSpeed=function(){
	return this.topSpeed
}
SportsCar.prototype.cons=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
