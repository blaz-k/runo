<template>
  <div>
    <p>
      Seamlessly syndicate cutting-edge architectures rather than collaborative
      collaboration and idea-sharing. Proactively incubate visionary interfaces
      whereas premium benefits. Seamlessly negotiate ubiquitous leadership
      skills rather than parallel ideas. Dramatically visualize superior
      interfaces for best-of-breed alignments. Synergistically formulate
      performance based users through customized relationships. Interactively
      deliver cross-platform ROI via granular systems. Intrinsicly enhance
      effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
      monetize market-driven opportunities with multifunctional users.
      Collaboratively enhance visionary opportunities through revolutionary
      schemas. Progressively network just in time customer service without
      real-time scenarios. Synergistically drive e-business leadership with
      unique synergy. Compellingly seize market positioning ROI and
      bricks-and-clicks e-markets. Proactively myocardinate timely platforms
      through distributed ideas. Professionally optimize enabled core
      competencies for leading-edge sources. Professionally enhance stand-alone
      leadership with innovative synergy. Rapidiously generate backend
      experiences vis-a-vis long-term high-impact relationships. Authoritatively
      supply market-driven mindshare and bricks-and-clicks opportunities.
      Holisticly create diverse innovation through adaptive communities.
      Efficiently empower seamless meta-services with impactful opportunities.
      Distinctively transition virtual outsourcing with focused e-tailers.
      <br />
      <br />
      <span class="text2">
        “ Monotonectally seize superior mindshare rather than efficient
        technology. ”
      </span>
      <br />
      <br />

      Compellingly enhance seamless resources through competitive content.
      Continually actualize 24/365 alignments for resource-leveling platforms.
      Energistically enhance high standards in models and professional
      expertise. Intrinsicly iterate extensible metrics for prospective
      opportunities. Continually develop leading-edge experiences through
      quality e-services. Count: {{ getCount }}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "About",
  computed: {
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapActions(["fetchCount"]),
  },
  created() {
    this.fetchCount();
  },
};
</script>

<style>
p {
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  color: #495057;
}
.text2 {
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;

  color: #d4a373;
}
</style>
