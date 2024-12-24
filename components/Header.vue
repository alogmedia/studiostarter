<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo">
        <NuxtLink to="/">
          <img :src="mainLogo || 'mainLogo.png'" alt="Main logo" />
        </NuxtLink>
      </div>
      <!-- Burger Menu Button -->
      <button class="menu-toggle" @click="toggleMenu">
        <Icon :name="menuOpen ? 'i-ph-x' : 'i-ph-list'" />
      </button>
      <ul :class="['nav-links', { open: menuOpen }]">
        <li><NuxtLink to="/">Forside</NuxtLink></li>

        <!-- Historie Dropdown -->
        <li class="dropdown">
          <div
            class="dropdown-header"
            @click="toggleMobileDropdown('historie')"
          >
            <NuxtLink to="/about">Historie</NuxtLink>
            <Icon name="i-ph-caret-down" />
          </div>
          <ul class="dropdown-menu" :class="{ open: dropdownOpen.historie }">
            <li><NuxtLink to="/about/galleri">Galleri</NuxtLink></li>
            <li><NuxtLink to="/about/tidslinje">Tidslinje</NuxtLink></li>
            <li><NuxtLink to="/about/avisartikler">Avisartikler</NuxtLink></li>
          </ul>
        </li>

        <!-- Program Dropdown -->
        <li class="dropdown">
          <div class="dropdown-header" @click="toggleMobileDropdown('program')">
            <NuxtLink to="/program">Program</NuxtLink>
            <Icon name="i-ph-caret-down" />
          </div>
          <ul class="dropdown-menu" :class="{ open: dropdownOpen.program }">
            <li><NuxtLink to="/program/dagsprogram">Dagsprogram</NuxtLink></li>
            <li><NuxtLink to="/program/ugeplan">Ugeplan</NuxtLink></li>
            <li><NuxtLink to="/program/aktiviteter">Aktiviteter</NuxtLink></li>
          </ul>
        </li>

        <li>
          <NuxtLink to="/priser-tilmelding">Priser & Tilmelding</NuxtLink>
        </li>
        <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

// State for dropdown menus
const dropdownOpen = ref({
  historie: false,
  program: false,
});

// Functions to handle dropdown states for mobile
const toggleMobileDropdown = (menu) => {
  dropdownOpen.value[menu] = !dropdownOpen.value[menu];
};

// Mobile menu toggle
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Fetch the logo from content or fallback
const mainLogo = "mainLogo.png"; // Update this to dynamically fetch the logo if needed
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #34733d;
  color: #ecf0f1;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }

  .logo img {
    max-height: 50px;
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
    font-weight: bold;
    padding: 10px;

    li {
      position: relative;

      a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s;

        &:hover {
          color: #fff700;
        }
      }

      &.dropdown {
        .dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          gap: 5px;

          svg {
            margin-left: 0.5rem;
          }
        }

        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #34733d;
          border-radius: 4px;
          list-style: none;
          padding: 0.5rem 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;

          li a {
            display: block;
            padding: 0.5rem 0;
            transition: background-color 0.3s;

            &:hover {
              background-color: #34733d;
              color: #fff700;
            }
          }

          &.open {
            display: block;
          }
        }
      }
    }

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: #34733d;
      padding: 1rem 0;

      li {
        .dropdown-menu {
          position: static;
          background: none;
          box-shadow: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .nav-links {
      display: none;

      &.open {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      li {
        .dropdown-menu {
          display: none;

          &.open {
            display: block;
          }
        }
      }
    }
  }
}
</style>
