// code your solution here

/*const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]*/
  

function superbowlWin(collection){
    for (const user of collection){
        if (user.result === "W") {
            return (user.year);
        }
    }
}

/*record.find(superbowlWin)*/