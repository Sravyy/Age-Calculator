export class AgeCalculator {
constructor (dob) {
  this.secondsInOneYear = 31536000; // 60 * 60 * 24 * 365
  this.dob = dob; // Date of birth
  this.lifeExpectancy = 80;  //life expectancy between the ages of 76 and 81 in earth years
}

convertAgeToSeconds() {
    //Converting given bodInput to seconds
  // let dob = new Date();
  let currentDate = new Date();
  return parseInt(currentDate.setTime(this.dob.getTime())/1000); //divide by 1000 as the getTime returns milliseconds
}

ageInYears() {
  //converting age in yearToSeconds

  let age = parseInt(this.convertAgeToSeconds()/this.secondsInOneYear);
  return age;
}

lifeExpOnEarth(){
  //caliculating life expectancy on earth

  let lifeExpOnEarth = parseInt(this.lifeExpectancy - this.ageInYears());
  return lifeExpOnEarth;
}

ageOnMercury(){

  let mercuryAge = parseInt(this.ageInYears()/0.24);
  return mercuryAge;

}
ageOnVenus(){
  let venusAge = parseInt(this.ageInYears()/0.62);
  return venusAge;
}
ageOnMars(){
  let marsAge = parseInt(this.ageInYears()/1.88);
  return marsAge;
}
ageOnJupiter(){
  let jupiterAge = parseInt(this.ageInYears()/11.86);
  return jupiterAge;
}



yearsOnMercury(){
  let lifeExpOnMercury = parseInt(this.lifeExpOnEarth()/0.24);
  return lifeExpOnMercury;
}
yearsOnVenus(){
  let lifeExpOnVenus = parseInt(this.lifeExpOnEarth()/0.62);
  return lifeExpOnVenus;
}
yearsOnMars(){
  let lifeExpOnMars = parseInt(this.lifeExpOnEarth()/1.88);
  return lifeExpOnMars;
}
yearsOnJupiter(){
  let lifeExpOnJupiter = parseInt(this.lifeExpOnEarth()/11.86);
  return lifeExpOnJupiter;
}

// lifeOverExpectancy(){
//   let lifeOverExpectancy = this.ageInYears - this.lifeExpOnEarth;
//   return lifeOverExpectancy;
// }


isAlive(){
  if(this.ageInYears() >= this.lifeExpectancy) {
      return true;
    }
    return false;
}






}
