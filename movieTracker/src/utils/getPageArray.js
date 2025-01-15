export function getPageArray(total_pages) {
  return Array.from({ length: total_pages }, (_, i) => i + 1);
}
