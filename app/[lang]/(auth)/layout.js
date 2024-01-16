import Layout from "components/Layout";

export default async function RootLayout({ children }) {
  return (
    <Layout isShowCategory={false} categoriesJson={null}>
      {children}
    </Layout>
  );
}
