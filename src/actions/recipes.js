import axios from 'axios';
import API_KEY from '../config';

axios.get(`http://food2fork.com/api/search?key=${API_KEY}&q=broccoli`)

