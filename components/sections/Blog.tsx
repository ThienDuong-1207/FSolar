import Link from "next/link";
import Image from "next/image";

export function Blog() {
  const featuredPost = {
    date: "23 Tháng 1, 2026",
    title: "Mái Tôn Kim Loại: Lựa Chọn Tốt Nhất Cho Pin Mặt Trời",
    excerpt: "Mái tôn kim loại được đánh giá là loại mái lý tưởng nhất cho việc lắp đặt hệ thống điện mặt trời. Với độ bền cao, khả năng chịu lực tốt và tuổi thọ lâu dài, mái tôn không chỉ bảo vệ ngôi nhà mà còn tối ưu hóa hiệu suất năng lượng mặt trời.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
    slug: "/tin-tuc/metal-roofing-best-for-solar-panels",
  };

  const posts = [
    {
      date: "05 Tháng 1, 2026",
      title: "Sự Phát Triển Của Năng Lượng Sạch - Giải Pháp Cho Tương Lai",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      slug: "/tin-tuc/growth-of-clean-energy",
    },
    {
      date: "09 Tháng 1, 2026",
      title: "Hướng Dẫn Lắp Đặt Và Bảo Trì Hệ Thống Điều Hòa",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
      slug: "/tin-tuc/air-conditioning-guide",
    },
    {
      date: "08 Tháng 12, 2025",
      title: "Đánh Giá Và Cải Thiện Hiệu Suất Công Trình Xanh",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      slug: "/tin-tuc/building-performance",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            TIN TỨC & BLOG
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Cập Nhật Mới Nhất<br />Từ Blog Của Chúng Tôi
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post - Left */}
          <div className="group">
            <div className="relative h-[400px] overflow-hidden rounded-2xl mb-6">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              {featuredPost.date}
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
              <Link href={featuredPost.slug}>
                {featuredPost.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <Link 
              href={featuredPost.slug}
              className="inline-block text-gray-900 font-semibold uppercase text-sm tracking-wider border-b-2 border-emerald-600 pb-1 hover:text-emerald-600 transition-colors"
            >
              ĐỌC THÊM
            </Link>
          </div>

          {/* Small Posts - Right */}
          <div className="flex flex-col gap-8">
            {posts.map((post, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="relative w-48 h-40 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-emerald-600 font-semibold text-xs uppercase tracking-wider mb-2">
                    {post.date}
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    <Link href={post.slug}>
                      {post.title}
                    </Link>
                  </h4>
                  <Link 
                    href={post.slug}
                    className="inline-block text-gray-900 font-semibold uppercase text-xs tracking-wider border-b-2 border-emerald-600 pb-1 hover:text-emerald-600 transition-colors w-fit"
                  >
                    ĐỌC THÊM
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/tin-tuc"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Xem tất cả tin tức
          </Link>
        </div>
      </div>
    </section>
  );
}
