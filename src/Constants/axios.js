import { baseurl } from "./constants";
import axios from 'axios'


export const axio = axios.create({
    baseURL: baseurl,
  });
