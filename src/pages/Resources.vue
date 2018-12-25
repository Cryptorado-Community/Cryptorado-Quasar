<template>
  <q-page padding>
    <q-list
      no-border
      link
      inset-delimiter
    >

      <q-item @click.native="openURL('http://quasar-framework.org')">
        <q-item-side icon="people" />
        <q-item-main label="Meetups" sublabel="Listing by our Community" />
      </q-item>

      <q-collapsible
              icon="record_voice_over"
              label="Talk"
            >
            <q-item @click.native="openURL('http://launchpass.com/coloradoblockchain')">
              <q-item-side icon="chat_bubble_outline" />
              <q-item-main label="Slack" />
            </q-item>
            <q-item @click.native="openURL('http://launchpass.com/coloradoblockchain')">
              <q-item-side icon="chat_bubble_outline" />
              <q-item-main label="Riot Chat" />
            </q-item>
      </q-collapsible>

      <q-item @click.native="openURL('http://forum.quasar-framework.org')">
        <q-item-side icon="forum" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item @click.native="openURL('https://www.youtube.com/channel/UCySU1TwgrLAU_1tF8lDt9bQ')">
        <q-item-side icon="video_library" />
        <q-item-main label="Media" sublabel="YouTube" />
      </q-item>
      <q-item @click.native="openURL('https://twitter.com/coloblockchain')">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@coloblockchain" />
      </q-item>
    </q-list>
    <q-collapsible
            icon="chat"
            label="Community Resources"
          >
          <q-item @click.native="openURL('https://coinmap.org/#/map/39.76442532/-104.85478670/11')">
            <q-item-side icon="map" />
            <q-item-main label="Local Crypto Businesses" sublabel="Coinmap.org" />
          </q-item>
          <q-item @click.native="openURL('https://docs.google.com/spreadsheets/d/1Bvpzr162eWFRo_f3tuhOnCVF-l5USTSBdqeJGVBqjjs/edit#gid=0')">
            <q-item-side icon="list_alt" />
            <q-item-main label="Colorado Blockchain Companies" />
          </q-item>
          <q-item @click.native="openURL('https://docs.google.com/spreadsheets/d/1Bvpzr162eWFRo_f3tuhOnCVF-l5USTSBdqeJGVBqjjs/edit#gid=0')">
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
