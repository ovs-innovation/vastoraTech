import React, { useContext, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
} from "@windmill/react-ui";
import { FiPlus, FiTrash2, FiSearch } from "react-icons/fi";

import useAsync from "@/hooks/useAsync";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import NotFound from "@/components/table/NotFound";
import WorkServices from "@/services/WorkServices";
import PageTitle from "@/components/Typography/PageTitle";
import { SidebarContext } from "@/context/SidebarContext";
import WorkTable from "@/components/work/WorkTable";
import MainDrawer from "@/components/drawer/MainDrawer";
import WorkDrawer from "@/components/drawer/WorkDrawer";
import CheckBox from "@/components/form/others/CheckBox";
import DeleteModal from "@/components/modal/DeleteModal";
import TableLoading from "@/components/preloader/TableLoading";
import AnimatedContent from "@/components/common/AnimatedContent";

const Works = () => {
  const { title, allId, serviceId, handleDeleteMany } = useToggleDrawer();
  const { toggleDrawer, currentPage, handleChangePage, limitData, isUpdate, setIsUpdate } =
    useContext(SidebarContext);

  const [searchText, setSearchText] = useState("");
  const [queryText, setQueryText] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const { data, loading, error } = useAsync(
    () =>
      WorkServices.getAllWorks({
        page: currentPage,
        limit: limitData,
        title: queryText,
      }),
    [currentPage, limitData, queryText, isUpdate]
  );

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.works?.map((li) => li._id) || []);
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQueryText(searchText);
  };

  return (
    <>
      <PageTitle>Our Works (Portfolio Showcase)</PageTitle>

      <DeleteModal ids={allId} setIsCheck={setIsCheck} title={title} />

      <MainDrawer>
        <WorkDrawer id={serviceId} />
      </MainDrawer>

      <AnimatedContent>
        {/* Top Controls Bar */}
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody>
            <form
              onSubmit={handleSearchSubmit}
              className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex justify-between items-center"
            >
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow max-w-md">
                <div className="relative">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search work by title..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-white rounded-md pl-10 pr-4"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FiSearch />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {isCheck.length > 0 && (
                  <Button
                    onClick={() => handleDeleteMany(isCheck, data?.works || [])}
                    className="rounded-md h-12 bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                  >
                    <FiTrash2 />
                    <span>Delete ({isCheck.length})</span>
                  </Button>
                )}

                <Button
                  onClick={toggleDrawer}
                  className="rounded-md h-12 btn-emerald flex items-center gap-2"
                >
                  <FiPlus />
                  <span>Add Work</span>
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>

        {/* Works Table */}
        {loading ? (
          <TableLoading row={6} col={7} />
        ) : error ? (
          <div className="p-4 bg-red-50 text-red-600 rounded-md">
            Failed to load works: {error?.message || "Unknown error"}
          </div>
        ) : data?.works?.length === 0 ? (
          <NotFound title="No Work items found in database." />
        ) : (
          <TableContainer className="mb-8 rounded-b-lg">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <CheckBox
                      type="checkbox"
                      name="selectAll"
                      id="selectAll"
                      handleClick={handleSelectAll}
                      isChecked={isCheckAll}
                    />
                  </TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Website Link</TableCell>
                  <TableCell className="text-center">Order</TableCell>
                  <TableCell className="text-center">Status</TableCell>
                  <TableCell className="text-right">Actions</TableCell>
                </tr>
              </TableHeader>

              <WorkTable
                works={data?.works}
                isCheck={isCheck}
                setIsCheck={setIsCheck}
              />
            </Table>

            <TableFooter>
              <Pagination
                totalResults={data?.totalDoc || 0}
                resultsPerPage={limitData}
                onChange={handleChangePage}
                label="Works Navigation"
              />
            </TableFooter>
          </TableContainer>
        )}
      </AnimatedContent>
    </>
  );
};

export default Works;
