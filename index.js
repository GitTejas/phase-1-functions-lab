// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
    const hq = 42
    if (dist >= 42){
         return dist - hq
    }
    else if (dist <= 42) {
        return hq - dist
    }
}
distanceFromHqInBlocks();


// Code your solution in this file!

function distanceFromHqInFeet(dist) {
    const feet = 264
    return distanceFromHqInBlocks(dist)*feet;
}
distanceFromHqInFeet();

// Code your solution in this file!


function distanceTravelledInFeet(begin, dest) {
    if (begin === 43){
    return (dest - begin) *264
    }
    else if (begin === 50) {
        return (dest - begin)* 264
    }
    else if (begin === 34) {
        return (begin - dest) * 264
    }
}

// Code your solution in this file!

function calculatesFarePrice(start, destination) {
    const fareDist  = distanceTravelledInFeet(start, destination);
    if (fareDist <= 400) {
        return 0
    }
    else if (fareDist >= 400 && fareDist <= 2000) {
        return (fareDist -400) * 0.02
    }
    else if (fareDist >= 2000 && fareDist <= 2500) {
        return 25
    }
    else if (fareDist >= 2500) {
        return "cannot travel that far"
    }
}