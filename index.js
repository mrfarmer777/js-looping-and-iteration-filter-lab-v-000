// Code your solution in this file
const drivers=[];

function findMatching(drivers,name){
  return drivers.filter(function (drv){return (drv.toUpperCase()===name.toUpperCase());});
}

function fuzzyMatch(drivers,letters){
  return drivers.filter(function(drv){return (drv.includes(letters));});
}