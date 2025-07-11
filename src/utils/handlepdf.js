import { jsPDF } from "jspdf"

export const generatePdf = (e, cvCtx) => {
    e.preventDefault()

    const secTitle = "#0077b6"
    const darkGray = "#636363"
    const lightGray = "#969696"
    const doc = new jsPDF()

    doc.setFontSize(12) //font-size


    //Header titles
    doc.setFont("Arial", "bold"); //font-weight and font-family for the following info
    doc.setTextColor(darkGray) //color dark gray
    doc.text("Email: ", 60, 18) //email title
    doc.text("Telefone: ", 60, 26) //phone title
    doc.text("LinkedIn: ", 60, 34) //linkedIn title
    doc.text("Portfolio: ", 60, 42) //linkedIn title
    doc.text("Endereço: ", 60, 50) //linkedIn title

    //header info
    doc.setFont("Arial", "bold"); //font-weight and font-family for the following info
    doc.setFontSize(15) //font-size
    doc.setTextColor(secTitle) //text color for 'about you' text
    doc.text(cvCtx?.formData.fullName, 60, 10) //fullname and nationality

    doc.setFontSize(12) //font-size
    doc.setFont("Arial", "normal"); //font-weight and font-family for the following info
    doc.setTextColor(lightGray) //text color for 'about you' text
    doc.text(cvCtx?.formData.nationality, 150, 10)
    doc.text(cvCtx?.formData.email, 80, 18) //email
    doc.text(cvCtx?.formData.phone, 80, 26) //phone
    doc.text(cvCtx?.formData.linkedIn, 80, 34) //linkedin
    doc.text(cvCtx?.formData.portfolio, 80, 42) //portfolio
    doc.text(`${cvCtx?.formData.address}, ${cvCtx?.city}`, 80, 50) //address
    doc.addImage(cvCtx?.cvPicture, 10, 5, 40, 50) //picture

    doc.setFont("Arial", "bold"); //font-weight and font-family for the following info
    doc.setTextColor(secTitle) //color dark gray
    doc.text("Resumo sobre você", 10, 65) //about you title

    doc.setTextColor(darkGray) //color dark gray
    doc.setDrawColor(lightGray) //color light gray
    doc.line(10, 68, 200, 68) //make a line below the 'about you' title
    doc.setTextColor(lightGray) //text color for 'about you' text
    doc.setFont("Arial", "normal");//font-weight and font-family for the following info
    doc.text(doc.splitTextToSize(cvCtx?.formData.aboutYou, 180), 10, 75)//about you text

    //Education titles
    doc.setFont("Arial", "bold"); //font-weight and font-family for the following info
    doc.setTextColor(secTitle) //color dark gray
    doc.text("Educação", 10, 100) //about you title

    doc.setTextColor(darkGray) //color dark gray
    doc.text("Curso: ", 10, 110)
    doc.text("Instituição: ", 10, 115)
    doc.text("Local: ", 10, 120)
    doc.text("Website: ", 111, 115)
    doc.text("Data de início: ", 72, 120)
    doc.text("Data de conclusão: ", 135, 120)

    //Education info
    doc.setFont("Arial", "normal"); //font-weight and font-family for the following info    
    doc.setTextColor(lightGray) //color light gray
    doc.line(10, 103, 200, 103) //make a line below the 'about you' title
    doc.text(cvCtx?.formData.eduCourse, 25, 110)
    doc.text(cvCtx?.formData.eduInstution, 33, 115)
    doc.text(cvCtx?.formData.eduCity, 25, 120)
    doc.text(cvCtx?.formData.eduWebSite, 130, 115)
    doc.text(cvCtx?.formData.eduStartDate, 100, 120)
    doc.text(cvCtx?.formData.eduFinishDate, 170, 120)


    //Job Experience titles
    doc.setFont("Arial", "bold"); //font-weight and font-family for the following info
    doc.setTextColor(secTitle) //color dark gray
    doc.text("Experiencia Profissional", 10, 130) //about you title

    doc.setTextColor(darkGray) //color dark gray
    doc.text("Empresa: ", 10, 138)
    doc.text("Cargo: ", 10, 143)
    doc.text("Principais atividades exercidas: ", 10, 150)
    doc.text("Cidade: ", 10, 180)
    doc.text("Data de início: ", 72, 180)
    doc.text("Data de conclusão: ", 135, 180)

    //Job Experience info
       
    doc.setTextColor(lightGray) //color light gray
    doc.line(10, 133, 200, 133) //make a line below the 'about you' title
    doc.text(cvCtx?.formData.jobCompany, 30, 138)
    doc.text(cvCtx?.formData.jobRole, 30, 143)
    doc.text(doc.splitTextToSize(cvCtx?.formData.jobDesc, 180), 10, 154)
    doc.text(cvCtx?.formData.jobCity, 30, 180)
    doc.text(cvCtx?.formData.jobStartDate, 100, 180)
    doc.text(cvCtx?.formData.jobFinishDate, 168, 180)


    //Skills info
    doc.setFont("Arial", "bold"); //font-weight and font-family for the following info
    doc.setTextColor(secTitle) //color dark gray
    doc.text("Habilidades", 10, 190)

    doc.setTextColor(lightGray) //color light gray
    doc.line(10, 193, 200, 193) //make a line below the 'about you' title
    doc.setFontSize(12) //font-size
    doc.text(cvCtx?.formData.skills.split(",").join(" | ").toUpperCase(), 10, 200)

    //Additional info
    doc.setFont("Arial", "bold"); //font-weight and font-family for the following info
    doc.setTextColor(secTitle) //color dark gray
    doc.text("Informação Adicional", 10, 215)

    doc.setTextColor(lightGray) //color light gray
    doc.line(10, 218, 200, 218) //make a line below the 'about you' title
    doc.setFontSize(12) //font-size
    doc.text(cvCtx?.formData.additionalInfo.split(";").map(e => e.trim()), 10, 223)


    doc.save("primeiro.pdf") //download pdf file
}
