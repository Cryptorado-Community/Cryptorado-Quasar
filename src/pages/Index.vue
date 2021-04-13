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
            <q-btn rounded glossy class="shadow-5" style="padding:3vh 10vw" color="secondary" text-color="black" size="md" label="Community Chat" icon="fab fa-discord" icon-right="fab fa-discord"
              @click.native="openURL('https://discord.gg/gWcej9rUxN')" />
          </div>
        </center>

        <center>
          <div style="width:30vw">
            <hr class="q-my-md">
          </div>
        </center>

        <center>
          <q-btn rounded glossy class="shadow-5" style="padding:1vh 5vw; margin:10px 20px" color="secondary" text-color="black" size="md" to="Resources" icon-right="device_hub" icon="device_hub" label="Resources" />

          <q-btn rounded glossy class="shadow-5" style="padding:2vh 10vw; margin:10px 20px" color="secondary" text-color="black" size="md" to="Events" icon="calendar_today" icon-right="calendar_today" label="Events" />

          <q-btn rounded glossy class="shadow-5" style="padding:1vh 5vw; margin:10px 20px" color="secondary" text-color="black" size="md" to="Supporters" icon="fab fa-bitcoin" icon-right="fab fa-ethereum" label="Supporters" />
        </center>

        <center>
          <div style="width:30vw">
            <hr class="q-my-md">
          </div>
        </center>

        <center>
          <div style="margin-top:4vh; padding-bottom:0px; font-size:medium">
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
