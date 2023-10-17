<script>


export default {

  data() {
    return {

    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <nav class="container py-3 d-flex justify-content-between">
        <ul class="d-flex list-unstyled mb-0 align-items-center">
          <li class="me-4">
            <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'projects' }">Progetti</RouterLink>
          </li>
        </ul>
        <div>
          <a class="github" href="https://github.com/MarcoImpellizzeri" target="_blank"><i
              class="fa-brands fa-github"></i></a>
        </div>
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

  .github {
    font-size: 2.1rem;
  }
}
</style>