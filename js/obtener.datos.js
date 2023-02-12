fetch("https://randomuser.me/api/?nat=ES")
  .then(response => response.json())
  .then(json => {
    // Aquí puede acceder a los datos de la respuesta JSON
    console.log(json);

    var nombre = json.results[0].name.first + " " + json.results[0].name.last;
    var edad = json.results[0].dob.age;
    var telefono = json.results[0].phone;
    var email = json.results[0].email;
    var foto = json.results[0].picture.medium;
    var calle = json.results[0].location.street.name;
    var ciudad = json.results[0].location.city;
    var codigoPostal = json.results[0].location.postcode;
    var nacionalidad = json.results[0].nat;



document.getElementById("nombre").innerHTML = nombre;



  });


