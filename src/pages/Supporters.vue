<template>
<q-page>

  <div class="absolute-center" style="background-color: rgba(245,241,234,.7); border-radius: 10px;">

    <div class="row wrap justify-around">
      <!-- Banner -->
      <div class="col-12 q-pt-md" >
        <center> <img src="statics/cryptorado.png" style="max-width: 30%; min-width: 140px;"> </center>
      </div>

      <!-- Headline -->
      <div class="col-11">
        <h5 class="" style="margin: 0px 0px; padding: 0px 0px">
          <center> Our Sponsors: </center>
        </h5>
      </div>

      <div class="col-12" style="min-width: 120px;">
        <center> <img src="statics/SandersonIPLaw_logo.svg" style="height: 120px; max-width: 100%; cursor: pointer" @click="openURL('https://sandersoniplaw.com/')"> </center>
      </div>

      <!-- Headline -->
      <div class="col-11">
        <h5 class="" style="margin: 0px 0px; padding: 0px 0px">
          <center> Our Partners: </center>
        </h5>
      </div>

      <div class="col-4" style="min-width: 80px;">
        <center> <img src="statics/dnv_blckchain.png" style="height: 100px; cursor: pointer" @click="openURL('https://www.meetup.com/Denver-Blockchain/')"> </center>
      </div>

      <div class="col-4" style="min-width: 80px;">
        <center> <img src="statics/Aproflow.png" style="height: 100px; cursor: pointer" @click="openURL('https://aproflow.com')"> </center>
      </div>

      <div class="col-4" style="min-width: 80px;">
        <center> <img src="statics/ethdenver_transp-white.png" style="height: 100px; cursor: pointer" @click="openURL('https://ethdenver.com')"> </center>
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
