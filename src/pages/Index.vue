<template>
<q-page style="overflow-x:hidden">
  <div class="absolute-center" style="width: 80%; background-color: rgba(245,241,234,.7);  border-radius: 10px;">

    <div class="row justify-around text-tertiary tight q-pa-md">
      <!-- Logo -->
      <div class="col-12 q-pt-md">
        <center> <img src="statics/cryptorado.png" style="max-width: 30%"> </center>
      </div>

      <!-- Headline -->
      <div class="col-11">
        <h4 class="text-weight-bold" style="margin: 0px 0px; padding: 15px 15px">
          <center> <strong><em>Cryptorado</em></strong> is the <em>hub</em> for
            <strong><em>Blockchain</em></strong> innovation.</center>
        </h4>
      </div>

      <!-- Body -->
      <div class="col-8">
        <h6 style="margin-top: 10px">
          <center>
            <b> Our community </b> is home to passionate leaders and active builders of disruptive, distributed web technologies.
            <br>
            <br>
            Join fellow entrepreneurs, investors, and developers here to <strong><em>build the next generation of the web
                together</em></strong>
          </center>
        </h6>
      </div>

      <!-- Call to Action Buttons -->
      <div class="col-12 q-mb-md">

        <div class="row justify-around items-center">

          <div class="">
            <q-btn glossy class="shadow-24" color="secondary" text-color="black" size="md" to="Events" icon="calendar_today" />
          </div>
          <div class="col-5">
            <center>
              <q-btn rounded class="shadow-24 full-width q-py-lg" glossy color="secondary" text-color="black" size="md" label="Join Our Community" @click.native="openURL('https://keybase.io/team/cryptorado.public')" />
            </center>
          </div>
          <div class="">
            <q-btn class="shadow-24" glossy color="secondary" text-color="black" size="md" to="Resources" icon="device_hub" />
          </div>

          <!-- <div class="col-2"></div>
    <div class="col-8">
      <center>
        <h6>Everyone from the experts to the complete novice is welcome here! <br> We can't wait to meet you.</h6>
      </center>
    </div>
    <div class="col-2"></div> -->
        </div>

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
