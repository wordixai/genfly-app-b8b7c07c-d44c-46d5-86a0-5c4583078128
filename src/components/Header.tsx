import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-pop text-3xl bg-gradient-to-r from-pop-orange to-pop-pink bg-clip-text text-transparent">
              POP SHOP
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['首页', '服装', '艺术品', '配饰', '特价'].map((item) => (
              <button
                key={item}
                className="text-lg font-semibold hover:text-pop-orange transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pop-orange transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="搜索潮流单品..." 
                className="pl-10 pr-4 py-2 w-64 rounded-full border-2 border-black focus:border-pop-orange"
              />
            </div>
            <Button className="btn-pop-pink relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              购物车
              <span className="absolute -top-2 -right-2 bg-pop-yellow text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-black">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;