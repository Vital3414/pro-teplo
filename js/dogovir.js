//Бірюкова
function downloadFile() {
  const downloadLink = document.createElement("a");
  downloadLink.href = "../file/Birukova.pdf";
  downloadLink.download = "Бірюкова.pdf";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

//Леся
function fileDownload() {
  const downloadLink = document.createElement("a");
  downloadLink.href = "../file/Ukrainki.pdf";
  downloadLink.download = "Лесі Українки.pdf";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function openPdfInNewWindow() {
  const pdfUrl = "../file/Birukova.pdf";

  window.open(pdfUrl, "_blank");
}

const openPdfButton = document.getElementById("openPdfButton");
openPdfButton.addEventListener("click", openPdfInNewWindow);

function openPdfInWindow() {
  const pdfUrl = "../file/Ukrainki.pdf";

  window.open(pdfUrl, "_blank");
}

const openPdf = document.getElementById("openPdf");
openPdf.addEventListener("click", openPdfInWindow);
