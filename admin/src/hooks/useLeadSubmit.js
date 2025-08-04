import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
import { SidebarContext } from "@/context/SidebarContext";
import LeadServices from "@/services/LeadServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const useLeadSubmit = (id) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      const leadData = {
        name: data.name,
        emailId: data.emailId,
        phoneNumber: data.phoneNumber,
        businessName: data.businessName,
        location: data.location,
        service: data.service,
        customService: data.customService,
        status: data.status,
        source: data.source,
        notes: data.notes,
      };

      if (id) {
        const res = await LeadServices.updateLead(id, leadData);
        setIsUpdate(true);
        notifySuccess(res.message);
        closeDrawer();
      }
      setIsSubmitting(false);
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message);
      closeDrawer();
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await LeadServices.getLeadById(id);
          if (res) {
            setValue("name", res.name);
            setValue("emailId", res.emailId);
            setValue("phoneNumber", res.phoneNumber);
            setValue("businessName", res.businessName);
            setValue("location", res.location);
            setValue("service", res.service);
            setValue("customService", res.customService);
            setValue("status", res.status);
            setValue("source", res.source);
            setValue("notes", res.notes);
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err?.message);
        }
      })();
    }
  }, [id, setValue]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
};

export default useLeadSubmit; 