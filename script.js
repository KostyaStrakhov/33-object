const car = {
    Brand : 'Reanault',
    Model : 'Megane',
    'Manufacture year' : 2016,
    'Average speed' : 100,
    Tank : 50,
    'Liter per 100km' : 5,
    Drivers : ['John', 'Bill', 'Niсk', ]
    
  }
    //Show car specs
    let defs =''
    for (let key in car) {
    defs +=key + " - " + car[key] + ", "
    }
    alert(`CAR:\n${defs}`)
  
  //Add new driver
  const newDriver = prompt("Enter the name  of new Driver")
  car.Drivers.push(newDriver)
  alert(`New Drivers List:\n${car.Drivers}`)
  
  //Check driver in list
  function checkDriver(name) {
      for (let i = 0; i<=car.Drivers.length-1; i++) {
      if (car.Drivers[i] == name) {
      return alert("The driver is in list");    
      }
    }
    return alert("The driver is NOT in the list");
  }
  
  let ask = prompt("Enter the Driver's name for checking")
  checkDriver(ask)

// distance
const distance = prompt("Enter the distance for travel")

const literKm = ((car['Liter per 100km'] / car['Average speed'])).toFixed(2);
const minuteKm = (60 / car['Average speed']).toFixed(1);

const liters = (literKm * distance).toFixed(2); 
const hours = ((minuteKm * distance)/60).toFixed(1);

function hourMinute (time) {
    if (time % 1 == 0) {
    let hhMm1 = Math.floor(time) + Math.floor(time/4)
    return alert(`For distance in ${distance} km, you will spend:\n${liters} litres of gasoline and ${hhMm1} hours of time` )
    }
    else if (time % 1 != 0){
    let hhMm2 = Math.floor(time) + Math.floor(time/4);
    let minutes = 60*((time % 1).toFixed(2))
    return alert(`For distance in ${distance} km, you will spend:\n${liters} litres of gasoline and ${hhMm2} hours, ${minutes} minutes of time` )
  }
  }

hourMinute(hours)


  




