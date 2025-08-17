import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, href: "#", color: "hover:bg-pop-pink" },
    { icon: <Facebook className="h-6 w-6" />, href: "#", color: "hover:bg-pop-blue" },
    { icon: <Twitter className="h-6 w-6" />, href: "#", color: "hover:bg-pop-lime" },
    { icon: <Youtube className="h-6 w-6" />, href: "#", color: "hover:bg-pop-red" },
  ];

  const footerLinks = {
    "购物指南": ["如何购买", "支付方式", "配送信息", "退换政策"],
    "关于我们": ["品牌故事", "艺术家合作", "招聘信息", "联系我们"],
    "客户服务": ["常见问题", "在线客服", "售后服务", "意见反馈"],
    "波普社区": ["艺术展览", "创作分享", "穿搭灵感", "用户评价"]
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-pop text-white mb-4">
              POP SHOP
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              致力于将波普艺术融入日常生活，
              让每个人都能成为街头的艺术品。
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 border-2 border-white rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:rotate-12`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4 text-pop-yellow font-kalam">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-pop-orange transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-center md:text-left">
              © 2024 POP SHOP. 保留所有权利。让艺术点亮生活！
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">支持支付：</span>
              <div className="flex gap-2">
                {['💳', '📱', '💰', '🏦'].map((icon, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 bg-gray-700 rounded border flex items-center justify-center hover:bg-pop-orange transition-colors duration-300"
                  >
                    <span className="text-sm">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;