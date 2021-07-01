import { format, parseISO } from "date-fns";
import { pt } from "date-fns/locale";

export function formatDateFiltering(received_at: Date) {
  let formattedMonth = format(parseISO(received_at?.toISOString() as string), "MMMM' de 'yyyy", { locale: pt })
  formattedMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.substring(1);

  return formattedMonth
}