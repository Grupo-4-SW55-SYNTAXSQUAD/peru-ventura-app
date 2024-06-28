<template>
  <section class="flex items-center justify-center">
    <Card v-if="user" style="width: 25rem; overflow: hidden">
      <template #header>
        <img class="w-full" :alt="user.name" :src="user.avatar" />
      </template>
      <template #title>{{ user.name }}</template>
      <template #content>
        <div>
          <label for="name">Name:</label>
          <input
            id="name"
            v-model="user.name"
            :readonly="!isEditing"
            type="text"
            class="input-field"
          />

          <label for="email">Email:</label>
          <input
            id="email"
            v-model="user.email"
            :readonly="!isEditing"
            type="email"
            class="input-field"
          />

          <label for="phone">Phone:</label>
          <input
            id="phone"
            v-model="user.phone"
            :readonly="!isEditing"
            type="tel"
            class="input-field"
          />

          <label for="password">Password:</label>
          <input
            id="password"
            v-model="user.password"
            :readonly="!isEditing"
            type="password"
            class="input-field"
          />
        </div>
      </template>
      <template #footer>
        <button @click="toggleEdit" class="btn btn-primary">
          {{ isEditing ? 'Save Changes' : 'Edit' }}
        </button>
        <button @click="deleteUser" class="btn btn-danger">
          Delete Account
        </button>
      </template>
    </Card>
  </section>
  <section>
    <TablePromotions />
    <TableActivity />
  </section>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';
import TableActivity from '../components/table-activity.component.vue';
import TablePromotions from '../components/table-promotions.component.vue';
const service = new BaseService();

export default {
  components: {
    TablePromotions,
    TableActivity,
  },
  data() {
    return {
      user: null,
      isEditing: false,
    };
  },
  methods: {
    async fetchUser() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          this.user = user;
        } else {
          console.error('No user data found in localStorage');
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching user data from localStorage:', error);
        this.$router.push('/login');
      }
    },
    async updateUser() {
      try {
        const response = await service.updateUser(this.user.userId, this.user);
        this.user = response.data;
        localStorage.setItem('user', JSON.stringify(this.user)); // Update localStorage
        this.isEditing = false;
        this.$router.push('/home');
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    },
    async deleteUser() {
      try {
        await service.deleteUser(this.user.userId);
        localStorage.removeItem('user');
        this.$router.push('/login');
        this.$emit('user-deleted');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    toggleEdit() {
      if (this.isEditing) {
        this.updateUser();
      }
      this.isEditing = !this.isEditing;
    },
  },
  async created() {
    this.fetchUser();
  },
};
</script>

<style scoped>
.input-field {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-field[readonly] {
  background-color: #f5f5f5;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}
</style>
