var fs = require("fs")
var path = require('path')
var QRCode = require('qrcode');
var pdf = require("pdf-creator-node")

exports.generateQrcodesPdf = async function () {
  console.log('oi')
  const qrcodesData = [
    {
      id: "batata doce",
      qrcodeDataUrl: await QRCode.toDataURL("batata doce")
    },
    {
      id: "batatinha da boaaa",
      qrcodeDataUrl: await QRCode.toDataURL("batatinha da boaaa")
    },
    {
      id: "jota quest",
      qrcodeDataUrl: await QRCode.toDataURL("jota quest")
    },
  ];

  console.log(qrcodesData)
  console.log(__dirname)
  var html = fs.readFileSync(path.resolve(__dirname, "..", "templates", "deactivatedQRCodesTemplate.html"), "utf8");

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
        first: 'Cover page',
        2: 'Second page', // Any page number is working. 1-based index
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: 'Last Page'
      }
    }
  };

  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  return html
}