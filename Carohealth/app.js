function analyzeHealth() {
  const text = document.getElementById("dischargeText").value;
  const medicine = document.getElementById("medicineName").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const lang = document.getElementById("language").value;

  if (!text) {
    alert("Please enter discharge information.");
    return;
  }

  fetch("http://localhost:3000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      medicine,
      weight,
      height,
      lang
    })
  })
  .then(res => res.json())
  .then(data => {
    showResult(data);
    if (document.getElementById("notifications").checked) {
      alert("Reminder saved for daily care.");
    }
  });
}

function showResult(data) {
  const section = document.getElementById("resultSection");
  section.classList.remove("hidden");

  const card = document.getElementById("healthCard");
  card.className = data.health.color;

  document.getElementById("healthStatus").innerText =
    `Status: ${data.health.label}`;

  document.getElementById("healthSummary").innerText =
    data.summary;

  const careList = document.getElementById("dailyCareList");
  careList.innerHTML = "";
  data.dailyCare.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    careList.appendChild(li);
  });

  document.getElementById("tabletInfo").innerText =
    `${data.medicine.use}. ${data.medicine.how}. ${data.medicine.warning}.`;

  document.getElementById("progressInfo").innerText =
    data.bmi ? `BMI: ${data.bmi}` : "Progress data not available.";

  localStorage.setItem("latestReport", JSON.stringify(data));
}

function saveOffline() {
  alert("Saved for offline reading.");
}