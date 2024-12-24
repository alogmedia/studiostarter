<template>
  <footer class="footer">
    <div class="footer-container">
      <NuxtLink to="/">
        <img :src="mainLogo || 'mainLogo.png'" alt="Main logo" />
      </NuxtLink>
      <p>&copy; 2024 dssh.dk Alle rettigheder forbeholdes.</p>
      <ul class="footer-links">
        <li><NuxtLink to="/privacy">Privatlivspolitik</NuxtLink></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { useAsyncData } from "#app";
// Fetch the Markdown content and access the front matter
const { data } = await useAsyncData("content", () =>
  $fetch(`/api/content/${route.params.slug}`),
);

// Extract the main image from the front matter
const mainLogo = data.value?.frontMatter?.mainImg || "mainLogo.png";
</script>

<style scoped lang="scss">
.footer {
  background-color: #34733d;
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
      padding: 0;

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
