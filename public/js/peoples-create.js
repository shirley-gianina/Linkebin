const http = axios.create({
  baseURL: "http://localhost:8000",
});

const submitBtn = document.getElementById("submit-create-btn");

submitBtn.onclick = () => {
  const name = document.getElementById("name").value;
  const picture = document.getElementById("picture").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const nationality = document.getElementById("nationality").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const postcode = document.getElementById("postcode").value;
  const street = document.getElementById("street").value;
  const data = {
    name,
    picture,
    email,
    phone,
    gender,
    dob,
    country,
    nationality,
    city,
    state,
    postcode,
    street,
  };

  http
    .post(`/peoples`, data)
    .then(() => {
      console.log("Success create");
    })
    .catch((e) => console.error(e));
};
