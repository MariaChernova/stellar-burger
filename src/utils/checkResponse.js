export function checkResponse(res) {
  if (!res.ok) {
    throw res.statusText;
  }
}
