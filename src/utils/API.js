import axios from 'axios';

const getAPI = async ()=> {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=50&nat=us');
    return response.data.results
  } catch(error) {
    return {
      message: "There was an error fetching the data"
    }
  }
}
  
export default getAPI;
