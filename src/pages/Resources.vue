<template>
<q-page>

  <div class="absolute-center" style="background-color: rgba(245,241,234,.7); border-radius: 10px;">

    <div class="row wrap justify-around">
      <!-- Banner -->
      <div class="col-12 q-pt-md">
        <center> <img src="statics/cryptorado.png" style="max-width: 30%"> </center>
      </div>

      <q-list no-border link class="col-shrink q-py-md">
        <q-item-label>
          <center><em><b>--- Everyone ---</b><br><br></em></center>
        </q-item-label>

        <q-item @click.native="openURL('https://keybase.io/team/cryptorado')">
          <q-item-side icon="fab fa-keybase" />
          <q-item-main label="Keybase" sublabel="Online Chat Group" />
        </q-item>

        <q-item @click.native="openURL('https://twitter.com/cryptoradocom')">
          <q-item-side icon="fab fa-twitter" />
          <q-item-main label="Twitter" sublabel="@CryptoradoCom" />
        </q-item>

        <q-item @click.native="openURL('https://www.youtube.com/channel/UCySU1TwgrLAU_1tF8lDt9bQ')">
          <q-item-side icon="fab fa-youtube" />
          <q-item-main label="YouTube" sublabel="Event Videos" />
        </q-item>

        <q-item @click.native="openURL('https://sites.google.com/view/cryptorado-photos/home')">
          <q-item-side icon="photo_album" />
          <q-item-main label="Photos Albums" sublabel="Community Contributed" />
        </q-item>
      </q-list>

      <q-list no-border link class="col-shrink q-py-md">
        <q-item-label>
          <center><em><b>--- Coloradans ---</b><br><br></em></center>
        </q-item-label>

        <q-item @click.native="openURL('https://www.meetup.com/Denver-Blockchain/')">
          <q-item-side icon="laptop_chromebook" />
          <q-item-main label="FREE Coworking" sublabel="Thursdays in Denver" />
        </q-item>

        <q-item @click.native="openURL('https://www.meetup.com/Denver-Blockchain/')">
          <q-item-side icon="people" />
          <q-item-main label="Meetups" sublabel="Local Groups" />
        </q-item>

        <q-item @click.native="openURL('https://coinmap.org/#/map/39.76442532/-104.85478670/11')">
          <q-item-side icon="map" />
          <q-item-main label="Crypto Friendly Businesses" sublabel="Coinmap.org" />
        </q-item>

        <q-item @click.native="openURL('https://drive.google.com/open?id=10co5YUiYOzyEMhQez5e1ehD6vgb1oOlaSBHzT0gzLQ0')">
          <q-item-side icon="list_alt" />
          <q-item-main label="Blockchain Companies" sublabel="Community Maintained" />
        </q-item>
      </q-list>
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
