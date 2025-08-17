import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  category, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  return (
    <div className="product-frame group">
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-2xl border-3 border-black">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-pop-lime text-black px-3 py-1 rounded-full text-xs font-bold border-2 border-black">
              NEW!
            </span>
          )}
          {isSale && (
            <span className="bg-pop-red text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-black">
              SALE!
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <Button 
          size="icon" 
          variant="secondary"
          className="absolute top-3 right-3 rounded-full border-2 border-black hover:bg-pop-pink transition-colors"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="btn-pop-yellow">
            <ShoppingCart className="h-4 w-4 mr-2" />
            快速购买
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Category */}
        <span className="text-sm font-semibold text-pop-purple bg-pop-purple bg-opacity-20 px-2 py-1 rounded-full">
          {category}
        </span>

        {/* Name */}
        <h3 className="font-bold text-lg text-black group-hover:text-pop-orange transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'text-pop-yellow fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({rating}.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-pop-orange">
            ¥{price}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ¥{originalPrice}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Button className="w-full btn-pop-pink bounce-hover">
          <ShoppingCart className="h-4 w-4 mr-2" />
          加入购物车
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;