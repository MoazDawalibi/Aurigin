export type Language = 'en' | 'ar';

export type Translation = Record<
  | 'navHome'
  | 'navAbout'
  | 'navProducts'
  | 'navContact'
  | 'navCart'
  | 'heroEyebrow'
  | 'shopCollection'
  | 'straightFit'
  | 'oversized'
  | 'pants'
  | 'featured'
  | 'aboutEyebrow'
  | 'aboutP1'
  | 'aboutP2'
  | 'productsEyebrow'
  | 'collectionTitle'
  | 'productsCopy'
  | 'noProducts'
  | 'stockPending'
  | 'inStock'
  | 'contactEyebrow'
  | 'contactTitle'
  | 'cartEyebrow'
  | 'cartCopy'
  | 'checkoutDisabled'
  | 'apiFallback'
  | 'themeLight'
  | 'themeDark'
  | 'language',
  string
>;

export const translations: Record<Language, Translation> = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navProducts: 'Products',
    navContact: 'Contact',
    navCart: 'Cart',
    heroEyebrow: "Men's clothing from Damascus",
    shopCollection: 'Shop collection',
    straightFit: 'Straight fit sport shirts',
    oversized: 'Oversized shirts',
    pants: 'Pants',
    featured: 'Featured',
    aboutEyebrow: 'About Aurigin',
    aboutP1: "Aurigin is a men's clothing brand focused on clean silhouettes, practical fits, and pieces that can carry everyday outfits without feeling temporary.",
    aboutP2: 'The first collection centers on straight fit sport shirts, oversized shirts, and pants in multiple styles, with product data managed from the Laravel backend.',
    productsEyebrow: 'Products',
    collectionTitle: 'Aurigin Collection',
    productsCopy: 'Product cards, colors, sizes, pricing, and stock values are loaded from the Laravel API.',
    noProducts: 'No active products are available yet.',
    stockPending: 'Stock pending',
    inStock: 'in stock',
    contactEyebrow: 'Contact',
    contactTitle: 'Start with Aurigin',
    cartEyebrow: 'Cart',
    cartCopy: 'The cart interface is prepared for product sharing and checkout features, but buying and payments are disabled in this MVP.',
    checkoutDisabled: 'Checkout disabled',
    apiFallback: 'Laravel API is not reachable, so demo website data is being shown.',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    language: 'العربية',
  },
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'عن العلامة',
    navProducts: 'المنتجات',
    navContact: 'تواصل',
    navCart: 'السلة',
    heroEyebrow: 'ملابس رجالية من دمشق',
    shopCollection: 'تصفح المجموعة',
    straightFit: 'قمصان رياضية بقصة مستقيمة',
    oversized: 'قمصان أوفر سايز',
    pants: 'بناطيل',
    featured: 'مميز',
    aboutEyebrow: 'عن Aurigin',
    aboutP1: 'Aurigin علامة ملابس رجالية تركز على القصات النظيفة والقطع العملية المناسبة للإطلالات اليومية.',
    aboutP2: 'تركز المجموعة الأولى على القمصان الرياضية المستقيمة، القمصان الأوفر سايز، والبناطيل، مع إدارة بيانات المنتجات من Laravel.',
    productsEyebrow: 'المنتجات',
    collectionTitle: 'مجموعة Aurigin',
    productsCopy: 'بطاقات المنتجات والألوان والمقاسات والأسعار والمخزون يتم تحميلها من Laravel API.',
    noProducts: 'لا توجد منتجات فعالة حالياً.',
    stockPending: 'المخزون قيد التجهيز',
    inStock: 'متوفر',
    contactEyebrow: 'تواصل',
    contactTitle: 'ابدأ مع Aurigin',
    cartEyebrow: 'السلة',
    cartCopy: 'واجهة السلة جاهزة لاحقاً لمشاركة المنتجات والدفع، لكن الشراء والمدفوعات معطلة في نسخة MVP.',
    checkoutDisabled: 'الدفع معطل',
    apiFallback: 'Laravel API غير متاح، لذلك يتم عرض بيانات تجريبية.',
    themeLight: 'الوضع الفاتح',
    themeDark: 'الوضع الداكن',
    language: 'English',
  },
};
