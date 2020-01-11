const fs = require('fs')
const exec = require('child_process').exec

function check() {
  fs.readdir('/usr/input', (err, files) => {
    console.log(files)
    if (err || !files) return setTimeout(check, 1000)

    files = files.filter(f => f.endsWith('.mov'))

    if (files.length > 0) {
      let file = files.pop()

      let command = `ffmpeg -i /usr/input/${file} -vcodec h264 -acodec aac -strict -2 /usr/output/${file.replace('.mov', '.mp4')}`
      exec(command, () => {
        console.log('Converted', file)
        fs.unlink(`/usr/input/${file}`, () => {
          setTimeout(check, 1000)
        })
      })

    } else {
      setTimeout(check, 1000)
    }
  })
}
