<template>
  <div id="navbar-perso">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-dark text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4 nav-header">Runo</span>
      </a>

      <ul class="nav nav-pills nav-right">
        <li>
          <router-link
            to="/"
            class="nav-item nav-link nav-header"
            aria-current="page"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/about"
            class="nav-item nav-link nav-header"
            aria-current="page"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="/article"
            class="nav-item nav-link nav-header"
            aria-current="page"
            >Articles</router-link
          >
        </li>
        <li>
          <router-link
            to="/editors-pick"
            class="nav-item nav-link nav-header"
            aria-current="page"
            >Editor's Pick</router-link
          >
        </li>
        <li>
          <router-link
            to="/editors-pick"
            class="nav-item nav-link nav-header"
            aria-current="page"
            ><i class="fab fa-twitter"></i
          ></router-link>
        </li>
        <li>
          <router-link
            to="/editors-pick"
            class="nav-item nav-link nav-header"
            aria-current="page"
            ><i class="fab fa-facebook"></i
          ></router-link>
        </li>
        <li>
          <router-link
            to="/editors-pick"
            class="nav-item nav-link nav-header"
            aria-current="page"
            ><i class="fab fa-pinterest"></i
          ></router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
#navbar-perso {
  margin-top: -35px;
}

.fs-4 {
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #f8f9fa;
}

.nav-right {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #ffffff;
}
</style>
