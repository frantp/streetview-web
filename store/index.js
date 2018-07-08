export const state = () => ({
  npoints: 1000,
  nangles: 8,
  pitch: [30, 60],
  pitch_values: [30, 60, 90]
})

export const mutations = {
  updateNpoints (state, value) { state.npoints = value },
  updateNangles (state, value) { state.nangles = value },
  updatePitch (state, value) { state.pitch = value }
}
