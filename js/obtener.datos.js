fetch("https://randomuser.me/api/?nat=ES")
  .then(response => response.json())
  .then(json => {
    console.log(json);

    var nombre = json.results[0].name.first + " " + json.results[0].name.last;
    var edad = json.results[0].dob.age;
    var telefono = json.results[0].phone;
    var correo = json.results[0].email;
    var foto = json.results[0].picture.medium;
    var calle = json.results[0].location.street.name;
    var ciudad = json.results[0].location.city;
    var codigopostal = json.results[0].location.postcode;
    var nacionalidad = json.results[0].nat;

    document.getElementsByClassName("foto")[0].innerHTML = '<img src="' + foto + '">';
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("correo").innerHTML = correo;
    document.getElementById("edad").innerHTML = edad;
    document.getElementById("telefono").innerHTML = telefono;
    document.getElementById("calle").innerHTML = calle;
    document.getElementById("ciudad").innerHTML = ciudad;
    document.getElementById("codigopostal").innerHTML = codigopostal;
    document.getElementById("nacionalidad").innerHTML = nacionalidad;

  });


