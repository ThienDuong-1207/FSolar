import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="support" className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">FIT Solar</h3>
            <p className="text-gray-400 mb-6 italic">
              &quot;Tối ưu tiền điện - Bền bỉ cùng thời gian&quot;
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm">Hotline: 1900-xxxx</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm">info@fitsolar.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="hover:text-emerald-500 transition-colors">
                  Giải pháp
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-500 transition-colors">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-500 transition-colors">
                  Dự án
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-500 transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-500 transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Dịch Vụ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Tư vấn thiết kế
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Lắp đặt hệ thống
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Bảo trì & Sửa chữa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Giám sát từ xa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Hỗ trợ kỹ thuật 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Nhận Tư Vấn Miễn Phí
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Đăng ký để nhận báo giá và tư vấn từ chuyên gia
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Đăng ký ngay
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 FIT Solar. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
