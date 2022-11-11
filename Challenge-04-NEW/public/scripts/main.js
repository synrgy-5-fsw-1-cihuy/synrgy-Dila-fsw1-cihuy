/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
/*
 * Contoh penggunaan DOM di dalam class
 * */

const app = new App();

app.init().then(app.run);




// const submitButton = document.getElementById("submit_btn");


// submitButton.addEventListener("click", (event) =>{
//     event.preventDefault()

//     const driver = document.getElementById("tipe_driver").value;
//     const date = document.getElementById("tanggal_booking").value;
//     const time = document.getElementById("waktu_booking").value;
//     const passenger = document.getElementById("jumlah_penumpang").value;

//     console.log(driver,date,time,passenger)
//     if(driver == 'default') {
//         alert('Tipe driver harus diisi!')
//         return
//     }

//     if( date == '') {
//         alert('Tanggal ambil harus diisi!')
//         return
//     }

//     if(time == 'default') {
//         alert('Waktu ambil harus diisi!')
//         return
//     }

//     // console.log ("submitted")
//     // const formattedDateAndTime = Date.parse(date+"T"+time+":00.00Z");
//     // const allCars = await Binar.listCars();

//     // console.log(allCars);
    
//     // console.log(formattedDateAndTime);

// });

