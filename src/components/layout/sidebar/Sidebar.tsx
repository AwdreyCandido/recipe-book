import { HiOutlineHome } from "react-icons/hi2";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles["sidebar"]}>
      <div className="flex flex-col items-center gap-1 text-black-40">
        <HiOutlineHome className="text-[2.2rem]" />
        <p className="font-dm font-semibold text-[1.4rem]">Home</p>
      </div>
      <div className="flex flex-col items-center gap-1 text-black-40">
        <HiOutlineHome className="text-[2.2rem]" />
        <p className="font-dm font-semibold text-[1.4rem]">Home</p>
      </div>
    </aside>
  );
};

export default Sidebar;
