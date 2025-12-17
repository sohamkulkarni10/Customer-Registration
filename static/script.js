// // Toggle between Form and History
// function showSection(id) {
//   document
//     .querySelectorAll(".section")
//     .forEach((s) => (s.style.display = "none"));
//   document.getElementById(id).style.display = "block";
// }

// // Handle Form Submission
// document.getElementById("userForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);

//   const response = await fetch("/submit", { method: "POST", body: formData });
//   const result = await response.json();

//   alert(result.msg);
//   e.target.reset();
// };

// // Fetch data from Flask and display
// async function loadHistory() {
//   showSection("history-sec");
//   const response = await fetch("/get_history");
//   const users = await response.json();

//   const list = document.getElementById("history-list");
//   list.innerHTML = ""; // Clear previous

//   users.forEach((u) => {
//     list.innerHTML += `
//             <div class="card">
//                 <img src="${
//                   u.photo || "https://via.placeholder.com/80"
//                 }" width="80">
//                 <div class="card-info">
//                     <strong>${u.name}</strong>
//                     <p>${u.email} | ${u.phone}</p>
//                     <small>DOB: ${u.dob} | License: ${u.license}</small>
//                 </div>
//             </div>
//         `;
//   });
// }

// function showSection(id) {
//   document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
//   document.getElementById(id).style.display = "block";
// }

// document.getElementById("regForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const res = await fetch("/submit", { method: "POST", body: formData });
//   const data = await res.json();
//   alert(data.message);
//   if (data.status === "success") e.target.reset();
// };

// async function loadHistory() {
//   showSection("history-sec");
//   const res = await fetch("/get_history");
//   const users = await res.json();
//   const list = document.getElementById("display-list");
//   list.innerHTML = "";

//   users.forEach((u) => {
//     list.innerHTML += `
//             <div class="user-card">
//                 <img src="${
//                   u.photo || "https://via.placeholder.com/60"
//                 }" width="60">
//                 <div class="info">
//                     <b>${u.name}</b>
//                     <p>${u.email}</p>
//                     <button class="del-btn" onclick="deleteUser('${
//                       u.email
//                     }')">Delete</button>
//                 </div>
//             </div>`;
//   });
// }

// async function deleteUser(email) {
//   if (confirm("Delete this user?")) {
//     const res = await fetch("/delete_user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//     const data = await res.json();
//     alert(data.message);
//     loadHistory(); // Refresh the list
//   }
// }

// function showPage(id) {
//   document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
//   document.getElementById(id).style.display = "flex";
// }

// document.getElementById("regForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const response = await fetch("/submit", { method: "POST", body: formData });
//   const result = await response.json();
//   alert(result.message);
//   if (result.status === "success") e.target.reset();
// };

// async function loadHistory() {
//   showPage("history-page");
//   const response = await fetch("/get_history");
//   const data = await response.json();

//   const list = document.getElementById("history-list");
//   list.innerHTML = "";

//   data.forEach((user) => {
//     list.innerHTML += `
//             <div class="card">
//                 <img src="${
//                   user.photo || "https://via.placeholder.com/120"
//                 }" class="user-photo">
//                 <div class="card-details">
//                     <h3>${user.name}</h3>
//                     <p><strong>Email:</strong> ${user.email}</p>
//                     <p><strong>Phone:</strong> ${user.phone}</p>
//                     <p><strong>DOB:</strong> ${user.dob}</p>
//                     <p><strong>License:</strong> ${user.license}</p>
//                     <button class="delete-btn" onclick="deleteRecord('${
//                       user.email
//                     }')">Delete Entry</button>
//                 </div>
//             </div>`;
//   });
// }

// async function deleteRecord(email) {
//   if (confirm("Confirm deletion of " + email + "?")) {
//     const response = await fetch("/delete_user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//     const result = await response.json();
//     alert(result.message);
//     loadHistory();
//   }
// }

// function showPage(id) {
//   document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
//   document.getElementById(id).style.display = "flex";
// }

// function calculateAge() {
//   const dob = document.getElementById("dobInput").value;
//   if (!dob) return;
//   const birthDate = new Date(dob);
//   const today = new Date();
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
//   document.getElementById("ageLabel").innerText = "Age: " + age;
//   document.getElementById("ageHidden").value = age;
// }

// function toggleFees() {
//   const content = document.getElementById("fee-content");
//   content.style.display = content.style.display === "none" ? "block" : "none";
// }

