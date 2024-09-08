
   
   var eatsPlants = "false";
   var eatsAnimals = "true";
 
   let Food = eatsAnimals && eatsPlants ?"omnivore" 
   :eatsPlants? "herbivore" 
   :eatsAnimals?"carnivore"
   :"undefined";
   console.log(food);
   

   var musicians = 0;
  if (musicians<=0){
    console.log("not a group");

  }else if (musicians === 1){
    console.log("solo");
    
  }else if (musicians === 2){
    console.log("duet");
  }else if (musicians === 3){
    console.log("trio");
  }else if(musicians === 4){
    console.log("quartet");
    
  }else if(musicians>4){
    console.log("this is a large group");
  }
  
 let balance = 1;
 let checkBalance ="true";
 let isActive ="true";
 if (checkBalance===true)


    if(isActive===true){
        console.log(balance);
    


 }

 
  
  let flavor ="vanilla";
  let vessel ="cone";
  let toppings="sprinkles";
 if(
    (flavor === "vailla"||"chocolate")&&(vessel=== "cone"||"bowl")&&(toppings==="sprinkles"||"peanuts")

 ){
    console.log("I'd like two scoops of"+flavor+"ice cream in a"+vessel+"with"+toppings+".")
 }
    