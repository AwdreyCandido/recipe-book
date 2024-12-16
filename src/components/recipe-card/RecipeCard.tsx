import styles from "./RecipeCard.module.scss";
import { HiOutlineChartBar } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";

let src =
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface RecipeCardProps {
  imageUrl: string;
  name: string;
  level: string;
  portions: string;
  origin: string;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  portions,
  level,
  origin,
  imageUrl,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl shadow-lg select-none hover:shadow-none cursor-pointer duration-300">
      <div className="h-[18rem] bg-success rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="flex font-dm flex-col w-full min-h-[10rem] pb-6 pt-4 justify-between text-center px-[3rem]">
        <h4 className="mb-6 font-dm font-medium">{name}</h4>
        <div className="flex justify-between text-black-80 px-8">
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-lg bg-[#c2c2c244]">
              <HiOutlineChartBar className="text-[2.2rem] stroke-[1.4]" />
            </div>
            <p className="mt-1 text-[1.2rem] font-medium">{level}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-lg bg-[#c2c2c244]">
              <HiOutlineUser className="text-[2.2rem] stroke-[1.4]" />
            </div>
            <p className="mt-1 text-[1.2rem] font-medium">
              {portions} portions
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-lg bg-[#c2c2c244]">
              <HiOutlineGlobeAmericas className="text-[2.2rem] stroke-[1.4]" />
            </div>
            <p className="mt-1 text-[1.2rem] font-medium">{origin}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
