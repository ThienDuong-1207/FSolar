"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      category: "HỘ GIA ĐÌNH",
      title: "Điện Mặt Trời Hòa Lưới",
      subtitle: "[FIT Solar] Phước Đồng, Nha Trang",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      link: "/du-an/phuoc-dong-nha-trang",
    },
    {
      category: "THƯƠNG MẠI",
      title: "Hệ Thống PV Hybrid",
      subtitle: "[FIT Solar] Gò Công, Tiền Giang",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
      link: "/du-an/go-cong-tien-giang",
    },
    {
      category: "HỘ GIA ĐÌNH",
      title: "Kiểm Tra Hệ Thống",
      subtitle: "[FIT Solar] Quận 7, TP.HCM",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
      link: "/du-an/quan-7-hcm",
    },
    {
      category: "CÔNG NGHIỆP",
      title: "Công Nghệ Năng Lượng",
      subtitle: "[FIT Solar] Nhà Máy Bình Dương",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      link: "/du-an/nha-may-binh-duong",
    },
    {
      category: "THƯƠNG MẠI",
      title: "Hệ Thống On-Grid",
      subtitle: "[FIT Solar] Khu Công Nghiệp Đồng Nai",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      link: "/du-an/dong-nai",
    },
    {
      category: "HỘ GIA ĐÌNH",
      title: "Năng Lượng Xanh",
      subtitle: "[FIT Solar] Biệt Thự Phú Mỹ Hưng",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2073",
      link: "/du-an/phu-my-hung",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    
    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Title */}
          <div>
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              GIẢI PHÁP NỔI BẬT
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Các Dự Án Kỹ Thuật<br />Hàng Đầu Của Chúng Tôi
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Chúng tôi tin rằng năng lượng mặt trời là nguồn năng lượng giá cả phải chăng nhất trên hành tinh. 
              Sử dụng năng lượng mặt trời, chúng ta có thể làm cho cuộc sống trên trái đất này trở nên dễ dàng hơn.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Chúng tôi có khả năng cung cấp dịch vụ lắp đặt và bảo trì chất lượng tiên tiến cho các trang trại gió, 
              hệ thống năng lượng mặt trời và cả cổng sạc điện EV.
            </p>
            <Link 
              href="/du-an"
              className="inline-block text-gray-900 font-semibold uppercase text-sm tracking-wider border-b-2 border-emerald-600 pb-1 hover:text-emerald-600 transition-colors w-fit"
            >
              XEM THÊM
            </Link>
          </div>
        </div>

        {/* Auto-Scrolling Projects Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate projects for infinite scroll effect */}
            {[...projects, ...projects].map((project, index) => (
              <Link 
                key={index}
                href={project.link}
                className="group flex-shrink-0 w-[300px]"
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-0">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.subtitle}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/tin-tuc"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Xem Tất Cả Dự Án
          </Link>
        </div>
      </div>

      <style jsx>{`
        div[ref] {
          -webkit-overflow-scrolling: touch;
        }
        div[ref]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
