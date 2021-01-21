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
        var costClock = clockUnitPrice * clockQuantity;
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

    var totalCost = costClock + costPhone + costLaptop;
    return totalCost;
}

// 3rd Assignment : hotelCost

function hotelCost(day) {
    var cost = 0;
    if (day < 0) {
        console.log('Enter valueof day in positive value.');
    } else {
        var packageOne = 100;
        var packageTwo = 80;
        var packageThree = 50;

        if (day <= 10) {
            cost = day * packageOne;
        } else if (day <= 20) {
            var packageOneCost = 1000;
            var remaingDays = day - 10;
            var packageTwoCost = remaingDays * packageTwo;
            cost = packageOneCost + packageTwoCost;
        } else {
            var packageOneCost = 1000;
            var packageTwoCost = 800;
            var remaingDays = day - 20;
            var packageThreeCost = remaingDays * packageThree;
            cost = packageOneCost + packageTwoCost + packageThreeCost;
        }
    }
    return cost;
}

// 4th Assignment : megaFriend

function megaFriend(friends) {
    var length = 0;
    var biggestName;

    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > length) {
            var length = friends[i].length;
            biggestName = friends[i];
        }
    }
    return biggestName;
}