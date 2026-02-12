import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Building2, TrendingDown, BarChart3, Clock, Shield, CheckCircle, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Giải Pháp Điện Mặt Trời Thương Mại & Công Nghiệp | GreenSun Solar",
  description: "Hệ thống điện mặt trời quy mô lớn cho doanh nghiệp - Giảm 40-70% chi phí điện năng, tăng lợi nhuận và hình ảnh thương hiệu xanh.",
};

export default function CommercialPage() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Giảm 40-70% Chi Phí",
      description: "Tiết kiệm hàng trăm triệu đồng tiền điện mỗi năm",
    },
    {
      icon: BarChart3,
      title: "ROI 3-5 Năm",
      description: "Hoàn vốn nhanh chóng, lợi nhuận dài hạn",
    },
    {
      icon: Shield,
      title: "Ổn Định Sản Xuất",
      description: "Nguồn điện ổn định, không lo cắt điện giờ cao điểm",
    },
    {
      icon: Factory,
      title: "Nâng Cao Thương Hiệu",
      description: "Thể hiện trách nhiệm môi trường xã hội",
    },
  ];

  const sectors = [
    {
      title: "Nhà Máy Sản Xuất",
      description: "Hệ thống 50kW - 500kW+",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
      features: ["Vận hành 24/7", "Giám sát thời gian thực", "Tích hợp hệ thống hiện tại"],
    },
    {
      title: "Trung Tâm Thương Mại",
      description: "Hệ thống 100kW - 1MW",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      features: ["Tiết kiệm điện làm mát", "Mái che bãi đỗ xe", "Tăng điểm ESG"],
    },
    {
      title: "Khách Sạn & Resort",
      description: "Hệ thống 30kW - 200kW",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      features: ["Giảm chi phí vận hành", "Marketing xanh", "Trải nghiệm bền vững"],
    },
    {
      title: "Văn Phòng & Tòa Nhà",
      description: "Hệ thống 20kW - 100kW",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      features: ["Tiết kiệm điện văn phòng", "Chứng chỉ xanh", "Giá trị tài sản tăng"],
    },
  ];

  const caseStudies = [
    {
      company: "Nhà Máy Dệt May ABC",
      location: "Bình Dương",
      capacity: "500 kW",
      saving: "65%",
      payback: "4.2 năm",
      description: "Tiết kiệm 450 triệu đồng/năm tiền điện",
    },
    {
      company: "Khách Sạn XYZ Resort",
      location: "Đà Nẵng",
      capacity: "150 kW",
      saving: "55%",
      payback: "3.8 năm",
      description: "Giảm 180 triệu đồng/năm chi phí vận hành",
    },
    {
      company: "Tòa Nhà Văn Phòng DEF",
      location: "TP. HCM",
      capacity: "80 kW",
      saving: "48%",
      payback: "4.5 năm",
      description: "Tiết kiệm 95 triệu đồng/năm và đạt chứng nhận LEED Gold",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Building2 size={20} />
                <span className="font-semibold">Giải pháp Thương Mại & Công Nghiệp</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tối Ưu Chi Phí<br />Năng Lượng Cho Doanh Nghiệp
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Giải pháp điện mặt trời quy mô lớn, giúp doanh nghiệp tiết kiệm 
                hàng trăm triệu đồng chi phí điện, tăng lợi nhuận và trách nhiệm xã hội.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Tư vấn dự án
                </Button>
                <Button size="lg" variant="outline">
                  Tải case study
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074"
                alt="Hệ thống điện mặt trời công nghiệp"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lợi Ích Cho Doanh Nghiệp
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Các Ngành Đã Triển Khai
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {sector.description}
                  </p>
                  <ul className="space-y-2">
                    {sector.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dự Án Tiêu Biểu
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.company}
                </h3>
                <p className="text-gray-600 mb-4">{study.location}</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{study.capacity}</div>
                    <div className="text-xs text-gray-600">Công suất</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">{study.saving}</div>
                    <div className="text-xs text-gray-600">Tiết kiệm</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{study.payback}</div>
                    <div className="text-xs text-gray-600">Hoàn vốn</div>
                  </div>
                </div>
                <p className="text-gray-700 font-semibold">{study.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Tối Ưu Chi Phí Ngay Hôm Nay
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Liên hệ để nhận tư vấn miễn phí và phân tích lợi ích chi tiết cho doanh nghiệp
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Đặt lịch tư vấn
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
