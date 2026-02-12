import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Award } from "lucide-react";

export function FeaturedProducts() {
  const products = [
    {
      name: "Panel Mono PERC 550W",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      wattPeak: "550W",
      efficiency: "21.2%",
      warranty: "25 năm",
      price: "Liên hệ",
    },
    {
      name: "Inverter Hybrid 10kW",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      wattPeak: "10kW",
      efficiency: "97.6%",
      warranty: "10 năm",
      price: "Liên hệ",
    },
    {
      name: "Pin Lưu Trữ LiFePO4 15kWh",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071",
      wattPeak: "15kWh",
      efficiency: "95%",
      warranty: "15 năm",
      price: "Liên hệ",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thiết bị chất lượng cao từ các thương hiệu hàng đầu thế giới
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Zap className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-sm">
                      <strong>Công suất:</strong> {product.wattPeak}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Award className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-sm">
                      <strong>Hiệu suất:</strong> {product.efficiency}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-sm">
                      <strong>Bảo hành:</strong> {product.warranty}
                    </span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-emerald-600">
                    {product.price}
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Chi tiết
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Xem tất cả sản phẩm
          </Button>
        </div>
      </div>
    </section>
  );
}