// function calcRemaining() {
//   const discount = document.getElementById("discount").value || 0;
//   const remaining = 4000 - discount;
//   document.getElementById("remDisplay").innerText = remaining;
//   document.getElementById("totalRemainingHidden").value = remaining;
// }

// document.getElementById("regForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const response = await fetch("/submit", { method: "POST", body: formData });
//   const result = await response.json();
//   alert(result.message);
//   if (result.status === "success") location.reload();
// };

// async function loadHistory() {
//   showPage("history-page");
//   const response = await fetch("/get_history");
//   const data = await response.json();
//   const list = document.getElementById("history-list");
//   list.innerHTML =
//     '<h1 style="color:white; margin-bottom:20px;">Customer Database</h1>';

//   data.forEach((u) => {
//     // Determine color based on status
//     const statusClass =
//       u.payment_status === "Completed" ? "status-done" : "status-pending";

//     list.innerHTML += `
//             <div class="card">
//                 <img src="${
//                   u.photo || "https://via.placeholder.com/100"
//                 }" class="user-photo">
//                 <div class="card-details">
//                     <div class="card-header">
//                         <h3>${u.name}</h3>
//                         <span class="status-badge ${statusClass}">${
//       u.payment_status
//     }</span>
//                     </div>
//                     <p><strong>Enrollment:</strong> ${u.enrollment} (${
//       u.enroll_date
//     })</p>
//                     <p><strong>Info:</strong> ${u.age} yrs | ${
//       u.occupation
//     } | ${u.membership}</p>
//                     <p><strong>Address:</strong> ${u.address}</p>
//                     <div class="fee-info">
//                         <p><strong>Fees:</strong> Total 4000 | Discount: ${
//                           u.discount
//                         } | Rem: ${u.total_remaining}</p>
//                         <div class="inst-grid">
//                             <span><strong>Inst 1:</strong> ${u.inst1_amount} (${
//       u.inst1_mode
//     })</span>
//                             <span><strong>Inst 2:</strong> ${u.inst2_amount} (${
//       u.inst2_mode
//     })</span>
//                         </div>
//                     </div>
//                     <button class="delete-btn" onclick="deleteRecord('${
//                       u.email
//                     }')">Delete Permanent</button>
//                 </div>
//             </div>`;
//   });
// }

// async function deleteRecord(email) {
//   if (confirm("Are you sure? This cannot be undone.")) {
//     await fetch("/delete_user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//     loadHistory();
//   }
// }

// function showPage(id) {
//   document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
//   document.getElementById(id).style.display = "flex";
// }

// function calculateAge() {
//   const dob = document.getElementById("dobInput").value;
//   const birthDate = new Date(dob);
//   const today = new Date();
//   let age = today.getFullYear() - birthDate.getFullYear();
//   if (
//     today.getMonth() < birthDate.getMonth() ||
//     (today.getMonth() === birthDate.getMonth() &&
//       today.getDate() < birthDate.getDate())
//   )
//     age--;
//   document.getElementById("ageLabel").innerText = "Age: " + age;
//   document.getElementById("ageHidden").value = age;
// }

// function toggleLicense(show) {
//   document.getElementById("license-no-box").style.display = show
//     ? "block"
//     : "none";
// }

// function toggleFees() {
//   const content = document.getElementById("fee-content");
//   content.style.display = content.style.display === "none" ? "block" : "none";
// }

// function calcRemaining() {
//   const discount = document.getElementById("discount").value || 0;
//   const remaining = 4000 - discount;
//   document.getElementById("remDisplay").innerText = remaining;
//   document.getElementById("totalRemainingHidden").value = remaining;
// }

// document.getElementById("regForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const res = await fetch("/submit", { method: "POST", body: formData });
//   const result = await res.json();
//   alert(result.message);
//   if (result.status === "success") location.reload();
// };

// async function loadHistory() {
//   showPage("history-page");
//   const res = await fetch("/get_history");
//   const data = await res.json();
//   const list = document.getElementById("history-list");
//   list.innerHTML = "<h1>Customer History</h1>";

