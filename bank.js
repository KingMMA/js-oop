const card1 = {
  number: 123456,
  name: "John",
  surname: "Johnson",
  code: 6745,
  balance: 1000,
  bank: "Mono",
};

const card2 = {
  number: 654321,
  name: "Joan",
  surname: "Joanson",
  code: 3412,
  balance: 100,
  bank: "Mono",
};

let atm1 = {
  number: 123,
  withdraw: function(card, amount) {
    if (this.check(card)){
      console.log(`Рахунок до зняття: ${card.balance}`);
      if (card.balance >= amount) {
          card.balance -= amount;
          console.log(`Знята сума: ${amount}`);
      } else {
          console.log('Недостатньо коштів на балансі');
      }
      console.log(`Рахунок після зняття: ${card.balance}`);
    }
  },
  showAccount: function (card) {
    if (this.check(card)) {
      alert(card.balance);
    }
  },
  check: function (card) {
    const code = +prompt("Input code");
    if (code === card.code) {
    // alert("Right code");
      return true;
    } else {
      alert("Wrong code");
      return false;
    }
  },
};

atm1.showAccount(card1);
atm1.withdraw(card2, 50)
