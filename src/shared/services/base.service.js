import axios from 'axios';

const http = axios.create({
  baseURL: 'https://66347b559bb0df2359a1a40d.mockapi.io/api/v1/',
});

export class BaseService {
  ownerEndpoint = 'owner';
  touristEndpoint = 'tourist';
  baseURL2= 'http://localhost:3000/api/v1/promotion'
  nextid=10;

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

  async getPromotions() {
    try {
      return await http.get(this.baseURL2);
    } catch (error) {
      console.error('Error al obtener las promociones:', error);
      throw error;
    }
  }

  async getPromotionsById(id) {
    try {
      return await http.get(`${this.baseURL2}?id=${id}`);
    } catch (error) {
      console.error(`Error al obtener la promoción con el id ${id}:`, error);
      throw error;
    }
  }
  async addPromotion(name, description, community, location, schedule, offer, price) {
    const newPromotion = {
      id: (++this.nextid).toString(),
      name: name,
      description: description,
      community: community,
      location: location,
      start_time: schedule,
      offer: offer,
      price: (price).toString(),
    };
    try {
      return await http.post(`${this.baseURL2}`, newPromotion);
    } catch (error) {
      console.error('Error al agregar la promoción:', error);
      throw error;
    }
  }
}
