const { version } = require("../package.json");
const AdmZip = require("adm-zip");

const zip = new AdmZip();
zip.addLocalFolder("./.next", ".next");
zip.addLocalFile("./next.config.js");
zip.addLocalFolder("./config", "config");
zip.addLocalFolder("./public", "public");
zip.addLocalFile("./package.json");
zip.addLocalFile("./package-lock.json");
zip.addLocalFile("./server.js");
zip.writeZip(`./release/${version}.zip`);
