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
            icon="mail"
            :count="50"
          >
            <q-input
              v-model="title"
              float-label="Event Title"
              placeholder="Presentation night!"
            />
          </q-field>
          <q-field
            icon="people"
            :count="10"
            helper="Press Enter / Tap Arrow after each entry"
          >
            <q-chips-input
              v-model="hosts"
              float-label="Event Hosts"
              placeholder="Me, Myself, and I"
            />
          </q-field>
          <q-field
            icon="gps_fixed"
            :count="50"
          >
            <q-input
              v-model="loca"
              float-label="Location"
              placeholder="3000 Lawrence Street, Denver, CO"
            />
         </q-field>
          <q-datetime
            :value="startDate"
            @change="val => startDate = val"
            type="datetime"
            color="green"
            clearable
            float-label="Start Date & Time"
            :max="endDate"
          />
          <q-datetime
            :value="endDate"
            @change="val => endDate = val"
            type="datetime"
            color="red"
            clearable
            float-label="End Date & Time"
            :min="startDate"
          />
          <q-field
            icon="format_color_fill"
            label="Choose Color"
            helper="Calendar items will fill with this color"
          >
            <q-color
              v-model="color"
              color="primary"
              float-label="Color"
            />
          </q-field>

          <q-stepper-navigation>
            <q-btn class="q-ml-sm" color="primary" @click="$refs.eventSteper.next()">Continue</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step name="ad_group"  title="Event Description" subtitle="The Body of Your Event">

          <q-stepper-navigation >
            <q-btn class="q-ml-sm" color="secondary" @click="$refs.eventSteper.previous()">Back</q-btn>
          </q-stepper-navigation>

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

          <q-stepper-navigation>
            <q-btn color="primary" @click="$refs.eventSteper.next()">Continue</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step name="finalize" title="Submit" subtitle="Preview Submit Your Event">
          <q-stepper-navigation>
            <q-btn class="q-ml-sm" color="secondary" @click="$refs.eventSteper.previous()">Back</q-btn>
          </q-stepper-navigation>

          <p>
            TODO: ADD A PREVIEW AND FINISH <br>
            Also add export page funtion! <br>
            Add IPFS pin function? Part of submit?
          </p>
          <q-btn class="q-ml-sm" icon-right="cloud_download" color="blue" @click="fileExport">Export HTML file</q-btn>

          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.eventSteper.goToStep('event_add')">Back to Top</q-btn>
            <q-btn class="q-ml-sm" color="green" @click="submit">Finish</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-inner-loading :visible="progress" />
      </q-stepper>

  </q-page>
</template>

<script>

const today = new Date()

export default {
  data () {
    return {
      title: '',
      hosts: [],
      startDate: today,
      endDate: null,
      color: null,
      loca: null,
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
  }
}
</script>
