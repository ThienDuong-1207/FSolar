import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên Hệ - Tư Vấn Miễn Phí | GreenSun Solar",
  description: "Liên hệ GreenSun Solar để nhận tư vấn miễn phí về giải pháp điện mặt trời. Hotline 24/7, đội ngũ chuyên gia sẵn sàng hỗ trợ.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Hotline",
      content: "1900-xxxx",
      subcontent: "Hỗ trợ 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@greensun.vn",
      subcontent: "support@greensun.vn",
    },
    {
      icon: MapPin,
      title: "Văn phòng chính",
      content: "123 Đường ABC, Quận XYZ",
      subcontent: "TP. Hồ Chí Minh",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 7: 8:00 - 18:00",
      subcontent: "Chủ nhật: 9:00 - 17:00",
    },
  ];

  const offices = [
    {
      city: "TP. Hồ Chí Minh",
      address: "123 Đường ABC, Quận XYZ",
      phone: "(028) 1234 5678",
      isMain: true,
    },
    {
      city: "Hà Nội",
      address: "456 Phố DEF, Quận GHI",
      phone: "(024) 1234 5678",
      isMain: false,
    },
    {
      city: "Đà Nẵng",
      address: "789 Đường JKL, Quận MNO",
      phone: "(0236) 1234 567",
      isMain: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl text-gray-600">
              Đội ngũ chuyên gia của GreenSun Solar sẵn sàng tư vấn miễn phí 
              và hỗ trợ bạn 24/7. Hãy để chúng tôi giúp bạn tìm giải pháp tốt nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-emerald-600 font-bold mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.subcontent}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Gửi Yêu Cầu Tư Vấn
                </h2>
                <p className="text-gray-600">
                  Điền thông tin vào form bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24h
                </p>
              </div>

              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <Input placeholder="Nguyễn Văn A" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <Input placeholder="0912 345 678" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="email@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loại dự án
                    </label>
                    <select className="w-full border rounded-lg px-4 py-2">
                      <option>Hộ gia đình</option>
                      <option>Thương mại & Công nghiệp</option>
                      <option>Quy mô lớn</option>
                      <option>Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nội dung *
                    </label>
                    <textarea
                      className="w-full border rounded-lg px-4 py-2 min-h-[120px]"
                      placeholder="Mô tả yêu cầu của bạn..."
                      required
                    ></textarea>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                    <Send size={20} className="mr-2" />
                    Gửi yêu cầu
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map & Offices */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Văn Phòng & Showroom
                </h2>
                <p className="text-gray-600">
                  Ghé thăm showroom để trải nghiệm trực tiếp các sản phẩm
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="p-4 mb-6">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Google Maps</p>
                  </div>
                </div>
              </Card>

              {/* Office List */}
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-900">{office.city}</h3>
                          {office.isMain && (
                            <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-semibold">
                              Văn phòng chính
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-1">{office.address}</p>
                        <p className="text-emerald-600 font-semibold">{office.phone}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-lg text-gray-600">
              Tìm câu trả lời nhanh cho các câu hỏi phổ biến
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Chi phí lắp đặt điện mặt trời là bao nhiêu?",
              "Thời gian hoàn vốn dự kiến?",
              "Quy trình lắp đặt như thế nào?",
              "Chính sách bảo hành ra sao?",
              "Có cần bảo trì định kỳ không?",
              "Hỗ trợ tài chính như thế nào?",
            ].map((question, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 group-hover:text-emerald-600 transition-colors">
                    {question}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Cần Hỗ Trợ Ngay?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Gọi hotline hoặc chat trực tuyến với đội ngũ chuyên gia của chúng tôi
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Phone size={20} className="mr-2" />
              Gọi ngay: 1900-xxxx
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageSquare size={20} className="mr-2" />
              Chat trực tuyến
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
