function downloadFile() {
  const downloadLink = document.createElement("a");
  downloadLink.href = "./шлях_до_файлу/mydocument.pdf";
  downloadLink.download = "Договір.pdf";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
