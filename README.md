# Web tỏ tình - giao diện đã chọn 💌

Bộ code này mô phỏng đúng ý tưởng giao diện đã chốt:

## Màn hình 1
- Phong cảnh hoàng hôn màu hồng
- Hoa anh đào, đèn treo, cánh hoa rơi
- Ảnh cô gái dạng Polaroid hai bên
- Dòng chữ "Có một lá thư muốn gửi em"
- Phong thư "For You"
- Bấm vào phong thư để mở

## Màn hình 2
- Lá thư lớn ở giữa
- Ảnh cô gái hai bên
- Nội dung tỏ tình
- Hai nút trả lời
- Hiệu ứng cánh hoa/trái tim

## Thay ảnh
Cho ảnh vào thư mục `images` và đặt tên:

- photo1.jpg
- photo2.jpg
- photo3.jpg
- photo4.jpg
- photo5.jpg
- photo6.jpg

Bạn có thể dùng 6 ảnh khác nhau của cùng một người.

## Thêm nhạc
Đặt file nhạc MP3 cạnh `index.html` và đổi tên thành:

`music.mp3`

Nhạc sẽ bắt đầu sau khi người xem bấm mở thư.

## Sửa lời tỏ tình
Mở `index.html` rồi tìm phần:

```html
<div id="letterText" class="letter-text">
```

Sửa các đoạn `<p>...</p>` bên trong.

## Chạy
Chỉ cần mở `index.html`.

Nếu muốn chạy đẹp hơn trong VS Code:
1. Cài extension Live Server.
2. Chuột phải `index.html`.
3. Chọn `Open with Live Server`.

## Đưa lên mạng
Có thể dùng GitHub Pages, Netlify hoặc Vercel.
Sau khi có link, tạo QR từ link đó.
