import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Sẵn Sàng Chuyển Sang Năng Lượng Sạch?
        </h2>
        <p className="text-xl mb-2 opacity-95">
          Tối ưu tiền điện - Bền bỉ cùng thời gian
        </p>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Liên hệ ngay để nhận tư vấn miễn phí
        </p>
        <Link href="/lien-he">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold">
            Nhận tư vấn ngay
          </Button>
        </Link>
      </div>
    </section>
  );
}
