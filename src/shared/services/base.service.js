import axios from 'axios';

const http = axios.create({
  baseURL: 'https://66347b559bb0df2359a1a40d.mockapi.io/api/v1/',
  baseURL2: 'https://localhost:3000/api/v1/promotion'
});

export class BaseService {
  ownerEndpoint = 'owner';
  touristEndpoint = 'tourist';


  async getAllOwners() {
    try {
      return await http.get(this.ownerEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los propietarios:', error);
      throw error;
    }
  }

  async getOwnerById(id) {
    try {
      return await http.get(`${this.ownerEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener el propietario con el id ${id}:`, error);
      throw error;
    }
  }

  async getAllTourists() {
    try {
      return await http.get(this.touristEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los turistas:', error);
      throw error;
    }
  }

  async getTouristById(id) {
    try {
      return await http.get(`${this.touristEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener el turista con el id ${id}:`, error);
      throw error;
    }
  }

  async getPromotionsById(id) {
    try {
      return await http.get(`${http.defaults.baseURL2}/promotion/${id}`);
    } catch (error) {
      console.error(`Error al obtener la promoción con el id ${id}:`, error);
      throw error;
    }
  }

}
