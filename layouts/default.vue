<template>
  <v-app dark>
    <v-toolbar fixed app>
      <v-toolbar-title>Street View Downloader</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="name" class="ml-2" flat hide-details label="Collection name"></v-text-field>
      <v-text-field v-model.number="npoints" class="ml-2" flat hide-details label="No points"></v-text-field>
      <v-text-field v-model.number="nheadings" class="ml-2" flat hide-details label="No headings per point"></v-text-field>
      <v-select v-model.number="pitches" :items="pitch_values" class="ml-2" flat hide-details multiple label="Pitch values" style="width: 200px"></v-select>
      <v-text-field v-model.number="total_points" class="ml-2" flat hide-details readonly label="Total requests"></v-text-field>
      <v-btn @click="download" class="ml-2" color="success" :disabled="!name">Download</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
    <v-snackbar v-model="snackbar" top right :timeout="2000">Downloading...</v-snackbar>
  </v-app>
</template>

<script>
  import axios from 'axios'

  const URL = 'http://localhost:8090'

  export default {
    data () {
      return {
        snackbar: false
      }
    },
    computed: {
      name: {
        get () { return this.$store.state.name },
        set (value) { this.$store.commit('updateName', value) }
      },
      npoints: {
        get () { return this.$store.state.npoints },
        set (value) { this.$store.commit('updateNpoints', value) }
      },
      nheadings: {
        get () { return this.$store.state.nheadings },
        set (value) { this.$store.commit('updateNheadings', value) }
      },
      pitches: {
        get () { return this.$store.state.pitches },
        set (value) { this.$store.commit('updatePitches', value) }
      },
      pitch_values () {
        return this.$store.state.pitch_values
      },
      total_points () {
        return this.$store.state.npoints * this.$store.state.nheadings * this.$store.state.pitches.length
      }
    },
    methods: {
      download () {
        this.snackbar = true
        axios.get(`${URL}/api`, { params: this.$store.state })
      }
    }
  }
</script>
