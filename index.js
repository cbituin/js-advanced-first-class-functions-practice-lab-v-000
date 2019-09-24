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
  return arr.sort(function(a, b){
    return a.revenue - b.revenue;
  });
};