import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tin Tức & Dự Án | FIT Solar",
  description: "Cập nhật tin tức mới nhất về điện mặt trời, các dự án đã triển khai và kiến thức năng lượng tái tạo tại Việt Nam.",
};

export default function NewsPage() {
  const projects = [
    {
      title: "Điện Mặt Trời Hòa Lưới 10kW",
      location: "Phước Đồng, Nha Trang",
      category: "HỘ GIA ĐÌNH",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      capacity: "10 kW",
      date: "Tháng 12, 2025",
    },
    {
      title: "Hệ Thống PV Hybrid 50kW",
      location: "Gò Công, Tiền Giang",
      category: "THƯƠNG MẠI",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
      capacity: "50 kW",
      date: "Tháng 11, 2025",
    },
    {
      title: "Năng Lượng Mặt Trời Biệt Thự",
      location: "Quận 7, TP.HCM",
      category: "HỘ GIA ĐÌNH",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
      capacity: "8 kW",
      date: "Tháng 10, 2025",
    },
    {
      title: "Nhà Máy Điện Mặt Trời",
      location: "Bình Dương",
      category: "CÔNG NGHIỆP",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      capacity: "200 kW",
      date: "Tháng 9, 2025",
    },
    {
      title: "Hệ Thống On-Grid Công Nghiệp",
      location: "Khu CN Đồng Nai",
      category: "CÔNG NGHIỆP",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      capacity: "150 kW",
      date: "Tháng 8, 2025",
    },
    {
      title: "Năng Lượng Xanh Biệt Thự",
      location: "Phú Mỹ Hưng, Q7",
      category: "HỘ GIA ĐÌNH",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2073",
      capacity: "12 kW",
      date: "Tháng 7, 2025",
    },
  ];

  const news = [
    {
      title: "Chính Sách Ưu Đãi Mới Cho Điện Mặt Trời Mái Nhà 2026",
      excerpt: "Chính phủ vừa công bố chính sách mới hỗ trợ lắp đặt điện mặt trời cho hộ gia đình với mức giá mua điện hấp dẫn và các ưu đãi về thuế, giúp tiết kiệm đến 70% chi phí điện năng...",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      category: "Chính Sách",
      date: "15 Tháng 1, 2026",
      author: "Nguyễn Văn A",
      readTime: "5 phút",
    },
    {
      title: "5 Lý Do Nên Lắp Điện Mặt Trời Cho Nhà Ở Năm 2026",
      excerpt: "Khám phá những lợi ích vượt trội của việc chuyển đổi sang năng lượng mặt trời cho hộ gia đình: tiết kiệm chi phí, thân thiện môi trường, tăng giá trị bất động sản...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
      category: "Kiến Thức",
      date: "12 Tháng 1, 2026",
      author: "Trần Thị B",
      readTime: "4 phút",
    },
    {
      title: "Hướng Dẫn Bảo Trì Hệ Thống Điện Mặt Trời Hiệu Quả",
      excerpt: "Những bước cơ bản để duy trì hiệu suất tối ưu cho hệ thống điện mặt trời: vệ sinh panel, kiểm tra kết nối điện, theo dõi hiệu suất định kỳ...",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
      category: "Hướng Dẫn",
      date: "10 Tháng 1, 2026",
      author: "Lê Văn C",
      readTime: "6 phút",
    },
    {
      title: "Xu Hướng Năng Lượng Tái Tạo Tại Việt Nam 2026",
      excerpt: "Phân tích thị trường năng lượng tái tạo Việt Nam với sự phát triển mạnh mẽ của điện mặt trời, điện gió và các công nghệ lưu trữ năng lượng mới...",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      category: "Phân Tích",
      date: "08 Tháng 1, 2026",
      author: "Phạm Minh D",
      readTime: "7 phút",
    },
    {
      title: "So Sánh Pin Mặt Trời: Mono vs Poly vs Bifacial",
      excerpt: "Đánh giá chi tiết các loại tấm pin phổ biến trên thị trường: hiệu suất, tuổi thọ, giá thành và lựa chọn phù hợp cho từng nhu cầu...",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      category: "Kiến Thức",
      date: "05 Tháng 1, 2026",
      author: "Hoàng Anh E",
      readTime: "8 phút",
    },
    {
      title: "Tính Toán Chi Phí Lắp Đặt Điện Mặt Trời Cho Gia Đình",
      excerpt: "Hướng dẫn chi tiết cách tính toán chi phí đầu tư, thời gian hoàn vốn và lợi nhuận từ hệ thống điện mặt trời gia đình...",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2073",
      category: "Tài Chính",
      date: "02 Tháng 1, 2026",
      author: "Vũ Thị F",
      readTime: "6 phút",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">
              TIN TỨC & DỰ ÁN
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cập Nhật Mới Nhất Về<br />Năng Lượng Mặt Trời
            </h1>
            <p className="text-lg text-gray-600">
              Khám phá các dự án đã triển khai, tin tức mới nhất và kiến thức chuyên sâu 
              về năng lượng mặt trời từ FIT Solar
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Dự Án Đã Triển Khai
              </h2>
              <p className="text-gray-600">
                Hơn 500+ hệ thống điện mặt trời đã lắp đặt thành công
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index}
                href={`/du-an/${index + 1}`}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {/* Capacity Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 text-sm font-bold rounded-full">
                        {project.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      📍 {project.location}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Tin Tức & Kiến Thức
              </h2>
              <p className="text-gray-600">
                Cập nhật thông tin mới nhất về năng lượng mặt trời
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {news.map((post, index) => (
              <Link 
                key={index}
                href={`/tin-tuc/${index + 1}`}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-64 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Category */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Xem Thêm Tin Tức
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
