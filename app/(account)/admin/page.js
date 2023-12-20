import ProductsListPanel from "@/app/components/admin/ProductsListPanel";

export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div className="container m-auto">
      <ProductsListPanel />
    </div>
  );
};

export default page;
