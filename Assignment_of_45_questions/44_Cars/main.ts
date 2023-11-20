interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any; 
}

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Car {
  const car: Car = {
    manufacturer,
    modelName,
  };

  for (const [key, value] of options) {
    car[key] = value;
  }

  return car;
}

const carInfo = createCar("Toyota", "Supra", ["engine", "2JZ-GTE"], ["year", 1993]);

console.log(carInfo);
 