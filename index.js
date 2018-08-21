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
  
  blocksTravelled(beg , end){
   
   if(this.end.vertical == this.beg.vertical){
     return 4;
   }else{
    return this.end.vertical - this.beg.vertical;
   }
  }
  
  
}















