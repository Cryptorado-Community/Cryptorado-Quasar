<template>
  <q-page
  style="overflow-x:hidden"
  >
    <img
      src="statics/cryptorado_banner_clean.jpeg"
      class="absolute-center"
    >
    <div class="row items-center absolute-center text-tertiary" style="width: 90%; background-color: rgba(245,241,234,.7);  border-radius: 10px;">
<!-- Headline -->
      <div class="col-12">
        <h4 class="q-pb-sm text-weight-bold"> <center> <em>Building a <br>Blockchain  Community</em></center> </h4>
      </div>
<!-- Body -->
      <div class="col-2"></div>
      <div class="col-8">
        <h6>
        <strong><em>Colorado</em></strong> has one of the largest and most active <strong><em>blockchain</em></strong> communities in the world. The state is home to thought leaders and builders of these disruptive technologies. If you want to get connected with fellow entrepreneurs, investors, and developers; <strong><em>Colorado is the best place to be.</em></strong>
      </h6>
      </div>
      <div class="col-2"></div>
<!-- Call to Action Buttons -->
      <div class="col-2"></div>
        <div class=" col-1">
            <q-btn
              glossy
              class="shadow-24 full-width float-right"
              color="secondary"
              text-color="black"
              size="sm"
              to="Events"
              icon="calendar_today"
            />
      </div>
      <div class="col-1"></div>
      <div class="col-4">
        <center>
          <q-btn
            class="shadow-24 full-width"
            glossy
            color="secondary"
            text-color="black"
            size="md"
            label="Join Our Community"
            @click.native="openURL('https://keybase.io/team/cryptorado')"
          />
        </center>
      </div>
      <div class="col-1"></div>
      <div class="col-1">
          <q-btn
            class="shadow-24 full-width"
            glossy
            color="secondary"
            text-color="black"
            size="sm"
            to="Resources"
            icon="device_hub"
          />
    </div>
    <div class="col-2"></div>

    <div class="col-2"></div>
    <div class="col-8">
      <center>  <h6>We welcome everyone from the experts to the complete novice!</h6></center>
    </div>
    <div class="col-2"></div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'

export default {
  methods: {
    openURL
  }
}

</script>

<style>
</style>
