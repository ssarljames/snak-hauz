import { Model } from '../model/model';
import { Meal } from '../meal/meal';
import { ComputerStation } from '../computer-station/computer-station';


interface MealOrderPivot {
    order_id: number;
    meal_id: number;
    id: number; 
    current_price: number;
    quantity: 1
    total_amount: number;
    customer_remarks: string;
    status: 0
    created_at: Date;
    is_add_on: boolean;
    main_order_meal_id: number;

    addons: MealOrder[];
}

class MealOrder extends Meal {
    pivot: MealOrderPivot;
}

export class Order extends Model{
    
    order_number: string;
    ip_address:  string;
    customer_id: number;
    type: string;
    total_amount: number;

    status: number;
  
    status_label: string;
  
    meals: MealOrder[];
    main_meals: MealOrder[];

    computer_station: ComputerStation;
}
