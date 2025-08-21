#include <bits/stdc++.h>
using namespace std;

string encrypt(const string &text, int key) {
    string result = "";
    for (char c : text) {
        if (isupper(c)) {
            char ch = (c - 'A' + key) % 26 + 'A';
            result += ch;
        } else if (islower(c)) {
            char ch = (c - 'a' + key) % 26 + 'a';
            result += ch;
        } else {
            result += c;
        }
    }
    return result;
}

int main() {
    int key;
    string text;

    cout << "🔑 Nhập key (số dịch chuyển): ";
    cin >> key;
    cin.ignore(); // bỏ ký tự xuống dòng còn lại

    cout << "✏️ Nhập chuỗi ký tự cần mã hóa: ";
    getline(cin, text);

    string encrypted = encrypt(text, key);

    cout << "\n====== KẾT QUẢ ======\n";
    cout << "🔑 Key: " << key << endl;
    cout << "📜 Chuỗi gốc: " << text << endl;
    cout << "🔒 Chuỗi đã mã hóa: " << encrypted << endl;

    return 0;
}
