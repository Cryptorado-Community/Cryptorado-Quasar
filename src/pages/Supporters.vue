<template>
<q-page style="overflow-x:hidden" class="q-pa-lg">
  <div class="q-pa-md" style="background-color: rgba(245,241,234,.7); border-radius: 10px;">

    <div class="text-tertiary">
      <!-- Body -->
      <div>
        <h6 style="margin-top: 10px">
          <center>
            <b> Our community </b> is <b>empowered by generous benefactors... like you!</b> &#128583;
            <br>
            <br>
            The <b>best</b> way to support us is through our <a target="_blank" href="https://gitcoin.co/grants/220/cryptorado"> Gitcoin Grant</a> during a Matching CLR round
            <br>
            Why? Anything you donate is matched <em>exponentailly</em>!
            <br>
            Here is <a target="_blank" href="https://gitcoin.co/blog/how-to-maximize-your-matching-with-gitcoin-grants/">more info on how it works</a>.
          </center>
        </h6>
      </div>

      <center>
        <div>
          <q-btn rounded glossy class="shadow-5" style="padding:2vh 6vw; margin:-3vh 0 1vh 0"  color="secondary" text-color="black" size="lg" label="Donate to our Grant"
            @click.native="openURL('https://discord.gg/3eVjbtb')" />
        </div>
      </center>

      <div class="row wrap justify-around">
        <!-- Breakline -->
        <div style="width:20vw">
          <hr class="q-my-md">
        </div>

        <!-- Headline Sponsors -->
        <div class="col-11">
          <h6 class="" style="margin: 2px 0px; padding: 0px 0px">
            <center> <em> <b>Our Sponsors:</b> </em> </center>
          </h6>
        </div>

        <div class="col-12">
          <center> <img src="statics/SandersonIPLaw_logo.svg" style="width: 25vh; min-width: 15vw; cursor: pointer" @click="openURL('https://sandersoniplaw.com/')"> </center>
        </div>

        <!-- Breakline -->
        <div style="width:20vw">
          <hr class="q-my-md">
        </div>
      </div>

      <!-- Headline Partners-->
      <div class="row wrap justify-absolute">
        <div class="col-12">
          <h6 class="" style="margin: 10px 0px; padding: 0px 0px">
            <center> <em> <b>Our Partners:</b> </em> </center>
          </h6>
        </div>

        <div class="col-3"></div>

        <div class="col-3" style="min-width: 10vw;">
          <center> <img src="statics/OpEI-Purple-circle.png" style="width: 15vh; max-width: 100%; cursor: pointer" @click="openURL('https://theopei.com')"> </center>
        </div>

        <div class="col-3" style="min-width: 10vw;">
          <center> <img src="statics/ethdenver_transp-white.png" style="width: 15vh; max-width: 100%; cursor: pointer" @click="openURL('https://ethdenver.com')"> </center>
        </div>

        <div class="col-3"></div>

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
