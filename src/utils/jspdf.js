import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export const generatePdf = async (cvCtx) => {

  // Verifica se o ref existe e se já foi atribuído
  const element = cvCtx?.printRef?.current

  // Cria o canvas a partir do elemento
  const canvas = await html2canvas(element, {scale: 2})
  const imgData = canvas.toDataURL("image/png")

  // Cria o PDF com tamanho baseado no canvas
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height]
  })

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
  pdf.save("download.pdf")
}
