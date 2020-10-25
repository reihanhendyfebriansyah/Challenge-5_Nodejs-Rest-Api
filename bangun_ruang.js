const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})


app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi)
   
    let luas_permukaan = 6 * (sisi * sisi)
    let volume = sisi * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari = Number(req.body.jari) 
    let tinggi = Number(req.body.tinggi) 

    let volume = (3.14 * jari * jari) * tinggi
    let luaspermukaan = 2* ((3.14 * jari * jari) * tinggi) + (3.14 * (jari * 2)) * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari: jari,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }



    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})