//   data.forEach((u) => {
//     const statusClass =
//       u.payment_status === "Completed" ? "status-done" : "status-pending";
//     list.innerHTML += `
//             <div class="card">
//                 <img src="${
//                   u.photo || "https://via.placeholder.com/100"
//                 }" class="user-photo">
//                 <div class="card-details">
//                     <div class="card-header">
//                         <h3>${u.name}</h3>
//                         <span class="status-badge ${statusClass}">${
//       u.payment_status
//     }</span>
//                     </div>
//                     <p><strong>Enrollment:</strong> ${u.enrollment} (${
//       u.enroll_date
//     })</p>
//                     <p><strong>Details:</strong> ${u.age} yrs | ${
//       u.membership
//     } | ${u.occupation}</p>
//                     <p><strong>License:</strong> ${u.license} ${
//       u.license === "Yes" ? `(${u.license_no})` : ""
//     }</p>
//                     <p><strong>Address:</strong> ${u.address}</p>
//                     <div class="fee-info-box">
//                         <p>Total Fee: 4000 | Discount: ${
//                           u.discount
//                         } | Remaining: ${u.total_remaining}</p>
//                         <p>Inst 1: ${u.inst1_amount} (${
//       u.inst1_mode
//     }) | Inst 2: ${u.inst2_amount} (${u.inst2_mode})</p>
//                     </div>
//                     <button class="delete-btn" onclick="deleteRecord('${
//                       u.email
//                     }')">Delete Permanent</button>
//                 </div>
//             </div>`;
//   });
// }

// async function deleteRecord(email) {
//   if (confirm("Confirm deletion?")) {
//     await fetch("/delete_user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//     loadHistory();
//   }
// }

// function showPage(id) {
//   document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
//   document.getElementById(id).style.display = "flex";
// }

// function calculateAge() {
//   const dob = document.getElementById("dobInput").value;
//   const birthDate = new Date(dob);
//   const today = new Date();
//   let age = today.getFullYear() - birthDate.getFullYear();
//   if (
//     today.getMonth() < birthDate.getMonth() ||
//     (today.getMonth() === birthDate.getMonth() &&
//       today.getDate() < birthDate.getDate())
//   )
//     age--;
//   document.getElementById("ageLabel").innerText = "Age: " + age;
//   document.getElementById("ageHidden").value = age;
// }

// function toggleLicense(show) {
//   document.getElementById("license-no-box").style.display = show
//     ? "block"
//     : "none";
// }
// function toggleFees() {
//   const c = document.getElementById("fee-content");
//   c.style.display = c.style.display === "none" ? "block" : "none";
// }

// function calcRemaining() {
//   const d = document.getElementById("discount").value || 0;
//   const r = 4000 - d;
//   document.getElementById("remDisplay").innerText = r;
//   document.getElementById("totalRemainingHidden").value = r;
// }

// document.getElementById("regForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const res = await fetch("/submit", { method: "POST", body: formData });
//   const result = await res.json();
//   alert(result.message);
//   if (result.status === "success") location.reload();
// };

// async function loadHistory() {
//   showPage("history-page");
//   const res = await fetch("/get_history");
//   const data = await res.json();
//   const list = document.getElementById("history-list");
//   list.innerHTML = "<h1>Customer Database</h1>";

//   data.forEach((u) => {
//     const isPending = u.payment_status === "PENDING";
//     const statusClass = isPending ? "status-pending" : "status-done";

//     list.innerHTML += `
//             <div class="card">
//                 <img src="${
//                   u.photo || "https://via.placeholder.com/100"
//                 }" class="user-photo">
//                 <div class="card-details">
//                     <div class="card-header">
//                         <div>
//                             <h3>${u.name}</h3>
//                             <p class="email-text">${u.email}</p>
//                         </div>
//                         <span class="status-badge ${statusClass}">${
//       u.payment_status
//     }</span>
//                     </div>

//                     <div class="info-text">
//                         <p><strong>Enrollment:</strong> ${u.enrollment} (${
//       u.enroll_date
//     })</p>
//                         <p><strong>Phone:</strong> ${
//                           u.phone
//                         } | <strong>Age:</strong> ${u.age}</p>
//                         <p><strong>License:</strong> ${u.license} ${
//       u.license === "Yes" ? `(${u.license_no})` : ""
//     }</p>
//                         <p><strong>Address:</strong> ${u.address}</p>
//                     </div>

//                     <div class="history-fee-table">
//                         <div class="fee-summary">Total: 4000 | Disc: ${
//                           u.discount
//                         } | Final Rem: ${u.total_remaining}</div>
//                         <div class="inst-row">
//                             <span><strong>Inst 1:</strong> ${u.inst1_amount} (${
//       u.inst1_mode
//     }) on ${u.inst1_date} | Rem: ${u.inst1_rem}</span>
//                         </div>
//                         <div class="inst-row">
//                             <span><strong>Inst 2:</strong> ${u.inst2_amount} (${
//       u.inst2_mode
//     }) on ${u.inst2_date} | Rem: ${u.inst2_rem}</span>
//                         </div>
//                     </div>

