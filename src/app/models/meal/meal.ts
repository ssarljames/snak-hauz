import { Model } from '../model/model';
import { InventoryItem } from '../invetory-item/inventory-item';
import { MealCategory } from '../meal-category/meal-category';

export class Meal extends Model{

  name: string;
  price: number;

  meal_category_id: string;

  description: string;
  image_path_url: string;
  inventory_items: InventoryItem[];
  drinks: Meal[];
  total_ordered: number;

  preparation_time: number;
  
  meal_category: MealCategory;

  included_to_active_order: number;
}
