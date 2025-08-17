import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "波普艺术T恤",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      rating: 5,
      category: "T恤",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "复古漫画连帽衫",
      price: 399,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      rating: 4,
      category: "连帽衫",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "街头涂鸦背包",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      rating: 5,
      category: "配饰",
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "波普风格帆布鞋",
      price: 599,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      rating: 4,
      category: "鞋类",
      isNew: true,
      isSale: false
    },
    {
      id: 5,
      name: "艺术印花卫衣",
      price: 459,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      rating: 5,
      category: "卫衣",
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "复古徽章夹克",
      price: 899,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      rating: 4,
      category: "外套",
      isNew: true,
      isSale: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="speech-bubble inline-block mb-6">
            <p className="text-lg font-bold text-black">
              🔥 热门商品推荐
            </p>
          </div>
          <h2 className="text-pop mb-6 bg-gradient-to-r from-pop-blue to-pop-purple bg-clip-text text-transparent">
            发现你的风格
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            精选最受欢迎的波普艺术风格商品，每一件都是独一无二的艺术品
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-pop-orange bounce-hover text-xl px-8 py-4">
            查看更多商品 →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;