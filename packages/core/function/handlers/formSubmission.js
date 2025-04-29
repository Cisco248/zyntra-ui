// Save The Form Data to Google Sheet
function saveFormDataToGoogleSheet() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwZkBQe2mtNGsmM4BL8QqjlTIysxoGDhyxKVU_5rWg/dev";
  const form = document.forms["submit-to-google-sheet"];
  const name = document.getElementById("Name");
  const email = document.getElementById("Email");
  const msg = document.getElementById("Message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = ""; // Corrected this line
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
}

saveFormDataToGoogleSheet();
