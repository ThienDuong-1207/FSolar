import Image from "next/image";

export function Process() {
  const steps = [
    {
      step: "01",
      title: "Lập Kế Hoạch Dự Án",
      description: "Khảo sát địa điểm, đánh giá nhu cầu sử dụng điện và thiết kế phương án phù hợp nhất cho ngôi nhà của bạn",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    },
    {
      step: "02",
      title: "Nghiên Cứu & Phân Tích",
      description: "Phân tích hiệu suất hệ thống, tính toán chi phí và lợi ích để đưa ra giải pháp tối ưu nhất",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
    },
    {
      step: "03",
      title: "Triển Khai Dự Án",
      description: "Thi công lắp đặt hệ thống điện mặt trời chuyên nghiệp, đúng tiến độ và đảm bảo an toàn tuyệt đối",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
    },
    {
      step: "04",
      title: "Bàn Giao & Vận Hành",
      description: "Hướng dẫn vận hành, kết nối lưới điện và hỗ trợ bảo trì dài hạn cho hệ thống của bạn",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Quy Trình Triển Khai Dự Án
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-0.5 bg-gray-200 -z-10" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Circular Image with Badge */}
                <div className="relative mb-6">
                  {/* Image */}
                  <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Step Badge */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
