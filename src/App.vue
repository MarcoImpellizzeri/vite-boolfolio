<script>

export default {

}
</script>

<template>
  <header>
    <div class="container-fluid">
      <nav class="container py-3">
        <ul class="d-flex list-unstyled mb-0">
          <li class="me-4">
            <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'projects' }">Progetti</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
.container-fluid {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);

  a {
    font-size: 1.1rem;
    text-decoration: none;
    color: black;
  }
}
</style>