function dwarfRollCall(dwarves) {
   var rollCall = ''
   for (let i = 0; i < dwarves.length; i++) {
      var placeInLine = i + 1 + '. '
      var fullName = placeInLine + dwarves[i] + ' '
    rollCall = rollCall + fullName
  }
    return(rollCall)
  }


function summonCaptainPlanet(planeteerCalls) {
  var shoutCalls = []
  for (let i = 0; i < planeteerCalls.length; i++) {
    shoutCalls.push(`${planeteerCalls[i]}`.toUpperCase() + "!")
  }
  return(shoutCalls) 
}


function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return(true)
    } else {
      return(false)
    }
  }
}

function findTheCheese (foods) {
  var finalResult = ''
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
      return(foods[i])
    } 
    else {
      finalResult = "no cheese!"
    }
  }
  return (finalResult)
}
