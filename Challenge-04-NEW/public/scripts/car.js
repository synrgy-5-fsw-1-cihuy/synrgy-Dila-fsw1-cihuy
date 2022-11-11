class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card p-4 my-3 mx-1">
      <img src="${this.image}" class="car-img pb-3" alt="...">
      
      <div>
        <h5 class = "text-title">${this.manufacture} ${this.model} / ${this.type}</h5>
        <h4 class = "text-title">Rp. ${this.rentPerDay} / hari</h4>
      </div>

      <div>
          <p class = "text-subtitle">${this.description}</p>
      </div

      <div>
        <p class = "text-subtitle">
        <span class="fa-solid fa-users"></span>
        ${this.capacity} Orang
        </p>
        <p class = "text-subtitle">
        <i class="fa fa-cog" aria-hidden="true"></i>
        ${this.transmission}
        </p>
        <p class = "text-subtitle">
        <span class="fa-solid fa-calendar"></span>
        Tahun ${this.year}
        </p>
        <a href="./pilih-mobil">
        <button  class="button" style="width:100%"> Pilih Mobil </button>
        </a>
      </div>

      </div>
      </div>
    `;
  }
}
