// =========================================
// CẤU HÌNH WEB TỎ TÌNH
// Chỉ cần sửa file này để đổi lời và ảnh.
// Ảnh nên đặt trong thư mục images/
// =========================================

const CONFIG = {
  // Màn hình đầu
  welcomeTitle: "Có một<br>lá thư<br>muốn gửi Thỏ",
  welcomeHint: "Nhấn vào lá thư để xem nhé...",
  envelopeLabel: "For You ♡",
  tapHint: "☝ Nhấn vào đây ♥",

  // Lá thư
  letterHeading: "Gửi Thỏ ♥",

  letterLines: [
    "Từ gặp em, thế giới của anh như sáng bừng lên những điều thật đẹp.",
    "Em là người khiến những ngày bình thường cũng trở nên đặc biệt.",
    "Anh thật may mắn khi có em trong cuộc đời này.",
    "Anh không hứa sẽ luôn hoàn hảo, nhưng anh hứa sẽ luôn ở đây, bên em, yêu em bằng tất cả chân thành và cố gắng mỗi ngày.",
    "Anh sẽ thay đổi bản thân để trở thành người xứng đáng với em."
  ],

  question: "Em đồng ý quay lại với anh nhá? ♥",

  // Nút trả lời
  yesButton: "♥ Em đồng ý",
  laterButton: "× Để em suy nghĩ thêm",

  // 6 ảnh và lời chú thích
  photos: [
    { src: "images/photo1.jpg", caption: "Dễ thương quá... ♥" },
    { src: "images/photo2.jpg", caption: "Xinh thật đấy... ♥" },
    { src: "images/photo3.jpg", caption: "Lúc nào cũng xinh... ♥" },
    { src: "images/photo4.jpg", caption: "Yêu em nhiều lắm... ♥" },
    { src: "images/photo5.jpg", caption: "Lúc nào cũng xinh... ♥" },
    { src: "images/photo6.jpg", caption: "Mãi xinh đẹp nhé... ♥" }
  ],

  // Nhạc nền
  music: "music.mp3",

  // Nội dung khi bấm nút
  yesResult: {
    emoji: "💖",
    title: "Anh vui lắm!",
    message: "Cảm ơn em vì đã cho anh thêm một cơ hội. Anh sẽ trân trọng em và yêu em hơn bao giờ hết."
  },

  laterResult: {
    emoji: "🌷",
    title: "Không sao đâu",
    message: "Em cứ suy nghĩ theo cách em thấy thoải mái nhé. Anh tôn trọng cảm xúc và câu trả lời của em."
  },

  // Tốc độ hiện từng dòng, đơn vị mili giây
  delayPerLine: 1100
};
