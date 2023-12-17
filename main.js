const genPassBtn = document.querySelector(".btn");
const apiURL = "https://api.api-ninjas.com/v1/passwordgenerator?length=";
const clipBoardBtn = document.querySelector(".fa-clipboard");
const input = document.querySelector("input");
const form = document.querySelector("form");

let h = new Headers();
h.append("X-Api-Key", "g0wR/+aHm2k3eZI9FV66rQ==j7V29U1lo2mGZNRq");
let req = new Request(`${apiURL}` + 32, {
  method: "GET",
  headers: h,
  mode: "cors",
});

const fetchURL = async () => {
  try {
    const res = await fetch(req);
    const data = await res.json();
    console.log(data);
    input.value = data.random_password;
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchURL();
});

clipBoardBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
});
