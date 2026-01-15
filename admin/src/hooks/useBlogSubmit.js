import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "@/context/SidebarContext";
import BlogServices from "@/services/BlogServices";
import BlogCategoryServices from "@/services/BlogCategoryServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const useBlogSubmit = (id) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const { closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Generate slug from title if not provided
      let slug = data.slug;
      if (!slug && data.title) {
        slug = data.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }

      const blogData = {
        title: data.title,
        slug: slug,
        category: data.category,
        description: data.description || "",
        content: data.content || "",
        image: imageUrl || "",
        images: images || [],
        video: data.video === true || data.video === "true",
        videoUrl: data.videoUrl || "",
        author: data.author,
        authorAvatar: data.authorAvatar || "",
        tags: tags || [],
        faqs: faqs || [],
        status: data.status || "draft",
        featured: data.featured === true || data.featured === "true",
      };

      if (id) {
        const res = await BlogServices.updateBlog(id, blogData);
        if (res.success) {
          setIsUpdate(true);
          notifySuccess(res.message || "Blog updated successfully!");
          closeDrawer();
        } else {
          notifyError(res.message || "Failed to update blog");
        }
      } else {
        const res = await BlogServices.addBlog(blogData);
        if (res.success) {
          setIsUpdate(true);
          notifySuccess(res.message || "Blog created successfully!");
          closeDrawer();
          // Reset form
          setValue("title", "");
          setValue("slug", "");
          setValue("category", "");
          setValue("description", "");
          setValue("content", "");
          setValue("author", "");
          setImageUrl("");
          setImages([]);
          setTags([]);
          setFaqs([]);
        } else {
          notifyError(res.message || "Failed to create blog");
        }
      }
    } catch (err) {
      notifyError(
        err?.response?.data?.message || err?.message || "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await BlogCategoryServices.getAllCategories();
        if (res?.success && Array.isArray(res.data)) {
          setCategories(res.data);
        }
      } catch (err) {
        notifyError(err?.response?.data?.message || err?.message || "Failed to load categories");
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await BlogServices.getBlogById(id);
          if (res.success && res.data) {
            const blog = res.data;
            setCurrentBlog(blog);
            setValue("title", blog.title || "");
            setValue("slug", blog.slug || "");
            setValue("category", blog.category || "");
            setValue("description", blog.description || "");
            setValue("content", blog.content || "");
            setValue("author", blog.author || "");
            setValue("authorAvatar", blog.authorAvatar || "");
            setValue("status", blog.status || "draft");
            setValue("featured", blog.featured === true);
            setValue("video", blog.video === true);
            setValue("videoUrl", blog.videoUrl || "");
            setImageUrl(blog.image || "");
            setImages(blog.images || []);
            setTags(blog.tags || []);
            setFaqs(blog.faqs || []);
          }
        } catch (err) {
          notifyError("Failed to load blog data");
        }
      })();
    } else {
      setCurrentBlog(null);
      // Reset form for new blog
      setValue("title", "");
      setValue("slug", "");
      setValue("category", "");
      setValue("description", "");
      setValue("content", "");
      setValue("author", "");
      setValue("authorAvatar", "");
      setValue("status", "draft");
      setValue("featured", false);
      setValue("video", false);
      setValue("videoUrl", "");
      setImageUrl("");
      setImages([]);
      setTags([]);
      setFaqs([]);
    }
  }, [id, setValue]);

  useEffect(() => {
    if (!categories.length) return;
    if (currentBlog?.category) {
      const exists = categories.some((cat) => cat?.name === currentBlog.category);
      if (!exists) {
        setCategories((prev) => [
          ...prev,
          {
            _id: `custom-${currentBlog.category}`,
            name: currentBlog.category,
            description: "",
            status: "active",
          },
        ]);
      }
      setValue("category", currentBlog.category);
    }
  }, [categories, currentBlog, setValue]);

  const handleSlugChange = (title) => {
    if (title) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setValue,
    isSubmitting,
    imageUrl,
    setImageUrl,
    images,
    setImages,
    tags,
    setTags,
    faqs,
    setFaqs,
    categories,
    currentBlog,
    handleSlugChange,
  };
};

export default useBlogSubmit;

