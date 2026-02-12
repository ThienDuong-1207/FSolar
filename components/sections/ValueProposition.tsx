import { TrendingDown, ShieldCheck, PackageCheck, Headset } from "lucide-react";

export function ValueProposition() {
  const values = [
    {
      icon: TrendingDown,
      title: "Tiết kiệm 30% - 80%",
      description: "Giảm chi phí điện năng đáng kể ngay từ tháng đầu tiên sử dụng",
    },
    {
      icon: ShieldCheck,
      title: "Độ bền trên 25 năm",
      description: "Sản phẩm chất lượng cao với bảo hành dài hạn và hiệu suất ổn định",
    },
    {
      icon: PackageCheck,
      title: "Lắp đặt trọn gói",
      description: "Dịch vụ trọn gói từ khảo sát, thi công đến vận hành và bảo trì",
    },
    {
      icon: Headset,
      title: "Hỗ trợ kỹ thuật 24/7",
      description: "Đội ngũ kỹ thuật viên chuyên nghiệp sẵn sàng hỗ trợ mọi lúc mọi nơi",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn FIT Solar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến giải pháp năng lượng tốt nhất với chất lượng vượt trội
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
