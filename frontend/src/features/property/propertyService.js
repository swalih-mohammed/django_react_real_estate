import axios from 'axios'

const API_URL = 'https://django-react-real-estate.onrender.com/properties/'
const API_URL_SEARCH = 'https://django-react-real-estate.onrender.com/properties/search/?search='

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