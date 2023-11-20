function describe_city(city: string, country: string = 'Default Country'): void {

  console.log(`${city} is in ${country}.`);
};


describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Paris'); // This will use the default country parameter
