const fs = require("fs");

module.exports = function (file, data) {
  fs.writeFile(file, data, { encoding: "utf8" }, (err) => {
    if (err) {
      console.log("写入日志失败：" + err);
    }
  });
};
