import {combineReducers} from 'redux'
import allPortos from './getAllPorto'
import porto from './getPorto'

export default combineReducers({
  allPortos,
  porto
})