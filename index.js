// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks >= 42) {
    return blocks - 42;
  }
  else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    (start - destination) * 264;
  }
  else {
    (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {}
