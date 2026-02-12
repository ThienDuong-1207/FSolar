import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Anh Nguyễn Văn A",
      role: "Chủ nhà tại Q7",
      content: "Tiết kiệm được 70% hóa đơn điện. Đội ngũ thi công chuyên nghiệp!",
      rating: 5,
    },
    {
      name: "Chị Trần Thị B",
      role: "Chủ doanh nghiệp",
      content: "Hệ thống hoạt động ổn định, hỗ trợ nhiệt tình.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Khách Hàng Nói Gì?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{item.content}</p>
              <div>
                <div className="font-bold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-600">{item.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
