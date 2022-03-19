import { default as axios } from 'axios'

export const getData = async (url, history) => {
    try {
        const data = await axios.get(url)
        return data
    } catch (e) {
        if (e.message.includes('404')) {
            history.push('/404')
        }
    }
}
const { REACT_APP_BACKEND_URL } = process.env

const http = (token, useUpload) => {
    const headers = {}
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }
    if (useUpload) {
        headers['Content-Type'] = 'multipart/form-data'
    }
    return axios.create({
        baseURL: 'https://fw5-zwallet.herokuapp.com/',
        headers
    })

}
export default (axios, http)