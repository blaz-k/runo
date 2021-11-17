<template>
  <div>Editors Pick</div>
  <div id="editorsPick-section" class="container">
    <div class="row">
      <div class="text-white col-lg-4">
        <div class="card">
          <img src="../assets/img/editor1.png" class="card-img" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text">08.08.2021</p>

            <h5 class="card-title">
              Richird Norton photorealistic rendering as real photos
            </h5>
            <p class="card-text after">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>
      </div>
      <div class="text-white col-lg-4">
        <div class="card">
          <img src="../assets/img/editor2.png" class="card-img" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text">08.08.2021</p>
            <h5 class="card-title">
              Richird Norton photorealistic rendering as real photos
            </h5>
            <p class="card-text after">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>
      </div>
      <div class="text-white col-lg-4">
        <div class="card">
          <img src="../assets/img/editor3.png" class="card-img" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text">08.08.2021</p>

            <h5 class="card-title">
              Richird Norton photorealistic rendering as real photos
            </h5>
            <p class="card-text after">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless
              data.Count: {{ getCount }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditorsPick",
  computed: {
    ...mapGetters(["getCount"]),
  },
};
</script>

<style>
#editorsPick-section .card-img-overlay {
  margin-top: 20%;
}
#editorsPick-section .card-img-overlay .after {
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* or 167% */

  color: #e5e5e5;
}
#editorsPick-section .card-img-overlay p {
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #e5e5e5;
}

#editorsPick-section .card-img-overlay h5 {
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* or 139% */

  color: #ffffff;
}
</style>
