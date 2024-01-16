import CategoriesPage from "components/Pages/Categories";
import axios from "axios";

export async function generateMetadata({ params, searchParams }, parent) {
    // return await getMetaDataFunction(params);
}
 const Category = async ({ params: { slug } }) => {

    const categoryApi = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + process.env.NEXT_PUBLIC_BASE_VERSION + `api/web_v10/products/details/${slug}`,
        {
            next: {revalidate: 1},
        }
    );
    // const categoryRes = await categoryApi.json();
    const categoryDetails =  {};
    // const categoryDetails = categoryRes.data || {};

    return <CategoriesPage categoryProps={categoryDetails}/>;
};

export default Category;

const getMetaDataFunction = async ({ slug }) => {
    const defaultDescription =
      `<p><strong>${process.env.NEXT_PUBLIC_BASE_TITLE} is the ecommerce version  and the online operational name of Master out`
    const defaultTitle = `Welcome To ${process.env.NEXT_PUBLIC_BASE_TITLE}`

    const seo = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_LIVE}api/web_v10/products/details/${slug}`).then((res) => {
        return res.data.data
    })
    const seoProduct = { title: seo?.name, description: seo?.description, images: seo?.images, icon: seo?.thumbnail }

    return {
        title: seoProduct?.title || defaultTitle,
        description: seoProduct?.description || defaultDescription,
        openGraph: {
            images: seoProduct?.images || [],
            icons: {
                icon: seoProduct?.icon,
            },
        },
    }
}
