// Write your function here:

const tipCalculator = (quality, total) =>{
    let qual = quality.toLowerCase()
    if(qual === 'bad'){
      return 0.05 * total + '$'
    }
    else if(qual === 'ok'){
      return 0.15 * total + '$'
    }
    else if(qual === 'good'){
      return 0.20 * total + '$'
    }
    else if(qual === 'excellent'){
      return 0.30 * total + '$'
    }
    else{
      return 0.18 * total + '$'
    }  
  }
  
  console.log(tipCalculator('Good', 100)) 