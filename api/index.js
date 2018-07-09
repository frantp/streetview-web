const express = require('express')
const axios = require('axios')
const fs = require('fs')

const KEY = <KEY>
const DIR = <DIR>

const app = express()

app.get('/', async function (req, res) {
  const data = req.query
  console.info(data)
  const npoints = Number(data.npoints)
  const nheadings = Number(data.nheadings)
  const pitches = data.pitches.map(Number)
  const bnorth = Number(data.bnorth)
  const bsouth = Number(data.bsouth)
  const beast = Number(data.beast)
  const bwest = Number(data.bwest)
  for (let i = 0; i < npoints; i++) {
    const lat = Math.random() * (bnorth - bsouth) + bsouth
    const lng = Math.random() * (beast - bwest) + bwest
    for (let h = 0; h < nheadings; h++) {
      const heading = h * 360 / nheadings
      for (const pitch of pitches) {
        console.info([lat, lng, heading, pitch])
        console.log('DOWNLOADING...')
        const response = await axios.get('https://maps.googleapis.com/maps/api/streetview', {
          params: {
            size: '640x640',
            location: `${lat},${lng}`,
            fov: 90,
            heading: heading,
            pitch: pitch,
            key: KEY
          },
          responseType: 'stream'
        })
        const dir = `${DIR}/${data.name}`
        fs.mkdir(dir, function(err) {
          response.data.pipe(fs.createWriteStream(`${dir}/${lat}_${lng}_${heading}_${pitch}.jpg`))
        })
      }
    }
  }
})

module.exports = app
