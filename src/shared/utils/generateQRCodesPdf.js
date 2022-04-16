var fs = require("fs")
var path = require('path')
var pdf = require("pdf-creator-node")

exports.generateQrcodesPdf = async function (qrcodesData) {
  var html = fs.readFileSync(path.resolve(__dirname, "..", "..","infra","templates", "deactivatedQRCodesTemplate.html"), "utf8");

  var document = {
    html: html,
    data: {
      qrcodesData
    },
    path: path.resolve(__dirname, "..", "temp", "output.pdf"),
    type: "",
  };


  var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "25mm",
      contents: ''
    },
    footer: {
      height: "20mm",
      contents: {
        first: '1',
        2: '2',
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
        last: 'Last Page'
      }
    }
  };

  const generatedPdf = await pdf.create(document, options)

  return generatedPdf
}
