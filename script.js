let pureResult = "";

function encrypt() {
  let key = parseInt(document.getElementById("key").value);
  let text = document.getElementById("text").value;
  if (isNaN(key) || text.trim() === "") {
    document.getElementById("result").innerText = "⚠️ Vui lòng nhập key và văn bản!";
    document.getElementById("details").innerHTML = "";
    pureResult = "";
    return;
  }
  let {output, table} = caesarCipher(text, key);
  pureResult = output;
  document.getElementById("result").innerText = "🔒 Mã hóa: " + output;
  document.getElementById("details").innerHTML = table;
}

function decrypt() {
  let key = parseInt(document.getElementById("key").value);
  let text = document.getElementById("text").value;
  if (isNaN(key) || text.trim() === "") {
    document.getElementById("result").innerText = "⚠️ Vui lòng nhập key và văn bản!";
    document.getElementById("details").innerHTML = "";
    pureResult = "";
    return;
  }
  let {output, table} = caesarCipher(text, -key);
  pureResult = output;
  document.getElementById("result").innerText = "🔓 Giải mã: " + output;
  document.getElementById("details").innerHTML = table;
}

function caesarCipher(text, key) {
  let result = "";
  let table = `<table>
    <tr>
      <th>Ký tự gốc</th>
      <th>ASCII gốc</th>
      <th>Ký tự mới</th>
      <th>ASCII mới</th>
    </tr>`;
  for (let i = 0; i < text.length; i++) {
    let c = text.charCodeAt(i);
    let original = text.charAt(i);
    let converted = original;
    let newCode = c;

    if (c >= 65 && c <= 90) {
      newCode = (c - 65 + key + 26) % 26 + 65;
      converted = String.fromCharCode(newCode);
    } else if (c >= 97 && c <= 122) {
      newCode = (c - 97 + key + 26) % 26 + 97;
      converted = String.fromCharCode(newCode);
    }

    result += converted;
    table += `<tr>
      <td>${original === " " ? "(space)" : original}</td>
      <td>${c}</td>
      <td>${converted === " " ? "(space)" : converted}</td>
      <td>${newCode}</td>
    </tr>`;
  }
  table += `</table>`;
  return {output: result, table: table};
}

function copyResult() {
  if (pureResult.trim() === "") {
    alert("⚠️ Chưa có kết quả để copy!");
    return;
  }
  navigator.clipboard.writeText(pureResult).then(() => {
    alert("✅ Đã copy: " + pureResult);
  });
}
