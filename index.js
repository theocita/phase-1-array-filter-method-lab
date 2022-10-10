function findMatching(drivers,string){
     const results = drivers.filter(driver => driver == string);
     return results;
};

function fuzzyMatch(drivers, string){
    const match = drivers.filter(driver => driver.charAt(0) == string)
    return match
}

function matchName(drivers, string){
    const name = drivers.filter(driver => driver.name == string)
    return name
}