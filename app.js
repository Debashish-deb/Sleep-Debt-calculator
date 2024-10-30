const getSleepHours = (day) =>{
    if (day==='monday' || day==='tuesday'||day==='wednesday' || day==='thursday'|| day==='friday' || day==='saturday'||day==='sunday'){
      return 8;
    }
  };
  
  const getActualSleepHours =()=>{
   return (getSleepHours('sunday')+getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday'));
  }
  
  console.log(getActualSleepHours());
   const IdealSleepHours =()=>{
    let idealHours = 7;
    return (idealHours*7);
    }
    //testing function
   console.log(IdealSleepHours());
  
   const calculateSleepDebt =()=>{
    let actualSleepHours = getActualSleepHours()
    if (actualSleepHours === IdealSleepHours()){
      return ('User got the perfect amount of sleep.'); 
    } else if (actualSleepHours > IdealSleepHours()){
        return('User got more sleep than needed.')
      } else {
        return ('User should get some rest.')
      }
   }
  //suggestion after final calculation
   console.log(calculateSleepDebt());
  