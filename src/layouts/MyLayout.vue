<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>

        <!-- <q-toolbar-title>
          <q-btn flat color=white label="Colorado Community Home" to="/" />
          <div slot="subtitle">A Resource for the Colorado Blockchain Community</div>
        </q-toolbar-title> -->

        <!-- <q-btn to='/Events' icon="calendar_today" label="Events" sublabel="Calendar"/>

        <q-btn color="primary" icon="chat" label="Slack Chat Group" @click.native="openURL('http://launchpass.com/coloradoblockchain')" /> -->

        <q-tabs class="shadow-1" animated swipeable color="tertiary" glossy align="justify">

  <q-route-tab
    label="Colorado Community Home"
    to="/"
    icon="home"
    slot="title"
  />
  <q-route-tab
    label="Events"
    to="/Events"
    icon="calendar_today"
    slot="title"
  />
  <div slot="subtitle">A Resource for the Colorado Blockchain Community</div>

</q-tabs>

    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <!-- <q-list-header>Essential Links</q-list-header> -->
        <q-item to='/Events'>
          <q-item-side icon="calendar_today" />
          <q-item-main label="Events" sublabel="Calendar"/>
        </q-item>

        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="people" />
          <q-item-main label="Meetups" sublabel="Listing" />
        </q-item>

        <q-collapsible
                v-model="open"
                icon="chat"
                label="Community Chat"
                @show="notify('Opened a Collapsible')"
                @hide="notify('Closed a Collapsible', true)"
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

        <q-collapsible
                v-model="open"
                icon="chat"
                label="Community Resources"
                @show="notify('Opened a Collapsible')"
                @hide="notify('Closed a Collapsible', true)"
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
        </q-collapsible>

        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
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
    </q-layout-drawer>

    <q-page-container>

      <router-view />

      <q-page-sticky position="left" :offset="[-20, -20]">
          <q-btn fab-mini color="red" icon="fast_forward" class="animate-pop"   @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-page-sticky>

    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
