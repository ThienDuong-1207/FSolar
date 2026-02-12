import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Sản Phẩm Điện Mặt Trời - Thiết Bị Chính Hãng | GreenSun Solar",
  description: "Cung cấp đầy đủ thiết bị điện mặt trời: Tấm pin, Inverter, Pin lưu trữ từ các thương hiệu hàng đầu thế giới. Chất lượng cao, giá cạnh tranh.",
};

export default function ProductsPage() {
  const categories = [
    "Tất cả sản phẩm",
    "Tấm pin solar",
    "Inverter",
    "Pin lưu trữ",
    "Giá đỡ & Phụ kiện",
    "Hệ thống giám sát",
  ];

  const brands = [
    { name: "JinkoSolar", logo: "JK" },
    { name: "Longi", logo: "LG" },
    { name: "Canadian Solar", logo: "CS" },
    { name: "SMA", logo: "SM" },
    { name: "Huawei", logo: "HW" },
    { name: "Tesla", logo: "TS" },
  ];

  const products = [
    {
      id: 1,
      name: "Panel Mono PERC 550W",
      brand: "JinkoSolar",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      power: "550W",
      efficiency: "21.2%",
      warranty: "25 năm",
      price: "Liên hệ",
      category: "Tấm pin solar",
    },
    {
      id: 2,
      name: "Panel Bifacial 580W",
      brand: "Longi",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      power: "580W",
      efficiency: "22.0%",
      warranty: "30 năm",
      price: "Liên hệ",
      category: "Tấm pin solar",
    },
    {
      id: 3,
      name: "Inverter Hybrid 10kW",
      brand: "Huawei",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      power: "10kW",
      efficiency: "97.6%",
      warranty: "10 năm",
      price: "Liên hệ",
      category: "Inverter",
    },
    {
      id: 4,
      name: "Inverter String 50kW",
      brand: "SMA",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      power: "50kW",
      efficiency: "98.5%",
      warranty: "10 năm",
      price: "Liên hệ",
      category: "Inverter",
    },
    {
      id: 5,
      name: "Pin LiFePO4 15kWh",
      brand: "Tesla",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071",
      power: "15kWh",
      efficiency: "95%",
      warranty: "15 năm",
      price: "Liên hệ",
      category: "Pin lưu trữ",
    },
    {
      id: 6,
      name: "Pin Lithium 20kWh",
      brand: "BYD",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071",
      power: "20kWh",
      efficiency: "96%",
      warranty: "12 năm",
      price: "Liên hệ",
      category: "Pin lưu trữ",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sản Phẩm Điện Mặt Trời<br />Chất Lượng Cao
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cung cấp đầy đủ thiết bị điện mặt trời từ các thương hiệu hàng đầu thế giới. 
              Chính hãng, bảo hành dài hạn, giá cạnh tranh.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={20} />
              Bộ lọc
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2">
            {categories.map((cat, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`whitespace-nowrap ${
                  index === 0 ? "bg-emerald-600 hover:bg-emerald-700" : ""
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Thương hiệu</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className="p-4 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-gray-700">
                    {brand.logo}
                  </div>
                  <div className="text-xs text-gray-600">{brand.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {products.length} sản phẩm
            </h2>
            <select className="border rounded-lg px-4 py-2 text-sm">
              <option>Mới nhất</option>
              <option>Giá: Thấp đến cao</option>
              <option>Giá: Cao đến thấp</option>
              <option>Phổ biến nhất</option>
            </select>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-emerald-600">
                    {product.brand}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div>
                      <div className="text-gray-600">Công suất</div>
                      <div className="font-bold text-emerald-600">{product.power}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Hiệu suất</div>
                      <div className="font-bold">{product.efficiency}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Bảo hành</div>
                      <div className="font-bold">{product.warranty}</div>
                    </div>
                  </div>
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
        </div>
      </section>

      {/* Featured Products Component */}
      <FeaturedProducts />

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Cần Tư Vấn Chọn Sản Phẩm?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Liên hệ với chuyên gia của chúng tôi để được tư vấn miễn phí
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Gọi ngay: 1900-xxxx
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Chat với chuyên gia
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
