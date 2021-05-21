import QRCode from "../infra/typeorm/models/QRCode"
import { OrderedQRCodes, QRCodeByDate, QRCodeComparisonDate } from "../interfaces/OrderedQRCodes"
import { formatDateFiltering } from "./formatDateFiltering"

export function addQRCodesToReceivedDates(sortedQRCodes: QRCodeComparisonDate[] | [], orderedReceivedQRCodes: OrderedQRCodes) {
  let temporaryMonths: QRCodeByDate = {}

  let previousMonth = sortedQRCodes.length && formatDateFiltering(sortedQRCodes[0].comparisonDate as Date)
  temporaryMonths[previousMonth] = []

  for (let qrcode of sortedQRCodes) {
    let { comparisonDate } = qrcode

    let formattedMonth = formatDateFiltering(comparisonDate as Date)

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

    delete qrcode.comparisonDate
  }

  if (Object.keys(temporaryMonths)) {
    let [firstMonth] = Object.keys(temporaryMonths)
    orderedReceivedQRCodes.data.push({
      [firstMonth]: temporaryMonths[firstMonth]
    })
  }
}
