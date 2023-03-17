// Code your solution in this file!
//  distanceFromHqInBlocks() uses value in pickup location to calculate absolute value of distance below 42nd street
function distanceFromHqInBlocks(pickup) {
    const hqLocation = 42;
    return Math.abs(hqLocation-pickup)
}


//  distanceFromHqInFeet() uses above code block to covert distance to feet
function distanceFromHqInFeet(pickup){
    const blocks = distanceFromHqInBlocks(pickup)
    return blocks* 264;
}


function distanceTravelledInFeet(start, destination) {
    const distanceInFeet = Math.abs(distanceFromHqInFeet(destination) - distanceFromHqInFeet(start));
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
 
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = ((distance - 400) * 0.02);
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = "cannot travel that far";
    }
 
    return fare;
  }
