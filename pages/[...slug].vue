<template>
  <main>
    <Header />
    <section class="content-container">
      <article class="content-wrapper">
        <ContentDoc />
      </article>
    </section>
  </main>
</template>

<style scoped lang="scss">
.content-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: #f5f5f5; /* Light gray background for contrast */
}

.content-wrapper {
  max-width: 800px;
  background: #fff; /* White background for content */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border-radius: 8px; /* Rounded corners */
  padding: 2rem;
  line-height: 1.6; /* Improved readability */
  font-family: "Roboto", sans-serif; /* Clean and modern font */
  color: #333; /* Dark gray text for better contrast */

  /* Style links inside the content */
  a {
    color: #3498db; /* Blue color for links */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Style headings inside the content */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #2c3e50; /* Darker color for headings */
    margin-top: 1.5rem;
  }

  /* Add spacing for paragraphs */
  p {
    margin: 1rem 0;
  }

  /* Lists styling */
  ul,
  ol {
    padding-left: 1.5rem;
    margin: 1rem 0;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px; /* Rounded corners for images */
    margin: 1rem 0;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem;
  }
}
</style>
