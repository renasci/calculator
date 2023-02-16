export function getCachedValues() {
  const data = localStorage.getItem(`values`);
  return data ? JSON.parse(data) : null;
}
  