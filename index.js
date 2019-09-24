// Code your solution in this file!
const logDriverNames = (arr) => {
  arr.forEach(driver => console.log(driver.name));
};

const logDriversByHometown = (arr, location) => {
  arr.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = (arr) => {
  return arr.slice().sort(function(a, b){
    return a.revenue - b.revenue;
  });
};

const driversByName = (arr) => {
  return arr.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);
};

const totalRevenue = (arr) => {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  return arr.reduce(arr.forEach(driver => driver.revenue));
};