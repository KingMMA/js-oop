let cat = {
    weight: 30,
    normal_weight: 50,
    name: "Bodya",
    feed: function(){
        this.weight += this.normal_weight - this.weight;
    },
    diet: function(){
        this.weight -= this.weight - this.normal_weight;
    },
    checkWeight: function(){
        if (this.weight > this.normal_weight){
            console.log(`Кіт трішки набрав ваги: ${this.weight}. Вводимо дієту⚡️`);
            this.diet();
        }
        else if (this.weight < this.normal_weight){
            console.log(`Кіт трішки похудів: ${this.weight}. Вводимо набір ваги⚡️`);
            this.feed();
        } else {
            console.log("Вага в нормі!");
        }
    },
    showWeight: function(){
        console.log(`Вага кота: ${this.weight}`);
    },
    toString: function() {
        return 'Кіт ' + this.name;
    }
}

// Тестові випадки
cat.checkWeight();
cat.showWeight();
cat.weight = 100;
cat.checkWeight();
cat.showWeight();
cat.weight = 50;
cat.checkWeight();
cat.showWeight();
console.log(cat.toString())
// alert(cat)
