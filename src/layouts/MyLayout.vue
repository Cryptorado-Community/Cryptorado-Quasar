<template>
  <q-layout reveal view="hHh Lpr lFf">
    <q-layout-header>
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
          <q-route-tab
            label="Chat"
            to="/Chat"
            icon="people"
            slot="title"
          />
          <q-route-tab
            label="Resources"
            to="/Resources"
            icon="device_hub"
            slot="title"
          />

        </q-tabs>

    </q-layout-header>

    <q-page-container>

      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
