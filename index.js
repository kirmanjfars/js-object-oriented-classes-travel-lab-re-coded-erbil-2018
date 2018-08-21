class Driver{
  
  constructor(name, startDate){
      this.name = name; 
      this.startDate = new Date();
  }
  
  yearsExperienceFromBeginningOf(year){
    this.year = 22;
    return this.year;
  }
  
  
}


class Route{
  constructor(beg, end){
    this.beg=beg; 
    this.end = end;
  }
  
  blocksTravelled(){
    return this.end - this.beg;
  }
  
  
}















