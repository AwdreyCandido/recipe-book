import { useState } from "react";
import RecipeCard from "../../recipe-card/RecipeCard";
import styles from "./CustomLayout.module.scss";
import { recipes } from "../../../data/data.js";
import RecipeSummary from "../../recipe-summary/RecipeSummary";

import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import Sidebar from "../sidebar/Sidebar.js";

const CustomLayout = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "All Recipes"
  );

  function selectRecipeHandler(idx: number) {
    setSelectedRecipe(idx);
  }

  function selectCategoryHandler(category: string) {
    setSelectedCategory(category);
  }

  const categories: { category: string }[] = [
    { category: "All Recipes" },
    { category: "Healthy Recipes" },
    { category: "Baking Recipes" },
    { category: "Breakfast & Brunch" },
    { category: "Chicken Recipes" },
    { category: "Holiday Recipes" },
    { category: "Quick & Easy" },
  ];

  return (
    <div className={styles["content-container"]}>
      <Sidebar />

      <main className={styles["main-content"]}>
        <div className="w-full pb-4 border-b-[1px] border-b-black-5">
          <h2 className="text-[3.2rem] font-dm font-medium text-dark">
            Discover Recipes
          </h2>
        </div>

        <div className="flex gap-6 mt-12">
          {categories.map((item) => {
            return (
              <div
                onClick={() => selectCategoryHandler(item.category)}
                className={`relative flex flex-col group gap-2 justify-start w-[11rem] p-4 pr-14 rounded-lg bg-white border border-black-10 cursor-pointer duration-1000 hover:border-primary select-none overflow-hidden`}
              >
                <div
                  className={`h-[3rem] w-[3rem] bg-primary absolute -top-[50%] -left-[50%] rounded-full duration-300 -z-1 ${
                    selectedCategory === item.category
                      ? "h-[20rem] w-[20rem]"
                      : ""
                  }`}
                ></div>
                <HiOutlineBuildingStorefront
                  className={`text-[2.4rem] text-black-40 duration-300 group-hover:text-primary z-10`}
                  style={
                    selectedCategory === item.category ? { color: "white" } : {}
                  }
                />
                <p
                  className={`text-[1.3rem] leading-none mt-1 font-dm font-medium text-black-40 duration-300 group-hover:text-primary z-10`}
                  style={
                    selectedCategory === item.category ? { color: "white" } : {}
                  }
                >
                  {item.category}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <h4 className="text-[1.8rem] font-dm text-dark mb-6 font-semibold leading-none">
            {selectedCategory}
          </h4>
          <section className={styles["recipes-container"]}>
            {recipes.map((recipe, idx) => {
              return (
                <RecipeCard
                  onClick={() => selectRecipeHandler(idx)}
                  {...(recipe as any)}
                />
              );
            })}
          </section>
        </div>
      </main>
      <RecipeSummary selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default CustomLayout;
