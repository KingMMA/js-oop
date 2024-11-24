// constructor

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    let speed = 0;
    let age = 0;
    this.setAge = function (a) {
      if (a > 0) {
        age = a;
      } else {
        console.log("Цей собака, очевидно, ще не з'явився на світ...");
      }
    };
    this.getAge = function () {
      return age;
    };
    this.bark = function () {
        console.log(this.name + " сказав Гав!");
    };
    this.changeSpeed = function (speedArg) {
        if ((0.5 <= speedArg) && (2 >= speedArg)){
            speed = speedArg*speed;
            if (this.weight < 25){
                if (speed > 4){
                    speed = 4;
                } else {
                    if (speed > 20){
                        speed = 20;
                    }
                }
            }
        } else {
            console.log("Не допустиме значення!");
        }
        
    };
    this.start = function () {
        speed = 1;
    };
    this.stop = function () {
        speed = 0;
    };
    this.showSpeed = function () {
        console.log(speed);
    };
    this.toString = function(){
        return `Ім'я: ${this.name}, Порода: ${this.breed}, Вага: ${this.weight}`;
    };
  }
  
  let fido = new Dog("Fido", "Mixed", 38, 10);
  let fluffy = new Dog("Fluffy", "Poodle", 30);
  let spot = new Dog("Spot", "Chihuahua", 10);
  
  let max = new Dog();
  max.name = "Max";
  max.weight = 15;
  fido.setAge(10);
  //fido.bark();
  //alert(fluffy.name + " " + fluffy.breed);
  let str = "Hello, dogs!";
  let dogs = [fido, fluffy, spot, max, str];
  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i] instanceof Dog) {
    console.log(`${dogs[i].name} ${dogs[i].breed} ${dogs[i].getAge()}`);
      dogs[i].bark();
    }
  }
  spot.start();
  spot.weight = 30;
  spot.changeSpeed(3);
  spot.changeSpeed(2);
  spot.changeSpeed(2);
  spot.changeSpeed(2);
  spot.changeSpeed(2);
  spot.showSpeed();
  spot.stop();
  spot.showSpeed();