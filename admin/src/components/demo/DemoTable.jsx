import {
  Avatar,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import CheckBox from "@/components/form/others/CheckBox";
import MainDrawer from "@/components/drawer/MainDrawer";
import DemoDrawer from "@/components/drawer/DemoDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import useToggleDrawer from "@/hooks/useToggleDrawer";

const DemoTable = ({ demos = [], isCheck, setIsCheck }) => {
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
          <DemoDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {demos?.map((demo, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={demo?.title}
                id={demo._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(demo._id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {demo?.image || (demo?.images && demo.images[0]) ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={demo?.image || demo?.images[0]}
                    alt="demo"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="demo"
                  />
                )}
                <div>
                  <h2
                    className={`text-sm font-medium ${
                      demo?.title?.length > 30 ? "wrap-long-title" : ""
                    }`}
                  >
                    {demo?.title?.substring(0, 50)}
                    {demo?.title?.length > 50 ? "..." : ""}
                  </h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{demo?.category || "Uncategorized"}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{demo?.slug || "N/A"}</span>
            </TableCell>

            <TableCell>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Frontend:</span>
                {demo?.demoUrl ? (
                  <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
                    {demo.demoUrl.length > 25 ? demo.demoUrl.substring(0, 25) + "..." : demo.demoUrl}
                  </a>
                ) : (
                  <span className="text-xs text-gray-400">N/A</span>
                )}
                <span className="text-xs text-gray-500 mt-1">Admin:</span>
                {demo?.adminDemoUrl ? (
                  <a href={demo.adminDemoUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-xs">
                    {demo.adminDemoUrl.length > 25 ? demo.adminDemoUrl.substring(0, 25) + "..." : demo.adminDemoUrl}
                  </a>
                ) : (
                  <span className="text-xs text-gray-400">N/A</span>
                )}
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {Array.isArray(demo.images) ? demo.images.length : (demo.image ? 1 : 0)}
              </span>
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={demo._id}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={demo?.title}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default DemoTable;

