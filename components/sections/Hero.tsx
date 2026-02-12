"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  page?: "home" | "residential" | "commercial" | "industrial";
}

export function Hero({ page = "home" }: HeroProps) {
  const videos = {
    home: "/videos/home-hero.mp4",
    residential: "/videos/residential-hero.mp4",
    commercial: "/videos/commercial-hero.mp4",
    industrial: "/videos/industrial-hero.mp4",
  };

  const posters = {
    home: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
    residential: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
    commercial: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074",
    industrial: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image */}
        <Image
          src={posters[page]}
          alt="FIT Solar"
          fill
          className="object-cover"
          priority
        />
        
        {/* Video Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          poster={posters[page]}
        >
          <source src={videos[page]} type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 backdrop-blur-sm border border-emerald-400/30">
              <Play className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white">
                Năng lượng sạch cho tương lai
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl animate-fade-in drop-shadow-2xl">
              FIT Solar
            </h1>

            <p className="mb-4 text-2xl font-semibold text-emerald-400 md:text-3xl drop-shadow-lg">
              Tối ưu tiền điện - Bền bỉ cùng thời gian
            </p>

            <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl drop-shadow-md">
              Giải pháp năng lượng mặt trời hàng đầu Việt Nam.
              Tiết kiệm 50-80% chi phí điện, bảo vệ môi trường.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/lien-he">
                <Button 
                  size="lg" 
                  className="group bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  Nhận tư vấn miễn phí
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/giai-phap">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
                >
                  Xem giải pháp
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center backdrop-blur-sm bg-black/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">500+</div>
                <div className="text-sm text-white/80">Dự án hoàn thành</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-black/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">50MW+</div>
                <div className="text-sm text-white/80">Công suất lắp đặt</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-black/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">25 năm</div>
                <div className="text-sm text-white/80">Bảo hành dài hạn</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-white/50 p-1">
          <div className="h-3 w-1.5 animate-pulse rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
