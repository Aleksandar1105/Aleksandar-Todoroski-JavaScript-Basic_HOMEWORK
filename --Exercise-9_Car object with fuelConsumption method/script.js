/* Create a car object with some properties model, color, year, fuel, fuelConsumption 
and a method that calculate how much fuel you will need to pass some distance. */

const myCar = {
    model: 'Volkswagen Jetta',
    color: 'Black',
    year: 2007,
    fuel: 'Petrol',
    fuelConsumption: 8,
    calculateFuelNeeded: function (distanceInKm) {
        let fuelConsumptionOnHundredKm = this.fuelConsumption / 100;
        let fuelNeeded = fuelConsumptionOnHundredKm * distanceInKm;
        return `You need ${fuelNeeded} liters ${this.fuel} fuel to pass ${distanceInKm}km.`;
    }
}

console.log(myCar.calculateFuelNeeded(50));
