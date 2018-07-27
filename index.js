// Code your solution in this file
drivers=["Larry","Moe","Curly","Shemp","Joe"];

function findMatching(name){
  return drivers.filter(function (drv){return (drv===name);});
}