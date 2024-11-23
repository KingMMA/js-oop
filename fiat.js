let fiat = {
    make: "Fiat",
    started: false,
    fuel: 0,
    fuel_per_drive: 1,
    start: function() {
        if (this.checkFuel()){
            this.started = true;
        } else {
            console.log("Немає палива!");
        }
    },
    stop: function() {
        this.started = false;
    },
    checkFuel: function(){
        return (this.fuel - this.fuel_per_drive) >= 0
    },
    drive: function() {
        if (this.started && this.checkFuel()){
            console.log("Біп!");
            this.fuel -= this.fuel_per_drive;
        } else {
            if (this.started){
                this.stop();
                console.log("Паливо закінчилось!")
            } else{
                console.log("Спочатку запустіть двигун!");
            }
        }
    },
    showFuel: function() {
        console.log("У меня в баку "+ this.fuel +" литрів бензину!");
    },
    addFuel: function(amount) {
        this.fuel += amount;
    },
    toString: function() {
        return 'Автомобіль ' + this.make;
    }
};

// Тестові випадки
fiat.start()
fiat.showFuel();
fiat.addFuel(10);
fiat.fuel_per_drive = 5;
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.addFuel(10);
fiat.drive();
fiat.start();
fiat.drive();
console.log(fiat.toString());
// alert(fiat);
