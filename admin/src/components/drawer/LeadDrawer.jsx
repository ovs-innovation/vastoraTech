import { Button, Input, Label, Select } from "@windmill/react-ui";
import { t } from "i18next";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

//internal import
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/Error";
import InputArea from "@/components/form/input/InputArea";
import LabelArea from "@/components/form/selectOption/LabelArea";
import TextAreaCom from "@/components/form/input/TextAreaCom";
import useLeadSubmit from "@/hooks/useLeadSubmit";
import DrawerButton from "@/components/form/button/DrawerButton";

const LeadDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useLeadSubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title={t("EditLead")}
            description={t("Update your lead information from here")}
          />
        ) : (
          <Title
            title={t("AddLead")}
            description={t("Add your lead information from here")}
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Name")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label={t("Name")}
                  name="name"
                  type="text"
                  placeholder={t("EnterName")}
                />
                <Error errorName={errors.name} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Email")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label={t("Email")}
                  name="emailId"
                  type="email"
                  placeholder={t("EnterEmail")}
                />
                <Error errorName={errors.emailId} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("PhoneNumber")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  label={t("PhoneNumber")}
                  name="phoneNumber"
                  type="text"
                  placeholder={t("EnterPhoneNumber")}
                />
                <Error errorName={errors.phoneNumber} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("BusinessName")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label={t("BusinessName")}
                  name="businessName"
                  type="text"
                  placeholder={t("EnterBusinessName")}
                />
                <Error errorName={errors.businessName} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Location")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label={t("Location")}
                  name="location"
                  type="text"
                  placeholder={t("EnterLocation")}
                />
                <Error errorName={errors.location} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Service")} />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  {...register("service")}
                  className="border border-gray-300 bg-gray-50 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">{t("Select a service")}</option>
                  <option value="seo">{t("SEO")}</option>
                  <option value="social-media-marketing">{t("Social Media Marketing")}</option>
                  <option value="website-design">{t("Website Design")}</option>
                  <option value="ecommerce-website">{t("Ecommerce Website")}</option>
                  <option value="mobile-app-development">{t("Mobile App Development")}</option>
                  <option value="google-ads">{t("Google Ads")}</option>
                  <option value="content-marketing">{t("Content Marketing")}</option>
                  <option value="other">{t("Other")}</option>
                </Select>
                <Error errorName={errors.service} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Status")} />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  {...register("status")}
                  className="border border-gray-300 bg-gray-50 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="new">{t("New")}</option>
                  <option value="contacted">{t("Contacted")}</option>
                  <option value="qualified">{t("Qualified")}</option>
                  <option value="converted">{t("Converted")}</option>
                  <option value="lost">{t("Lost")}</option>
                </Select>
                <Error errorName={errors.status} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Source")} />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  {...register("source")}
                  className="border border-gray-300 bg-gray-50 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="website">{t("Website")}</option>
                  <option value="social-media">{t("SocialMedia")}</option>
                  <option value="referral">{t("Referral")}</option>
                  <option value="advertising">{t("Advertising")}</option>
                  <option value="other">{t("Other")}</option>
                </Select>
                <Error errorName={errors.source} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("CustomService")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label={t("CustomService")}
                  name="customService"
                  type="text"
                  placeholder={t("EnterCustomService")}
                />
                <Error errorName={errors.customService} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("Notes")} />
              <div className="col-span-8 sm:col-span-4">
                <TextAreaCom
                  register={register}
                  label={t("Notes")}
                  name="notes"
                  placeholder={t("EnterNotes")}
                />
                <Error errorName={errors.notes} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Lead" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default LeadDrawer; 