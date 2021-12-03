class Employee { 
    name:string; 
  
    constructor(name:string) { 
       this.name = name;
    } 
 } 
  
 class Engineer extends Employee { 
    display():void { 
       console.log("Name:  "+this.name);
    } 
 }
  
 var obj = new Engineer("Jai"); 
 obj.display();