//                     <div class="actions">
//                         ${
//                           isPending
//                             ? `<button class="pay-done-btn" onclick="markAsDone('${u.email}')">Mark Payment Done</button>`
//                             : ""
//                         }
//                         <button class="delete-btn" onclick="deleteRecord('${
//                           u.email
//                         }')">Delete</button>
//                     </div>
//                 </div>
//             </div>`;
//   });
// }

// async function markAsDone(email) {
//   if (confirm("Change status to COMPLETED?")) {
//     await fetch("/update_payment", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//     loadHistory();
//   }
// }

// let allUsers = [];

// function showPage(id) {
//   document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
//   const target = document.getElementById(id);
//   target.style.display = id === "history-page" ? "block" : "flex";
// }

// function calculateAge() {
//   const dob = document.getElementById("dobInput").value;
//   if (!dob) return;
//   const birthDate = new Date(dob);
//   const today = new Date();
//   let age = today.getFullYear() - birthDate.getFullYear();
//   if (
//     today.getMonth() < birthDate.getMonth() ||
//     (today.getMonth() === birthDate.getMonth() &&
//       today.getDate() < birthDate.getDate())
//   )
//     age--;
//   document.getElementById("ageLabel").innerText = "Age: " + age;
//   document.getElementById("ageHidden").value = age;
// }

// function toggleLicense(show) {
//   document.getElementById("license-no-box").style.display = show
//     ? "block"
//     : "none";
// }

// function toggleFees() {
//   const c = document.getElementById("fee-content");
//   c.style.display = c.style.display === "none" ? "block" : "none";
// }

// function calcRemaining() {
//   const d = document.getElementById("discount").value || 0;
//   const r = 4000 - d;
//   document.getElementById("remDisplay").innerText = r;
//   document.getElementById("totalRemainingHidden").value = r;
// }

// document.getElementById("regForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const res = await fetch("/submit", { method: "POST", body: formData });
//   const result = await res.json();
//   alert(result.message);
//   if (result.status === "success") location.reload();
// };

// async function loadHistory() {
//   showPage("history-page");
//   const res = await fetch("/get_history");
//   allUsers = await res.json();

//   const list = document.getElementById("history-list");
//   // Setup Search Bar and Container ONLY ONCE to avoid space-bar focus bugs
//   list.innerHTML = `
//     <h1 style="text-align:center; color:white; margin:20px 0;">Customer Database</h1>
//     <div style="display:flex; justify-content:center; margin-bottom:30px;">
//         <input type="text" id="searchInput" placeholder="Search by name or email..."
//                onkeyup="filterHistory()"
//                style="width: 80%; padding: 15px; border-radius: 30px; border: none; font-size: 16px; outline: none; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
//     </div>
//     <div id="cards-container"></div>
//   `;
//   renderCards(allUsers);
// }

// function filterHistory() {
//   const query = document.getElementById("searchInput").value.toLowerCase();
//   const filtered = allUsers.filter(
//     (u) =>
//       u.name.toLowerCase().includes(query) ||
//       u.email.toLowerCase().includes(query)
//   );
//   renderCards(filtered);
// }

// function renderCards(data) {
//   const container = document.getElementById("cards-container");
//   container.innerHTML = ""; // Only clear the cards, search input stays as is

//   data.forEach((u) => {
//     const isPending = u.payment_status === "PENDING";
//     const statusClass = isPending ? "status-pending" : "status-done";

//     container.innerHTML += `
//       <div class="card">
//         <img src="${
//           u.photo || "https://via.placeholder.com/100"
//         }" class="user-photo">
//         <div class="card-details">
//             <div class="card-header">
//                 <div>
//                     <h3 style="text-transform: capitalize;">${u.name}</h3>
//                     <p class="email-text">${u.email}</p>
//                 </div>
//                 <span class="status-badge ${statusClass}">${
//       u.payment_status
//     }</span>
//             </div>

//             <div class="info-text">
//                 <p><strong>Enrollment:</strong> ${u.enrollment} (${
//       u.enroll_date
//     })</p>
//                 <p><strong>Phone:</strong> ${u.phone} | <strong>Age:</strong> ${
//       u.age
//     }</p>
//                 <p><strong>Occupation:</strong> ${u.occupation}</p>
//                 <p><strong>Address:</strong> ${u.address}</p>
//             </div>

