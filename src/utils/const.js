const url = 'https://api.mercadolibre.com/'

export async function getDataML(categorias) {
    const response = await fetch(`${url}/sites/MLA/search?q=${categorias}`)
    const data = await response.json()
    return data.results;
}

export const getItemML = async (idItem) => {
    const response = await fetch (`${url}items/${idItem.id}`)
    const data = response.json()
    return data
}
