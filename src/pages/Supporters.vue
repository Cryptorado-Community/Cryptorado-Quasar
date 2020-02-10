<template>
<q-page class="q-pa-xl">

  <div class="" style="background-color: rgba(245,241,234,.7); border-radius: 10px;">

    <div class="row wrap justify-around">
      <!-- Logo -->
      <div>
        <center> <img src="statics/cryptorado.png" style="margin-top:4vh; height:33vh"> </center>
      </div>

      <!-- Headline -->
      <div class="col-11">
        <h5 class="" style="margin: 2px 0px; padding: 0px 0px">
          <center> <em> <b>Our Sponsors:</b> </em> </center>
        </h5>
      </div>

      <div class="col-12" style="min-width: 120px;">
        <center> <img src="statics/SandersonIPLaw_logo.svg" style="width: 15vw; max-width: 100%; cursor: pointer" @click="openURL('https://sandersoniplaw.com/')"> </center>
      </div>

      <div style="width:20vw">
        <hr class="q-my-md">
      </div>
      <!-- Headline -->
      <div class="col-11">
        <h5 class="" style="margin: 10px 0px; padding: 0px 0px">
          <center> <em> <b>Our Partners:</b> </em> </center>
        </h5>
      </div>

      <div class="col-4" style="min-width: 80px;">
        <center> <img src="statics/dnv_blckchain.png" style="width: 10vw; cursor: pointer" @click="openURL('https://www.meetup.com/Denver-Blockchain/')"> </center>
      </div>

      <div class="col-4" style="min-width: 80px;">
        <center> <img src="statics/OpEI_purple.png" style="width: 10vw; cursor: pointer" @click="openURL('https://theopei.com')"> </center>
      </div>

      <div class="col-4" style="min-width: 80px;">
        <center> <img src="statics/ethdenver_transp-white.png" style="width: 10vw; cursor: pointer" @click="openURL('https://ethdenver.com')"> </center>
      </div>

    </div>

  </div>
</q-page>
</template>

<script>
import {
  openURL
} from 'quasar'

export default {
  methods: {
    openURL
  }
}
</script>

<style>
</style>
