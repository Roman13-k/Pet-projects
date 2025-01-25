export function getThousandRev(total_reviews) {
  return Math.ceil(total_reviews / 1000);
}
