import {
  Card,
  Button,
  CardBody,
  Input,
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
import React, { useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";

//internal import
import LeadTable from "@/components/lead/LeadTable";
import TableLoading from "@/components/preloader/TableLoading";
import NotFound from "@/components/table/NotFound";
import PageTitle from "@/components/Typography/PageTitle";
import useAsync from "@/hooks/useAsync";
import LeadServices from "@/services/LeadServices";
import AnimatedContent from "@/components/common/AnimatedContent";
import { SidebarContext } from "@/context/SidebarContext";

const LeadManagement = () => {
  const { t } = useTranslation();
  const { 
    currentPage, 
    setCurrentPage, 
    searchText, 
    setSearchText, 
    status, 
    setStatus,
    source,
    setSource,
    limitData 
  } = useContext(SidebarContext);
  
  const [stats, setStats] = useState(null);
  const resultsPerPage = limitData || 20;
  
  // Refs for form inputs
  const searchRef = useRef();
  const statusRef = useRef();
  const sourceRef = useRef();

  // Use useAsync hook for leads data - it will automatically re-fetch when context variables change
  const { data: leads, loading, error } = useAsync(() =>
    LeadServices.getAllLeads({
      page: currentPage,
      limit: resultsPerPage,
      search: searchText || "",
      status: status || "",
      source: source || "",
      sortBy: "createdAt",
      sortOrder: "desc",
    })
  );

  // Fetch stats on component mount
  React.useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await LeadServices.getLeadStats();
        if (response.success) {
          setStats(response.data);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);



  const handleSubmitUser = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    const statusValue = statusRef.current.value;
    const sourceValue = sourceRef.current.value;
    
    setSearchText(searchValue);
    setStatus(statusValue);
    setSource(sourceValue);
    setCurrentPage(1);
  };

  const handleResetField = () => {
    setSearchText("");
    setStatus("");
    setSource("");
    setCurrentPage(1);
    
    if (searchRef.current) searchRef.current.value = "";
    if (statusRef.current) statusRef.current.value = "";
    if (sourceRef.current) sourceRef.current.value = "";
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  // Extract leads data and total results
  const leadsData = leads?.data?.leads || leads?.data || leads || [];
  const totalResults = leads?.data?.total || leadsData.length;

  return (
    <>
      <PageTitle>{t("LeadManagement")}</PageTitle>

      {/* Stats Cards */}
      {stats && (
        <AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardBody>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{t("TotalLeads")}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
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
                    <p className="text-sm font-medium text-gray-600">{t("TodayLeads")}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.today}</p>
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
                    <p className="text-sm font-medium text-gray-600">{t("NewLeads")}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.byStatus?.new || 0}</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{t("ConvertedLeads")}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.byStatus?.converted || 0}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </AnimatedContent>
      )}

      <>
          <AnimatedContent>
            <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
              <CardBody>
                <form
                  onSubmit={handleSubmitUser}
                  className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
                >
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Input
                  ref={searchRef}
                  type="search"
                  name="search"
                  placeholder={t("SearchLeads")}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-1"
                ></button>
              </div>

              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Select ref={statusRef}>
                  <option value="" defaultValue hidden>
                    {t("AllStatuses")}
                  </option>
                  <option value="new">{t("New")}</option>
                  <option value="contacted">{t("Contacted")}</option>
                  <option value="qualified">{t("Qualified")}</option>
                  <option value="converted">{t("Converted")}</option>
                  <option value="lost">{t("Lost")}</option>
                </Select>
              </div>

              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Select ref={sourceRef}>
                  <option value="" defaultValue hidden>
                    {t("AllSources")}
                  </option>
                  <option value="website">{t("Website")}</option>
                  <option value="social-media">{t("SocialMedia")}</option>
                  <option value="referral">{t("Referral")}</option>
                  <option value="advertising">{t("Advertising")}</option>
                  <option value="other">{t("Other")}</option>
                </Select>
              </div>

              <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <div className="w-full mx-1">
                  <Button type="submit" className="h-12 w-full bg-blue-700">
                    {t("Filter")}
                  </Button>
                </div>

                <div className="w-full">
                  <Button
                    layout="outline"
                    onClick={handleResetField}
                    type="reset"
                    className="px-4 md:py-1 py-3 text-sm dark:bg-gray-700"
                  >
                    <span className="text-black dark:text-gray-200">{t("Reset")}</span>
                  </Button>
                </div>
              </div>
                </form>
              </CardBody>
            </Card>
          </AnimatedContent>

          {loading ? (
            <TableLoading row={12} col={9} width={190} height={20} />
          ) : error ? (
            <span className="text-center mx-auto text-red-500">{error}</span>
          ) : leadsData?.length !== 0 ? (
            <TableContainer className="mb-8 rounded-b-lg">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>{t("LeadId")}</TableCell>
                    <TableCell>{t("Date")}</TableCell>
                    <TableCell>{t("Name")}</TableCell>
                    <TableCell>{t("Email")}</TableCell>
                    <TableCell>{t("Phone")}</TableCell>
                    <TableCell>{t("Business")}</TableCell>
                    <TableCell>{t("Location")}</TableCell>
                    <TableCell>{t("Status")}</TableCell>
                    <TableCell>{t("Source")}</TableCell>
                    <TableCell className="text-center">
                      {t("Actions")}
                    </TableCell>
                  </tr>
                </TableHeader>
                <LeadTable leads={leadsData} />
              </Table>
              <TableFooter>
                <Pagination
                  totalResults={totalResults}
                  resultsPerPage={resultsPerPage}
                  onChange={handleChangePage}
                  label="Table navigation"
                />
              </TableFooter>
            </TableContainer>
          ) : (
            <NotFound title="Sorry, There are no leads right now." />
          )}
      </>
    </>
  );
};

export default LeadManagement; 