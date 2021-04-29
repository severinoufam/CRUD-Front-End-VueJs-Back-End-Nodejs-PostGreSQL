/**
 * src/services/Api.js
 * Arquivo responsável por inicializar o 'axios' e as requisições da url base dos HTTP
 */

 import axios from 'axios';

 export default () => axios.create({
   baseURL: 'http://localhost:3000/api',
 });
