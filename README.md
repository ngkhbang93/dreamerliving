# DreamerLiving demo

Website tĩnh, không cần cài đặt và tương thích GitHub Pages.

Website tự lưu trữ bộ chữ Google Sans Flex trong `assets/fonts`, không phụ thuộc Google Fonts hoặc CDN bên ngoài.

## Xem trên máy

Mở `index.html` trong trình duyệt, hoặc chạy một static server bất kỳ tại thư mục này.

## Đưa lên GitHub Pages

1. Tạo một repository mới trên GitHub.
2. Đưa toàn bộ nội dung thư mục này lên nhánh `main`.
3. Mở **Settings → Pages**.
4. Trong **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn nhánh `main`, thư mục `/ (root)`, rồi lưu.

## Thay ảnh cá nhân

Giữ nguyên tên file trong thư mục `assets` để không cần sửa mã:

- `daily-living.jpg`: ảnh chân dung hoặc ảnh đời sống của bạn, tỷ lệ dọc.
- `interior-editorial.jpg`: ảnh chủ đạo trang đầu, tỷ lệ ngang rộng.
- `architecture-home.jpg`: ảnh dự án kiến trúc hoặc bất động sản, tỷ lệ ngang.

Nên dùng ảnh JPG kích thước 1600–2400 px, dung lượng dưới 800 KB nếu có thể.

## Trước khi công bố chính thức

- Xóa `robots.txt` hoặc đổi thành `Allow: /`; bản demo hiện đang chặn công cụ tìm kiếm lập chỉ mục.
- Thay tên, tiểu sử, liên kết mạng xã hội và thông tin liên hệ.
- Kết nối form với API hoặc dịch vụ xử lý form an toàn.
- Thêm chính sách bảo mật và quản lý đồng ý cho analytics/quảng cáo.
- Cấu hình tên miền riêng, Google Search Console, sitemap và canonical URL.
- Thay toàn bộ nội dung mẫu bằng nội dung có nguồn và trải nghiệm thực tế.
