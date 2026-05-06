export function renderTitle(title: string): string {
  return title.replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

export function plainTitle(title: string): string {
  return title.replace(/\*([^*]+)\*/g, "$1");
}
