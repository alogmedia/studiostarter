<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2024 Nuxt Studio. All rights reserved.</p>
      <ul class="footer-links">
        <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
        <li><NuxtLink to="/terms">Terms of Service</NuxtLink></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 1rem 0;
  text-align: center;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0.5rem 0;
    }

    .footer-links {
      list-style: none;
      display: flex;
      gap: 1.5rem;

      li a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s;

        &:hover {
          color: #3498db;
        }
      }
    }
  }
}
</style>
