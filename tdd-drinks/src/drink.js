function peopleWithAgeDrink(age) {
  if (age < 14) {
    return "drink toddy";
  }else if (age <= 17) {
    return "drink coke";
  }else if ( age >= 18 && age <= 20) {
    return "drink beer"
  }else if ( age >= 30){
    return "drink whisky"
  }
}


/*peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"*/