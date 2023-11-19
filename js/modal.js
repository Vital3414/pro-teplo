// //Бірюкова
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// // Леся
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-open-modal]"),
//     closeModalBtn: document.querySelector("[data-close-modal]"),
//     modal: document.querySelector("[modal-data]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// //Новини
// () => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-open-modalka]"),
//     closeModalBtn: document.querySelector("[data-close-modalka]"),
//     modal: document.querySelector("[modalka-data]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// };

function openPdfInNewWindow() {
  const pdfUrl = "../file/License.pdf";

  window.open(pdfUrl, "_blank");
}

const openPdfButton = document.getElementById("openPdfButton");
openPdfButton.addEventListener("click", openPdfInNewWindow);

function openPdfInWindow() {
  const pdfUrl = "../file/Performer.pdf";

  window.open(pdfUrl, "_blank");
}

const openPdf = document.getElementById("openPdf");
openPdf.addEventListener("click", openPdfInWindow);

function openPdfWindow() {
  const pdfUrl = "../file/Tarif.pdf";

  window.open(pdfUrl, "_blank");
}

const openPdfBtn = document.getElementById("openPdfBtn");
openPdfBtn.addEventListener("click", openPdfWindow);
