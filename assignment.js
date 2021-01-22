// https://github.com/Farhad-Sayed/JavaScript-Assignment-3

// First function

function kelometerToMeter(kilometer){
    
    var distanceInMeter = 1000*kilometer;
    if(kilometer<0){
        return 'Please input positive number';
        // because distance can't be negative
    }
    else{
        return distanceInMeter;
    }
}

// Second function

function budgetCalculator(watch, phone, laptop){
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;

    if(watch<0 || phone<0 || laptop<0){
        return 'Quantity can not be negative';
        // No quantity can't be negative
    }
    else{
        var totalCost = watchCost + phoneCost + laptopCost;
        return totalCost;
    }
}


// Third function

function hotelCost(days){
    var cost = 0;
    if(days<0){
        return 'Day can not be negative';
    }
    else if(days <= 10){
        cost = days*100;
    }
    else if(days <= 20){
        var firstTenDays = 10*100;
        var remainingDays = days-10;
        var afterTenDays= remainingDays*80;
        cost = firstTenDays + afterTenDays;
    }
    else{
        var costInTenDays = 10*100;
        var costInTwentyDays = 10*80;
        var daysLeft = days-20;
        var extraDays = daysLeft*50;
        cost = costInTenDays + costInTwentyDays + extraDays;
    }
    return cost;
}


// Fourth function

function megaFriend(friends){
    var megaName = friends[0];

    for(var i=0; i<friends.length; i++){
        if(friends[i].length>megaName.length){
            megaName = friends[i].trim(' ');
            // use trim method for removing white space
        }
    }
    return megaName;
}
