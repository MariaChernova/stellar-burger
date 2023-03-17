export async function checkResponse(res) {
  const data = await res.json();
  if (data && !data.success) {
    if (data.message)
      throw data.message;
    else
      throw "Operation was not successful";
  }
  if (!res.ok) {
    throw `Bad server response: ${res.status}`;
  }
  return data;
}
