import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardBody,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
  TableBody,
  Badge,
  Button,
  Pagination,
} from "@windmill/react-ui";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import {
  FiMail,
  FiBriefcase,
  FiFileText,
  FiUsers,
  FiPlus,
  FiArrowRight,
  FiMessageSquare,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

import PageTitle from "@/components/Typography/PageTitle";
import AnimatedContent from "@/components/common/AnimatedContent";
import TableLoading from "@/components/preloader/TableLoading";
import NotFound from "@/components/table/NotFound";
import { SidebarContext } from "@/context/SidebarContext";
import LeadServices from "@/services/LeadServices";
import ContactResponseServices from "@/services/ContactResponseServices";
import WorkServices from "@/services/WorkServices";
import BlogServices from "@/services/BlogServices";

const Dashboard = () => {
  const { limitData } = useContext(SidebarContext);

  const [stats, setStats] = useState({
    totalLeads: 0,
    contactSubmissions: 0,
    portfolioWorks: 0,
    blogs: 0,
  });
  const [statsLoading, setStatsLoading] = useState(true);

  const [recentInquiries, setRecentInquiries] = useState([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalInquiries, setTotalInquiries] = useState(0);

  // Fetch overview counts
  useEffect(() => {
    let isMounted = true;

    const fetchStats = async () => {
      try {
        setStatsLoading(true);

        const [leadsRes, contactRes, worksRes, blogsRes] = await Promise.allSettled([
          LeadServices.getAllLeads({ limit: 1 }),
          ContactResponseServices.getAll({ limit: 1 }),
          WorkServices.getAllWorks({ limit: 1 }),
          BlogServices.getAllBlogs({ limit: 1 }),
        ]);

        if (!isMounted) return;

        const totalLeads =
          leadsRes.status === "fulfilled"
            ? leadsRes.value?.totalDoc ||
              leadsRes.value?.pagination?.total ||
              leadsRes.value?.data?.length ||
              0
            : 0;

        const contactSubmissions =
          contactRes.status === "fulfilled"
            ? contactRes.value?.total || contactRes.value?.data?.length || 0
            : 0;

        const portfolioWorks =
          worksRes.status === "fulfilled"
            ? worksRes.value?.totalDoc || worksRes.value?.works?.length || 0
            : 0;

        const blogs =
          blogsRes.status === "fulfilled"
            ? blogsRes.value?.totalDoc || blogsRes.value?.blogs?.length || 0
            : 0;

        setStats({
          totalLeads,
          contactSubmissions,
          portfolioWorks,
          blogs,
        });
      } catch (err) {
        console.error("Error fetching agency dashboard stats:", err);
      } finally {
        if (isMounted) setStatsLoading(false);
      }
    };

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch recent contact inquiries table
  useEffect(() => {
    let isMounted = true;

    const fetchRecentInquiries = async () => {
      try {
        setInquiriesLoading(true);
        const res = await ContactResponseServices.getAll({
          page,
          limit: 8,
          sortBy: "createdAt",
          sortOrder: "desc",
        });

        if (!isMounted) return;

        setRecentInquiries(res?.data || []);
        setTotalInquiries(res?.total || res?.data?.length || 0);
      } catch (err) {
        console.error("Error fetching recent inquiries:", err);
      } finally {
        if (isMounted) setInquiriesLoading(false);
      }
    };

    fetchRecentInquiries();

    return () => {
      isMounted = false;
    };
  }, [page]);

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "contacted":
      case "completed":
      case "replied":
        return <Badge type="success">{status}</Badge>;
      case "in progress":
      case "reviewed":
        return <Badge type="warning">{status}</Badge>;
      case "closed":
        return <Badge type="neutral">{status}</Badge>;
      default:
        return <Badge type="primary">{status || "New"}</Badge>;
    }
  };

  return (
    <>
      <PageTitle>Agency Operations Overview</PageTitle>

      <AnimatedContent>
        {/* Top 4 Agency Metric Cards */}
        <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Card 1: Total Leads */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-xs hover:shadow-md transition-shadow">
            <CardBody className="flex items-center p-4">
              <div className="p-3 mr-4 text-emerald-500 bg-emerald-100 rounded-full dark:text-emerald-100 dark:bg-emerald-600 text-xl">
                <FiMail />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Landing & Campaign Leads
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {statsLoading ? "..." : stats.totalLeads}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Card 2: Contact Inquiries */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-xs hover:shadow-md transition-shadow">
            <CardBody className="flex items-center p-4">
              <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-600 text-xl">
                <FiMessageSquare />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Contact Form Inquiries
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {statsLoading ? "..." : stats.contactSubmissions}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Card 3: Portfolio Works */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-xs hover:shadow-md transition-shadow">
            <CardBody className="flex items-center p-4">
              <div className="p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-600 text-xl">
                <FiBriefcase />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Showcase Portfolio Works
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {statsLoading ? "..." : stats.portfolioWorks}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Card 4: Published Articles */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-xs hover:shadow-md transition-shadow">
            <CardBody className="flex items-center p-4">
              <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-600 text-xl">
                <FiFileText />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Published Blog Articles
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {statsLoading ? "..." : stats.blogs}
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Quick Operations Row */}
        <Card className="mb-8 border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
          <CardBody className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                Quick Content & Lead Management Actions
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Manage website case studies, respond to client inquiries, or publish new tech blogs.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link to="/works">
                <Button size="small" className="btn-emerald flex items-center gap-1">
                  <FiPlus />
                  <span>Add Work</span>
                </Button>
              </Link>
              <Link to="/vastora-tech/lead-management/contact-leads">
                <Button size="small" className="btn-gray flex items-center gap-1">
                  <FiMail />
                  <span>View All Inquiries</span>
                </Button>
              </Link>
              <Link to="/blogs">
                <Button size="small" className="btn-gray flex items-center gap-1">
                  <FiFileText />
                  <span>Manage Blogs</span>
                </Button>
              </Link>
              <Link to="/our-staff">
                <Button size="small" className="btn-gray flex items-center gap-1">
                  <FiUsers />
                  <span>Team Members</span>
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>

        {/* Recent Inquiries Table Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Recent Website Contact Submissions
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Latest client requests and consultation inquiries submitted via the website.
            </p>
          </div>
          <Link
            to="/vastora-tech/lead-management/contact-leads"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
          >
            <span>Open All Inquiries</span>
            <FiArrowRight />
          </Link>
        </div>

        {/* Recent Inquiries Table */}
        {inquiriesLoading ? (
          <TableLoading row={5} col={6} />
        ) : recentInquiries.length === 0 ? (
          <NotFound title="No contact submissions recorded yet." />
        ) : (
          <TableContainer className="mb-8 rounded-lg border border-gray-100 dark:border-gray-800">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Client Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone / Service</TableCell>
                  <TableCell>Message Summary</TableCell>
                  <TableCell>Submitted On</TableCell>
                  <TableCell className="text-center">Status</TableCell>
                  <TableCell className="text-right">Action</TableCell>
                </tr>
              </TableHeader>

              <TableBody>
                {recentInquiries.map((inquiry, idx) => (
                  <TableRow key={inquiry._id || idx}>
                    <TableCell>
                      <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                        {inquiry.name || "Anonymous Client"}
                      </span>
                    </TableCell>

                    <TableCell>
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="text-xs text-blue-600 hover:underline font-mono"
                      >
                        {inquiry.email || "-"}
                      </a>
                    </TableCell>

                    <TableCell>
                      <div className="text-xs text-gray-700 dark:text-gray-300">
                        {inquiry.phone && <div>{inquiry.phone}</div>}
                        {inquiry.service && (
                          <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                            {inquiry.service}
                          </span>
                        )}
                        {!inquiry.phone && !inquiry.service && "-"}
                      </div>
                    </TableCell>

                    <TableCell>
                      <p
                        className="text-xs text-gray-600 dark:text-gray-400 max-w-xs truncate"
                        title={inquiry.message || ""}
                      >
                        {inquiry.message || inquiry.notes || "-"}
                      </p>
                    </TableCell>

                    <TableCell>
                      <span className="text-xs text-gray-500">
                        {inquiry.createdAt
                          ? dayjs(inquiry.createdAt).format("DD MMM YYYY, hh:mm A")
                          : "-"}
                      </span>
                    </TableCell>

                    <TableCell className="text-center">
                      {getStatusBadge(inquiry.status)}
                    </TableCell>

                    <TableCell className="text-right">
                      <Link
                        to="/vastora-tech/lead-management/contact-leads"
                        className="text-xs font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 inline-flex items-center gap-1"
                      >
                        <span>Manage</span>
                        <FiEye />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <TableFooter>
              <Pagination
                totalResults={totalInquiries}
                resultsPerPage={8}
                onChange={(p) => setPage(p)}
                label="Inquiries Navigation"
              />
            </TableFooter>
          </TableContainer>
        )}
      </AnimatedContent>
    </>
  );
};

export default Dashboard;
