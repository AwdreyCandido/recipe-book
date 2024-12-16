export interface RecipeModel {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  level: string;
  portions: number;
  origin: string;
  category: string;
  ingredients: string[];
}
