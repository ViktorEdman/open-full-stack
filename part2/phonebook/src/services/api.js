import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export const getAllRecords = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export const createRecord = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

export const updateRecord = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export const deleteRecord = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.status === 200)
}
