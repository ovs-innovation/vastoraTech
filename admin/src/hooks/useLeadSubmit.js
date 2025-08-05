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
        if (res.success) {
          setIsUpdate(true);
          notifySuccess(res.message);
          closeDrawer();
        } else {
          notifyError(res.message || "Failed to update lead");
        }
      } else {
        const res = await LeadServices.createLead(leadData);
        if (res.success) {
          setIsUpdate(true);
          notifySuccess(res.message);
          closeDrawer();
        } else {
          notifyError(res.message || "Failed to create lead");
        }
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await LeadServices.getLeadById(id);
          if (res.success && res.data) {
            const lead = res.data;
            setValue("name", lead.name || "");
            setValue("emailId", lead.emailId || "");
            setValue("phoneNumber", lead.phoneNumber || "");
            setValue("businessName", lead.businessName || "");
            setValue("location", lead.location || "");
            setValue("service", lead.service || "other");
            setValue("customService", lead.customService || "");
            setValue("status", lead.status || "new");
            setValue("source", lead.source || "website");
            setValue("notes", lead.notes || "");
          } else {
            notifyError("Failed to fetch lead data");
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err?.message || "Failed to fetch lead data");
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