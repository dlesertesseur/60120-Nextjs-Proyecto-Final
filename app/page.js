
import Banner from "./components/commons/Banner";
import Offers from "./components/product/Offers";

export default function Home() {
  return (
    <main className="container m-aut">
      <Banner title={"Ofertas"} subtitle={"Por tiempo limitado"}/>
      <Offers/>
      <Banner title={"Descuentos"} subtitle={"Llevando dos unidades al precio de una"}/>
      <Offers/>
    </main>
  );
}
