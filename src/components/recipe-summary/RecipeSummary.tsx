import React, { useEffect, useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineChartBar } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { RecipeModel } from "../../data/models/RecipeModel";
import { recipes } from "../../data/data";

interface RecipeSummaryProps {
  selectedRecipe: any;
}

const RecipeSummary: React.FC<RecipeSummaryProps> = ({ selectedRecipe }) => {
  const [recipe, setRecipe] = useState<RecipeModel | null>(null);

  useEffect(() => {
    const selected: RecipeModel = recipes[selectedRecipe];
    setRecipe(selected);
  }, [selectedRecipe]);

  return (
    <section
      style={{ width: recipe ? "35rem" : "0px" }}
      className={`duration-300 font-dm ${
        recipe ? "border-l-[.1rem] border-black-5" : ""
      }`}
    >
      <div className={`${recipe ? "p-14" : "hidden"}`}>
        <div
          onClick={() => setRecipe(null)}
          className="flex justify-end items-center mb-4 cursor-pointer"
        >
          <HiMiniXMark className="text-[2rem]" />
        </div>
        <div className="flex items-end gap-2 pb-8 border-b-[1px] border-b-black-5">
          <HiOutlineDocumentText className="text-[2.8rem] stroke-[1.4] text-primary" />
          <h3 className="text-[1.6rem] font-medium leading-tight">
            Recipe Overview
          </h3>
        </div>
        <div className="h-[18rem] mt-8 bg-success rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={recipe?.imageUrl}
            alt=""
          />
        </div>
        <div className="pb-12 mt-12 text-dark border-b-[1px] border-b-black-5">
          <div className="flex flex-col gap-2 mb-4">
            <h4 className="text-[1.8rem] text-center font-bold leading-none">
              {recipe?.name}
            </h4>
            <p className="text-[1.4rem] font-bold text-primary text-center">
              {recipe?.category}
            </p>
          </div>
          <p className="text-[1.4rem] leading-tight">{recipe?.description}</p>
        </div>
        <div className="pb-12 mt-12 text-dark border-b-[1px] border-b-black-5">
          <h5 className="text-[1.4rem] font-semibold leading-none mb-4">
            Ingredients
          </h5>
          {recipe?.ingredients.map((i) => {
            return <p className="text-[1.4rem]">{i}</p>;
          })}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button className="px-6 py-2 font-dm text-[1.4rem] font-semibold bg-primary text-gray rounded-lg">
              See Recipe
            </button>
            <button className="px-6 py-2 font-dm text-[1.4rem] font-semibold bg-gray outline outline-black-60 outline-2 -outline-offset-2 text-dark rounded-lg">
              Print
            </button>
          </div>
        </div>
        <div className="flex justify-between text-black-80 px-8 mt-12">
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-lg bg-[#c2c2c244]">
              <HiOutlineChartBar className="text-[2.2rem] stroke-[1.4]" />
            </div>
            <p className="mt-1 text-[1.2rem] font-medium">{recipe?.level}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-lg bg-[#c2c2c244]">
              <HiOutlineUser className="text-[2.2rem] stroke-[1.4]" />
            </div>
            <p className="mt-1 text-[1.2rem] font-medium">
              {recipe?.portions} portions
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-lg bg-[#c2c2c244]">
              <HiOutlineGlobeAmericas className="text-[2.2rem] stroke-[1.4]" />
            </div>
            <p className="mt-1 text-[1.2rem] font-medium">{recipe?.origin}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSummary;
