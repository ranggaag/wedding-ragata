import axios from "axios"

const url = import.meta.env.VITE_URL_API

export const getComments = async() => {
    const api = await axios.get(`${url}/comments`)
    return api.data.data
}

export const getGallery = async() => {
    const api = await axios.get(`${url}/gallery`)
    return api.data.data
}