/* ========= BASIC NUMEROLOGY ENGINE ========= */

// Reduce number to single digit (1–9)
function reduce(num){
  while(num > 9){
    num = num.toString().split("")
          .reduce((a,b)=>a+Number(b),0);
  }
  return num;
}

// Mulank (Birth Number)
function getMulank(dob){
  let day = Number(dob.split("-")[2]);
  return reduce(day);
}

// Bhagyank (Life Path)
function getBhagyank(dob){
  let sum = dob.replaceAll("-","")
    .split("").reduce((a,b)=>a+Number(b),0);
  return reduce(sum);
}

// Lo Shu Grid
function loShuGrid(dob){
  let digits = dob.replaceAll("-","").split("");
  let grid = {1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""};

  digits.forEach(d=>{
    if(d !== "0"){
      grid[d] += d;
    }
  });
  return grid;
}

// Missing Numbers
function missingNumbers(grid){
  return Object.keys(grid).filter(n => grid[n] === "");
}

// Repeated Numbers
function repeatedNumbers(grid){
  return Object.keys(grid).filter(n => grid[n].length > 1);
}
