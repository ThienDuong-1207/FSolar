import { TrendingDown, Shield, Zap, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Tiết kiệm 50-80%",
      description: "Giảm hóa đơn tiền điện hàng tháng đáng kể",
    },
    {
      icon: Shield,
      title: "Bảo hành 25 năm",
      description: "Cam kết chất lượng dài hạn cho tấm pin",
    },
    {
      icon: Zap,
      title: "Hiệu suất cao",
      description: "Công nghệ tiên tiến, chuyển đổi năng lượng tối ưu",
    },
    {
      icon: Leaf,
      title: "Thân thiện môi trường",
      description: "Giảm phát thải carbon, bảo vệ hành tinh",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn FIT Solar?
          </h2>
          <p className="text-lg text-gray-600">
            Tối ưu tiền điện - Bền bỉ cùng thời gian
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-emerald-100">
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
  );
}
