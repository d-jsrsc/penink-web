const { version } = require("../package.json");
const AdmZip = require("adm-zip");

const zip = new AdmZip();
zip.addLocalFolder("./.next", ".next");
zip.addLocalFolder("./config", "config");
zip.addLocalFile("./package.json");
zip.addLocalFile("./package-lock.json");
zip.addLocalFile("./server.js");
zip.writeZip(`./release/${version}.zip`);
