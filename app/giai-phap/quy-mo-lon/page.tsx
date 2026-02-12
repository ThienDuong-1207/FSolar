import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Zap, Shield, BarChart3, Users, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Giải Pháp Điện Mặt Trời Quy Mô Lớn | GreenSun Solar",
  description: "Nhà máy điện mặt trời quy mô MW - Giải pháp năng lượng tái tạo cho các dự án lớn, nông trại điện mặt trời và đầu tư năng lượng.",
};

export default function LargeScalePage() {
  const capabilities = [
    {
      icon: Zap,
      title: "1MW - 100MW+",
      description: "Thiết kế & thi công dự án quy mô megawatt",
    },
    {
      icon: Shield,
      title: "EPC Trọn Gói",
      description: "Engineering, Procurement, Construction đầy đủ",
    },
    {
      icon: BarChart3,
      title: "O&M Dài Hạn",
      description: "Vận hành & bảo trì chuyên nghiệp 25 năm",
    },
    {
      icon: Users,
      title: "Đối Tác Tài Chính",
      description: "Hỗ trợ gói tài chính và đầu tư",
    },
  ];

  const projects = [
    {
      name: "Nhà Máy Điện Mặt Trời Ninh Thuận",
      capacity: "50 MW",
      area: "100 hecta",
      output: "75 GWh/năm",
      status: "Đang vận hành",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
    },
    {
      name: "Dự Án Floating Solar Bình Phước",
      capacity: "30 MW",
      area: "60 hecta",
      output: "45 GWh/năm",
      status: "Đang thi công",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
    },
    {
      name: "Nông Trại Năng Lượng Long An",
      capacity: "20 MW",
      area: "40 hecta",
      output: "30 GWh/năm",
      status: "Hoàn thành",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Zap size={20} />
              <span className="font-semibold">Giải pháp Quy Mô Lớn</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nhà Máy Điện Mặt Trời<br />Quy Mô MW
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thiết kế, thi công và vận hành các dự án điện mặt trời quy mô lớn 
              từ 1MW đến 100MW+. Đối tác tin cậy cho các nhà đầu tư năng lượng tái tạo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Tư vấn dự án
              </Button>
              <Button size="lg" variant="outline">
                Tải Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Năng Lực Triển Khai
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600">{cap.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dự Án Đã Triển Khai
            </h2>
            <p className="text-lg text-gray-600">
              Hơn 150MW công suất lắp đặt trên toàn quốc
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {project.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{project.capacity}</div>
                      <div className="text-sm text-gray-600">Công suất</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{project.area}</div>
                      <div className="text-sm text-gray-600">Diện tích</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-2xl font-bold text-emerald-600">{project.output}</div>
                      <div className="text-sm text-gray-600">Sản lượng hàng năm</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Dịch Vụ EPC Trọn Gói
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Từ khảo sát, thiết kế, thi công đến vận hành và bảo trì dài hạn. 
                GreenSun Solar là đối tác một cửa cho các dự án năng lượng lớn.
              </p>
              <ul className="space-y-4">
                {[
                  "Khảo sát địa hình & đánh giá tiềm năng",
                  "Thiết kế kỹ thuật chi tiết & mô phỏng",
                  "Quản lý dự án & thi công chuyên nghiệp",
                  "Đấu nối lưới & hòa lưới điện",
                  "Vận hành & giám sát 24/7",
                  "Bảo trì định kỳ & khắc phục sự cố",
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072"
                alt="EPC Services"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bạn Có Dự Án Quy Mô Lớn?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn chi tiết về thiết kế, tài chính và triển khai dự án
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Liên hệ chuyên gia
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
