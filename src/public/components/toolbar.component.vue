<template>
  <header class="card" :class="darkModeClass">
    <Toolbar>
      <template #start style="width: 100%">
        <nav class="nav">
          <router-link to="/home" class="no-underline">
            <h1 class="text-4xl text-red-600 font-semibold">PeruVentura</h1>
          </router-link>
          <ul class="nav-menu" :class="{ active: isMenuActive }">
            <li>
              <router-link to="/home">
                <Button label="Home" text plain />
              </router-link>
            </li>
            <li>
              <router-link to="/destinations">
                <Button label="Destinos" text plain />
              </router-link>
            </li>
            <li>
              <router-link to="/activity">
                <Button label="Actividades" text plain />
              </router-link>
            </li>
            <li>
              <router-link to="/promotion">
                <Button label="Promociones" text plain />
              </router-link>
            </li>
            <li>
              <router-link to="/contact">
                <Button label="Contactos" text plain />
              </router-link>
            </li>
          </ul>
          <div
            class="hamburger"
            :class="{ active: isMenuActive }"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="profile">
            <div class="profile-switch">
              <InputSwitch v-model="checked" />
            </div>
            <div v-if="tourist" class="profile-items">
              <router-link to="/profile">
                <Avatar
                  :image="tourist.avatar"
                  style="width: 32px; height: 32px; border-radius: 50%"
                />
              </router-link>
              <router-link to="/login" @click="logout" class="logout-button">
                Logout
              </router-link>
            </div>
            <div v-else>
              <router-link to="/profile">
                <i class="pi pi-user" style="font-size: 24px"></i>
              </router-link>
            </div>
          </div>
        </nav>
      </template>
    </Toolbar>
  </header>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';
const service = new BaseService();

export default {
  data() {
    return {
      tourist: null,
      checked: false,
      isMenuActive: false,
    };
  },
  computed: {
    darkModeClass() {
      return this.checked ? 'dark-mode' : '';
    },
  },
  created() {
    this.fetchTourist(); // Llama a fetchTourist al inicio del componente
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    async fetchTourist() {
      try {
        const tourist = JSON.parse(localStorage.getItem('user'));
        if (tourist) {
          this.tourist = tourist;
        } else {
          console.log('No user data found in localStorage');
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching tourist data from localStorage:', error);
        this.$router.push('/login');
      }
    },
    logout() {
      localStorage.removeItem('user');
      this.tourist = null;
      this.$router.push('/login');
    },
    handleResize() {
      if (window.innerWidth > 798 && this.isMenuActive) {
        this.isMenuActive = false;
      }
    },
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.p-toolbar {
  gap: 0 !important;
}

.p-toolbar-group-start {
  width: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  height: 2px;
  width: 25px;
  background: var(--kt-black);
  margin: 4px 0;
  transition: all 0.3s ease;
}

[data-pc-section='start'] {
  width: 100%;
}

/* Mostrar el menú cuando esté activo */
.nav-menu.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background: var(--kt-white);
  width: 100%;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg);
  top: 8px;
  position: relative;
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg);
  top: -8px;
  position: relative;
}

/* Estilos para los enlaces del menú hamburguesa */
.nav-menu a {
  padding: 0.5rem 0;
  color: var(--kt-black);
  text-align: center;
}

.nav-menu a:hover {
  color: var(--kt-white);
  background-color: var(--color-primary);
  border-radius: 5px;
}

/* Ocultar el menú en pantallas pequeñas */
@media (max-width: 798px) {
  .nav-menu {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
