<template>
  <q-layout reveal view="hHh Lpr lFf">
    <q-layout-header>
        <q-tabs class="shadow-1" animated swipeable color="tertiary" glossy align="justify">

          <q-route-tab
            to="/"
            name="home"
            slot="title"
            style="padding: 5px 5px"
          >
            <img src="~/assets/cobc_white_text.png" style="height: 70px" alt="Home">
          </q-route-tab>

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

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >

    <q-list-header>Find The Best Events:</q-list-header>

      <q-datetime
        :value="startDate"
        @change="val => startDate = val"
        type="date"
        color="green"
        clearable
        float-label="Start Date"
        :max="endDate"
      />

      <q-datetime
        :value="endDate"
        @change="val => endDate = val"
        type="date"
        color="red"
        clearable
        float-label="End Date (optional)"
        :min="startDate"
      />

      <q-chips-input
        v-model="cities_selected"
        placeholder="Type to search, Enter One or More..."
        float-label="City"
        @duplicate="duplicate"
        >
          <q-autocomplete
            :static-data="{field: 'value', list: cities}"
            :min-characters="0"
          />
      </q-chips-input>

      <q-chips-input
        v-model="tags_selected"
        placeholder="Type to search, Enter One or More..."
        float-label="Tags"
        @duplicate="duplicate"
        >
          <q-autocomplete
            :static-data="{field: 'value', list: tags}"
            :min-characters="0"
          />
      </q-chips-input>

    </q-layout-drawer>

    <q-page-container>

      <router-view />

      <q-page-sticky
        position="left"
        :offset="[-20, -20]">
          <q-btn
          color="red"
          size="md"
          rounded
          icon-right="find_in_page"
          class="animate-pop"
          @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-page-sticky>

    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

import cities from './../data/co_cities.json'
import tags from './../data/tags.json'

function parseList (items) {
  return items.map(item => {
    return {
      label: item,
      value: item
    }
  })
}

const today = new Date()

export default {
  name: 'MyLayout',
  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
      leftDrawerOpen: false,

      today,
      startDate: today,
      endDate: null,

      error: true,
      warning: false,

      cities: parseList(cities),
      tags: parseList(tags),
      cities_selected: [],
      tags_selected: []
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    },
    error2 (val) {
      if (val) {
        this.warning2 = false
      }
    },
    warning2 (val) {
      if (val) {
        this.error2 = false
      }
    }
  },
  methods: {
    openURL,
    duplicate (label) {
      this.$q.notify(`"${label}" already in list`)
    }
  }
}
</script>

<style>
</style>
