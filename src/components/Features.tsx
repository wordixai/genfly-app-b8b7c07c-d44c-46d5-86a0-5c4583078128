import { Truck, Shield, Headphones, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "免费配送",
      description: "订单满299元即可享受免费配送服务",
      color: "bg-pop-orange"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "品质保证",
      description: "所有商品均为正品，提供30天退换保障",
      color: "bg-pop-blue"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "贴心客服",
      description: "24/7在线客服，随时为您解答疑问",
      color: "bg-pop-pink"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "独家设计",
      description: "与知名艺术家合作，打造独一无二的设计",
      color: "bg-pop-yellow"
    }
  ];

  return (
    <section className="py-20 bg-pop-secondary comic-dots-overlay">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-pop mb-6 text-white">
            为什么选择我们？
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-semibold">
            我们不仅仅是卖商品，更是在传播艺术和创意的生活方式
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`${feature.color} w-20 h-20 rounded-full border-4 border-black flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-kalam">
                {feature.title}
              </h3>
              <p className="text-white text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;