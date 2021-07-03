const http = axios.create({
  baseURL: "http://localhost:8000",
});

const buttons = document.querySelectorAll(".btn-delete-people");

// Iterar por estos botones y ponerles su onclick

buttons.forEach((button) => {
  button.onclick = () => {
    http
      .delete(`/peoples/${button.value}`)
      .then(() => {
        button.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      })
      .catch((e) => console.error(e));
  };
});

