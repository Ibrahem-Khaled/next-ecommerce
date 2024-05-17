import Footer from "@/components/Footer";
import Products from "@/components/Items";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="content">
      <Navbar/>
      <Products />
      <Footer/>
    </div>
  );
}
