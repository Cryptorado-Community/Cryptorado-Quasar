<template>
<q-page style="overflow-x:hidden" class="q-pa-lg">
  <div class="q-pa-md" style="background-color: rgba(245,241,234,.7);  border-radius: 10px;">

    <div class="text-tertiary q-pa-md">
      <!-- Logo -->
      <div>
        <center> <img src="statics/cryptorado.png" style="height:33vh"> </center>
      </div>

      <!-- Headline -->
      <div>
        <h4 class="text-weight-bold" style="margin: 0px 0px; padding: 15px 15pxtight">
          <center> <strong><em>Cryptorado</em></strong> is the <em>hub</em> for
            <strong><em>Blockchain</em></strong> innovation.</center>
        </h4>
      </div>

      <!-- Body -->
      <div>
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
      <div class="q-mb-md">

        <center>
          <div>
            <q-btn rounded class="shadow-24" style="padding:3vh 10vw" glossy color="tertiary" text-color="white" size="md" label="Online Chat" icon="fab fa-keybase" icon-right="fab fa-keybase"
              @click.native="openURL('https://keybase.io/team/cryptorado.public')" />
          </div>
        </center>

        <center>
          <div style="width:30vw">
            <hr class="q-my-md">
          </div>
        </center>

        <center>
          <q-btn glossy class="shadow-24" style="padding:1vh 5vw; margin:10px 20px" color="secondary" text-color="black" size="md" to="Events" icon="calendar_today" label="Events" />

          <q-btn rounded class="shadow-24" style="padding:10px 10vw" glossy color="primary" text-color="black" size="md" label="Sign-up Survey" icon="assignment" icon-right="assignment" @click.native="openURL('https://forms.gle/4ei8WGTGsc8ac6ZG8')" />

          <q-btn glossy class="shadow-24" style="padding:1vh 5vw; margin:10px 20px" color="secondary" text-color="black" size="md" to="Resources" icon-right="device_hub" label="Resources" />
        </center>

        <center>
          <div style="width:30vw">
            <hr class="q-my-md">
          </div>
        </center>

        <center>
          <div style="margin-top:4vh; padding-bottom:0px; font-size:large">
            <b><em> Contact us: <a target="_blank" href="mailto:community@cryptorado.org">community@cryptorado.org</a> </em></b>
          </div>
        </center>

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
