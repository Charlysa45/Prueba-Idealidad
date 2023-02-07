import axios from "axios";

const baseUrl = 'https://api.spotify.com/v1/browse'
const token = 'BQDqsQiwMyZZk63FLRbL1ADr1AJGduRn2lnF3ulnB-wN1oqBIy2gNNQLZwNT6kX0lr1jMRgCIJy7-TvbgVB_EDG0wwCOoUqhMquKx7f9hoZnzJBVp_uTrQR1j6gAkt47XvnNVYTg-x21NniMx4zp9uAb8WObB7GhbZkhRF1xlwY9PQ'

export const getData = async(queryParam) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const request = await axios.get(`${baseUrl}/${queryParam}`, config).then((res) => res.data)

    return request
}