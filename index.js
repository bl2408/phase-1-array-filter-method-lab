// Code your solution here
function findMatching(driverList, driver){
    const list = driverList.filter(el=> el.toLowerCase() === driver.toLowerCase());
    return list;
}

function fuzzyMatch(driverList, driver){
    const list = driverList.filter(el=>el[0].toLowerCase() === driver[0].toLowerCase());
    return list;
}

function matchName(driverList, driver){
    const list = driverList.filter(el=>el.name.toLowerCase() === driver.toLowerCase());
    return list;
}