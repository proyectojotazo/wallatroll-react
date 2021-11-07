const validateName = data => {
  const name = data.get('name')
  const regName =
    /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,}(((\s){1}[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,}){1,})?$/i
  return regName.test(name)
}

const validatePrice = data => {
  const price = data.get('price')
  const regPrice = /^[0-9]{1,}([.]{1}[0-9]{1,})?$/
  return regPrice.test(price)
}

const validateFile = data => {
  // Obtenemos el nombre del archivo y lo separamos por los puntos
  const photoNameSplitted = data.get('photo').name.split('.')
  const noFile = photoNameSplitted.length === 1 // No enviamos foto

  // El último elemento de la lista será la extensión del archivo
  const photoExt = photoNameSplitted[photoNameSplitted.length - 1]
  const filesAccepted = ['jpg', 'jpeg', 'png', 'gif']
  return noFile || filesAccepted.includes(photoExt)
}

const validateAdvert = data => {
  const validName = validateName(data)
  const validPrice = validatePrice(data)
  const validFile = validateFile(data)

  const errMsgs = {
    name:
      !validName &&
      'El nombre del artículo solo puede estar compuesto por carácteres alfanuméricos',
    price: !validPrice && 'El precio debe ser un valor numérico positivo',
    file:
      !validFile &&
      'El archivo debe estar en uno de los siguientes formatos: .jpg, .jpeg, .png, .gif'
  }

  const errMsgsFiltered = Object.entries(errMsgs)
    .filter(el => el[1])
    .map(el => el[1])
  const validAdvert = validName && validPrice && validFile

  return { validAdvert, errMsgsFiltered }
}

export default validateAdvert
