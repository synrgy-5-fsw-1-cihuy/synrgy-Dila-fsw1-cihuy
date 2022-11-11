class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.submitButton = document.getElementById("submit-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.driverInput = document.getElementById("tipe-driver");
    this.dateInput = document.getElementById("tanggal-booking");
    this.timeInput = document.getElementById("waktu-booking");
    this.passengerInput = document.getElementById("jumlah-penumpang");

  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.submitButton.addEventListener("click", this.filterCars, true);
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      
      //card sizing
      node.classList.add('col-12');
      node.classList.add('col-lg-4');

      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  filterCars = async (event) => {
    this.clear();
    
    //alert to fill out the form before submitting
    if (this.driverInput.value == 'default') {
      alert('Tipe driver harus diisi!')
    }
    else if (this.dateInput.value == '') {
      alert('Tanggal ambil harus diisi!')
    }
    else if (this.timeInput.value == 'default') {
      alert('Waktu ambil harus diisi!')
    }

    let formattedDateAndTime = Date.parse(this.dateInput.value + "T" + this.timeInput.value + ":00Z");

    let filteredCars = await Binar.listCars(data => {
      let formattedAvailableAt = Date.parse(data.availableAt);
      if (formattedAvailableAt >= formattedDateAndTime && data.capacity >= this.passengerInput.value) {
        return data.availableAt && data.capacity;
      }
    });

    
    Car.init(filteredCars)
    this.run();

    event.preventDefault();
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };

}
