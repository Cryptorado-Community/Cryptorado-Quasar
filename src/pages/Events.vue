<template>
  <q-page class="row NOflex NOflex-center">
      <q-card
        inline
        class="full-width q-py-md q-px-lg"
      >

          <div class="fit row wrap justify-center items-center content-center" style="background-color: rgba(245,241,234,.7); border-radius: 10px;">
            <!-- <div class="col-5"></div>
              <div class="col-2 self-center">
                <h5> <em>Cryptorado Community Events</em> </h5>
            </div>
            <div class="col-5"></div> -->
            <div class="col-12" style="width: 95%; height: 95%;">
              <iframe class="scaled-frame" src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ecd4a3&amp;ctz=America%2FDenver&amp;src=Y3J5cHRvcmFkby5jb21tdW5pdHlAZ21haWwuY29t&amp;src=Z3YyanFsdm05bnV2cDczZjMyczZlMHF1Yzg2MWJmMHZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=NmQzdDd1bGsxbnZ2azBxZXI5cWZlaTcwZ2dvMnJtbWtAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=c3VxamMwcWxoMXYzdjlibHUyMmtvaXY1c2FqbnVyaTNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=b3QzcnNiNHR0Zmd1ZG5oNGpxNWpvNmVrZWVuYmlpdm9AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=M3FrODQ4YWFhbTduNzZuaTZ0aHQzZzgzZjdmbzMzY2VAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=M29jamJtNm40NG4wbjZpMThyYTllMmNoNjR1cGRtaXRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=czU2c2xiaXNpdjJja2JoMDgzdDRtcmxkcHMzbjVzOWpAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWxkbzBzcHZjZHJ2dTE0dTh1MHJrMHAyanRnbzJjOTNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dG1xMmFqYWJkc2FlMG5qNWg3MTZkYW9yOGtoZGViN2ZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=OGFzNjlsbHU1ZmMxZzJkMTM4ZGJnYWhldDlwb2hlZm5AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJvZTg5anZzYXRqcTZqY3FqcWFxZGhxMGR0YTEzdWZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=OTIxanU0OTVkZ29iaWJzcjFnMWthMGI5azUwaWU2bnFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=bXJnNzI3MGJoYWdxZmcxZWYybjBzcnNodjVtdTVjcmlAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=aWJxaWNvcW1kZWRuYjIxODFmajh1djhzZzMyZXAzZGRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dDMyNWhvcHFzdWVnaGE1a2Q1anZwNmxudWRpMWNqanZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=NmF0aTZzajd2aHJ1N3NybDg4bHE0cWg5cWk1MzZoNjNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=a3NodnFxMWszcHRzdm91cGJkb2lybjVodmE4N3BtNHVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGIyaWp2bXUxajkwNjJtNXMya2xjamthZHI0dWNvcjNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=OWh2OHBjcWF1cmRkczZmcm8wMnMzNWx1YTh1NXRsaG5AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=bG5rcTAydTZpcWlsaXM4bHQ0NWUxYW9rdGloZ3RxNmhAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=M3Z0c21wbmQ0YWhsMmwyZTYyMGFjbmtpZm1yaTkxYXNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MjBkNHQ1ODg5Y2ZldmI4b2oxYmt0bGpiMWJncW1wcmdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MGk5N244ODA1ODRoNzRxbjFiZ3QwNW41Z3BjbTZuaTVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=cnRhaDRuNWUzOXNtNWFrNjdodTJyYW1hcHRkcW9qbW1AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%232952A3&amp;color=%236633CC&amp;color=%23D6AE00&amp;color=%239D7000&amp;color=%23227F63&amp;color=%23B08B59&amp;color=%23DD5511&amp;color=%233366CC&amp;color=%23336699&amp;color=%233366CC&amp;color=%2330487E&amp;color=%2381910B&amp;color=%23515151&amp;color=%235229A3&amp;color=%239F3501&amp;color=%23743500&amp;color=%2370237F&amp;color=%23743500&amp;color=%2330487E&amp;color=%236633CC&amp;color=%2381910B&amp;color=%23871111&amp;color=%2381910B&amp;color=%233366CC&amp;color=%239D7000&amp;showPrint=0&amp;mode=AGENDA&amp;showCalendars=1&amp;showTitle=0" style="border-width:0" width="80%" height="80%" frameborder="0" scrolling="no"></iframe>
            </div>
          </div>
      </q-card>

  </q-page>
</template>

<style lang="stylus">
.scaled-frame {
    zoom: 1.25;
    -moz-transform: scale(1.25);
    -moz-transform-origin: 0 0;
    -o-transform: scale(1.25);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(1.25);
    -webkit-transform-origin: 0 0;
}
</style>

<script>

// var dataURL = 'https://getipfs.com/QmcMnY5PXMnrBSekMu8HEE3jwq4jy5dwsdrnLBUkasjmtK' // IPFS data via gateway proxy -- needs CORS enabled
// var dataURL = 'https://ipns.co/QmcMnY5PXMnrBSekMu8HEE3jwq4jy5dwsdrnLBUkasjmtK' // IPFS data via gateway proxy -- needs CORS enabled
// var dataURL = 'https://cloudflare-ipfs.com/ipfs/QmcMnY5PXMnrBSekMu8HEE3jwq4jy5dwsdrnLBUkasjmtK'

import eventsData from '../data/events.json' // static local data import

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
    this.eventArray = eventsData // static local data import
    // this.$axios.get(dataURL)
    //   .then((response) => {
    //     this.eventArray = response.data // TODO: CORS issue on some gateways - it is on their end... use another one.
    //   })
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
