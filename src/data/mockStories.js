export const initialStories = [
  {
    id: '1',
    merchantName: 'مخبز ومطعم البركة',
    merchantAvatar: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&auto=format&fit=crop',
    title: 'خصم 50% على جميع وجبات العشاء والبيتزا العائلية',
    discount: '50%',
    city: 'غزة',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop',
    expiresAt: new Date(Date.now() + 14 * 60 * 60 * 1000).toISOString(), // متبقي 14 ساعة
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    merchantName: 'متجر الأناقة للملابس',
    merchantAvatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&auto=format&fit=crop',
    title: 'اشتري قطعة واحصل على الثانية مجاناً على التشكيلة الجديدة',
    discount: '1+1',
    city: 'خانيونس',
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop',
    expiresAt: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), // متبقي 3 ساعات
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    merchantName: 'صيدلية الحياة',
    merchantAvatar: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=100&auto=format&fit=crop',
    title: 'خصم 20% على منتجات العناية بالبشرة المستوردة',
    discount: '20%',
    city: 'دير البلح',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop',
    expiresAt: new Date(Date.now() + 21 * 60 * 60 * 1000).toISOString(), // متبقي 21 ساعة
    createdAt: new Date().toISOString(),
  }
];