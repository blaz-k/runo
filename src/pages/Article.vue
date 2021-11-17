<template>
  <div id="article">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog1.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              Dream destinations to visit this year in Paris
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. count: {{ this.$store.getters.getCount }}
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog2.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              Breathtaking first-person photos around Europe
            </h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog3.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              What collectors need to know about authenticity
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog4.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              Instagram artists with great photography skills
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog5.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              Thins to know before visiting Cave in Germany
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog6.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              Nina Smith vibrant work collab with Nike Dunk
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog7.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              Richard Norton photorealistic rendering as real photos
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card border-0 h-100">
          <img src="../assets/img/Blog8.png" class="card-img-top" alt="..." />
          <small class="text-muted">16.11.2021</small>
          <div class="card-body">
            <h5 class="card-title">
              25 quality collectors toys inspired by famous films
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
};
</script>

<style>
#article .text-muted {
  color: #6c757d;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
}

#article p {
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* or 167% */
  text-align: left;

  color: #6c757d;
}
#article h5 {
  text-align: left;

  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* or 139% */

  color: #495057;
}
</style>
