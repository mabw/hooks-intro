
const useSubmit = (title) => {
  return payload => alert("title: " + title + " \npayload: " + JSON.stringify(payload));
}

export default useSubmit;