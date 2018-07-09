import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const KEY = <KEY>

Vue.use(VueGoogleMaps, {
  load: {
    key: KEY
  }
})
