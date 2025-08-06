import { TableBody, TableCell, TableRow } from "@windmill/react-ui";
import dayjs from "dayjs";
import { t } from "i18next";
import React from "react";
import { FiZoomIn, FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

//internal import
import MainDrawer from "@/components/drawer/MainDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import Tooltip from "@/components/tooltip/Tooltip";
import LeadDrawer from "@/components/drawer/LeadDrawer";
import EditDeleteButton from "@/components/table/EditDeleteButton";

const LeadTable = ({ leads }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

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

  return (
    <>
      <DeleteModal id={serviceId} title={title} />

      <MainDrawer>
        <LeadDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {leads?.map((lead) => (
          <TableRow key={lead._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {lead?._id?.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(lead.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium">{lead.name}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{lead.emailId}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium">{lead.phoneNumber}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{lead.businessName || "N/A"}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{lead.location || "N/A"}</span>
            </TableCell>
            <TableCell>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                {lead.status}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{lead.source}</span>
            </TableCell>
            <TableCell>
              <div className="flex justify-end text-right">
                {/* <div className="p-2 cursor-pointer text-gray-400 hover:text-blue-600">
                  <Link to={`/lead/${lead._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiZoomIn}
                      title={t("ViewLead")}
                      bgColor="#34D399"
                    />
                  </Link>
                </div> */}

                <EditDeleteButton
                  title={lead.name}
                  id={lead._id}
                  handleUpdate={handleUpdate}
                  handleModalOpen={handleModalOpen}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default LeadTable; 