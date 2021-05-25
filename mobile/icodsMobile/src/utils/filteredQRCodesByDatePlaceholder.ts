import { format, parseISO } from "date-fns";
import { pt } from "date-fns/locale";
import { Colors } from "../interfaces/colors";

export function filteredQRCodesByDatePlaceholder() {
  let date = `${format(parseISO(new Date().toISOString() as string), "MMMM' de 'yyyy", { locale: pt })}`
  const formattedQRCodes = [
    {
      [date]: [
        {
          id: 'a49ff252-d6c2-4ee0-8e89-646194b39889',
          enabled: true,
          link: "generate_qrcode/a49ff252-d6c2-4ee0-8e89-646194b39889",
          content: "",
          favorited: false,
          postId: null,
          comparisonDate: "2021-05-21T17:12:49.188Z",
          qrCodeCreatorName: "Você",
          color: "green" as Colors
        }
      ]
    }
  ]
  return formattedQRCodes
}