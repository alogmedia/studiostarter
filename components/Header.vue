<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo">
        <NuxtLink to="/">Nuxt Studio</NuxtLink>
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        <Icon name="i-ph-list" />
      </button>
      <ul :class="['nav-links', { open: menuOpen }]">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: #ecf0f1;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: inherit;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;

    li a {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s;

      &:hover {
        color: #3498db;
      }
    }

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: #34495e;
      padding: 1rem 0;
    }
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .nav-links {
      display: none;
    }
  }
}
</style>
