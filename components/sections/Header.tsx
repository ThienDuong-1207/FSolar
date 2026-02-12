"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionItems = [
    {
      title: "Hộ gia đình",
      subtitle: "Giải pháp cho ngôi nhà",
      href: "/giai-phap/ho-gia-dinh",
    },
    {
      title: "Thương mại & Công nghiệp",
      subtitle: "Tối ưu chi phí vận hành",
      href: "/giai-phap/thuong-mai-cong-nghiep",
    },
    {
      title: "Quy mô lớn",
      subtitle: "Hệ thống năng lượng lớn",
      href: "/giai-phap/quy-mo-lon",
    },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border border-gray-200"
            : "bg-black/50 backdrop-blur-md shadow-2xl border border-white/10"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl font-bold transition-all duration-300 ${
              isScrolled
                ? "text-emerald-600"
                : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            }`}
          >
            FIT Solar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  : "text-white/95 hover:text-white hover:bg-white/10 drop-shadow-md"
              }`}
            >
              Trang chủ
            </Link>

            {/* Giải pháp Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-1 ${
                  isScrolled
                    ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                    : "text-white/95 hover:text-white hover:bg-white/10 drop-shadow-md"
                }`}
              >
                Giải pháp
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-3 w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                  isSolutionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {solutionItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-6 py-4 hover:bg-emerald-50 transition-all group ${
                      index !== solutionItems.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <div className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-700">
                      {item.subtitle}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/san-pham"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  : "text-white/95 hover:text-white hover:bg-white/10 drop-shadow-md"
              }`}
            >
              Sản phẩm
            </Link>

            <Link
              href="/tin-tuc"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  : "text-white/95 hover:text-white hover:bg-white/10 drop-shadow-md"
              }`}
            >
              Tin tức & Dự án
            </Link>

            <Link
              href="/lien-he"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  : "text-white/95 hover:text-white hover:bg-white/10 drop-shadow-md"
              }`}
            >
              Liên hệ
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/lien-he"
            className={`hidden md:block px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold ${
              isScrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-xl"
                : "bg-white text-emerald-600 shadow-2xl hover:bg-gray-50 hover:shadow-emerald-500/20"
            }`}
          >
            Nhận báo giá
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white rounded-b-2xl p-6">
            <nav className="flex flex-col gap-6">
              <Link
                href="/"
                className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>

              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                >
                  Giải pháp
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isMobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileSolutionsOpen && (
                  <div className="mt-4 ml-4 flex flex-col gap-3">
                    {solutionItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/san-pham"
                className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sản phẩm
              </Link>

              <Link
                href="/tin-tuc"
                className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tin tức & Dự án
              </Link>

              <Link
                href="/lien-he"
                className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>

              <Link
                href="/lien-he"
                className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-full text-center font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Nhận báo giá
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
