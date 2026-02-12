"use client";

import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Home, Zap, TrendingDown, Clock, Shield, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ResidentialPage() {
  const [mounted, setMounted] = useState(false);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [surveyData, setSurveyData] = useState({
    monthlyKwh: "",
    monthlyBill: "",
    usageTime: "",
    numberOfPeople: "",
    roofArea: "",
    electricityNeeds: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSurveyChange = (field: string, value: string) => {
    setSurveyData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSurveyCompleted(true);
    setShowSurvey(false);
    // Scroll to packages section
    setTimeout(() => {
      document.getElementById("packages-section")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const productSlides = [
    [
      {
        name: "Bộ tối ưu công suất thông minh",
        description: "Giải phóng tiềm năng mỗi mô-dun PV, an toàn & thông minh hơn",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400",
      },
      {
        name: "Bộ Biến tần chuỗi thông minh",
        description: "Trái tim năng lượng cho ngôi nhà thông minh",
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=400",
      },
      {
        name: "Hệ thống lưu trữ năng lượng chuỗi thông minh",
        description: "Nguồn năng lượng xanh bền vững của bạn",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400",
      },
    ],
    [
      {
        name: "Sạc xe điện thông minh",
        description: "Chuyển động xanh với năng lượng mặt trời",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400",
      },
      {
        name: "Smart Guard",
        description: "Khi lưới ngừng tiếp điện, Nhịp sống vẫn tiếp diễn",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400",
      },
      {
        name: "SmartAssistant",
        description: "Trợ lý quản lý năng lượng của riêng bạn",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=400",
      },
    ],
    [
      {
        name: "Smart Guard",
        description: "Khi lưới ngừng tiếp điện, Nhịp sống vẫn tiếp diễn",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400",
      },
      {
        name: "SmartAssistant",
        description: "Trợ lý quản lý năng lượng của riêng bạn",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=400",
      },
      {
        name: "Smart Home Energy Management",
        description: "Quản lý năng lượng thông minh cho ngôi nhà của bạn",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
      },
    ],
  ];

  const nextSlide = () => {
    setCurrentProductSlide((prev) => (prev + 1) % productSlides.length);
  };

  const prevSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + productSlides.length) % productSlides.length);
  };
  const benefits = [
    {
      icon: TrendingDown,
      title: "Tiết kiệm 50-80%",
      description: "Giảm hóa đơn điện đáng kể ngay từ tháng đầu tiên",
    },
    {
      icon: Clock,
      title: "Lắp đặt 1-2 ngày",
      description: "Thi công nhanh chóng, không ảnh hưởng sinh hoạt",
    },
    {
      icon: Shield,
      title: "Bảo hành 25 năm",
      description: "Cam kết chất lượng dài hạn cho panel và thiết bị",
    },
    {
      icon: Zap,
      title: "Vận hành ổn định",
      description: "Không cần bảo trì thường xuyên, Vận hành trong điều kiện cúp điện",
    },
  ];

  const packages = [
    {
      name: "Gói Tiết Kiệm",
      capacity: "3 kW",
      price: "59.000.000đ",
      features: [
        "12 tấm pin Mono PERC",
        "Inverter 3kW chất lượng cao",
        "Hệ thống giá đỡ nhôm",
        "Thi công & vận hành",
        "Bảo hành 10 năm",
      ],
      suitable: "Phù hợp nhà 2-3 người",
    },
    {
      name: "Gói Gia Đình",
      capacity: "5 kW",
      price: "89.000.000đ",
      features: [
        "20 tấm pin Mono PERC",
        "Inverter Hybrid 5kW",
        "Hệ thống giá đỡ nhôm cao cấp",
        "Giám sát từ xa",
        "Thi công & vận hành",
        "Bảo hành 15 năm",
      ],
      suitable: "Phù hợp nhà 4-6 người",
      popular: true,
    },
    {
      name: "Gói Cao Cấp",
      capacity: "10 kW",
      price: "159.000.000đ",
      features: [
        "36 tấm pin Bifacial",
        "Inverter Hybrid 10kW + Pin lưu trữ",
        "Hệ thống giám sát thông minh",
        "Bảo vệ quá tải & sét",
        "Thi công & vận hành",
        "Bảo hành 20 năm",
      ],
      suitable: "Phù hợp biệt thự, villa",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Khảo sát & Tư vấn",
      description: "Đội ngũ kỹ thuật đến tận nhà khảo sát mái, tính toán công suất phù hợp",
    },
    {
      step: "02",
      title: "Thiết kế & Báo giá",
      description: "Thiết kế hệ thống chi tiết, báo giá minh bạch, hợp đồng rõ ràng",
    },
    {
      step: "03",
      title: "Thi công lắp đặt",
      description: "Thi công chuyên nghiệp trong 1-2 ngày, đảm bảo an toàn và thẩm mỹ",
    },
    {
      step: "04",
      title: "Vận hành & Bảo trì",
      description: "Hướng dẫn sử dụng, bảo trì định kỳ, hỗ trợ kỹ thuật 24/7",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        {mounted && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/presidential-hero.mp4" type="video/mp4" />
            <source src="/videos/presidential-hero.webm" type="video/webm" />
          </video>
        )}
        
        {/* Fallback Image */}
        {!mounted && (
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973"
            alt="Hệ thống điện mặt trời hộ gia đình"
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-emerald-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Home size={20} />
              <span className="font-semibold">Giải pháp Hộ Gia Đình</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Điện Mặt Trời<br />Cho Ngôi Nhà Của Bạn
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/95 drop-shadow-lg">
              Giải pháp năng lượng sạch, tiết kiệm chi phí điện đến 80%, 
              bảo vệ môi trường và gia tăng giá trị bất động sản.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('survey-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl"
              >
                Khảo sát miễn phí
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                Xem báo giá
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lợi Ích Vượt Trội
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tại sao hàng nghìn gia đình Việt Nam tin tưởng lựa chọn GreenSun Solar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
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

      {/* Survey Section */}
      <section id="survey-section" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-3">Khảo Sát Nhu Cầu Điện</h3>
                <p className="text-emerald-50 text-lg">Giúp chúng tôi tư vấn giải pháp phù hợp nhất cho bạn</p>
              </div>

              <form onSubmit={handleSurveySubmit} className="p-8 space-y-6">
                {/* Số điện hằng tháng */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Số điện tiêu thụ hằng tháng (kWh) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={surveyData.monthlyKwh}
                    onChange={(e) => handleSurveyChange("monthlyKwh", e.target.value)}
                    placeholder="VD: 350"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-1">Tham khảo trên hóa đơn tiền điện của bạn</p>
                </div>

                {/* Số tiền điện mỗi tháng */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Số tiền điện trung bình mỗi tháng (VNĐ) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={surveyData.monthlyBill}
                    onChange={(e) => handleSurveyChange("monthlyBill", e.target.value)}
                    placeholder="VD: 1500000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                {/* Thời gian sử dụng điện */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Sử dụng điện nhiều vào <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Ban ngày", "Ban đêm", "Cả hai"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSurveyChange("usageTime", option)}
                        className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                          surveyData.usageTime === option
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                            : "border-gray-300 hover:border-emerald-300"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Số người sử dụng */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Số người trong gia đình <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {["1-2", "3-4", "5-6", "7+"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSurveyChange("numberOfPeople", option)}
                        className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                          surveyData.numberOfPeople === option
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                            : "border-gray-300 hover:border-emerald-300"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Diện tích mái */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Diện tích mái nhà (m²)
                  </label>
                  <input
                    type="number"
                    value={surveyData.roofArea}
                    onChange={(e) => handleSurveyChange("roofArea", e.target.value)}
                    placeholder="VD: 50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-1">Nếu không rõ, để trống - chúng tôi sẽ khảo sát tại nhà</p>
                </div>

                {/* Nhu cầu điện */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nhu cầu sử dụng điện
                  </label>
                  <textarea
                    value={surveyData.electricityNeeds}
                    onChange={(e) => handleSurveyChange("electricityNeeds", e.target.value)}
                    placeholder="VD: Điều hòa nhiều, có bể bơi, sạc xe điện..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6"
                  >
                    Xem giải pháp phù hợp
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section - Only show after survey */}
      {surveyCompleted && (
        <section id="packages-section" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Gói Giải Pháp Phổ Biến
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chọn gói phù hợp với nhu cầu và ngân sách của gia đình bạn
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  pkg.popular ? "ring-2 ring-emerald-600 shadow-xl" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-emerald-600 font-bold text-xl mb-2">
                    {pkg.capacity}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{pkg.suitable}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  Nhận báo giá chi tiết
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm
            </h2>
          </div>

          {/* Products Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-all shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-all shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Products Grid */}
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
              >
                <div className="flex">
                  {productSlides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-3 gap-8 px-4">
                        {slide.map((product, productIndex) => (
                          <Card
                            key={productIndex}
                            className="overflow-hidden hover:shadow-xl transition-all group bg-gray-50 border-0"
                          >
                            {/* Product Image */}
                            <div className="relative h-64 bg-white flex items-center justify-center p-8">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            {/* Product Info */}
                            <div className="p-6 text-center">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {product.description}
                              </p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {productSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentProductSlide
                      ? "bg-emerald-600 w-8"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            >
              Xem toàn bộ sản phẩm
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Sẵn Sàng Chuyển Đổi Sang Năng Lượng Sạch?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết cho ngôi nhà của bạn
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Gọi ngay: 1900-xxxx
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Đăng ký tư vấn
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
