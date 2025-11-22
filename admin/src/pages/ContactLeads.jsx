import {
  Card,
  Button,
  CardBody,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
  Select,
} from "@windmill/react-ui";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { FiTrash2 } from "react-icons/fi";
//internal import
import TableLoading from "@/components/preloader/TableLoading";
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import ContactResponseServices from "@/services/ContactResponseServices";
import AnimatedContent from "@/components/common/AnimatedContent";
import Tooltip from "@/components/tooltip/Tooltip";
import { notifySuccess, notifyError } from "@/utils/toast";

const ContactLeads = () => {
  const { t } = useTranslation();
  const [contactResponses, setContactResponses] = useState([]);
  const [contactTotal, setContactTotal] = useState(0);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactError, setContactError] = useState("");
  const [contactStatusFilter, setContactStatusFilter] = useState("");
  const [contactPage, setContactPage] = useState(1);
  const [contactUpdatingId, setContactUpdatingId] = useState(null);
  const [contactDeletingId, setContactDeletingId] = useState(null);
  const [allContactResponses, setAllContactResponses] = useState([]);
  const contactResultsPerPage = 10;

  // Fetch all data for stats
  React.useEffect(() => {
    let isMounted = true;
    const fetchAllForStats = async () => {
      try {
        const response = await ContactResponseServices.getAll({
          page: 1,
          limit: 1000,
          sortBy: "createdAt",
          sortOrder: "desc",
        });
        if (!isMounted) return;
        setAllContactResponses(response?.data || []);
      } catch (error) {
        console.error("Error fetching stats data:", error);
      }
    };
    fetchAllForStats();
    return () => {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    let isMounted = true;
    const fetchContactResponses = async () => {
      setContactLoading(true);
      setContactError("");
      try {
        const response = await ContactResponseServices.getAll({
          page: contactPage,
          limit: contactResultsPerPage,
          status: contactStatusFilter,
          sortBy: "createdAt",
          sortOrder: "desc",
        });
        if (!isMounted) return;
        setContactResponses(response?.data || []);
        setContactTotal(response?.totalDoc || response?.total || 0);
      } catch (error) {
        if (!isMounted) return;
        setContactError(
          error?.message || "Failed to load contact form responses."
        );
      } finally {
        if (isMounted) {
          setContactLoading(false);
        }
      }
    };
    fetchContactResponses();
    return () => {
      isMounted = false;
    };
  }, [contactPage, contactStatusFilter]);

  const contactStats = React.useMemo(() => {
    const total = allContactResponses.length;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayCount = allContactResponses.filter((item) => {
      const itemDate = new Date(item.createdAt);
      itemDate.setHours(0, 0, 0, 0);
      return itemDate.getTime() === today.getTime();
    }).length;

    const byStatus = {
      new: 0,
      "in-progress": 0,
      resolved: 0,
    };
    allContactResponses.forEach((item) => {
      const key = item.status || "new";
      if (byStatus[key] !== undefined) {
        byStatus[key] += 1;
      }
    });

    return { total, today: todayCount, byStatus };
  }, [allContactResponses]);

  const formatDateTime = (value) => {
    if (!value) return "-";
    return dayjs(value).format("MMM D, YYYY");
  };

  const handleContactStatusChange = async (id, nextStatus) => {
    if (!id || !nextStatus) return;
    setContactUpdatingId(id);
    try {
      await ContactResponseServices.updateStatus(id, nextStatus);
      setContactResponses((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                status: nextStatus,
                respondedAt: nextStatus === "resolved" ? new Date() : item.respondedAt,
              }
            : item
        )
      );
      setAllContactResponses((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                status: nextStatus,
                respondedAt: nextStatus === "resolved" ? new Date() : item.respondedAt,
              }
            : item
        )
      );
      notifySuccess("Status updated successfully");
    } catch (error) {
      console.error(error);
      notifyError(error?.message || "Failed to update status");
    } finally {
      setContactUpdatingId(null);
    }
  };

  const handleContactDelete = async (id) => {
    if (!id) return;
    const shouldDelete = window.confirm(
      "Delete this contact submission? This cannot be undone."
    );
    if (!shouldDelete) return;

    setContactDeletingId(id);
    try {
      await ContactResponseServices.delete(id);
      setContactResponses((prev) => prev.filter((item) => item._id !== id));
      setAllContactResponses((prev) => prev.filter((item) => item._id !== id));
      setContactTotal((prev) => Math.max(0, prev - 1));
      notifySuccess("Contact submission deleted successfully");
    } catch (error) {
      console.error(error);
      notifyError(error?.message || "Failed to delete contact submission");
    } finally {
      setContactDeletingId(null);
    }
  };


  return (
    <>
      <PageTitle>{t("ContactResponses")}</PageTitle>

      {/* Stats Cards */}
      {contactStats && (
        <AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardBody>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Responses</p>
                    <p className="text-2xl font-semibold text-gray-900">{contactStats.total}</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Today's Responses</p>
                    <p className="text-2xl font-semibold text-gray-900">{contactStats.today}</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">New</p>
                    <p className="text-2xl font-semibold text-gray-900">{contactStats.byStatus.new || 0}</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Resolved</p>
                    <p className="text-2xl font-semibold text-gray-900">{contactStats.byStatus.resolved || 0}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </AnimatedContent>
      )}

      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody>
            <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Select
                  value={contactStatusFilter}
                  onChange={(e) => {
                    setContactStatusFilter(e.target.value);
                    setContactPage(1);
                  }}
                >
                  <option value="" defaultValue hidden>
                    {t("AllStatuses")}
                  </option>
                  <option value="new">{t("New")}</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </Select>
              </div>

              <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <div className="w-full">
                  <Button
                    layout="outline"
                    onClick={() => {
                      setContactStatusFilter("");
                      setContactPage(1);
                    }}
                    type="button"
                    className="px-4 md:py-1 py-3 text-sm dark:bg-gray-700"
                  >
                    <span className="text-black dark:text-gray-200">{t("Reset")}</span>
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>

        {contactLoading ? (
          <TableLoading row={12} col={7} width={190} height={20} />
        ) : contactError ? (
          <span className="text-center mx-auto text-red-500">{contactError}</span>
        ) : contactResponses.length !== 0 ? (
          <TableContainer className="mb-8 rounded-b-lg">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell className="whitespace-nowrap">Received</TableCell>
                    <TableCell className="whitespace-nowrap">Name</TableCell>
                    <TableCell className="whitespace-nowrap">Email</TableCell>
                    <TableCell className="whitespace-nowrap max-w-xs">Subject</TableCell>
                    <TableCell className="whitespace-nowrap">Status</TableCell>
                    <TableCell className="whitespace-nowrap max-w-xs">Message</TableCell>
                    <TableCell className="text-center whitespace-nowrap" style={{ minWidth: '150px', maxWidth: '200px' }}>Actions</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {contactResponses.map((response) => (
                    <TableRow key={response._id}>
                      <TableCell className="whitespace-nowrap">{formatDateTime(response.createdAt)}</TableCell>
                      <TableCell className="whitespace-nowrap">{response.fullName}</TableCell>
                      <TableCell className="whitespace-nowrap">
                        <div className="max-w-xs truncate" title={response.email}>
                          {response.email}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate" title={response.subject}>
                          {response.subject}
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            response.status === "resolved"
                              ? "bg-green-100 text-green-700"
                              : response.status === "in-progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {response.status || "new"}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate text-sm text-gray-600" title={response.message}>
                          {response.message}
                        </div>
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap" style={{ minWidth: '180px', maxWidth: '240px' }}>
                        <div className="flex items-center justify-center gap-2">
                          <Select
                            value={response.status || "new"}
                            onChange={(e) => handleContactStatusChange(response._id, e.target.value)}
                            disabled={contactUpdatingId === response._id}
                            className="h-8 text-xs"
                          >
                            <option value="new">New</option>
                            <option value="in-progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                          </Select>
                          <button
                            onClick={() => handleContactDelete(response._id)}
                            disabled={contactDeletingId === response._id}
                            className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none"
                            type="button"
                          >
                            <Tooltip
                              id={`delete-contact-${response._id}`}
                              Icon={FiTrash2}
                              title={t("Delete")}
                              bgColor="#EF4444"
                            />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <TableFooter>
              <Pagination
                totalResults={contactTotal}
                resultsPerPage={contactResultsPerPage}
                onChange={setContactPage}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        ) : (
          <NotFound title="Sorry, There are no contact form responses right now." />
        )}
      </AnimatedContent>
    </>
  );
};

export default ContactLeads;

