// Code your solution in this file!
const returnFirstTwoDrivers = (function(array){
    return array.slice(0, 2);
})

const returnLastTwoDrivers = (function(array){
    return array.slice(-2);
})

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = (i) => {
    const multiply = (fare) => {
        return fare * i
    }
    return multiply;
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers);
}