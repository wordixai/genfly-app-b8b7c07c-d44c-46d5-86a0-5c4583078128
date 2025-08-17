import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pop-gradient comic-dots-overlay">
      {/* Background Elements */}
      <div className="absolute inset-0 comic-dots opacity-10"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Speech Bubble */}
          <div className="speech-bubble inline-block mb-8">
            <p className="text-xl font-bold text-black">
              🎨 欢迎来到潮流艺术世界！
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-pop-lg mb-6 bg-gradient-to-r from-pop-yellow via-pop-pink to-pop-purple bg-clip-text text-transparent">
            POP ART STYLE
          </h1>
          <h2 className="text-pop mb-8 text-black">
            发现独特的波普艺术风格服饰
          </h2>

          {/* Description */}
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-800 font-semibold">
            从复古漫画风格到现代街头潮流，探索我们精心策划的艺术品收藏，
            让你的穿搭和生活空间充满创意与个性！
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-pop-orange bounce-hover text-xl px-8 py-4">
              🛍️ 开始购物
            </Button>
            <Button className="btn-pop-blue bounce-hover text-xl px-8 py-4">
              🎨 浏览艺术品
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 transform rotate-12 hidden lg:block">
            <div className="bg-pop-yellow p-4 rounded-2xl border-4 border-black shadow-lg">
              <span className="text-2xl">💥</span>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-10 transform -rotate-12 hidden lg:block">
            <div className="bg-pop-pink p-4 rounded-2xl border-4 border-black shadow-lg">
              <span className="text-2xl">⭐</span>
            </div>
          </div>

          <div className="absolute top-1/2 left-20 transform rotate-45 hidden xl:block">
            <div className="bg-pop-lime p-3 rounded-full border-3 border-black shadow-lg">
              <span className="text-lg">🎵</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;