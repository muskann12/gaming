'use client'

import Link from 'next/link';
import { useGameStore } from '../contexts/GameStoreContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/button';
import { Separator } from '@radix-ui/react-select';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity, getFormattedPrice, getCartTotal } = useGameStore();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <ShoppingBag size={64} className="text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/" className="flex items-center gap-2">
          <Button variant="outline" leftIcon={<ArrowLeft size={16} />}>
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="hidden md:grid md:grid-cols-5 mb-6 text-sm font-medium text-gray-500 uppercase">
              <span className="md:col-span-2">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            
            <Separator className="mb-6" />
            
            {cartItems.map((item) => (
              <div key={item.product.id} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="md:col-span-2 flex items-center space-x-4">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-medium">
                        <Link href={`/product/${item.product.id}`} className="hover:text-game-pink">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">{item.product.platform} | {item.product.category}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="md:hidden text-gray-500">Price: </span>
                    <span className="font-medium">{getFormattedPrice(item.product.price)}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                        onClick={() => updateCartItemQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1 border-l border-r">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                        onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="md:hidden text-gray-500">Total: </span>
                      <span className="font-bold">{getFormattedPrice(item.product.price * item.quantity)}</span>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <Separator className="my-6" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Order summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{getFormattedPrice(getCartTotal())}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-game-pink">{getFormattedPrice(getCartTotal())}</span>
              </div>
            </div>
            
            <Button className="w-full mt-6" variant="pink">
              Proceed to Checkout
            </Button>
            
            <div className="mt-6 text-center">
              <Link href="/">
                <Button variant="outline" leftIcon={<ArrowLeft size={16} />} className="text-game-pink hover:underline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;