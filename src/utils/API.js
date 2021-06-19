import axios from 'axios';

const getAPI =  ()=> {
  // try {
  //   const response = await axios.get('https://randomuser.me/api/');
  //   return response.data.results
  // } catch(error) {
  //   return {
  //     message: "There was an error fetching the data"
  //   }
  // }

return axios.get('https://randomuser.me/api/')
}
  
export default getAPI;
