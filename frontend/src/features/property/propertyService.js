import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/properties/'
const API_URL_SEARCH = 'http://127.0.0.1:8000/properties/search/?search='

// Get getProperties
const getProperties = async () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // }
    console.log("firing get properties")
    const response = await axios.get(API_URL)
    return response.data
}

// Get search reuslt
const getSearchedProperties = async (q) => {
    const query = q ? q : ""
    const response = await axios.get(`${API_URL_SEARCH}${query}`)
    return response.data
}

const propertyService = {
    getProperties,
    getSearchedProperties,

}
export default propertyService