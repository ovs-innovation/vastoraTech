import {
  Card,
  CardBody,
  Button,
  Badge,
} from "@windmill/react-ui";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

//internal import
import PageTitle from "@/components/Typography/PageTitle";
import LeadServices from "@/services/LeadServices";
import AnimatedContent from "@/components/common/AnimatedContent";

const LeadDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLead = async () => {
      try {
        setLoading(true);
        const response = await LeadServices.getLeadById(id);
        if (response.success) {
          setLead(response.data);
        } else {
          setError(response.message || "Failed to fetch lead");
        }
      } catch (error) {
        setError("Error fetching lead");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchLead();
    }
  }, [id]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'qualified':
        return 'bg-green-100 text-green-800';
      case 'converted':
        return 'bg-purple-100 text-purple-800';
      case 'lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getServiceLabel = (service) => {
    switch (service) {
      case 'web-development':
        return t('WebDevelopment');
      case 'mobile-development':
        return t('MobileDevelopment');
      case 'ui-ux-design':
        return t('UIUXDesign');
      case 'digital-marketing':
        return t('DigitalMarketing');
      case 'seo':
        return t('SEO');
      case 'consulting':
        return t('Consulting');
      case 'other':
        return t('Other');
      default:
        return service;
    }
  };

  const getSourceLabel = (source) => {
    switch (source) {
      case 'website':
        return t('Website');
      case 'social-media':
        return t('SocialMedia');
      case 'referral':
        return t('Referral');
      case 'advertising':
        return t('Advertising');
      case 'other':
        return t('Other');
      default:
        return source;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Lead not found</div>
      </div>
    );
  }

  return (
    <>
      <PageTitle>{t("LeadDetails")}</PageTitle>

      <AnimatedContent>
        <div className="mb-4">
          <Button
            layout="outline"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            ← {t("Back")}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Lead Information */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardBody>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {lead.name}
                  </h2>
                  <Badge className={getStatusColor(lead.status)}>
                    {lead.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      {t("ContactInformation")}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-600">{t("Email")}:</span>
                        <p className="text-sm text-gray-900">{lead.emailId}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">{t("Phone")}:</span>
                        <p className="text-sm text-gray-900">{lead.phoneNumber}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      {t("BusinessInformation")}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-600">{t("BusinessName")}:</span>
                        <p className="text-sm text-gray-900">{lead.businessName || "N/A"}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">{t("Location")}:</span>
                        <p className="text-sm text-gray-900">{lead.location || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Service Information */}
            <Card className="mb-6">
              <CardBody>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {t("ServiceInformation")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm font-medium text-gray-600">{t("Service")}:</span>
                    <p className="text-sm text-gray-900">{getServiceLabel(lead.service)}</p>
                  </div>
                  {lead.service === "other" && lead.customService && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">{t("CustomService")}:</span>
                      <p className="text-sm text-gray-900">{lead.customService}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-sm font-medium text-gray-600">{t("Source")}:</span>
                    <p className="text-sm text-gray-900">{getSourceLabel(lead.source)}</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Notes */}
            {lead.notes && (
              <Card>
                <CardBody>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {t("Notes")}
                  </h3>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {lead.notes}
                  </p>
                </CardBody>
              </Card>
            )}
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardBody>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {t("LeadInformation")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">{t("LeadId")}:</span>
                    <p className="text-sm text-gray-900 font-mono">{lead._id}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">{t("CreatedDate")}:</span>
                    <p className="text-sm text-gray-900">
                      {dayjs(lead.createdAt).format("MMM D, YYYY h:mm A")}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">{t("LastUpdated")}:</span>
                    <p className="text-sm text-gray-900">
                      {dayjs(lead.updatedAt).format("MMM D, YYYY h:mm A")}
                    </p>
                  </div>
                  {lead.assignedTo && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">{t("AssignedTo")}:</span>
                      <p className="text-sm text-gray-900">{lead.assignedTo.name}</p>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>

            {/* Actions */}
            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {t("Actions")}
                </h3>
                <div className="space-y-3">
                  <Button
                    className="w-full"
                    onClick={() => navigate(`/edit-lead/${lead._id}`)}
                  >
                    {t("EditLead")}
                  </Button>
                  <Button
                    layout="outline"
                    className="w-full"
                    onClick={() => navigate(-1)}
                  >
                    {t("BackToList")}
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </AnimatedContent>
    </>
  );
};

export default LeadDetails; 