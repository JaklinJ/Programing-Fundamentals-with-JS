function extractFile(text) {

let textArr = text.split('\\');
let fileNameAndExtension = textArr.pop();
let fileArr = fileNameAndExtension.split('.');

let extesion = fileArr.pop();
let fileName = fileArr.slice(0);
 if (fileName.length > 1) {
    console.log(`File name: ${fileName.join(".")}`);
    console.log(`File extension: ${extesion}`);
 } else {
    console.log(`File name: ${fileName.join("")}`);
    console.log(`File extension: ${extesion}`);
 }

}
