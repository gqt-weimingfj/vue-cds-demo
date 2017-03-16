import Hello from '@/components/Hello'
import Product from '@/pages/product/product.vue'

export default [
  	{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
]