import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "FIT Solar - Giải Pháp Điện Mặt Trời Trọn Gói | Tiết Kiệm Đến 80%",
  description: "FIT Solar cung cấp giải pháp điện mặt trời trọn gói, giúp cắt giảm đến 80% chi phí điện năng. Độ bền trên 25 năm, lắp đặt chuyên nghiệp, hỗ trợ 24/7. Tối ưu tiền điện - Bền bỉ cùng thời gian.",
  keywords: "điện mặt trời, năng lượng sạch, pin mặt trời, lắp đặt điện mặt trời, FIT Solar, tiết kiệm điện, năng lượng tái tạo",
  authors: [{ name: "FIT Solar" }],
  openGraph: {
    title: "FIT Solar - Giải Pháp Điện Mặt Trời Trọn Gói",
    description: "Cung cấp giải pháp điện mặt trời trọn gói, giúp cắt giảm đến 80% chi phí điện năng. Tối ưu tiền điện - Bền bỉ cùng thời gian.",
    type: "website",
    locale: "vi_VN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