//             <div class="history-fee-table">
//                 <div class="fee-summary">Total Remaining: ${
//                   u.total_remaining
//                 }</div>
//                 <div class="inst-row">
//                     <span><strong>Inst 1 Rem:</strong> ${
//                       u.inst1_rem
//                     } | <strong>Inst 2 Rem:</strong> ${u.inst2_rem}</span>
//                 </div>
//             </div>

//             <div class="actions">
//                 ${
//                   isPending
//                     ? `<button class="pay-done-btn" onclick="markAsDone('${u.email}')">Mark Payment Done</button>`
//                     : ""
//                 }
//                 <button class="delete-btn" onclick="deleteRecord('${
//                   u.email
//                 }')">Delete</button>
//             </div>
//         </div>
//       </div>`;
//   });
// }

// async function markAsDone(email) {
//   if (confirm("Set all balances to 00 and mark as COMPLETED?")) {
//     await fetch("/update_payment", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//     loadHistory(); // Reloads data and updates UI
//   }
// }

// async function deleteRecord(email) {
//   if (confirm("Permanently delete?")) {
//     await fetch("/delete_user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//     loadHistory();
//   }
// }

let allUsers = [];

// Navigation and Page Control
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
  const target = document.getElementById(id);
  // Maintain your flex layout for the form and block for history
  target.style.display = id === "history-page" ? "block" : "flex";
}

// Age Calculation logic for your DOB input
function calculateAge() {
  const dob = document.getElementById("dobInput").value;
  if (!dob) return;
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById("ageLabel").innerText = "Age: " + age;
  document.getElementById("ageHidden").value = age;
}

// Form UI Toggles
function toggleLicense(show) {
  document.getElementById("license-no-box").style.display = show
    ? "block"
    : "none";
}

function toggleFees() {
  const c = document.getElementById("fee-content");
  c.style.display =
    c.style.display === "none" || c.style.display === "" ? "block" : "none";
}

function calcRemaining() {
  const discount = document.getElementById("discount").value || 0;
  const total = 4000 - discount;
  document.getElementById("remDisplay").innerText = total;
  document.getElementById("totalRemainingHidden").value = total;
}

// Handle Form Submission
document.getElementById("regForm").onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const res = await fetch("/submit", {
    method: "POST",
    body: formData,
  });
  const result = await res.json();
  alert(result.message);
  if (result.status === "success") {
    location.reload();
  }
};

// --- HISTORY & SEARCH SECTION ---

async function loadHistory() {
  showPage("history-page");
  const res = await fetch("/get_history");
  allUsers = await res.json();

  const list = document.getElementById("history-list");
  // Placing search input outside the cards-container to prevent focus loss (space bar bug)
  list.innerHTML = `
        <h1 style="text-align:center; color:white; margin:20px 0;">Customer Information</h1>
        <div style="display:flex; justify-content:center; margin-bottom:30px;">
            <input type="text" id="searchInput" placeholder="Search by name, email or enrollment..." 
                   onkeyup="filterHistory()" 
                   style="width: 80%; padding: 15px; border-radius: 30px; border: none; font-size: 16px; outline: none; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
        </div>
        <div id="cards-container"></div>
    `;
  renderCards(allUsers);
}

function filterHistory() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = allUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      (u.enrollment && u.enrollment.toLowerCase().includes(query))
  );
  renderCards(filtered);
}

// function renderCards(data) {
//   const container = document.getElementById("cards-container");
//   container.innerHTML = "";

//   data.forEach((u) => {
//     const isPending = u.payment_status === "PENDING";
//     const statusClass = isPending ? "status-pending" : "status-done";

//     container.innerHTML += `
//             <div class="card" style="background:white; display:flex; padding:25px; border-radius:20px; margin: 0 auto 25px auto; width:95%; max-width:850px; box-shadow:0 10px 20px rgba(0,0,0,0.1); color:#333;">
//                 <img src="${
//                   u.photo || "https://via.placeholder.com/100"
//                 }" style="width:130px; height:130px; border-radius:15px; object-fit:cover; margin-right:25px; border:3px solid #f0f0f0;">
//                 <div style="flex:1;">
//                     <div style="display:flex; justify-content:space-between; align-items:flex-start;">
//                         <div>
//                             <h3 style="text-transform:capitalize; margin:0;">${
//                               u.name
//                             }</h3>
//                             <p style="color:#666; font-size:14px; margin:2px 0;">${
//                               u.email
//                             }</p>
//                         </div>
//                         <span class="status-badge ${statusClass}" style="padding:5px 15px; border-radius:20px; font-size:12px; font-weight:bold;">${
//       u.payment_status
//     }</span>
//                     </div>

