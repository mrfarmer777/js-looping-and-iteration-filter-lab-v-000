// Code your solution in this file
drivers=["Bobby","Bobby","Larry"];

function findMatching(name){
  return drivers.filter(function (drv){return (drv===name);});
}