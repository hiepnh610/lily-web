import axios from 'axios'

axios.defaults.baseURL = process.env.baseUrl

import constants from '../constants'
import { SignInModel, SignUpModel } from '../interfaces'

const signInService = (payload: SignInModel): Promise<any> => {
  return axios.post(constants.api.signIn, payload)
}

const signUpServices = (payload: SignUpModel): Promise<any> => {
  try {
    return axios.post(constants.api.signUp, payload)
  } catch (error) {
    return error;
  }
}

export default {
  signInService,
  signUpServices
}
