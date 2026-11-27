import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea, Select } from "@windmill/react-ui";
import { Scrollbars } from "react-custom-scrollbars-2";

import WorkServices from "@/services/WorkServices";
import { notifySuccess, notifyError } from "@/utils/toast";
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import LabelArea from "@/components/form/selectOption/LabelArea";
import InputArea from "@/components/form/input/InputArea";
import Uploader from "@/components/image-uploader/Uploader";
import DrawerButton from "@/components/form/button/DrawerButton";
import { SidebarContext } from "@/context/SidebarContext";

const WorkDrawer = ({ id }) => {
  const { closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [mobileImageUrl, setMobileImageUrl] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "E-commerce",
      link: "",
      description: "",
      client: "",
      order: 0,
      status: "show",
    },
  });

  useEffect(() => {
    if (id) {
      setLoading(true);
      WorkServices.getWorkById(id)
        .then((res) => {
          if (res && res.data) {
            const item = res.data;
            setValue("title", item.title || "");
            setValue("category", item.category || "E-commerce");
            setValue("link", item.link || "");
            setValue("description", item.description || "");
            setValue("client", item.client || "");
            setValue("order", item.order ?? 0);
            setValue("status", item.status || "show");
            setImageUrl(item.image || "");
            setMobileImageUrl(item.mobileImage || "");
            setTagsInput(Array.isArray(item.tags) ? item.tags.join(", ") : "");
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err?.response?.data?.message || err.message);
        });
    } else {
      reset({
        title: "",
        category: "E-commerce",
        link: "",
        description: "",
        client: "",
        order: 0,
        status: "show",
      });
      setImageUrl("");
      setMobileImageUrl("");
      setTagsInput("");
    }
  }, [id, setValue, reset]);

  const onSubmit = async (data) => {
    try {
      if (!imageUrl) {
        return notifyError("Please upload or provide a desktop showcase image!");
      }

      setLoading(true);

      const parsedTags = tagsInput
        ? tagsInput
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [];

      const payload = {
        title: data.title,
        category: data.category,
        link: data.link,
        image: imageUrl,
        mobileImage: mobileImageUrl || "",
        description: data.description,
        client: data.client,
        order: Number(data.order) || 0,
        status: data.status,
        tags: parsedTags,
      };

      if (id) {
        const res = await WorkServices.updateWork(id, payload);
        notifySuccess(res?.message || "Work updated successfully");
      } else {
        const res = await WorkServices.addWork(payload);
        notifySuccess(res?.message || "Work created successfully");
      }

      setIsUpdate(true);
      setLoading(false);
      closeDrawer();
    } catch (err) {
      setLoading(false);
      notifyError(err?.response?.data?.message || err.message || "Failed to save work");
    }
  };

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title={id ? "Update Work Item" : "Add New Work / Portfolio"}
          description={
            id
              ? "Update details, screenshot, or target live URL for this work."
              : "Add a new client showcase project that appears on the homepage 'Our work.' carousel."
          }
        />
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="block">
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            {/* Title */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Project Title *" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Project Title"
                  name="title"
                  type="text"
                  placeholder="e.g. TossMart, CandyFloss"
                  required
                />
                <Error errorName={errors.title} />
              </div>
            </div>

            {/* Category */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Category"
                  name="category"
                  type="text"
                  placeholder="e.g. E-commerce, SaaS, Real Estate, Beauty"
                />
                <Error errorName={errors.category} />
              </div>
            </div>

            {/* Live Website Link */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Live Website URL" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Website Link"
                  name="link"
                  type="url"
                  placeholder="https://tossmart.com/"
                />
                <Error errorName={errors.link} />
              </div>
            </div>

            {/* Desktop Showcase Image */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Showcase Image *" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  folder="portfolio"
                />
                <div className="mt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                    Or paste an image URL directly:
                  </span>
                  <Input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://... or /assets/img/portfolio/project-portfolio-1.png"
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Image (Optional) */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Mobile Image (Optional)" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  imageUrl={mobileImageUrl}
                  setImageUrl={setMobileImageUrl}
                  folder="portfolio/mobile"
                />
                <div className="mt-2">
                  <Input
                    type="text"
                    value={mobileImageUrl}
                    onChange={(e) => setMobileImageUrl(e.target.value)}
                    placeholder="Optional mobile view image URL"
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Description" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  className="border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white dark:bg-gray-700 dark:border-gray-600 rounded-md p-3"
                  {...register("description")}
                  name="description"
                  placeholder="Brief summary of the client and solution delivered..."
                  rows="3"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Tags (comma-separated)" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="E-commerce, Online Shopping, High Speed"
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-white rounded-md p-3"
                />
              </div>
            </div>

            {/* Sort Order & Status */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Display Order" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Display Order"
                  name="order"
                  type="number"
                  placeholder="1, 2, 3..."
                />
                <span className="text-xs text-gray-500 mt-1 block">
                  Lower numbers display first in the carousel.
                </span>
              </div>
            </div>

            {/* Status */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Status" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-white rounded-md p-3"
                  {...register("status")}
                >
                  <option value="show">Published (Show on Website)</option>
                  <option value="hide">Draft / Hidden</option>
                </Select>
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Work" isSubmitting={loading} />
        </form>
      </Scrollbars>
    </>
  );
};

export default WorkDrawer;
