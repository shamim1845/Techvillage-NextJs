import CartDetails from "@/components/home/cart/CartDetails";
import RenderComponent from "@/components/home/shared/RenderComponent";

export default function Home() {
  return (
    <main className="text-brand-primary">
      <div className="min-h-screen flex flex-col lg:flex-row gap-10 justify-between">
        {/* Cart details */}
        <CartDetails />

        <RenderComponent />
      </div>
    </main>
  );
}
