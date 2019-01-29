<template>
  <q-page style="overflow:hidden">
    <img
      src="statics/denver-skyline.jpg"
      class=" bk-alt absolute-center"
    >
    <iframe
      class="video_bk"
      frameborder="0"
      src="https://www.youtube.com/embed/gkf_tMj9NCM?modestbranding=0&loop=1&showinfo=0&iv_load_policy=3&autoplay=1&controls=0&start=7&mute=1&playlist=gkf_tMj9NCM"
     ></iframe>
    <div class="row items-center absolute-center text-white" style="width: 90%; background-color: rgba(133, 133, 173,0.7);  border-radius: 10px;">
      <div class="col-12 col-md-5">
        <h3 class="q-my-sm text-weight-bold"> <center> <em>Building a <br>Blockchain  Community</em></center> </h3>
      </div>
      <div class="q-my-md col-12 col-md-6">
        <strong><em>Colorado</em></strong> has one of the largest and most active <strong><em>blockchain</em></strong> communities in the world. The state is home to thought leaders and builders of these disruptive technologies. If you want to get connected with fellow entrepreneurs, investors, and developers; <strong><em>Colorado is the best place to be.</em></strong>
      </div>

      <div class="q-my-md col-12">
        <center>  <h6 class="q-my-none" >We welcome everyone from the experts to the complete novice!</h6></center>
      </div>
        <div class="q-my-md col-3">
            <q-btn
              glossy
              class="shadow-20 float-right"
              color="white"
              text-color="black"
              size="md"
              to="Events"
              label="Events"
            />
      </div>
      <div class="col-6">
        <center>
          <q-btn
            class="shadow-20"
            glossy
            color="white"
            text-color="black"
            size="lg"
            label="Join Our Community"
            @click.native="openURL('https://launchpass.com/coloradoblockchain')"
          />
        </center>
      </div>
      <div class="q-my-md col-3">
          <q-btn
            class="shadow-20"
            glossy
            color="white"
            text-color="black"
            size="md"
            to="Resources"
            label="Resources"
          />
    </div>
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
.bk-alt{
  min-height: 100vh;
  min-width: 100vw;
  z-index: -99;
}
.video_bk{
  position: fixed;
  z-index: -98;
  min-height: 180vh;
  min-width: 300vw;
  transform: translateX(-33%) translateY(-25%);
}
</style>
