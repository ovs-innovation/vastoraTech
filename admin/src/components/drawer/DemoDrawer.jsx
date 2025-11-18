import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea, Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { Scrollbars } from "react-custom-scrollbars-2";
import DemoServices from "@/services/DemoServices";
import { notifySuccess, notifyError } from "@/utils/toast";
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import LabelArea from "@/components/form/selectOption/LabelArea";
import InputArea from "@/components/form/input/InputArea";
import Uploader from "@/components/image-uploader/Uploader";
import DrawerButton from "@/components/form/button/DrawerButton";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";

const DemoDrawer = ({ id }) => {
  const { t } = useTranslation();
  const { toggleDrawer } = useToggleDrawer();
  const { closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [featuresList, setFeaturesList] = useState([]);
  const [featuresOverview, setFeaturesOverview] = useState({});
  const [featureKey, setFeatureKey] = useState("");
  const [featureValue, setFeatureValue] = useState("");
  const [featureItem, setFeatureItem] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [specifications, setSpecifications] = useState({});
  const [specKey, setSpecKey] = useState("");
  const [specValue, setSpecValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();

  const titleValue = watch("title");
  const slugValue = watch("slug");

  const slugify = (text = "") =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  useEffect(() => {
    if (id) {
      setLoading(true);
      DemoServices.getDemoById(id)
        .then((res) => {
          if (res && res.data) {
            const demo = res.data;
            setValue("title", demo.title || "");
            setValue("slug", demo.slug || "");
            setValue("subtitle", demo.subtitle || "");
            setValue("description", demo.description || "");
            setValue("category", demo.category || "");
            setValue("demoUrl", demo.demoUrl || "");
            setValue("adminDemoUrl", demo.adminDemoUrl || "");
            setImageUrl(demo.image || (demo.images && demo.images[0]) || "");
            setFeaturesList(demo.featuresList || demo.features || []);
            setFeaturesOverview(demo.featuresOverview || {});
            setTechnologies(demo.technologies || []);
            setSpecifications(demo.specifications || {});
          }
        })
        .catch((err) => {
          notifyError(err?.response?.data?.message || "Failed to load demo");
        })
        .finally(() => setLoading(false));
    } else {
      reset();
      setImageUrl("");
      setFeaturesList([]);
      setFeaturesOverview({});
      setTechnologies([]);
      setSpecifications({});
    }
  }, [id, setValue, reset]);

  useEffect(() => {
    if (titleValue !== undefined) {
      const generatedSlug = titleValue ? slugify(titleValue) : "";
      setValue("slug", generatedSlug, { shouldDirty: true });
    }
  }, [titleValue, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const payload = {
        ...data,
        image: imageUrl,
        images: imageUrl ? [imageUrl] : [],
        featuresList,
        featuresOverview,
        features: featuresList, // for backward compatibility
        technologies,
        specifications,
      };

      if (id) {
        const res = await DemoServices.updateDemo(id, payload);
        if (res?.success) {
          notifySuccess(res.message || "Demo updated successfully");
        } else {
          notifySuccess("Demo updated successfully");
        }
      } else {
        const res = await DemoServices.addDemo(payload);
        if (res?.success) {
          notifySuccess(res.message || "Demo created successfully");
        } else {
          notifySuccess("Demo created successfully");
        }
      }
      setIsUpdate(true);
      closeDrawer();
    } catch (err) {
      notifyError(err?.response?.data?.message || "Failed to save demo");
    } finally {
      setLoading(false);
    }
  };

  const addFeatureOverview = () => {
    if (featureKey && featureValue) {
      setFeaturesOverview({ ...featuresOverview, [featureKey]: featureValue });
      setFeatureKey("");
      setFeatureValue("");
    }
  };

  const removeFeatureOverview = (key) => {
    const newOverview = { ...featuresOverview };
    delete newOverview[key];
    setFeaturesOverview(newOverview);
  };

  const addFeatureItem = () => {
    if (featureItem.trim()) {
      setFeaturesList([...featuresList, featureItem.trim()]);
      setFeatureItem("");
    }
  };

  const removeFeatureItem = (index) => {
    setFeaturesList(featuresList.filter((_, i) => i !== index));
  };

  const addSpecification = () => {
    if (specKey && specValue) {
      setSpecifications({ ...specifications, [specKey]: specValue });
      setSpecKey("");
      setSpecValue("");
    }
  };

  const removeSpecification = (key) => {
    const newSpecs = { ...specifications };
    delete newSpecs[key];
    setSpecifications(newSpecs);
  };

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title title="Update Demo" description="Update demo information" />
        ) : (
          <Title title="Add Demo" description="Create a new demo project" />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Title" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label="Title"
                  name="title"
                  type="text"
                  placeholder="Demo Title"
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Slug" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register("slug", {
                    required: "Slug is required!",
                  })}
                  value={slugValue || ""}
                  readOnly
                  name="slug"
                  type="text"
                  className="mr-2 h-12 p-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                />
                <Error errorName={errors.slug} />
                <p className="text-xs text-gray-500 mt-1">
                  Slug is generated automatically from the title.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Subtitle" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Subtitle"
                  name="subtitle"
                  type="text"
                  placeholder="Demo Subtitle"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Description" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  {...register("description", {
                    required: "Description is required!",
                  })}
                  name="description"
                  rows="4"
                  placeholder="Demo Description"
                  className="mb-4"
                />
                <Error errorName={errors.description} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Category"
                  name="category"
                  type="text"
                  placeholder="E-commerce, Hospitality, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Frontend Live Preview URL" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Frontend Live Preview URL"
                  name="demoUrl"
                  type="url"
                  placeholder="https://frontend-demo.example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Admin Dashboard Preview URL" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Admin Dashboard Preview URL"
                  name="adminDemoUrl"
                  type="url"
                  placeholder="https://admin-demo.example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Image" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  folder="demos"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Features Overview (Key-Value)" />
              <div className="col-span-8 sm:col-span-4">
                <div className="flex gap-2 mb-2">
                  <Input
                    value={featureKey}
                    onChange={(e) => setFeatureKey(e.target.value)}
                    placeholder="Feature Key"
                    className="flex-1"
                  />
                  <Input
                    value={featureValue}
                    onChange={(e) => setFeatureValue(e.target.value)}
                    placeholder="Feature Value"
                    className="flex-1"
                  />
                  <Button type="button" onClick={addFeatureOverview}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(featuresOverview).map(([key, value]) => (
                    <span
                      key={key}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded flex items-center gap-2"
                    >
                      <strong>{key}:</strong> {value}
                      <button
                        type="button"
                        onClick={() => removeFeatureOverview(key)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Features List" />
              <div className="col-span-8 sm:col-span-4">
                <div className="flex gap-2 mb-2">
                  <Input
                    value={featureItem}
                    onChange={(e) => setFeatureItem(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addFeatureItem();
                      }
                    }}
                    placeholder="Enter feature and press Enter"
                    className="flex-1"
                  />
                  <Button type="button" onClick={addFeatureItem}>
                    Add
                  </Button>
                </div>
                <ul className="list-disc list-inside mt-2">
                  {featuresList.map((item, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span>{item}</span>
                      <button
                        type="button"
                        onClick={() => removeFeatureItem(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Technologies (Images)" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={technologies}
                  setImageUrl={setTechnologies}
                  folder="demos/technologies"
                  product={true}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload technology logo/icon images (e.g., React, Next.js, Bootstrap icons).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Specifications (Key-Value)" />
              <div className="col-span-8 sm:col-span-4">
                <div className="flex gap-2 mb-2">
                  <Input
                    value={specKey}
                    onChange={(e) => setSpecKey(e.target.value)}
                    placeholder="Specification Key (e.g., High Resolution)"
                    className="flex-1"
                  />
                  <Input
                    value={specValue}
                    onChange={(e) => setSpecValue(e.target.value)}
                    placeholder="Specification Value (e.g., Yes)"
                    className="flex-1"
                  />
                  <Button type="button" onClick={addSpecification}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(specifications).map(([key, value]) => (
                    <span
                      key={key}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded flex items-center gap-2"
                    >
                      <strong>{key}:</strong> {value}
                      <button
                        type="button"
                        onClick={() => removeSpecification(key)}
                        className="text-red-500 hover:text-red-700 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Add specifications like "High Resolution", "Compatible Browsers", "Layout", etc.
                </p>
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Demo" isSubmitting={loading} />
        </form>
      </Scrollbars>
    </>
  );
};

export default DemoDrawer;
