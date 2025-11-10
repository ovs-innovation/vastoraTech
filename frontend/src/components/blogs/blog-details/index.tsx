import BreadcrumbTen from "@/components/common/breadcrumb/breadcrumb-10";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import BlogDetailsArticleArea from "./BlogDetailsArticleArea";
import BlogDetailsPostboxArea from "./BlogDetailsPostboxArea";

const BlogDetails = ({ blog }) => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbTen blog={blog} />
                <BlogDetailsPostboxArea blog={blog} />
                {/* Optionally pass blog to BlogDetailsArticleArea as well */}
                {/* <BlogDetailsArticleArea blog={blog} /> */}
            </main>
            <FooterFive style={true} style_2={true} />
        </>
    );
};

export default BlogDetails;