// Below code written after consulting this SO response: https://stackoverflow.com/questions/50732815/how-to-use-csrf-token-in-django-restful-api-and-react

const CSRFToken = () => {
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].toString().replace(/^([\s]*)|([\s]*)$/g, "");
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  const csrftoken = getCookie('csrftoken')

  return (
      <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
  );
};
export default CSRFToken;