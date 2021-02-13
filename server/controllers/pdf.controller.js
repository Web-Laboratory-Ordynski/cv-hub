const cvModel = require('../models/cv.model')
const PDFDocument = require('pdfkit');
const fs = require('fs');
// const f = require('../public/output.pdf')


exports.generatePdf = (req, res) => {

    const doc = new PDFDocument()

    const cv = new cvModel({
        ...req.body
    })

    doc.pipe(fs.createWriteStream('public/output.pdf'));

    doc
    // .font('fonts/PalatinoBold.ttf')
    .fontSize(25)
    .text(cv.userInfo.name + ' ' + cv.userInfo.surname, 200, 100)
    .fontSize(20)
    .text(cv.position, 200, 130)
    .fontSize(15)
    .text('Experience', 210, 180)
    cv.experience.map((exp, i) => {
        // console.log(exp)
    doc
        .fontSize(20)
        .text(`Company name -- ${exp.name}\n`, 210, (i * 20) + 200)
        .text(`Position -- ${exp.position}\n`, 210, (i * 20) + 300)
    })



    res.download(__dirname + '/output.pdf')
}