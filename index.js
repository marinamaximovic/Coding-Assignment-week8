class Instrument {
  constructor(type, brand) {
    this.type = type;
    this.brand = brand;
  }
}

class Menu {
  constructor() {
    //instruments array
    this.instruments = [];
  }

  //this will create new instrument and push it into array
  addInstrument() {
    let instrumentType = prompt("Please enter the desired instrument type:");
    let instrumentBrand = prompt("Please enter the desired instrument brand:");
    this.instruments.push(new Instrument(instrumentType, instrumentBrand));
  }

  //delete instrument
  deleteInstruments() {
    let instrumentNum = prompt(
      "Please enter instrument number you want to delete:"
    );
    this.instruments.splice(instrumentNum, 1);
  }

  //view available instruments
  showAllInstruments() {
    let listInstruments = "";
    for (let i = 0; i < this.instruments.length; i++) {
      listInstruments += `${i}) ${this.instruments[i].type} ${this.instruments[i].brand}\n`;
    }

    alert(listInstruments); //this will show a current list of instruments
  }

  // this will show Menu options
  showMenu() {
    return prompt(`
        Menu:
        ------------------
        0) Exit 
        1) Add instrument
        2) View instruments
        3) Delete instrument
          `);
  }

  //start the Menu
  start() {
    let choice = this.showMenu();

    while (choice != 0) {
      switch (choice) {
        case "1":
          this.addInstrument();
          break;
        case "2":
          this.showAllInstruments();
          break;
        case "3":
          this.deleteInstruments();
          break;

        default:
          choice = 0;
      }
      choice = this.showMenu();
    }
    alert("Until the next time, goodbye.");
  }
}

let menu = new Menu();

menu.start();
