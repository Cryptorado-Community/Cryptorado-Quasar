<template>
  <q-page>
    <div style="
      position: fixed;
      z-index: -99;
      width: 500%;
      height: 100%;
      transform: translateX(-65%) translateY(-10%);
      overflow: hidden;
    ">
      <iframe
        frameborder="0" height="110%" width="150%" style=" overflow-x: hidden"
        src="https://www.youtube.com/embed/gkf_tMj9NCM?modestbranding=0&loop=1&showinfo=0&iv_load_policy=3&autoplay=1&controls=0&start=7&mute=1&playlist=gkf_tMj9NCM"
       ></iframe>
    </div>
    <div class="row items-center absolute-center text-white" style="width: 90%; background-color: rgba(133, 133, 173,0.7);  border-radius: 10px;">
      <div class="col-1"></div>
      <div class="col-4">
        <h3 class="text-weight-bold small"> <em>Building a <br> Blockchain <br> Community</em> </h3>
      </div>
      <div class="col-6">
        <strong><em>Colorado</em></strong> has one of the largest and most active <strong><em>blockchain</em></strong> communities in the world. The state is home to thought leaders and builders of these disruptive technologies. If you want to get connected with fellow entrepreneurs, investors, and developers; <strong><em>Colorado is the best place to be.</em></strong>
        <br><br>
        We welcome everyone from the experts to the complete novice!
      </div>
      <div class="col-1"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style>
</style>
