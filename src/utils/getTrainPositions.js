import axios from 'axios'
import { trainURL, demoAPIKey as api_key, contentType } from '../constants/api'

const getTrainPositions = () => {
  console.log('getting trains', new Date())
  return axios
    .get(trainURL, {
      params: {
        api_key,
        contentType,
      },
    })
    .then(response => response)
    .catch(err => Promise.reject(err))
}

export default getTrainPositions
