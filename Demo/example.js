function insertParagraph(text) {
  var str = "<p>";
  str += text;
  str += "</p>";
  document.write(str);
}

window.onload = function () {
  var para = document.createElement("p");
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);
  var txt = document.createTextNode("Hello World");
  para.appendChild(txt);

  var txt1 = document.createTextNode("This is");
  var txt2 = document.createTextNode(" my ");
  var txt3 = document.createTextNode("content.");
  var para1 = document.createElement("p");
  var para2 = document.createElement("em");
  para2.appendChild(txt2);
  para1.appendChild(txt1);
  para1.appendChild(para2);
  para1.appendChild(txt3);

  testdiv.appendChild(para1);
};
