// Code your solution in this file!

function distanceFromHqInBlocks(block){
    if(block > 42){
        return block - 42
    }
    else if(block < 42){
        return 42 - block
    }
}
console.log(distanceFromHqInBlocks(43));
// console.log(distanceFromHqInBlocks(50));
// console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(block){

    return distanceFromHqInBlocks(block) * 264
}

console.log(distanceFromHqInFeet(43));
// console.log(distanceFromHqInFeet(50));
// console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination){
    if(destination > start){
        return (destination - start) * 264
    }
    else{
        return  (start - destination) * 264
    }
}

console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400){
        return 0
    }
    else if(distance >400 && distance <= 2000){
        return (distance - 400) * 0.02
    }
    else if (distance > 2000 && distance <2500){
        return 25
    }
    else if(distance > 2500){
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))
