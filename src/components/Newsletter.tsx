import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Comic-style background */}
          <div className="relative bg-pop-gradient rounded-3xl border-4 border-black p-12 comic-dots-overlay">
            <div className="relative z-10">
              {/* Icon */}
              <div className="bg-pop-yellow w-16 h-16 rounded-full border-4 border-black flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📧</span>
              </div>

              {/* Title */}
              <h2 className="text-pop mb-6 text-white">
                订阅我们的潮流资讯
              </h2>

              {/* Description */}
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-semibold">
                第一时间获取最新的波普艺术作品、限量版商品发布信息，
                以及独家优惠券！
              </p>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="输入你的邮箱地址..."
                  className="flex-1 rounded-full border-4 border-black text-lg px-6 py-3 bg-white"
                />
                <Button className="btn-pop-yellow px-8 py-3 text-lg whitespace-nowrap">
                  立即订阅
                </Button>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-pop-yellow">✓</span>
                  <span>独家折扣</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pop-yellow">✓</span>
                  <span>新品预告</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pop-yellow">✓</span>
                  <span>艺术资讯</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-pop-pink p-3 rounded-full border-3 border-black transform rotate-12">
              <span className="text-xl">🎨</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-pop-lime p-3 rounded-full border-3 border-black transform -rotate-12">
              <span className="text-xl">💌</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;