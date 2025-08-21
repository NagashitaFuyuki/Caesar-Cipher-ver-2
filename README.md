# 🔐 Caesar Cipher

Đây là ví dụ về hệ mã Caesar Cipher.

---

## 📖 Cách hoạt động
Mã Caesar là dạng mã hóa dịch chuyển đơn giản:
- Mã hóa: **C = (P + k) mod 26**
- Giải mã: **P = (C - k + 26) mod 26**

Trong đó:
- `P` là ký tự gốc (Plaintext).
- `C` là ký tự sau khi mã hóa (Ciphertext).
- `k` là khóa (số bước dịch chuyển).

---

## 🧩 Ví dụ
Với khóa `k = 3`:

- Bản gốc: **HELLO**  
- Mã hóa: **KHOOR**

Giải thích:  
- H → K  
- E → H  
- L → O  
- L → O  
- O → R  

---

## 💻 Source code (C++)

```cpp
#include <bits/stdc++.h>
using namespace std;

string encrypt(const string &text, int key) {
    string result = "";
    for (char c : text) {
        if (isupper(c)) 
            result += (c - 'A' + key) % 26 + 'A';
        else if (islower(c)) 
            result += (c - 'a' + key) % 26 + 'a';
        else 
            result += c;
    }
    return result;
}

int main() {
    int key;
    string text;

    cout << "Nhap key: ";
    cin >> key;
    cin.ignore();

    cout << "Nhap chuoi: ";
    getline(cin, text);

    cout << "Chuoi ma hoa: " << encrypt(text, key) << endl;

    return 0;
}
