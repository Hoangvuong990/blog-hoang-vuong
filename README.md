# Blog Hoàng Vương - Lập trình mạng

Blog cá nhân chia sẻ kiến thức về lập trình Java và JavaScript, được xây dựng với Next.js và Tailwind CSS.

## 🚀 Demo

Truy cập: [https://hoangvuong.vercel.app](https://hoangvuong.vercel.app)

## ✨ Tính năng

- 📱 **Responsive Design**: Giao diện tối ưu cho mọi thiết bị
- 🎨 **Modern UI**: Thiết kế đẹp mắt với Tailwind CSS
- 📝 **Blog System**: Hệ thống blog với Markdown
- 🔍 **SEO Optimized**: Tối ưu hóa cho công cụ tìm kiếm
- ⚡ **Fast Loading**: Tốc độ tải nhanh với Next.js
- 🌙 **Dark Mode Ready**: Sẵn sàng cho chế độ tối

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown
- **Deployment**: Vercel
- **Version Control**: GitHub

## 📁 Cấu trúc dự án

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── content/              # Blog content
│   └── posts/            # Markdown posts
├── lib/                  # Utilities
│   └── posts.ts          # Post processing
└── public/               # Static assets
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js 18+ 
- npm hoặc yarn

### Cài đặt

1. Clone repository:
```bash
git clone https://github.com/Zitests/blog-hoang-vuong.git
cd blog-hoang-vuong
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt

### Build cho production

```bash
npm run build
npm start
```

## 📝 Thêm bài viết mới

1. Tạo file Markdown trong `content/posts/`
2. Thêm frontmatter với metadata:

```markdown
---
title: "Tiêu đề bài viết"
date: "2024-01-01"
excerpt: "Mô tả ngắn về bài viết"
category: "Java" # hoặc "JavaScript"
tags: ["tag1", "tag2"]
author: "Đinh Hoàng Vương"
---

# Nội dung bài viết
```

## 🎨 Tùy chỉnh giao diện

### Màu sắc

Chỉnh sửa trong `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... thêm các màu khác
      }
    }
  }
}
```

### Font chữ

Thay đổi font trong `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

## 🚀 Triển khai

### Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động

### Netlify

1. Build project: `npm run build`
2. Upload thư mục `.next` lên Netlify
3. Cấu hình redirects cho SPA

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

**Đinh Hoàng Vương**
- Email: dinhhoangvuong2k4@gmail.com
- GitHub: [@Zitests](https://github.com/Zitests)
- Phone: 0968474342

## 🙏 Lời cảm ơn

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [GitHub](https://github.com/) - Version control

---

⭐ Nếu bạn thích dự án này, hãy cho một star trên GitHub!
