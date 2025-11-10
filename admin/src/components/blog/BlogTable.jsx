import {
  Avatar,
  Badge,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import { t } from "i18next";
import { FiZoomIn } from "react-icons/fi";
import { Link } from "react-router-dom";

//internal import
import MainDrawer from "@/components/drawer/MainDrawer";
import BlogDrawer from "@/components/drawer/BlogDrawer";
import CheckBox from "@/components/form/others/CheckBox";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import Tooltip from "@/components/tooltip/Tooltip";
import useToggleDrawer from "@/hooks/useToggleDrawer";

const BlogTable = ({ blogs, isCheck, setIsCheck }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return <Badge type="success">Published</Badge>;
      case "draft":
        return <Badge type="warning">Draft</Badge>;
      case "archived":
        return <Badge type="neutral">Archived</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <>
      {isCheck?.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck?.length < 2 && (
        <MainDrawer>
          <BlogDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {blogs?.map((blog, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={blog?.title}
                id={blog._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(blog._id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {blog?.image ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={blog?.image}
                    alt="blog"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="blog"
                  />
                )}
                <div>
                  <h2
                    className={`text-sm font-medium ${
                      blog?.title?.length > 30 ? "wrap-long-title" : ""
                    }`}
                  >
                    {blog?.title?.substring(0, 50)}
                    {blog?.title?.length > 50 ? "..." : ""}
                  </h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{blog?.category || "Uncategorized"}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{blog?.author || "Unknown"}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {blog?.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{blog?.views || 0}</span>
            </TableCell>

            <TableCell>{getStatusBadge(blog?.status)}</TableCell>

            <TableCell>
              <span className="flex justify-center text-gray-400">
                <Tooltip
                  id="view"
                  Icon={FiZoomIn}
                  title={t("DetailsTbl")}
                  bgColor="#10B981"
                />
              </span>
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={blog._id}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={blog?.title}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default BlogTable;

