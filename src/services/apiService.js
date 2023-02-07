import axios from "axios";

const baseUrl = 'https://api.spotify.com/v1/browse'
const token = 'BQCCkgSUoYEIbuITNw9ADIBTWtTY2_W_eT0Yo4IkLDcxs_XtSvYsrbonHzNQ6I95PsnejBUCtkELqpswEgszqJt-SY8EdVfFWWAAjIQFO3uZTNjVGFJFQ54aIiRTe4DOH1LQ99S1aVy56XUNfnqIYRXDRzav7bPoEP92ZkNi0ff4fg'

export const getData = async(queryParam) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const request = await axios.get(`${baseUrl}/${queryParam}`, config).then((res) => res.data)

    return request
}