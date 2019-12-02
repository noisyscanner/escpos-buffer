import { Filter } from '.'
import { PNG } from 'pngjs'

export default class Threshold implements Filter {
  process(image: PNG): PNG {
    const width = image.width
    const height = image.height
    const new_data = image.data.slice()
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const color = image.data.readUIntBE(y * width * 4 + x * 4, 4)
        const red = (color >> 16) & 0xFF
        const green = (color >> 8) & 0xFF
        const blue = color & 0xFF
        const gray = Math.trunc(red * 0.3 + green * 0.59 + blue * 0.11)
        const new_color = gray > 127 ? 0xFF : 0
        new_data[y * width * 4 + x * 4 + 0] = 0         // alpha
        new_data[y * width * 4 + x * 4 + 1] = new_color // red
        new_data[y * width * 4 + x * 4 + 2] = new_color // green
        new_data[y * width * 4 + x * 4 + 3] = new_color // blue
      }
    }
    image.data = new_data
    return image
  }
}
