// 1st Problem : kilometerToMeter
function kilometerToMeter(km) {
    if (isNaN(km) || km < 0) {
        console.log('Enter a value, in positive.');
    } else {
        var meter = km * 1000;
    }
    return meter;
}

// 2nd Problem : budgetCalculator

function budgetCalculator(clockQuantity, phoneQuantity, laptopQuantity) {
    var clockUnitPrice = 50;
    var phoneUnitPrice = 100;
    var laptopUnitPrice = 500;

    if (isNaN(clockQuantity) || clockQuantity < 0) {
        console.log('Clock quantity should have a value, in positive.');
    } else {
        var costClock = clockUnitPrice * clockQuantity;
    }

    if (isNaN(phoneQuantity) || phoneQuantity < 0) {
        console.log('Phone quantity should have a value, in positive.');
    } else {
        var costPhone = phoneUnitPrice * phoneQuantity;
    }

    if (isNaN(laptopQuantity) || laptopQuantity < 0) {
        console.log('Laptop quantity should have a value, in positive.');
    } else {
        var costLaptop = laptopUnitPrice * laptopQuantity;
    }

    var totalCost = costClock + costPhone + costLaptop;
    return totalCost;
}

// 3rd Problem : hotelCost

function hotelCost(day) {
    if (isNaN(day) || day < 0) {
        console.log('Enter day, in positive value.');
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

// 4th Problem : megaFriend

function megaFriend(friends) {

    var length = 0;

    if (friends.length > length) {
        for (var i = 0; i < friends.length; i++) {
            length = friends[i].length;
            biggestName = friends[i];
        }
        return biggestName;
    } else {
        console.log('It looks like You have no friends.');
    }
}