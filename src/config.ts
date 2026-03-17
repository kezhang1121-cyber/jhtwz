// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "敬昊堂 - 传承中医智慧，守护生命健康",
  description: "敬昊堂是一家专注于中医健康产业和二类医疗器械经营的现代化企业，致力于传承中医文化，提供专业的中医理疗服务和优质的健康产品。",
  language: "zh-CN",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "敬昊堂",
  menuLinks: [
    { label: "首页", href: "#hero" },
    { label: "关于我们", href: "#about" },
    { label: "诊所中心", href: "#clinics" },
    { label: "主营商品", href: "#products" },
    { label: "荣誉资质", href: "#honors" },
    { label: "招商加盟", href: "#join" },
    { label: "联系我们", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "微信公众号", href: "#" },
    { icon: "Facebook", label: "微博", href: "#" },
    { icon: "Twitter", label: "抖音", href: "#" },
  ],
  searchPlaceholder: "搜索产品或服务...",
  cartEmptyText: "购物车是空的",
  cartCheckoutText: "立即结算",
  continueShoppingText: "继续浏览",
  menuBackgroundImage: "/images/hero-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "传承中医智慧 · 守护生命健康",
  title: "敬昊堂\n新中医健康\n产业领航者",
  ctaPrimaryText: "了解我们",
  ctaPrimaryTarget: "#about",
  ctaSecondaryText: "立即咨询",
  ctaSecondaryTarget: "#contact",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "企业实力",
  heading: "二十年深耕中医健康领域",
  bodyParagraphs: [
    "敬昊堂自成立以来，始终秉承'敬畏生命、传承创新'的核心理念，将传统中医智慧与现代科技相融合，打造集诊所服务、产品研发、技术培训于一体的综合性健康产业平台。",
    "我们拥有完善的二类医疗器械经营资质，严格遵循国家医疗标准，为客户提供安全、专业、高效的健康服务。"
  ],
  linkText: "了解更多",
  linkTarget: "#about",
  image1: "/images/clinic-env-1.jpg",
  image2: "/images/clinic-env-2.jpg",
  stats: [
    { value: 20, suffix: "+", label: "年行业经验" },
    { value: 1000, suffix: "+", label: "加盟门店" },
    { value: 10000, suffix: "+", label: "合作伙伴" },
    { value: 100000, suffix: "+", label: "服务客户" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "核心业务",
  heading: "诊所中心 · 主营商品",
  bodyParagraphs: [
    "敬昊堂诊所中心遍布全国，以湖南省株洲市为总部，辐射全国各地。我们提供专业的中医诊疗、康复理疗、健康调理等服务，由经验丰富的中医师团队为您量身定制健康方案。",
    "同时，我们经营各类中医理疗器具、二类医疗器械及养生健康产品，所有产品均经过严格质检，确保品质与安全。"
  ],
  ctaText: "探索服务",
  ctaTarget: "#products",
  backgroundImage: "/images/treatment-scene.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "主营商品",
  heading: "精选健康产品",
  description: "我们提供中医理疗器具、二类医疗器械及养生健康产品，品质保证，安全放心。",
  viewAllText: "查看全部",
  addToCartText: "咨询购买",
  addedToCartText: "已添加到咨询单",
  categories: ["全部", "中医理疗器具", "二类医疗器械", "养生健康产品"],
  products: [
    { id: 1, name: "智能电子针灸仪", price: 2980, category: "二类医疗器械", image: "/images/product-medical-device.jpg" },
    { id: 2, name: "精品艾灸套装", price: 368, category: "中医理疗器具", image: "/images/product-wellness.jpg" },
    { id: 3, name: "多功能理疗仪", price: 4580, category: "二类医疗器械", image: "/images/product-medical-device.jpg" },
    { id: 4, name: "养生草本茶礼盒", price: 268, category: "养生健康产品", image: "/images/product-wellness.jpg" },
    { id: 5, name: "铜制刮痧板套装", price: 188, category: "中医理疗器具", image: "/images/product-wellness.jpg" },
    { id: 6, name: "经络按摩仪", price: 1280, category: "二类医疗器械", image: "/images/product-medical-device.jpg" },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "ShieldCheck",
      title: "资质齐全",
      description: "拥有完整的二类医疗器械经营许可证，所有产品合规合法，安全可靠。",
    },
    {
      icon: "Heart",
      title: "专业团队",
      description: "资深中医师与专业理疗师团队，为您提供个性化的健康解决方案。",
    },
    {
      icon: "Leaf",
      title: "传承创新",
      description: "融合传统中医智慧与现代科技，打造新中医健康产业模式。",
    },
    {
      icon: "Truck",
      title: "全国布局",
      description: "总部设于湖南株洲，加盟门店遍布全国，服务网络覆盖广泛。",
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "健康资讯",
  heading: "中医养生知识",
  viewAllText: "查看全部",
  readMoreText: "阅读更多",
  posts: [
    {
      id: 1,
      title: "中医养生：四季调理之道",
      date: "2024年3月10日",
      image: "/images/blog-2.jpg",
      excerpt: "春生夏长，秋收冬藏。了解四季养生的基本原则，顺应自然规律，保持身心健康。",
    },
    {
      id: 2,
      title: "经络养生：打通身体能量通道",
      date: "2024年3月5日",
      image: "/images/blog-3.jpg",
      excerpt: "经络是中医理论的重要组成部分，了解经络养生方法，促进气血流通，增强体质。",
    },
    {
      id: 3,
      title: "艾灸养生：温阳补气的传统疗法",
      date: "2024年2月28日",
      image: "/images/blog-1.jpg",
      excerpt: "艾灸是中医传统疗法之一，具有温阳补气、祛寒除湿的功效，适合现代人养生保健。",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "常见问题",
  heading: "您可能想了解",
  ctaText: "还有其他问题？联系我们",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "敬昊堂诊所提供哪些服务？",
      answer: "敬昊堂诊所提供中医诊疗、针灸推拿、艾灸理疗、康复调理、健康咨询等全方位中医健康服务。我们的医师团队经验丰富，能够根据您的具体情况制定个性化的治疗方案。",
    },
    {
      id: 2,
      question: "如何加盟敬昊堂？",
      answer: "加盟敬昊堂需要经过咨询了解、实地考察、资格审核、签约合作、培训开业等流程。我们提供全方位的加盟支持，包括品牌授权、技术培训、运营指导、产品供应等。欢迎拨打加盟热线了解详情。",
    },
    {
      id: 3,
      question: "敬昊堂的产品质量如何保证？",
      answer: "敬昊堂所有产品均经过严格的质量检测，二类医疗器械具备国家药监部门颁发的注册证和经营许可证。我们与知名生产厂家合作，确保产品品质安全可靠。",
    },
    {
      id: 4,
      question: "诊所的营业时间是？",
      answer: "敬昊堂诊所一般营业时间为周一至周日 8:30-18:00，部分门店可能根据实际情况有所调整。建议您提前电话预约，以便我们为您安排合适的就诊时间。",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "品牌故事",
      heading: "敬畏生命\n传承创新",
      paragraphs: [
        "敬昊堂创立于2004年，源于对中医文化的深深敬畏与传承使命。'敬'代表敬畏生命、敬重传统，'昊'寓意广阔无垠的健康天地，'堂'象征正统专业的医疗服务。",
        "二十年来，我们始终坚持以患者为中心，将传统中医智慧与现代医疗技术相结合，为数十万客户提供了优质的健康服务。从湖南株洲的一家小诊所，发展成为拥有千余家加盟门店的全国性健康产业集团。"
      ],
      quote: "",
      attribution: "",
      image: "/images/clinic-env-2.jpg",
      backgroundColor: "#2d5a5a",
      textColor: "#ffffff",
    },
    {
      tag: "企业文化",
      heading: "使命 · 愿景 · 价值观",
      paragraphs: [
        "使命：传承中医智慧，守护生命健康，让每个人都能享受到优质的中医健康服务。",
        "愿景：成为新中医健康产业领域的领航者，打造百年健康品牌，推动中医文化走向世界。",
        "价值观：敬畏生命、传承创新、诚信务实、合作共赢。"
      ],
      quote: "医者仁心，药食同源。我们以敬畏之心对待每一位患者，以传承之志发扬中医文化。",
      attribution: "—— 敬昊堂创始人",
      image: "/images/treatment-scene.jpg",
      backgroundColor: "#f5f0e8",
      textColor: "#333333",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "联系我们",
  description: "欢迎咨询产品、服务或加盟事宜，我们的专业团队将竭诚为您服务。",
  locationLabel: "总部地址",
  location: "中国湖南省株洲市徐家桥步行街现代城121号",
  emailLabel: "电子邮箱",
  email: "contact@jinghaotang.com",
  phoneLabel: "联系电话",
  phone: "400-888-8888",
  formFields: {
    nameLabel: "您的姓名",
    namePlaceholder: "请输入姓名",
    emailLabel: "联系方式",
    emailPlaceholder: "手机号或邮箱",
    messageLabel: "留言内容",
    messagePlaceholder: "请描述您的需求或问题",
  },
  submitText: "提交留言",
  submittingText: "提交中...",
  submittedText: "已提交",
  successMessage: "感谢您的留言，我们会尽快与您联系！",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "敬昊堂",
  brandDescription: "传承中医智慧，守护生命健康。敬昊堂致力于将传统中医与现代科技相结合，为客户提供专业的健康服务与优质产品。",
  newsletterHeading: "订阅健康资讯",
  newsletterDescription: "订阅我们的邮件，获取最新的中医养生知识和健康资讯。",
  newsletterPlaceholder: "输入您的邮箱",
  newsletterButtonText: "订阅",
  newsletterSuccessText: "订阅成功！感谢您的关注。",
  linkGroups: [
    {
      title: "快速导航",
      links: [
        { label: "首页", href: "#hero" },
        { label: "关于我们", href: "#about" },
        { label: "诊所中心", href: "#clinics" },
        { label: "主营商品", href: "#products" },
      ],
    },
    {
      title: "服务支持",
      links: [
        { label: "荣誉资质", href: "#honors" },
        { label: "招商加盟", href: "#join" },
        { label: "联系我们", href: "#contact" },
        { label: "常见问题", href: "#faq" },
      ],
    },
    {
      title: "联系方式",
      links: [
        { label: "400-888-8888", href: "tel:4008888888" },
        { label: "contact@jinghaotang.com", href: "mailto:contact@jinghaotang.com" },
        { label: "湖南省株洲市徐家桥步行街", href: "#" },
      ],
    },
  ],
  legalLinks: [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "医疗器械经营许可证", href: "#" },
  ],
  copyrightText: "© 2024 敬昊堂. 保留所有权利. 湘ICP备XXXXXXXX号",
  socialLinks: [
    { icon: "Instagram", label: "微信公众号", href: "#" },
    { icon: "Facebook", label: "微博", href: "#" },
    { icon: "Twitter", label: "抖音", href: "#" },
  ],
};
