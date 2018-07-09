export const state = () => ({
  name: '',
  npoints: 1,
  nheadings: 1,
  pitches: [0, 30, 60],
  pitch_values: [0, 15, 30, 45, 60],
  bnorth: 42.27,
  bsouth: 42.19,
  beast: -8.66,
  bwest: -8.78
})

export const mutations = {
  updateName (state, value) { state.name = value },
  updateNpoints (state, value) { state.npoints = value },
  updateNheadings (state, value) { state.nheadings = value },
  updatePitches (state, value) { state.pitches = value },
  updateBounds (state, value) {
    state.bnorth = value.north
    state.bsouth = value.south
    state.beast = value.east
    state.bwest = value.west
  }
}
