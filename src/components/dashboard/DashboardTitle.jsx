import { TiHome } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const DashboardTitle = ({setSidebarShow}) => {
  const {pathname} = useLocation();
  let paths = pathname.split('/').filter(item => item);
  if (paths[2] === "update") {
    paths = pathname.split('/').filter(item => item).slice(0, 3);
  }
  let title = paths[paths.length-1][0].toUpperCase() + paths[paths.length-1].slice(1);
  if (title === "Add" || title === "Update") {
    if (paths[paths.length-2] === "team") {
      title += " Member";
    }
    else if (paths[paths.length-2] === "chairman") {
      title += " Chairman"
    }
    else {
      title += " Employee";
    }
  }

  return (
    <section className="flex flex-wrap justify-between items-center gap-x-8 gap-y-2 px-6 py-3 bg-secondary border-b-2 border-primary">
      <div className="flex justify-center items-center gap-3">
        <FaBars className="text-xl lg:hidden select-none cursor-pointer" onClick={() => setSidebarShow(true)} />
        <h2 className="text-2xl font-medium">{title}</h2>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <TiHome />
        {
          paths?.map((item, index) => !(index === paths.length-1) ? <div key={index} className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{item[0].toUpperCase() + item.slice(1)}</span>
            <IoIosArrowForward />
          </div> : <div key={index} className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{item[0].toUpperCase() + item.slice(1)}</span>
          </div>)
        }
      </div>
    </section>
  );
};

export default DashboardTitle;

DashboardTitle.propTypes = {
  setSidebarShow: PropTypes.func
}