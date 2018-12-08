<template>
  <q-page padding>
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
    </q-collapsible>  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
