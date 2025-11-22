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
import { FiTrash2 } from "react-icons/fi";
import dayjs from "dayjs";

//internal import
import TableLoading from "@/components/preloader/TableLoading";
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import WhiteLabelResponseServices from "@/services/WhiteLabelResponseServices";
import AnimatedContent from "@/components/common/AnimatedContent";
import Tooltip from "@/components/tooltip/Tooltip";
import { notifySuccess, notifyError } from "@/utils/toast";

const WhiteLabelLeads = () => {
  const { t } = useTranslation();
  const [whiteLabelResponses, setWhiteLabelResponses] = useState([]);
  const [whiteLabelTotal, setWhiteLabelTotal] = useState(0);
  const [whiteLabelLoading, setWhiteLabelLoading] = useState(false);
  const [whiteLabelError, setWhiteLabelError] = useState("");
  const [whiteLabelDemoFilter, setWhiteLabelDemoFilter] = useState("");
  const [whiteLabelStatusFilter, setWhiteLabelStatusFilter] = useState("");
  const [whiteLabelPage, setWhiteLabelPage] = useState(1);
  const [whiteLabelUpdatingId, setWhiteLabelUpdatingId] = useState(null);
  const [whiteLabelDeletingId, setWhiteLabelDeletingId] = useState(null);
  const [allWhiteLabelResponses, setAllWhiteLabelResponses] = useState([]);
  const whiteLabelResultsPerPage = 20;

  // Fetch all data for stats
  React.useEffect(() => {
    let isMounted = true;
    const fetchAllForStats = async () => {
      try {
        const response = await WhiteLabelResponseServices.getAll({
          page: 1,
          limit: 1000,
          sortBy: "createdAt",
          sortOrder: "desc",
        });
        if (!isMounted) return;
        setAllWhiteLabelResponses(response?.data || response?.queries || []);
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
    const fetchWhiteLabelResponses = async () => {
      setWhiteLabelLoading(true);
      setWhiteLabelError("");
      try {
        const response = await WhiteLabelResponseServices.getAll({
          page: whiteLabelPage,
          limit: whiteLabelResultsPerPage,
          demoSlug: whiteLabelDemoFilter,
          status: whiteLabelStatusFilter,
          sortBy: "createdAt",
          sortOrder: "desc",
        });
        if (!isMounted) return;
        setWhiteLabelResponses(response?.data || response?.queries || []);
        setWhiteLabelTotal(response?.totalDoc || response?.total || 0);
      } catch (error) {
        if (!isMounted) return;
        setWhiteLabelError(
          error?.message || "Failed to load white label responses."
        );
      } finally {
        if (isMounted) {
          setWhiteLabelLoading(false);
        }
      }
    };
    fetchWhiteLabelResponses();
    return () => {
      isMounted = false;
    };
  }, [
    whiteLabelPage,
    whiteLabelDemoFilter,
    whiteLabelStatusFilter,
    whiteLabelResultsPerPage,
  ]);

  const whiteLabelDemoOptions = React.useMemo(() => {
    const set = new Set();
    whiteLabelResponses.forEach((item) => {
      if (item.demoSlug) {
        set.add(item.demoSlug);
      }
    });
    return Array.from(set);
  }, [whiteLabelResponses]);

  const whiteLabelStats = React.useMemo(() => {
    const total = allWhiteLabelResponses.length;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayCount = allWhiteLabelResponses.filter((item) => {
      const itemDate = new Date(item.createdAt);
      itemDate.setHours(0, 0, 0, 0);
      return itemDate.getTime() === today.getTime();
    }).length;

    const byStatus = {
      new: 0,
      "in-progress": 0,
      closed: 0,
    };
    allWhiteLabelResponses.forEach((item) => {
      const key = item.status || "new";
      if (byStatus[key] !== undefined) {
        byStatus[key] += 1;
      }
    });

    return { total, today: todayCount, byStatus };
  }, [allWhiteLabelResponses]);

  const formatDateTime = (value) => {
    if (!value) return "-";
    return dayjs(value).format("MMM D, YYYY");
  };

  const handleWhiteLabelStatusChange = async (id, nextStatus) => {
    if (!id || !nextStatus) return;
    setWhiteLabelUpdatingId(id);
    try {
      await WhiteLabelResponseServices.updateStatus(id, nextStatus);
      setWhiteLabelResponses((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                status: nextStatus,
              }
            : item
        )
      );
      setAllWhiteLabelResponses((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                status: nextStatus,
              }
            : item
        )
      );
      notifySuccess("Status updated successfully");
    } catch (error) {
      console.error(error);
      notifyError(error?.message || "Failed to update status");
    } finally {
      setWhiteLabelUpdatingId(null);
    }
  };

  const handleWhiteLabelDelete = async (id) => {
    if (!id) return;
  

    setWhiteLabelDeletingId(id);
    try {
      await WhiteLabelResponseServices.delete(id);
      setWhiteLabelResponses((prev) => prev.filter((item) => item._id !== id));
      setAllWhiteLabelResponses((prev) => prev.filter((item) => item._id !== id));
      setWhiteLabelTotal((prev) => Math.max(0, prev - 1));
      notifySuccess("White label enquiry deleted successfully");
    } catch (error) {
      console.error(error);
      notifyError(error?.message || "Failed to delete white label enquiry");
    } finally {
      setWhiteLabelDeletingId(null);
    }
  };

  return (
    <>
      <PageTitle>{t("WhiteLabelResponses")}</PageTitle>

      {/* Stats Cards */}
      {whiteLabelStats && (
        <AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardBody>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Enquiries</p>
                    <p className="text-2xl font-semibold text-gray-900">{whiteLabelStats.total}</p>
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
                    <p className="text-sm font-medium text-gray-600">Today's Enquiries</p>
                    <p className="text-2xl font-semibold text-gray-900">{whiteLabelStats.today}</p>
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
                    <p className="text-2xl font-semibold text-gray-900">{whiteLabelStats.byStatus.new || 0}</p>
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
                    <p className="text-sm font-medium text-gray-600">Closed</p>
                    <p className="text-2xl font-semibold text-gray-900">{whiteLabelStats.byStatus.closed || 0}</p>
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
                  value={whiteLabelDemoFilter}
                  onChange={(e) => {
                    setWhiteLabelDemoFilter(e.target.value);
                    setWhiteLabelPage(1);
                  }}
                >
                  <option value="">All Demos</option>
                  {whiteLabelDemoOptions.map((slug) => (
                    <option key={slug} value={slug}>
                      {slug}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Select
                  value={whiteLabelStatusFilter}
                  onChange={(e) => {
                    setWhiteLabelStatusFilter(e.target.value);
                    setWhiteLabelPage(1);
                  }}
                >
                  <option value="" defaultValue hidden>
                    {t("AllStatuses")}
                  </option>
                  <option value="new">{t("New")}</option>
                  <option value="in-progress">In Progress</option>
                  <option value="closed">Closed</option>
                </Select>
              </div>

              <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <div className="w-full">
                  <Button
                    layout="outline"
                    onClick={() => {
                      setWhiteLabelDemoFilter("");
                      setWhiteLabelStatusFilter("");
                      setWhiteLabelPage(1);
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

        {whiteLabelLoading ? (
          <TableLoading row={12} col={7} width={190} height={20} />
        ) : whiteLabelError ? (
          <span className="text-center mx-auto text-red-500">{whiteLabelError}</span>
        ) : whiteLabelResponses.length !== 0 ? (
          <TableContainer className="mb-8 rounded-b-lg">
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <tr>
                    <TableCell className="whitespace-nowrap" style={{ minWidth: '200px', maxWidth: '250px' }}>Demo</TableCell>
                    <TableCell className="whitespace-nowrap" style={{ minWidth: '150px', maxWidth: '200px' }}>Name</TableCell>
                    <TableCell className="whitespace-nowrap" style={{ minWidth: '180px', maxWidth: '220px' }}>Email</TableCell>
                    <TableCell className="whitespace-nowrap" style={{ minWidth: '150px', maxWidth: '200px' }}>Company</TableCell>
                    <TableCell className="whitespace-nowrap" style={{ minWidth: '100px', maxWidth: '120px' }}>Status</TableCell>
                    <TableCell className="whitespace-nowrap" style={{ minWidth: '150px', maxWidth: '180px' }}>Created</TableCell>
                    <TableCell className="text-center whitespace-nowrap" style={{ minWidth: '200px', maxWidth: '250px' }}>Actions</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {whiteLabelResponses.map((response) => (
                    <TableRow key={response._id}>
                      <TableCell style={{ minWidth: '200px', maxWidth: '250px' }}>
                        <div className="font-semibold break-words" title={response.demoSlug || "-"}>
                          {response.demoSlug || "-"}
                        </div>
                        {response.demoTitle && (
                          <p className="text-xs text-gray-500 break-words mt-1" title={response.demoTitle}>
                            {response.demoTitle}
                          </p>
                        )}
                      </TableCell>
                      <TableCell style={{ minWidth: '150px', maxWidth: '200px' }}>
                        <div className="font-semibold break-words" title={response.name || "-"}>
                          {response.name || "-"}
                        </div>
                        {response.phone && (
                          <p className="text-xs text-gray-500 break-words mt-1" title={response.phone}>
                            {response.phone}
                          </p>
                        )}
                      </TableCell>
                      <TableCell style={{ minWidth: '180px', maxWidth: '220px' }}>
                        <div className="break-words" title={response.email || "-"}>
                          {response.email || "-"}
                        </div>
                      </TableCell>
                      <TableCell style={{ minWidth: '150px', maxWidth: '200px' }}>
                        <div className="break-words" title={response.company || "-"}>
                          {response.company || "-"}
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap" style={{ minWidth: '100px', maxWidth: '120px' }}>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            response.status === "closed"
                              ? "bg-green-100 text-green-700"
                              : response.status === "in-progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {response.status || "new"}
                        </span>
                      </TableCell>
                      <TableCell className="whitespace-nowrap" style={{ minWidth: '150px', maxWidth: '180px' }}>{formatDateTime(response.createdAt)}</TableCell>
                      <TableCell className="text-center whitespace-nowrap" style={{ minWidth: '200px', maxWidth: '250px' }}>
                        <div className="flex items-center justify-center gap-2">
                          <Select
                            value={response.status || "new"}
                            onChange={(e) => handleWhiteLabelStatusChange(response._id, e.target.value)}
                            disabled={whiteLabelUpdatingId === response._id}
                            className="h-8 text-xs"
                          >
                            <option value="new">New</option>
                            <option value="in-progress">In Progress</option>
                            <option value="closed">Closed</option>
                          </Select>
                          <button
                            onClick={() => handleWhiteLabelDelete(response._id)}
                            disabled={whiteLabelDeletingId === response._id}
                            className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none"
                          >
                            <Tooltip
                              id={`delete-${response._id}`}
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
                totalResults={whiteLabelTotal}
                resultsPerPage={whiteLabelResultsPerPage}
                onChange={setWhiteLabelPage}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        ) : (
          <NotFound title="Sorry, There are no white label responses right now." />
        )}
      </AnimatedContent>
    </>
  );
};

export default WhiteLabelLeads;

