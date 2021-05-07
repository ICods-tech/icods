import QRCode from "../infra/typeorm/models/QRCode"
import { OrderedQRCodes, QRCodeByDate } from "../interfaces/OrderedQRCodes"
import { formatDateFiltering } from "./formatDateFiltering"

export function addQRCodesToReceivedDates(sortedQRCodes: QRCode[] | [], orderedReceivedQRCodes: OrderedQRCodes) {
  let temporaryMonths: QRCodeByDate = {}

  let previousMonth = sortedQRCodes.length && formatDateFiltering(sortedQRCodes[0].received_at as Date)
  temporaryMonths[previousMonth] = []

  for (let qrcode of sortedQRCodes) {
    let { received_at } = qrcode
    console.log(received_at)
    let formattedMonth = formatDateFiltering(received_at as Date)

    if (formattedMonth in temporaryMonths) {
      temporaryMonths[formattedMonth].push(qrcode)
    } else {
      temporaryMonths[formattedMonth] = [qrcode]
      orderedReceivedQRCodes.data.push({
        [previousMonth]: temporaryMonths[previousMonth]
      })
      delete temporaryMonths[previousMonth]
      previousMonth = formattedMonth
    }
  }

  if (Object.keys(temporaryMonths)) {
    let [firstMonth] = Object.keys(temporaryMonths)
    orderedReceivedQRCodes.data.push({
      [firstMonth]: temporaryMonths[firstMonth]
    })
  }
}
