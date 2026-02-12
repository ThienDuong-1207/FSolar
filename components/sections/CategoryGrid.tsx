import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  const categories = [
    {
      title: "Hộ Gia Đình",
      description: "Giải pháp năng lượng mặt trời cho ngôi nhà của bạn",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
      href: "#residential",
    },
    {
      title: "Cơ Sở Thương Mại",
      description: "Tối ưu chi phí vận hành cho doanh nghiệp",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      href: "#commercial",
    },
    {
      title: "Quy Mô Lớn",
      description: "Hệ thống điện mặt trời công nghiệp",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
      href: "#industrial",
    },
    {
      title: "Sản Phẩm Thiết Bị",
      description: "Thiết bị chất lượng cao từ các thương hiệu hàng đầu",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
      href: "#products",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Giải Pháp Năng Lượng Mặt Trời
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lựa chọn giải pháp phù hợp với nhu cầu và quy mô của bạn
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{category.description}</p>
                <div className="flex items-center text-emerald-400 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">Tìm hiểu thêm</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
