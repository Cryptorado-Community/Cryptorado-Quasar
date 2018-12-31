<template>
  <q-page>
    <img
      src="statics/denver-skyline.jpg"
      class=" bk-alt absolute-center"
    >
    <iframe
      class="video_bk"
      frameborder="0"
      src="https://www.youtube.com/embed/gkf_tMj9NCM?modestbranding=0&loop=1&showinfo=0&iv_load_policy=3&autoplay=1&controls=0&start=7&mute=1&playlist=gkf_tMj9NCM"
     ></iframe>
    <div class="row items-center absolute-center justify-around text-white" style="width: 90%; background-color: rgba(133, 133, 173,0.7);  border-radius: 10px;">
      <!-- <div class="col-1"></div> -->
      <div class="col-10 col-md-4">
        <h3 class="q-my-sm text-weight-bold"> <center> <em>Building a <br>Blockchain  Community</em></center> </h3>
      </div>
      <div class="q-my-md col-10 col-md-6">
        <strong><em>Colorado</em></strong> has one of the largest and most active <strong><em>blockchain</em></strong> communities in the world. The state is home to thought leaders and builders of these disruptive technologies. If you want to get connected with fellow entrepreneurs, investors, and developers; <strong><em>Colorado is the best place to be.</em></strong>
        <br><br>
        We welcome everyone from the experts to the complete novice!
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Index'
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
body {
    overflow:hidden;
}
</style>
