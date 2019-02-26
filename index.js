function dwarfRollCall(dwarves) {
   var rollCall = ''
   for (let i = dwarves.length / 2; i < dwarves.length; i++) {
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
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" || foods[i] === "swiss") {
      return(foods[i])
    } 
    else {
      finalResult = "no cheese!"
    }
  }
  return (finalResult)
}
// words = [ "grapes", "bob" ]
// words[1]

// words = [ ["g","r","a","p","e","s"], ["b","o","b"] ]
// words[1][0]

function wordsWithB (words) {
  var bWords = []
  for (let i = 0; i < words.length; i++) {
   if (words[i].startsWith('b')) {
    bWords.push(words[i])}
  }
  return(bWords)
}
