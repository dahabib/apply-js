// 1st Assignment : kilometerToMeter

function kilometerToMeter(n) {
    if (n < 0) {
        console.log('Please enter a positive value');
    } else {
        var meter = n * 1000;
        return meter;
    }
}

// 2nd Assignment : budgetCalculator

function budgetCalculator(clockQuantity, phoneQuantity, laptopQuantity) {
    var clockUnitPrice = 50;
    var phoneUnitPrice = 100;
    var laptopUnitPrice = 500;

    if (clockQuantity < 0) {
        console.log('Clock quantity should be a positive value');
    } else {
        var costPrice = clockUnitPrice * clockQuantity;
    }

    if (phoneQuantity < 0) {
        console.log('Phone quantity should be a positive value');
    } else {
        var costPhone = phoneUnitPrice * phoneQuantity;
    }
    if (laptopQuantity < 0) {
        console.log('Laptop quantity should be a positive value');
    } else {
        var costLaptop = laptopUnitPrice * laptopQuantity;
    }

    var totalCost = costPrice + costPhone + costLaptop;
    return totalCost;
}

// 3rd Assignment : hotelCost

function hotelCost(day) {
    if (day < 0) {
        console.log('How much days you want to stay ');
    } else {
        var costPhone = phoneUnitPrice * phoneQuantity;
    }

    return cost;
}