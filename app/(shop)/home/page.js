import Banner from "@/app/components/commons/Banner";
import ProductsGroup from "@/app/components/product/ProductsGroup";

export default function Home() {
  return (
    <main className="container m-aut">
      <Banner title={"Ofertas"} subtitle={"Por tiempo limitado"}/>
      <ProductsGroup situation={"OFERTA"}/>
      <Banner title={"Descuentos"} subtitle={"Llevando dos unidades al precio de una"}/>
      <ProductsGroup situation={"DESCUENTO"}/>
      <Banner title={"Destacados"} subtitle={"Productos destacados del mes"}/>
      <ProductsGroup situation={"DESTACADO"}/>
    </main>
  );
}
