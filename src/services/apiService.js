import axios from "axios";

const baseUrl = 'https://api.spotify.com/v1/browse'
const token = 'BQBj-SeXtJgDXpssNYg5QhAggbcifdOCv0OdNPPl7ZCsmQxEFshEUSFte3MLwuwTRU7GAHuoS5vRHL3wJLvIKs1zsHMZXKeYttf3AAvKzGzkBmHP8hUpDgJ9Z8smp8nV4ggCDSth4Qyvi4YUHluySPt4cBVqRkhx6Z8e_Y72IeRQog'

export const getData = async(queryParam) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const request = await axios.get(`${baseUrl}/${queryParam}`, config).then((res) => res.data)

    return request
}