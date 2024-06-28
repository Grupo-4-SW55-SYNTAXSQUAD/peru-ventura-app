import axios from 'axios';

const http = axios.create({
  baseURL: 'https://peruventuraapi.azurewebsites.net/api/v1/',
});

export class BaseService {
  // Endpoints
  ownerEndpoint = 'owner';
  touristEndpoint = 'tourist';
  talleresEndpoint = 'taller';
  activityEndpoint = 'activity';
  bookingEndpoint = 'booking';
  bookingStateEndpoint = 'booking-state';
  categoryEndpoint = 'category';
  destinationTripEndpoint = 'destination-trip';
  paymentEndpoint = 'payment';
  paymentStateEndpoint = 'payment-state';
  paymentTypeEndpoint = 'payment-type';
  promotionsEndpoint = 'promotions';
  reviewEndpoint = 'review';
  userEndpoint = 'user';

  // Talleres
  async getAllTalleres() {
    try {
      return await http.get(this.talleresEndpoint);
    } catch (error) {
      console.error('Error al obtener el taller:', error);
      throw error;
    }
  }

  async getTallerById(id) {
    try {
      return await http.get(`${this.talleresEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener el taller con el id ${id}:`, error);
      throw error;
    }
  }

  // Activity
  async getAllActivities() {
    try {
      return await http.get(this.activityEndpoint);
    } catch (error) {
      console.error('Error al obtener todas las actividades:', error);
      throw error;
    }
  }

  async getActivityById(id) {
    try {
      return await http.get(`${this.activityEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener la actividad con el id ${id}:`, error);
      throw error;
    }
  }

  async createActivity(activity) {
    try {
      return await http.post(this.activityEndpoint, activity);
    } catch (error) {
      console.error('Error al crear la actividad:', error);
      throw error;
    }
  }

  // Booking
  async getAllBookings() {
    try {
      return await http.get(this.bookingEndpoint);
    } catch (error) {
      console.error('Error al obtener todas las reservas:', error);
      throw error;
    }
  }

  async getBookingById(id) {
    try {
      return await http.get(`${this.bookingEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener la reserva con el id ${id}:`, error);
      throw error;
    }
  }

  async createBooking(booking) {
    try {
      return await http.post(this.bookingEndpoint, booking);
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      throw error;
    }
  }

  // BookingState
  async getAllBookingStates() {
    try {
      return await http.get(this.bookingStateEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los estados de reserva:', error);
      throw error;
    }
  }

  async getBookingStateById(id) {
    try {
      return await http.get(`${this.bookingStateEndpoint}/${id}`);
    } catch (error) {
      console.error(
        `Error al obtener el estado de reserva con el id ${id}:`,
        error
      );
      throw error;
    }
  }

  // Category
  async getAllCategories() {
    try {
      return await http.get(this.categoryEndpoint);
    } catch (error) {
      console.error('Error al obtener todas las categorías:', error);
      throw error;
    }
  }

  async getCategoryById(id) {
    try {
      return await http.get(`${this.categoryEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener la categoría con el id ${id}:`, error);
      throw error;
    }
  }

  // DestinationTrip
  async getAllDestinationTrips() {
    try {
      return await http.get(this.destinationTripEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los viajes de destino:', error);
      throw error;
    }
  }

  async getDestinationTripById(id) {
    try {
      return await http.get(`${this.destinationTripEndpoint}/${id}`);
    } catch (error) {
      console.error(
        `Error al obtener el viaje de destino con el id ${id}:`,
        error
      );
      throw error;
    }
  }

  // Payment
  async getAllPayments() {
    try {
      return await http.get(this.paymentEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los pagos:', error);
      throw error;
    }
  }

  async getPaymentById(id) {
    try {
      return await http.get(`${this.paymentEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener el pago con el id ${id}:`, error);
      throw error;
    }
  }

  async createPayment(payment) {
    try {
      return await http.post(this.paymentEndpoint, payment);
    } catch (error) {
      console.error('Error al crear el pago:', error);
      throw error;
    }
  }

  // PaymentState
  async getAllPaymentStates() {
    try {
      return await http.get(this.paymentStateEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los estados de pago:', error);
      throw error;
    }
  }

  async getPaymentStateById(id) {
    try {
      return await http.get(`${this.paymentStateEndpoint}/${id}`);
    } catch (error) {
      console.error(
        `Error al obtener el estado de pago con el id ${id}:`,
        error
      );
      throw error;
    }
  }

  // PaymentType
  async getAllPaymentTypes() {
    try {
      return await http.get(this.paymentTypeEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los tipos de pago:', error);
      throw error;
    }
  }

  async getPaymentTypeById(id) {
    try {
      return await http.get(`${this.paymentTypeEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener el tipo de pago con el id ${id}:`, error);
      throw error;
    }
  }

  // Promotions
  async getAllPromotions() {
    try {
      return await http.get(this.promotionsEndpoint);
    } catch (error) {
      console.error('Error al obtener todas las promociones:', error);
      throw error;
    }
  }

  async getPromotionById(id) {
    try {
      return await http.get(`${this.promotionsEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener la promoción con el id ${id}:`, error);
      throw error;
    }
  }

  async createPromotion(promotion) {
    try {
      return await http.post(this.promotionsEndpoint, promotion);
    } catch (error) {
      console.error('Error al crear la promoción:', error);
      throw error;
    }
  }

  async updatePromotion(id, promotionData) {
    try {
      const response = await http.patch(
        `${this.promotionsEndpoint}/${id}`,
        promotionData
      );
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar la promoción con el id ${id}:`, error);
      throw error;
    }
  }

  async deletePromotion(id) {
    try {
      const response = await http.delete(`${this.promotionsEndpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar la promoción con el id ${id}:`, error);
      throw error;
    }
  }

  // Review
  async getAllReviews() {
    try {
      return await http.get(this.reviewEndpoint);
    } catch (error) {
      console.error('Error al obtener todas las reseñas:', error);
      throw error;
    }
  }

  async getReviewById(id) {
    try {
      return await http.get(`${this.reviewEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener la reseña con el id ${id}:`, error);
      throw error;
    }
  }

  async createReview(review) {
    try {
      return await http.post(this.reviewEndpoint, review);
    } catch (error) {
      console.error('Error al crear la reseña:', error);
      throw error;
    }
  }

  // Tourist
  async createTourist(tourist) {
    try {
      return await http.post(this.touristEndpoint, tourist);
    } catch (error) {
      console.error('Error al crear el turista:', error);
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

  // User
  async getAllUsers() {
    try {
      return await http.get(this.userEndpoint);
    } catch (error) {
      console.error('Error al obtener todos los usuarios:', error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      return await http.get(`${this.userEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al obtener el usuario con el id ${id}:`, error);
      throw error;
    }
  }

  async createUser(user) {
    try {
      return await http.post(this.userEndpoint, user);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }
  async updateUser(id, user) {
    try {
      return await http.patch(`${this.userEndpoint}/${id}`, user);
    } catch (error) {
      console.error(`Error al actualizar el usuario con el id ${id}:`, error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      return await http.delete(`${this.userEndpoint}/${id}`);
    } catch (error) {
      console.error(`Error al eliminar el usuario con el id ${id}:`, error);
      throw error;
    }
  }
}
