import axios from 'axios'
import {baseUrl} from '../baseUrl'


export function allPortos(id) {
  return dispatch => {
    dispatch(loading())
    axios.get(`${baseUrl}/${id}`)
    .then(({data})=> {
      dispatch(success(data.data))
    })
    .catch(err => dispatch(error(err)))
  }
}

function loading() {
  return{
    type:"LOAD"
  }
}

function error() {
  return{
    type:'ERROR'
  }
}

function success(payload) {
  return{
    type:'SUCCESS',
    payload
  }
}