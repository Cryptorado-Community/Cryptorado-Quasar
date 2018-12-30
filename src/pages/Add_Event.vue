<template>
  <q-page  class="justify-center">

      <q-stepper
        ref="eventSteper"
        color="primary"
        vertical
      >
        <q-step
          default name="event_add"
          title="Event Details"
          subtitle="Information to help people find your event!"
        >

          These details will appear on our Website for your Event:

          <q-field
            icon="public"
            :count="50"
          >
            <q-input
              placeholder="Title Goes Here"
              float-label="Event Title"
              v-model="title"
              clearable
            />
          </q-field>
          <q-field
            icon="people"
            :count="10"
            helper="Press Enter / Tap Arrow after each entry"
          >
            <q-chips-input
              float-label="Event Hosts"
              placeholder="Your name and/or Your meetup or Anonymous"
              v-model="hosts"
              clearable
            />
          </q-field>
          <q-field
            icon="gps_fixed"
            :count="50"
          >
            <q-input
              float-label="Location"
              placeholder="Your Event Address"
              v-model="loca"
              clearable
              clear-value="TBD"
            />
         </q-field>
         <q-field
           icon="event"
           :count="50"
         >
          <q-datetime
            float-label="Start Date & Time"
            :value="startDate"
            @change="val => startDate = val"
            type="datetime"
            color="green"
            clearable
            :max="endDate"
          />
          <q-datetime
            float-label="End Date & Time"
            :value="endDate"
            @change="val => endDate = val"
            type="datetime"
            color="red"
            clearable
            :min="startDate"
          />
        </q-field>

          <q-field
            icon="format_color_fill"
            helper="Calendar items will fill with this color"
          >
            <q-color
              :style="{
                 'background-color': color,
                 'border-radius': '4px'
                 }"
              v-model="color"
              clearable
              clear-value="#2069BD"
            />
         </q-field>

          <q-stepper-navigation>
            <q-btn class="q-ml-sm" color="primary" icon-right="keyboard_arrow_down" @click="$refs.eventSteper.next()">Continue</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step name="ad_group"  title="Event Description" subtitle="The Body of Your Event">

          <q-stepper-navigation >
            <q-btn class="q-ml-sm" color="secondary" icon-right="keyboard_arrow_up" @click="$refs.eventSteper.previous()">Back</q-btn>
          </q-stepper-navigation>
          <strong>Note:</strong> Your page banner is generated for you - this is just the body text
          <br><br>
            <q-editor
              v-model="bodyText"
              :toolbar="[
                ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                ['token', 'hr', 'link', 'custom_btn'],
                ['print', 'fullscreen'],
                [
                  {
                    label: $q.i18n.editor.formatting,
                    icon: $q.icon.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
                  },
                  {
                    label: $q.i18n.editor.fontSize,
                    icon: $q.icon.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
                  },
                  {
                    label: $q.i18n.editor.defaultFont,
                    icon: $q.icon.editor.font,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: ['default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana']
                  },
                  'removeFormat'
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                [
                  {
                    label: $q.i18n.editor.align,
                    icon: $q.icon.editor.align,
                    fixedLabel: true,
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify']
                  },
                  {
                    label: $q.i18n.editor.align,
                    icon: $q.icon.editor.align,
                    fixedLabel: true,
                    options: ['left', 'center', 'right', 'justify']
                  }
                ],
                ['undo', 'redo']
              ]"
              :fonts="{
                arial: 'Arial',
                arial_black: 'Arial Black',
                comic_sans: 'Comic Sans MS',
                courier_new: 'Courier New',
                impact: 'Impact',
                lucida_grande: 'Lucida Grande',
                times_new_roman: 'Times New Roman',
                verdana: 'Verdana'
              }"
            />
      <br>
          <q-stepper-navigation>
            <q-btn color="primary" icon-right="keyboard_arrow_down" @click="$refs.eventSteper.next()">Continue</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step name="finalize" title="Submit" subtitle="Preview Submit Your Event">
          <q-stepper-navigation>
            <q-btn class="q-ml-sm" color="secondary" icon-right="keyboard_arrow_up" @click="$refs.eventSteper.previous()">Back</q-btn>
          </q-stepper-navigation>

          <p>
            TODO: ADD A PREVIEW AND FINISH <br>
            Also add export page funtion! <br>
            Add IPFS pin function? Part of submit?
          </p>

          <q-card inline class="q-ma-sm">
            <q-card-media style="height: 250px;">
              <img src="statics/cobc_logo.jpg" style="max-height:100%;">

              <q-card-title slot="overlay">
                <h3 style="margin: 0px 0px;">{{title}}</h3>
              </q-card-title>
            </q-card-media>

            <div style="transform: translateY(-10%);">
              <q-btn fab color="green" icon="add" class="relative" style="top: 0; left: 85%; transform: translateY(15%);" />
              <q-field
                icon="place"
                class="text-faded"
              >
              {{loca}}
              </q-field>
              <q-field
                icon="event"
                class="text-faded"
              >
              {{displayDate(startDate)}} to {{displayDate(endDate)}}
              </q-field>
              <h5 style="margin: 0px 10px;" class="text-faded">Hosted by: <template v-for="host in hosts" >{{host}} </template>
              </h5>
              <q-card-separator />

              <q-card-main>
                <div v-html="bodyText"> </div>
              </q-card-main>

              <!-- <q-card-separator />

              <q-btn class="q-ml-sm" icon-right="mail" color="green" @click="rsvp">RSVP</q-btn> -->
            </div>
          </q-card>

          <q-btn class="q-ml-sm" icon-right="save_alt" color="blue" @click="fileExport">Save HTML</q-btn>

          <q-stepper-navigation>
            <q-btn color="secondary" icon="publish" @click="$refs.eventSteper.goToStep('event_add')">Back to Top</q-btn>
            <q-btn icon-right="send" class="q-ml-sm" color="green" @click="submit">Submit</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-inner-loading :visible="progress" />
      </q-stepper>

  </q-page>
</template>

<script>
import { date } from 'quasar'

const today = new Date()

export default {
  data () {
    return {
      title: 'Title',
      hosts: ['Your Meetup', 'Your Organizer'],
      startDate: today,
      endDate: today,
      color: '#2069BD',
      loca: 'Location',
      bodyText: '<h3>Header 3</h3><div>Normal text; <b>bold</b>; <i>italic</i>; <strike>strike-trough</strike>; <u style="font-weight: bold; font-style: italic;">bold, italic and underline</u>;</div><div><u>A <i style="font-weight: bold;">mo</i>re <i style="font-weight: bold;">com</i>plica</u>ted example.</div><div><br></div><div>Link to <a href="http://quasar-framework.org">Quasar Documentation</a></div><div><font face="Courier New">Using "Courier New" font.</font></div><div><ul><li>Vue</li><li>Webpack</li></ul><ol><li>Website</li><li>App</li><ol><li>Mobile (Cordova)</li><li>Electron</li></ol></ol><div style="text-align: center;">Center aligned text</div></div><div style="text-align: right;">Right aligned</div>',
      options: ['step_error', 'progress']
    }
  },
  computed: {
    stepError () {
      return this.options.includes('step_error')
    },
    progress () {
      return this.options.includes('progress')
    }
  },
  methods: {
    displayDate (dateIn) {
      let st = date.formatDate(dateIn, 'MM/DD -HH:mm')
      return st
    }
  }
}
</script>
