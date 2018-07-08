<template>
  <v-app dark>
    <v-toolbar fixed app>
      <v-toolbar-title>Street View Downloader</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="npoints" class="ml-2" flat hide-details label="No points"></v-text-field>
      <v-text-field v-model="nangles" class="ml-2" flat hide-details label="No angles per point"></v-text-field>
      <v-select v-model="pitch" :items="pitch_values" class="ml-2" flat hide-details multiple label="Pitch values" style="width: 200px"></v-select>
      <v-text-field class="ml-2" flat hide-details readonly v-model="total_points" label="Total requests"></v-text-field>
      <v-btn class="ml-2" color="success">Download</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      npoints: {
        get () { return this.$store.state.npoints },
        set (value) { this.$store.commit('updateNpoints', value) }
      },
      nangles: {
        get () { return this.$store.state.nangles },
        set (value) { this.$store.commit('updateNangles', value) }
      },
      pitch: {
        get () { return this.$store.state.pitch },
        set (value) { this.$store.commit('updatePitch', value) }
      },
      pitch_values: function () {
        return this.$store.state.pitch_values
      },
      total_points: function () {
        return this.$store.state.npoints * this.$store.state.nangles * this.$store.state.pitch.length
      }
    }
  }
</script>
