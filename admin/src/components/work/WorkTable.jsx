import React from "react";
import {
  Avatar,
  TableBody,
  TableCell,
  TableRow,
  Badge,
} from "@windmill/react-ui";
import { FiExternalLink } from "react-icons/fi";

import EditDeleteButton from "@/components/table/EditDeleteButton";
import CheckBox from "@/components/form/others/CheckBox";
import MainDrawer from "@/components/drawer/MainDrawer";
import WorkDrawer from "@/components/drawer/WorkDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import useToggleDrawer from "@/hooks/useToggleDrawer";

const WorkTable = ({ works = [], isCheck, setIsCheck }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck?.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck?.length < 2 && (
        <MainDrawer>
          <WorkDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {works?.map((work, i) => (
          <TableRow key={work._id || i}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={work?.title}
                id={work._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(work._id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {work?.image ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none border border-gray-200"
                    src={
                      work.image.startsWith("/") && !work.image.startsWith("//")
                        ? `http://localhost:3000${work.image}`
                        : work.image
                    }
                    alt={work.title}
                  />
                ) : (
                  <Avatar
                    src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                    alt="placeholder"
                  />
                )}
                <div>
                  <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {work?.title}
                  </h2>
                  {work?.client && (
                    <span className="text-xs text-gray-500 block">
                      Client: {work.client}
                    </span>
                  )}
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {work?.category || "E-commerce"}
              </span>
            </TableCell>

            <TableCell>
              {work?.link ? (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-mono"
                >
                  <span className="truncate max-w-[180px]">{work.link}</span>
                  <FiExternalLink className="flex-shrink-0" />
                </a>
              ) : (
                <span className="text-xs text-gray-400">None</span>
              )}
            </TableCell>

            <TableCell className="text-center">
              <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                #{work?.order ?? 0}
              </span>
            </TableCell>

            <TableCell className="text-center">
              {work?.status === "show" ? (
                <Badge type="success">Published</Badge>
              ) : (
                <Badge type="danger">Hidden</Badge>
              )}
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={work._id}
                work={work}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={work?.title}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default WorkTable;
