<template>
  <GmapMap ref="mapRef" :center="{lat:42.2406, lng:-8.7207}" :zoom="11" mapTypeId="hybrid" style="width: 100%; height: 100%">
    <GmapRectangle ref="rectRef" :bounds="bounds" draggable editable></GmapRectangle>
  </GmapMap>
</template>

<script>
  export default {
    computed: {
      bounds () {
        const s = this.$store.state
        return {north: s.bnorth, south: s.bsouth, east: s.beast, west: s.bwest}
      }
    },
    mounted () {
      let self = this
      setInterval(function () {
        const b = self.$refs.rectRef.$rectangleObject.bounds
        const value = {north: b.f.f, south: b.f.b, east: b.b.f, west: b.b.b}
        self.$store.commit('updateBounds', value)
      }, 1000)
    }
  }
</script>
