import CartDetails from "@/components/home/cart/CartDetails";
import ProductDetails from "@/components/home/product/ProductDetails";

export default function Home() {
  return (
    <main className="text-brand-primary">
      <div className="min-h-screen flex justify-between">
        {/* Cart details */}
        <CartDetails />
        {/* Product List */}
        <ProductDetails />
      </div>
    </main>
  );
}
