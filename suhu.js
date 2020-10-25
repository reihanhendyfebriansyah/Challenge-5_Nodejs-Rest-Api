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

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () =>{
    console.log("Server run on port 8000");
})

// end-point "/Celcius" dengan method POST
app.get("/convert/celcius/:celcius", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let celcius = Number(req.params.celcius) 
    

    let reamur = 4/5 * celcius
    let kelvin = celcius + 273
    let fahrenhait = (9/5 * celcius) + 32

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius: celcius,
        
        reamur: reamur,
        Kelvin: kelvin,
        Fahrenheit: fahrenhait 
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/Reamur" dengan method POST
app.get("/convert/reamur/:reamur", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let reamur = Number(req.params.reamur) 

    let celcius = 5/4 * reamur
    let kelvin = (5/4 * reamur) + 273
    let fahrenhait = (9/4 * reamur) + 32
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Reamur: reamur,
        Celcius: celcius,
        Kelvin: kelvin,
        Fahrenheit: fahrenhait
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/Kelvin" dengan method POST
app.get("/convert/kelvin/:kelvin", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let kelvin = Number(req.params.kelvin) 

    let celcius = 5/4 * kelvin
    let reamur = 4/5 * kelvin
    let fahrenhait = (9/4 * kelvin) + 32
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Kelvin: kelvin,
        Reamur: reamur,
        Celcius: celcius,
        Fahrenheit: fahrenhait
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/Fahrenheit" dengan method POST
app.get("/convert/fahrenheit/:fahrenhait", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let fahrenheit = Number(req.params.fahrenhait) 

    let celcius = 5/4 * fahrenheit
    let reamur = 4/5 * fahrenheit
    let kelvin = (5/4 * fahrenheit) + 273
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Fahrenheit: fahrenheit ,
        Kelvin: kelvin,
        Reamur: reamur,
        Celcius: celcius
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
