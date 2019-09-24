// Code your solution in this file!
const logDriverNames = (arr) => {
  arr.forEach(driver => console.log(driver.name));
};

const logDriversByHometown = (arr, location) => {
  
  let loc = location;
  arr.forEach(function(driver){
    if (driver.hometown === loc) {
      console.log(driver.name);
    }
  });
};