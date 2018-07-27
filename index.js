// Code your solution in this file
drivers=["Larry","Moe","Curly","Shemp","Joe"];

function findMatching(name){
  drivers.filter(function (drv){return (drv===name);});
}