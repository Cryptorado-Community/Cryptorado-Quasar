<template>
  <q-page padding>
    <h3> <center>!! UNDER CONSTRUCTION !!</center> </h3>
    <q-list
      no-border
      link
      inset-delimiter
    >

      <q-item @click.native="openURL('https://www.meetup.com/Denver-Blockchain/')">
        <q-item-side icon="people" />
        <q-item-main label="Meetups" sublabel="Listing by our Community" />
      </q-item>

      <q-collapsible
              icon="record_voice_over"
              label="Chat"
            >
            <q-item @click.native="openURL('https://keybase.io/team/cryptorado')">
              <q-item-side icon="keybase" />
              <q-item-main label="Keybase" />
            </q-item>
            <q-item @click.native="openURL('http://launchpass.com/coloradoblockchain')">
              <q-item-side icon="chat_bubble_outline" />
              <q-item-main label="Slack" />
            </q-item>
      </q-collapsible>

      <q-item @click.native="openURL('https://www.youtube.com/channel/UCySU1TwgrLAU_1tF8lDt9bQ')">
        <q-item-side icon="youtube" />
        <q-item-main label="Media" sublabel="YouTube" />
      </q-item>
      <q-item @click.native="openURL('https://twitter.com/cryptoradocom')">
        <q-item-side icon="twitter" />
        <q-item-main label="Twitter" sublabel="@coloblockchain" />
      </q-item>
    </q-list>
    <q-collapsible
            icon="chat"
            label="Community Resources"
          >
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
    </q-collapsible>  </q-page>
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
