export function capitalizeWords(string: string) {
  return string.replace(/(?:^|\s)\S/g, function (a: string) { return a.toUpperCase(); });
};