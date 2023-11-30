<script>
import { RouterLink } from 'vue-router'
export default {
    components : { RouterLink }
}

</script>

<template>
    <nav class="navbar navbar-expand bg-body-transparent sticky-top mynavbar">
    <div class="container">
      <RouterLink to="#home" class="navbar-brand">Nouva</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Nouva</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="navbar-nav ms-auto">
            <RouterLink to="#home" class="nav-link" href="#">Home</RouterLink>
            <RouterLink to="#info" class="nav-link" href="#">Info</RouterLink>
            <RouterLink to="#story" class="nav-link" href="#story">Story</RouterLink>
            <RouterLink to="#gallery" class="nav-link" href="#gallery">Galery</RouterLink>
            <RouterLink to="#presence" class="nav-link" href="#presence">Presence</RouterLink>
            <RouterLink to="#gifts" class="nav-link" href="#gifts">Gift</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>