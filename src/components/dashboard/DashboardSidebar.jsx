import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaUsers, FaCircleXmark } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const DashboardSidebar = ({ sidebarShow, setSidebarShow }) => {
  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure to logout from dashboard?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#01f38d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            Swal.fire({
              title: "Done!",
              text: "Logout Successful!",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <aside
      className="row-span-2 bg-secondary flex flex-col pt-20 border-r-2 border-primary [&>*]:py-3 [&>*]:pl-6 [&>*]:mx-2 [&>*]:rounded-lg [&>*]:flex [&>*]:items-center [&>*]:gap-2 fixed lg:static w-[250px] lg:w-auto top-[70px] bottom-0 transition-[left] duration-300 z-30"
      style={sidebarShow ? { left: "0px" } : { left: "-300px" }}
    >
      <FaCircleXmark
        className="!p-0 text-3xl text-primary absolute top-4 right-4 lg:hidden select-none cursor-pointer"
        onClick={() => setSidebarShow(false)}
      />
      <NavLink
        to="/dashboard/home"
        className={({ isActive }) =>
          isActive ? "bg-primary text-text-color-alt" : ""
        }
        onClick={() => setSidebarShow(false)}
      >
        <IoHomeSharp />
        Dashboard
      </NavLink>
      <NavLink
        to="/dashboard/employees"
        className={({ isActive }) =>
          isActive ? "bg-primary text-text-color-alt" : ""
        }
        onClick={() => setSidebarShow(false)}
      >
        <FaUsers />
        Employees
      </NavLink>
      <NavLink
        to="/dashboard/team"
        className={({ isActive }) =>
          isActive ? "bg-primary text-text-color-alt" : ""
        }
        onClick={() => setSidebarShow(false)}
      >
        <FaUserAlt />
        Team Members
      </NavLink>
      <button
        className="mt-auto mb-2"
        onClick={() => {
          setSidebarShow(false);
          handleLogout();
        }}
      >
        <FiLogOut />
        Logout
      </button>
    </aside>
  );
};

export default DashboardSidebar;

DashboardSidebar.propTypes = {
  sidebarShow: PropTypes.bool,
  setSidebarShow: PropTypes.func,
};
