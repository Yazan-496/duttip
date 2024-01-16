import Layout from "components/Layout";

const _getCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_VERSION}items/get_categories`
  );
  const categories = res.json();
  return categories;
};
export default async function RootLayout({ children }) {
  const categories = await _getCategories();
  return (
    <Layout isShowCategory={true} categoriesJson={categories}>
      {children}
    </Layout>
  );
}
