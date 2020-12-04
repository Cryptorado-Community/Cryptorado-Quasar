<template>
<q-page style="overflow-x:hidden" class="q-pa-lg">

  <div class="q-pa-md" style="background-color: rgba(245,241,234,.7);  border-radius: 10px;">

    <div class="row wrap justify-around">
      <q-list no-border link class="col-shrink q-py-md">
        <q-item-label>
          <center><em><b>--- For Everyone ---</b><br><br></em></center>
        </q-item-label>

        <q-item @click.native="openURL('https://discord.gg/3eVjbtb')">
          <q-item-side icon="fab fa-discord" />
          <q-item-main label="Discord Community" sublabel="Public Group" />
        </q-item>

        <q-item @click.native="openURL('https://hackmd.io/@NukeManDan/BkNwtxVUI')">
          <q-item-side icon="fab fa-keybase" />
          <q-item-main label="Keybase Onboarding" sublabel="Secure Private Group" />
        </q-item>

        <q-item @click.native="openURL('https://twitter.com/cryptoradocom')">
          <q-item-side icon="fab fa-twitter" />
          <q-item-main label="Twitter" sublabel="@CryptoradoCom" />
        </q-item>

        <q-item @click.native="openURL('https://www.youtube.com/channel/UCySU1TwgrLAU_1tF8lDt9bQ')">
          <q-item-side icon="fab fa-youtube" />
          <q-item-main label="YouTube" sublabel="Event Videos" />
        </q-item>

        <q-item @click.native="openURL('https://sites.google.com/view/cryptorado-photos/home')">
          <q-item-side icon="photo_album" />
          <q-item-main label="Photos Albums" sublabel="Community Contributed" />
        </q-item>
      </q-list>

      <q-list no-border link class="col-shrink q-py-md">
        <q-item-label>
          <center><em><b>--- For Coloradans ---</b><br><br></em></center>
        </q-item-label>

        <q-item @click.native="openURL('https://www.meetup.com/Cryptorado-Community')">
          <q-item-side icon="fab fa-meetup" />
          <q-item-main label="Meetup" sublabel="Local and Virtual Events" />
        </q-item>

        <q-item @click.native="openURL('https://coinmap.org/#/map/39.76442532/-104.85478670/11')">
          <q-item-side icon="fab fa-bitcoin" />
          <q-item-main label="Crypto Friendly Businesses" sublabel="Coinmap.org" />
        </q-item>

        <q-item @click.native="openURL('https://drive.google.com/open?id=10co5YUiYOzyEMhQez5e1ehD6vgb1oOlaSBHzT0gzLQ0')">
          <q-item-side icon="fas fa-building" />
          <q-item-main label="Blockchain Companies" sublabel="Community Maintained" />
        </q-item>

        <q-item @click.native="openURL('https://docs.google.com/spreadsheets/d/1hob26b_955cpZGZteSOvwDYX19RzSP1FFikgKMHb-os/edit?usp=sharing')">
          <q-item-side icon="fas fa-handshake" />
          <q-item-main label="Opportunity Board" sublabel="Post/Find Talent" />
        </q-item>
      </q-list>
    </div>

  </div>
</q-page>
</template>

<script>
import {
  openURL
} from 'quasar'

export default {
  methods: {
    openURL
  }
}
</script>

<style>
</style>
