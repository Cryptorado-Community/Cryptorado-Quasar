<template>
  <q-page class="row NOflex NOflex-center">
      <q-card
        inline
        class="full-width q-ma-sm"
      >
          <q-card-title>
              Colorado Blockchain Community Events
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
import {
  date,
  QPage,
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QIcon
} from 'quasar'
import dashHas from 'lodash.has'
import {
  Calendar,
  CalendarMonth,
  CalendarMultiDay,
  CalendarAgenda
} from 'quasar-calendar'
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
      eventArray: [
        {
          id: 1,
          summary: 'Test event',
          description: 'Some extra info goes here',
          location: 'Office of the Divine Randomness, 1232 Main St., Denver, CO',
          start: {
            dateTime: '2018-02-16T14:00:00',
            timeZone: 'Europe/Zurich'
          },
          end: {
            dateTime: '2018-02-16T16:30:00',
            timeZone: 'Europe/Zurich'
          },
          color: 'positive',
          attendees: [
            {
              id: 5,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false
            },
            {
              id: 6,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false
            },
            {
              id: 7,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false
            },
            {
              id: 31,
              email: '',
              displayName: 'South Conference Room',
              organizer: false,
              self: false,
              resource: true
            }
          ]
        },
        {
          id: 3,
          summary: 'Test event 2',
          description: 'Some extra info goes here',
          start: {
            dateTime: '2018-02-16T17:30:00',
            timeZone: 'America/New_York'
          },
          end: {
            dateTime: '2018-02-16T18:30:00',
            timeZone: 'America/New_York'
          }
        },
        {
          id: 4,
          summary: 'Test event 3',
          description: 'Some extra info goes here',
          start: {
            dateTime: '2018-02-13T10:30:00+0500'
          },
          end: {
            dateTime: '2018-02-13T13:00:00+0500'
          }
        },
        {
          id: 5,
          summary: 'All day event',
          description: 'Some extra info goes here',
          start: {
            date: '2018-02-13'
          },
          end: {
            date: '2018-02-13'
          }
        },
        {
          id: 103,
          summary: 'All day x4',
          description: 'Some extra info goes here',
          start: {
            date: '2018-02-15'
          },
          end: {
            date: '2018-02-18'
          }
        },
        {
          id: 101,
          summary: 'All day x3',
          description: 'Some extra info goes here',
          start: {
            date: '2018-02-14'
          },
          end: {
            date: '2018-02-16'
          }
        },
        {
          id: 102,
          summary: 'All day x2',
          description: 'Some extra info goes here',
          start: {
            date: '2018-02-14'
          },
          end: {
            date: '2018-02-15'
          }
        },
        {
          id: 104,
          summary: 'All day x4 #2',
          description: 'Some extra info goes here',
          start: {
            date: '2018-02-14'
          },
          end: {
            date: '2018-02-17'
          }
        },
        {
          id: 105,
          summary: 'All day x4 #3',
          description: 'Some extra info goes here',
          start: {
            date: '2018-02-14'
          },
          end: {
            date: '2018-02-17'
          }
        },
        {
          id: 6,
          summary: 'Overlapping event',
          description: 'Some extra info goes here',
          start: {
            dateTime: '2018-02-13T11:30:00',
            timeZone: 'America/New_York'
          },
          end: {
            dateTime: '2018-02-13T12:30:00',
            timeZone: 'America/New_York'
          }
        },
        {
          id: 7,
          summary: 'Some event',
          description: 'Some extra info goes here',
          start: {
            dateTime: '2018-02-13T06:30:00',
            timeZone: 'America/New_York'
          },
          end: {
            dateTime: '2018-02-13T07:30:00',
            timeZone: 'America/New_York'
          },
          color: 'warning',
          textColor: 'dark'
        },
        {
          id: 8,
          summary: 'Some other event',
          description: 'Some extra info goes here',
          start: {
            dateTime: '2018-02-13T16:00:00',
            timeZone: 'America/New_York'
          },
          end: {
            dateTime: '2018-02-13T17:00:00',
            timeZone: 'America/New_York'
          }
        }
      ]
    }
  },
  computed: {},
  methods: {
    moveSampleDatesAhead: function () {
      // function to take dates in our demo eventArray and move them to the near future
      const dateAdjustments = [
        {
          ids: [4, 5, 6, 7, 8],
          addDays: 5
        },
        {
          ids: [1, 3],
          addDays: 2
        },
        {
          ids: [102, 103],
          addDays: 8
        },
        {
          ids: [101],
          addDays: 10
        },
        {
          ids: [104],
          addDays: 11
        },
        {
          ids: [105],
          addDays: 13
        }
      ]
      for (let counter = 0; counter < this.eventArray.length; counter++) {
        let currentItem = this.eventArray[counter]
        for (let thisAdjustment of dateAdjustments) {
          if (thisAdjustment.ids.indexOf(currentItem.id) >= 0) {
            currentItem = this.adjustStartEndDates(currentItem, thisAdjustment.addDays)
          }
        }
        this.eventArray[counter] = currentItem
      }
    },
    adjustStartEndDates: function (eventItem, numDays) {
      let daysDiff = 0
      if (dashHas(eventItem.start, 'dateTime') && dashHas(eventItem.end, 'dateTime')) {
        // console.debug('has dateTime')
        daysDiff = date.getDateDiff(
          new Date(eventItem.end.dateTime),
          new Date(eventItem.start.dateTime),
          'days'
        )
      } else if (dashHas(eventItem.start, 'date') && dashHas(eventItem.end, 'date')) {
        // console.debug('has date', Date(eventItem.start.date), Date(eventItem.end.date))
        // console.debug('has date', JSON.stringify(eventItem))
        daysDiff = date.getDateDiff(
          new Date(eventItem.end.date),
          new Date(eventItem.start.date),
          'days'
        )
      }
      // start dates
      if (dashHas(eventItem.start, 'dateTime')) {
        eventItem.start.dateTime = this.getSqlDateFormat(
          this.setADateToADay(eventItem.start.dateTime, numDays),
          true
        )
      }
      if (dashHas(eventItem.start, 'date')) {
        eventItem.start.date = this.getSqlDateFormat(
          this.setADateToADay(eventItem.start.date + 'T00:00:00Z', numDays),
          false
        )
      }
      // end dates
      if (dashHas(eventItem.end, 'dateTime')) {
        eventItem.end.dateTime = this.getSqlDateFormat(
          this.setADateToADay(eventItem.end.dateTime, numDays + daysDiff),
          true
        )
      }
      if (dashHas(eventItem.end, 'date')) {
        eventItem.end.date = this.getSqlDateFormat(
          this.setADateToADay(eventItem.end.date + 'T00:00:00Z', numDays + daysDiff),
          false
        )
      }
      return eventItem
    },
    setADateToADay: function (dateObject, addDays) {
      let now = new Date()
      if (typeof dateObject === 'string') {
        dateObject = new Date(dateObject)
      }
      dateObject = date.adjustDate(
        dateObject, {
          year: now.getFullYear(),
          month: now.getMonth() + 1,
          date: now.getDate()
        }
      )
      if (addDays !== undefined) {
        dateObject = date.addToDate(
          dateObject, {
            days: addDays
          }
        )
      }
      return dateObject
    },
    getSqlDateFormat: function (dateObject, withTime) {
      if (withTime) {
        return date.formatDate(dateObject, 'YYYY-MM-DDTHH:mm:ssZ')
      } else {
        return date.formatDate(dateObject, 'YYYY-MM-DD')
      }
    }
  },
  created () {
    this.moveSampleDatesAhead()
  }
}
</script>
