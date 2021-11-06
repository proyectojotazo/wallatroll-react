const filteredName = (advert, filters) => {
  const nameFilter = filters.name
  const regex = new RegExp(nameFilter, 'i')
  return regex.test(advert.name)
}

const filteredSale = (advert, filters) => {
  const saleFilter = filters.saleBuy
  const advertSale = advert.sale ? 'sell' : 'buy'
  return saleFilter === 'all' || saleFilter === advertSale
}

const filteredPrice = (advert, filters) => {
  const [lower, greater] = filters.price
  return advert.price >= lower && advert.price <= greater
}

const filteredTags = (advert, filters) => {
  const tagsSelected = Object.entries(filters.tags)
    .filter(tag => tag[1] === true)
    .map(tag => tag[0])
  const advertTags = advert.tags
  return tagsSelected.every(item => advertTags.includes(item))
}

const applyFilters = (advert, filters) => {
  // Filtro nombre
  const validName = filteredName(advert, filters)
  // Filtro compraVenta
  const validSale = filteredSale(advert, filters)
  // Filtro precio
  const validPrice = filteredPrice(advert, filters)
  // Filtro tags
  const hasAllTags = filteredTags(advert, filters)

  return validName && validSale && validPrice && hasAllTags
}

export default applyFilters
