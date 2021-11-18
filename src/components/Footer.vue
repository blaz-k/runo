<template>
  <div id="footer-section">
    <footer class="row py-4 my-3 border-top">
      <div class="col">
        <h5>Contact the Publisher</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">mike@runo.com</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-muted">+944 450 904 505</a>
          </li>
        </ul>
      </div>

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
            <a href="#" class="nav-link p-0 text-muted"
              ><i class="fab fa-twitter fa-2x"></i
              ><i class="fab fa-facebook fa-2x"> </i
              ><i class="fab fa-pinterest fa-2x"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
    <div class="d-flex justify-content-between py-4 my-4 second-footer">
      <p>&copy; 2021 | RUNO Publisher Studio</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3">
          <a class="nav-link subscribe" href="#">Subscribe Now</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer-section h5 {
  color: #e5e5e5;
}
#footer-section p {
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;

  color: #e5e5e5;
}

#footer-section {
  background-color: #212529;
}

#footer-section {
  color: #e5e5e5;
}

.second-footer .subscribe {
  color: #e5e5e5;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
}

.second-footer {
  background-color: #343a40;
}

#footer-section li {
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* or 167% */

  color: #e5e5e5;
}

#footer-section i {
  margin: 5px;
}
</style>
