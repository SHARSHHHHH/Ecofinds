import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Leaf, ShoppingCart, Heart, Search, Menu, User, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Home },
  { title: "Products", url: createPageUrl("Products"), icon: Search },
  { title: "Cart", url: createPageUrl("Cart"), icon: ShoppingCart },
  { title: "Favorites", url: createPageUrl("Favorites"), icon: Heart },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  EcoFind
                </h1>
                <p className="text-xs text-green-600 -mt-1">Sustainable Living</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                   className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                  {item.title === "Cart" && (
                    <Badge className="bg-green-500 text-white text-xs">0</Badge>
                  )}
                </Link>
              ))}
            </nav>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-green-700">
                <User className="w-5 h-5" />
              </Button>
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-white">
                  <div className="flex flex-col gap-4 mt-8">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          location.pathname === item.url
                            ? "bg-green-100 text-green-700"
                            : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.title}
                      </Link>
                       ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <h3 className="text-lg font-bold">EcoFind</h3>
              </div>
              <p className="text-green-100 text-sm">
                Discover sustainable products that help you live an eco-friendly lifestyle while protecting our planet.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Shop</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><Link to={createPageUrl("Products")} className="hover:text-white">All Products</Link></li>
                <li><Link to="#" className="hover:text-white">New Arrivals</Link></li>
                <li><Link to="#" className="hover:text-white">Best Sellers</Link></li>
                <li><Link to="#" className="hover:text-white">Sale</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Sustainability</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><Link to="#" className="hover:text-white">Our Mission</Link></li>
                <li><Link to="#" className="hover:text-white">Certifications</Link></li>
                <li><Link to="#" className="hover:text-white">Carbon Neutral</Link></li>
                <li><Link to="#" className="hover:text-white">Recycling Program</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="#" className="hover:text-white">Shipping Info</Link></li>
                <li><Link to="#" className="hover:text-white">Returns</Link></li>
                <li><Link to="#" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-200">
            <p>&copy; 2024 EcoFind. Made with 💚 for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}