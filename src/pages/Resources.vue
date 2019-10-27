<template>
  <q-page padding>

  <div class="fit row wrap justify-center items-center content-center" style="background-color: rgba(245,241,234,.7); border-radius: 10px;">

    <q-list
      no-border
      link
      inset-delimiter
    >

      <q-item @click.native="openURL('https://www.meetup.com/Denver-Blockchain/')">
        <q-item-side icon="people" />
        <q-item-main label="Meetups" sublabel="Listing by our Community" />
      </q-item>

      <q-item @click.native="openURL('https://keybase.io/team/cryptorado')">
        <q-item-side icon="fab fa-keybase" />
        <q-item-main label="Keybase" />
      </q-item>

      <q-item @click.native="openURL('http://launchpass.com/coloradoblockchain')">
        <q-item-side icon="donut_small" />
        <q-item-main label="Slack" />
      </q-item>

      <q-item @click.native="openURL('https://www.youtube.com/channel/UCySU1TwgrLAU_1tF8lDt9bQ')">
        <q-item-side icon="fab fa-youtube" />
        <q-item-main label="YouTube" />
      </q-item>

      <q-item @click.native="openURL('https://sites.google.com/view/cryptorado-photos/home')">
        <q-item-side icon="photo_album" />
        <q-item-main label="Photos Albums" />
      </q-item>

      <q-item @click.native="openURL('https://twitter.com/cryptoradocom')">
        <q-item-side icon="fab fa-twitter" />
        <q-item-main label="Twitter" sublabel="@CryptoradoCom" />
      </q-item>

      <q-item @click.native="openURL('https://coinmap.org/#/map/39.76442532/-104.85478670/11')">
        <q-item-side icon="map" />
        <q-item-main label="Local Cryptocurrency Accepting Businesses" sublabel="Coinmap.org" />
      </q-item>

      <q-item @click.native="openURL('https://drive.google.com/open?id=10co5YUiYOzyEMhQez5e1ehD6vgb1oOlaSBHzT0gzLQ0')">
        <q-item-side icon="list_alt" />
        <q-item-main label="Colorado Blockchain Companies" />
      </q-item>

      <q-item @click.native="openURL('https://www.meetup.com/Denver-Blockchain/')">
        <q-item-side icon="laptop_chromebook" />
        <q-item-main label="Free Coworking" sublabel="Every Thursday" />
      </q-item>
    </q-list>
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
