<template>
<q-page style="overflow-x:hidden" class="q-pa-lg">

  <!-- Dev Notes:
  bgcolor= bcbdbb
  -->
  <div class="fit row wrap justify-center items-center content-center" style="background-color: rgba(245,241,234,.7); border-radius: 10px;">
    <div class="col-12" style="width: 95%; height: 70vh; margin-top:1vh;" >
      <iframe src="https://calendar.google.com/calendar/embed?height=900&amp;wkst=2&amp;bgcolor=%23bcbdbb&amp;ctz=America%2FDenver&amp;src=Y3J5cHRvcmFkby5jb21tdW5pdHlAZ21haWwuY29t&amp;src=c3VxamMwcWxoMXYzdjlibHUyMmtvaXY1c2FqbnVyaTNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=b3QzcnNiNHR0Zmd1ZG5oNGpxNWpvNmVrZWVuYmlpdm9AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=M3FrODQ4YWFhbTduNzZuaTZ0aHQzZzgzZjdmbzMzY2VAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=M29jamJtNm40NG4wbjZpMThyYTllMmNoNjR1cGRtaXRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJvZTg5anZzYXRqcTZqY3FqcWFxZGhxMGR0YTEzdWZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=djIwYm5vOGtsZzQwNTZoNDk3OWIwZ2x1YWtuMnYzNHNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=cHNrYzB2NDVrYTRtZXJ2anRyOXNvajRiaW10NmhrOThAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=a3NodnFxMWszcHRzdm91cGJkb2lybjVodmE4N3BtNHVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGIyaWp2bXUxajkwNjJtNXMya2xjamthZHI0dWNvcjNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=OWh2OHBjcWF1cmRkczZmcm8wMnMzNWx1YTh1NXRsaG5AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=cGI3amxrZGYzMmUwdTk5M280b2xlYjVxODl0N3Q1YXFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWxkbzBzcHZjZHJ2dTE0dTh1MHJrMHAyanRnbzJjOTNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=bG5rcTAydTZpcWlsaXM4bHQ0NWUxYW9rdGloZ3RxNmhAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MjBkNHQ1ODg5Y2ZldmI4b2oxYmt0bGpiMWJncW1wcmdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dHM2cGRucmdxazI0bjlsZ29yZDVlbnNzcm9qZGE0Z2tAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MGk5N244ODA1ODRoNzRxbjFiZ3QwNW41Z3BjbTZuaTVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=OTIxanU0OTVkZ29iaWJzcjFnMWthMGI5azUwaWU2bnFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%23F6BF26&amp;color=%23009688&amp;color=%23A79B8E&amp;color=%23F4511E&amp;color=%23C0CA33&amp;color=%23AD1457&amp;color=%23795548&amp;color=%23795548&amp;color=%233F51B5&amp;color=%23B39DDB&amp;color=%23E4C441&amp;color=%237986CB&amp;color=%23C0CA33&amp;color=%23C0CA33&amp;color=%23D81B60&amp;color=%234285F4&amp;color=%23616161&amp;showNav=0&amp;showPrint=0&amp;mode=AGENDA&amp;showCalendars=1" style="border-width:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
    </div>

    <center>
      <div style="margin:1vh; font-size:medium">
        <b><em> *** Want to get your events added? Contact us: <a target="_blank" href="mailto:community@cryptorado.org">community@cryptorado.org</a> ***</em></b>
      </div>
    </center>
  </div>
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
