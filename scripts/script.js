const nombre = document.getElementById("nombre")
const foto = document.getElementById("foto")
const email = document.getElementById("email")
const ubicacion = document.getElementById("ubicacion")
const domicilio = document.getElementById("domicilio")
const userRequest = async() => {
    const resp = await fetch("https://randomuser.me/api/")
    const data = await resp.json()
    nombre.textContent = data.results[0].name.last + " " + data.results[0].name.first
    foto.src = data.results[0].picture.large
    email.textContent =data.results[0].email
    ubicacion.textContent = data.results[0].location.state + ", " + data.results[0].location.country
    domicilio.textContent = data.results[0].location.street.name + ", " + data.results[0].location.street.number
  }
  userRequest()

  const contactar = document.getElementById("contactar")
  contactar.addEventListener("click", () => {
    Swal.fire({
      icon: 'success',
      title: 'Contactado!',
      showConfirmButton: false,
      timer: 1000
    })
  })