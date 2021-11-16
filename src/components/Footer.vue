<template>
  <div id="footer-section">
    <footer class="row py-5 my-5 border-top">
      <div class="col">
        <a
          href="/"
          class="d-flex align-items-center mb-3 link-dark text-decoration-none"
        >
          <div class="col">
            <h5>Explorate</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">About</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Partners</a>
              </li>
            </ul>
          </div>
        </a>
        <!--
          <h3>Contact the Publisher</h3>
        
        <ul>
          <a>mike@runo.com</a>
          <a>+944 450 904 505</a>
        </ul>-->
      </div>

      <div class="col"></div>

      <div class="col">
        <h5>Explorate</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">About</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Partners</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Job Opportunities</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Advertise</a>
          </li>
        </ul>
      </div>

      <div class="col">
        <h5>Headquarter</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Terms</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Conditions</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Policy</a>
          </li>
        </ul>
      </div>

      <div class="col">
        <h5>Connections</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Facebook</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">Twitter</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">YouTube</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-between py-4 my-4 border-top">
        <p>&copy; 2021 | RUNO Publisher Studio</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-dark nav-link" href="#">Subscribe Now</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer-section p {
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #e5e5e5;
}
</style>
