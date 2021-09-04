import QRCode from "../typeorm/models/QRCode"
import { IOrderedQRCodes, QRCodeByDate, QRCodeComparisonDate } from "../interfaces/IOrderedQRCodes"
import { formatDateFiltering } from "./formatDateFiltering"

export function addQRCodesToReceivedDates(sortedQRCodes: QRCodeComparisonDate[] | [], orderedReceivedQRCodes: IOrderedQRCodes) {
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

    delete qrcode.received_at
    delete qrcode.created_at
  }

  if (Object.keys(temporaryMonths)) {
    let [firstMonth] = Object.keys(temporaryMonths)
    orderedReceivedQRCodes.data.push({
      [firstMonth]: temporaryMonths[firstMonth]
    })
  }
}
