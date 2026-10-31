<div align="center">

# 🦷 HỆ SINH THÁI RHM 2027 — TRẠM CHỈ HUY VIP
**Nền tảng Ôn luyện Trắc nghiệm, Flashcard 3D & Thư viện Lý thuyết Chuyên ngành Răng Hàm Mặt**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3_Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Google Sheets CMS](https://img.shields.io/badge/Google_Sheets_CSV-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)](#)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI_Integrated-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)](#)

*Thiết kế & Phát triển độc quyền bởi **Đỗ Hồng Phúc***

[🚀 Truy cập Sảnh Chính](https://phucdo4092004-lang.github.io/rhm-2027-vip/) • [🐞 Báo lỗi](https://github.com/phucdo4092004-lang/rhm-2027-vip/issues)

</div>

---

## 🌟 Giới thiệu Dự án

**`rhm-2027-vip`** là một ứng dụng web tĩnh (Serverless Web Application) được thiết kế chuyên biệt nhằm tối ưu hóa tốc độ ôn tập kiến thức lâm sàng và lý thuyết Răng Hàm Mặt hướng tới kỳ thi Đánh giá năng lực hành nghề (CCHN). 

Thay vì sử dụng cơ sở dữ liệu truyền thống nặng nề, hệ thống biến **Google Sheets** thành một CMS thời gian thực: mọi cập nhật đề thi và tài liệu trên bảng tính đều tự động đồng bộ về giao diện người dùng mà không cần chỉnh sửa mã nguồn.

---

## 🧩 Kiến trúc 4 Phân hệ Cốt lõi

| Phân hệ | Tệp nguồn | Tính năng & Đồ họa nổi bật |
| :--- | :--- | :--- |
| **1. Trạm Chỉ Huy (Sảnh chính)** | `index.html` | • Giao diện **Bento Grid** kết hợp nền động **Mesh Gradient**.<br>• Bảng thống kê tự động số lượng Bộ đề, Tài liệu và tiến độ **Master 100%**.<br>• Tìm kiếm tức thì (hỗ trợ gõ tiếng Việt không dấu). |
| **2. Hạm Đội Trắc Nghiệm** | `Play.html` | • **Gamification:** Hiệu ứng nổ hạt mỗi mốc 5%, chuỗi **Combo Streak**, pháo hoa `canvas-confetti` khi đạt Thủ khoa (100%).<br>• **9 Chủ đề động (Themes)** tự động cân chỉnh độ tương phản Sáng/Tối.<br>• **Chế độ Chiến dịch:** Bản đồ câu hỏi, Bảng vàng lướt dọc, Phục thù câu sai, Đảo đề ngẫu nhiên.<br>• **Tích hợp AI:** Đóng gói tự động câu hỏi & đáp án sang **Google Gemini** chỉ với 1 cú nhấp. |
| **3. Thẻ Ghi Nhớ 3D** | `Flashcard.html` | • Hiệu ứng lật thẻ không gian 3 chiều (`perspective: 1200px`).<br>• Hỗ trợ trộn ngẫu nhiên bộ thẻ (`🔀 ĐẢO`) và thanh theo dõi tiến độ.<br>• Tích hợp khung giải thích chi tiết ngay mặt sau thẻ. |
| **4. Thư Viện Lý Thuyết** | `Read.html` | • Giữ nguyên 100% cấu trúc thụt lề, xuống dòng từ Google Sheets (`pre-wrap`).<br>• Chuyển đổi linh hoạt giữa font học thuật có chân (**Lora**) và không chân (**Plus Jakarta Sans**).<br>• Tích hợp giọng đọc AI (**Web Speech API**) kèm thanh trượt chỉnh tốc độ `0.5x – 2.0x` và thanh đo tiến trình đọc bài. |

---

## ⌨️ Hệ thống Phím tắt (Keyboard Shortcuts)

Để tối đa hóa tốc độ phản xạ khi cày đề trên máy tính (PC/Laptop), hệ thống hỗ trợ điều khiển hoàn toàn bằng bàn phím:

| Phân hệ | Phím bấm | Tác dụng |
| :--- | :---: | :--- |
| **Thi Trắc Nghiệm (`Play.html`)** | `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D` | Chọn nhanh đáp án tương ứng |
| **Thi Trắc Nghiệm (`Play.html`)** | `⬅` / `➡` (Mũi tên Trái / Phải) | Chuyển về câu trước / Qua câu tiếp theo |
| **Lật Thẻ (`Flashcard.html`)** | `Space` (Phím Cách) hoặc `Enter` | Lật mặt trước / mặt sau của thẻ 3D |
| **Lật Thẻ (`Flashcard.html`)** | `⬅` / `➡` (Mũi tên Trái / Phải) | Chuyển thẻ trước / Thẻ tiếp theo |

---

## 📊 Chuẩn Định dạng Dữ liệu (Google Sheets CSV)

Hệ thống đọc dữ liệu từ 2 đường dẫn Google Sheets xuất bản dưới định dạng `.csv` với 4 cột chuẩn:

| Cột A (`ID`) | Cột B (`Title`) | Cột C (`Description`) | Cột D (`Content`) |
| :--- | :--- | :--- | :--- |
| `de_nha_chu_01` | Đề Nha Chu Lâm Sàng #1 | 50 câu hỏi chẩn đoán & điều trị viêm nha chu | *(Nội dung câu hỏi hoặc bài đọc theo cú pháp bên dưới)* |

### 1. Cú pháp soạn Câu hỏi Trắc nghiệm & Flashcard (Cột D)
```text
Câu 1: Túi nha chu thật khác túi nha chu giả ở đặc điểm giải phẫu nào sau đây?
• Có sự phì đại của viền nướu về phía thân răng
* Có sự di chuyển của biểu mô bám dính về phía chóp chân răng
• Luôn kèm theo chảy máu tự phát khi thăm khám
• Độ sâu thăm dò luôn lớn hơn 5mm
Túi nha chu thật đặc trưng bởi sự mất bám dính lâm sàng (CAL) và di chuyển biểu mô kết nối về phía chóp.
```
* Bắt đầu câu hỏi bằng từ khóa `Câu X:`.
* Đáp án **ĐÚNG** bắt đầu bằng dấu sao `*`.
* Đáp án **SAI** bắt đầu bằng dấu chấm tròn `•`.
* Các dòng văn bản nằm bên dưới danh sách đáp án sẽ tự động được gom vào hộp **💡 Giải thích / Bổ sung**.

### 2. Bộ thẻ Shortcode Đồ họa (`parseSC`)
Có thể chèn trực tiếp các thẻ định dạng nhanh vào câu hỏi, đáp án hoặc bài lý thuyết:
* `[B]Từ khóa quan trọng[/B]` ➔ **In đậm văn bản**
* `[RED]Cảnh báo lâm sàng[/RED]` ➔ Tô màu đỏ nổi bật
* `[BLUE]Thuật ngữ giải phẫu[/BLUE]` ➔ Tô màu xanh lam
* `[IMG]https://link-anh.com/x-quang.jpg[/IMG]` ➔ Hiển thị hình ảnh X-quang / lâm sàng bo góc tự động
* `[BR]` ➔ Ngắt dòng chủ động

---

## 🛠️ Hướng dẫn Cài đặt & Triển khai

1. **Clone kho lưu trữ về máy:**
   ```bash
   git clone [https://github.com/phucdo4092004-lang/rhm-2027-vip.git](https://github.com/phucdo4092004-lang/rhm-2027-vip.git)
   ```
2. **Cấu hình nguồn dữ liệu:**
   Mở tệp `index.html`, tìm 2 hằng số `LINK_SHEET_QUIZ` và `LINK_SHEET_READ` để thay thế bằng đường dẫn CSV đã xuất bản từ Google Sheets của bạn (`Tệp -> Chia sẻ -> Xuất bản lên web -> Định dạng CSV`).
3. **Kích hoạt GitHub Pages:**
   Vào mục **Settings** ➔ **Pages** của repository, tại phần **Branch** chọn nhánh `main` (hoặc `chủ yếu`) ➔ bấm **Save** để chạy trực tuyến.

---

## 💖 Ủng hộ Tác giả (Donate)

Nếu hệ sinh thái này giúp ích cho quá trình học tập và ôn thi của bạn, hãy tiếp thêm năng lượng cho tác giả tại:

* **Chủ tài khoản:** ĐỖ HỒNG PHÚC
* **Ngân hàng:** BIDV
* **Số tài khoản:** `8812766209`

<div align="center">
  <sub>© 2026 — Phát triển với tất cả tâm huyết bởi <b>Đỗ Hồng Phúc</b>.</sub>
</div>
