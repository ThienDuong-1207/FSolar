import Image from "next/image";

export function Gallery() {
  const projects = [
    {
      title: "Dự án hệ thống 50kW - Nhà máy sản xuất",
      location: "Bình Dương",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      span: "col-span-2 row-span-2",
    },
    {
      title: "Hệ thống 10kW - Biệt thự",
      location: "TP. HCM",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Hệ thống 30kW - Khách sạn",
      location: "Đà Nẵng",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Hệ thống 15kW - Nhà hàng",
      location: "Hà Nội",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Hệ thống 100kW - Nhà máy",
      location: "Đồng Nai",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dự Án Tiêu Biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hơn 1,000+ dự án đã hoàn thành trên khắp Việt Nam
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${project.span}`}
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#all-projects"
            className="inline-block text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
          >
            Xem tất cả dự án →
          </a>
        </div>
      </div>
    </section>
  );
}