//                     <div style="margin:15px 0; font-size:14px; line-height:1.6;">
//                         <p><strong>Enrollment:</strong> ${u.enrollment} (${
//       u.enroll_date
//     })</p>
//                         <p><strong>DOB:</strong> ${u.dob || "N/A"}</p>
//                         <p><strong>Address:</strong> ${u.address}</p>
//                         <p><strong>License No:</strong> ${
//                           u.license === "Yes"
//                             ? u.license_no || "Provided"
//                             : "N/A (No)"
//                         }</p>
//                     </div>

//                     <div style="background:#f4f4f4; padding:12px; border-radius:10px; margin-bottom:15px; font-size:13px;">
//                         <div style="font-weight:bold; color:#764ba2; margin-bottom:5px;">Total Remaining: ${
//                           u.total_remaining
//                         }</div>
//                         <div>Inst 1 Rem: ${u.inst1_rem} | Inst 2 Rem: ${
//       u.inst2_rem
//     }</div>
//                     </div>

//                     <div style="display:flex; gap:10px;">
//                         ${
//                           isPending
//                             ? `<button onclick="markAsDone('${u.email}')" style="background:#764ba2; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; font-weight:600;">Mark Payment Done</button>`
//                             : ""
//                         }
//                         <button onclick="deleteRecord('${
//                           u.email
//                         }')" style="background:#ff4757; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer;">Delete</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//   });
// }

function renderCards(data) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  data.forEach((u) => {
    const isPending = u.payment_status === "PENDING";
    const statusClass = isPending ? "status-pending" : "status-done";

    container.innerHTML += `
            <div class="card" style="background:white; display:flex; padding:25px; border-radius:20px; margin: 0 auto 25px auto; width:95%; max-width:850px; box-shadow:0 10px 20px rgba(0,0,0,0.1); color:#333;">
                <img src="${
                  u.photo || "https://via.placeholder.com/100"
                }" style="width:130px; height:130px; border-radius:15px; object-fit:cover; margin-right:25px; border:3px solid #f0f0f0;">
                <div style="flex:1;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div>
                            <h3 style="text-transform:capitalize; margin:0;">${
                              u.name
                            }</h3>
                            <p style="color:#666; font-size:14px; margin:2px 0;">${
                              u.email
                            }</p>
                        </div>
                        <span class="status-badge ${statusClass}" style="padding:5px 15px; border-radius:20px; font-size:12px; font-weight:bold;">${
      u.payment_status
    }</span>
                    </div>

                    <div style="margin:15px 0; font-size:14px; line-height:1.6;">
                        <p><strong>Membership:</strong> ${u.membership}</p>
                        <p><strong>Enrollment:</strong> ${u.enrollment} (${
      u.enroll_date
    })</p>
                        <p><strong>DOB:</strong> ${u.dob || "N/A"}</p>
                        <p><strong>License No:</strong> ${
                          u.license === "Yes"
                            ? u.license_no || "Provided"
                            : "N/A (No)"
                        }</p>
                    </div>

                    <div style="background:#f4f4f4; padding:12px; border-radius:10px; margin-bottom:15px; font-size:13px;">
                        <div style="font-weight:bold; color:#764ba2; margin-bottom:5px;">Total Remaining: ${
                          u.total_remaining
                        }</div>
                        <div>Inst 1 Rem: ${u.inst1_rem} | Inst 2 Rem: ${
      u.inst2_rem
    }</div>
                    </div>

                    <div style="display:flex; gap:10px;">
                        ${
                          isPending
                            ? `<button onclick="markAsDone('${u.email}')" style="background:#764ba2; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; font-weight:600;">Mark Payment Done</button>`
                            : ""
                        }
                        <button onclick="deleteRecord('${
                          u.email
                        }')" style="background:#ff4757; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer;">Delete</button>
                    </div>
                </div>
            </div>
        `;
  });
}

async function markAsDone(email) {
  if (confirm("Set all remaining balances to 00 and mark as COMPLETED?")) {
    const res = await fetch("/update_payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    if (res.ok) {
      loadHistory(); // Reloads to show updated status and "00" values
    }
  }
}

async function deleteRecord(email) {
  if (confirm("Permanently delete this customer?")) {
    const res = await fetch("/delete_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    if (res.ok) {
      loadHistory();
    }
  }
}
