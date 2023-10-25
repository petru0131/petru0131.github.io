'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * popup
 * 
 */

// Get references to the pop-up container and close button
document.addEventListener('DOMContentLoaded', function() {
  // Verifică dacă un pop-up este deja deschis
  let isPopupOpen = false;
  // Elementul pop-up curent
  let currentPopup = null;

  // Function to deschide un pop-up specific
  function openPopup(popup) {
      if (!isPopupOpen) {
          popup.style.display = 'block';
          isPopupOpen = true;
          currentPopup = popup;
      }
  }

  // Function to închide pop-up-ul curent
  function closePopup() {
      if (isPopupOpen && currentPopup) {
          currentPopup.style.display = 'none';
          isPopupOpen = false;
          currentPopup = null;
      }
  }

  // Adaugă evenimente de clic pentru butoanele "Vezi Detalii"
  const detailButtons = document.querySelectorAll('.btn-link');
  detailButtons.forEach(button => {
      button.addEventListener('click', () => {
          const targetPopupId = button.getAttribute('data-popup');
          const targetPopup = document.getElementById(targetPopupId);

          if (targetPopup) {
              openPopup(targetPopup);
          }
      });
  });

// Alegeți toate butoanele "Închide" din popup-uri
  const closeButtons = document.querySelectorAll('.close-popup');
  closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', closePopup);
  });

  // Funcția pentru adăugarea unui rând în tabelul pop-up-ului
  function addRow(column1Data, column2Data,column3Data) {
      const table = document.getElementById('popup-table');
      const newRow = table.insertRow(-1); // -1 inserează un rând la sfârșitul tabelului

      // Creați două celule (coloane) pentru rând
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      // Setați conținutul pentru noul rând
      cell1.textContent = column1Data; // Utilizați textContent din motive de securitate
      cell2.textContent = column2Data; // Utilizați textContent din motive de securitate
      cell3.textContent = column3Data; // Utilizați textContent din motive de securitate
  }
  // // Funcția pentru a adăuga numele coloanelor


  // // Funcția pentru a șterge toate rândurile din tabel
  // function clearTable() {
  //     const table = document.getElementById('popup-table');
  //     // Eliminați toate rândurile din tabel
  //     while (table.rows.length > 0) {
  //         table.deleteRow(0);
  //     }
  // }
  

// Example usage:
 
  
  addRow("Galați","06:00","Micro 18-Dunărea Mall")
  addRow("Brăila","06:30","Stația Plantelor")
  addRow("Tecuci","07:30","Peco OMV-Liceul Agricol")
  addRow("Focșani","08:00","Peco Petrom-Vizavi de Dedeman")
  addRow("Adjud","09:00","Peco OMV")
  addRow("Onești","09:30","Peco Petrom")
  addRow("Tg.Secuiesc","11:00","Peco MOL")
  addRow("Brașov","12:00","Str.Hărmanului Nr.47B")
  addRow("Făgăraș","13:00","Peco OMV")
  addRow("Sibiu","15:30","Peco MOL-Lângă Hornbach")
  addRow("Sebeș","16:00","Peco Rompetrol-Iviniș")
  addRow("Deva","17:00","Peco Petrom")
  addRow("Lugoj","18:30","Peco Petrom-Ieșire Autostradă A6")
  addRow("Timișoara","19:30","Peco OMV")
  addRow("Arad","20:30","Gara CFR")




});