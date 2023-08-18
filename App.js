const form = document.getElementById("contact-form");
const contact = document.getElementById("contact");

function showSpinner() {
  let div1 = document.createElement("div");
  div1.classList.add("spinner");
  let div2 = document.createElement("div");
  div2.classList.add("spinner-inner");
  div1.prepend(div2);
  contact.prepend(div1);
}

function hideSpinner() {
  document.getElementsByClassName("spinner")[0].style.display = "none";
}

const addData = async (obj) => {
  try {
    let response = await fetch("https://portfoliobackend-r7db.onrender.com/api/v1/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const obj = { name, email, subject, message };
  showSpinner();
  let data = await addData(obj);
  alert("your data has been recived succesfully");
  hideSpinner();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});
