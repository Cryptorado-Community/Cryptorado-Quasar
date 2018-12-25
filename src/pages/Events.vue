<template>
  <q-page class="row NOflex NOflex-center">
      <q-card
        inline
        class="full-width q-ma-sm"
      >
          <q-card-title>
              <h5> <em>Colorado Blockchain Community Calendar</em>
                <q-btn
                class="float-right animate-pop"
                color="green"
                icon="add_box"
                label="Add An Event"
                to="Add_Event"
                />
              </h5>
          </q-card-title>

          <q-card-main>
              <calendar
                  :event-array="eventArray"
                  :sunday-first-day-of-week="false"
                  NOcalendar-locale="fr"
                  NOcalendar-timezone="America/Denver"
                  event-ref="DECENTRALIZE-COLORADO-CALENDAR"
              />
          </q-card-main>
      </q-card>

  </q-page>
</template>

<style lang="stylus">
</style>

<script>

// var dataURL = 'https://getipfs.com/QmcMnY5PXMnrBSekMu8HEE3jwq4jy5dwsdrnLBUkasjmtK' // IPFS data via gateway proxy -- needs CORS enabled
// var dataURL = 'https://ipns.co/QmcMnY5PXMnrBSekMu8HEE3jwq4jy5dwsdrnLBUkasjmtK' // IPFS data via gateway proxy -- needs CORS enabled
var dataURL = 'https://cloudflare-ipfs.com/ipfs/QmcMnY5PXMnrBSekMu8HEE3jwq4jy5dwsdrnLBUkasjmtK'

import {
  date,
  QPage,
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QIcon
} from 'quasar'

import {
  Calendar,
  CalendarMonth,
  CalendarMultiDay,
  CalendarAgenda
} from 'quasar-calendar'

// import eventsData from '../assets/events.json' // static local data import

export default {
  name: 'PageIndex',
  components: {
    QPage,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    Calendar,
    CalendarMonth,
    CalendarMultiDay,
    CalendarAgenda,
    QIcon
  },
  data () {
    return {
      eventArray: []
    }
  },
  mounted () {
    // this.eventArray = eventsData // static local data import
    this.$axios.get(dataURL)
      .then((response) => {
        this.eventArray = response.data // TODO: CORS issue on some gateways - it is on their end... use another one.
      })
  },
  methods: {
    getSqlDateFormat: function (dateObject, withTime) {
      if (withTime) {
        return date.formatDate(dateObject, 'YYYY-MM-DDTHH:mm:ssZ')
      } else {
        return date.formatDate(dateObject, 'YYYY-MM-DD')
      }
    }
  }
}
</script>
