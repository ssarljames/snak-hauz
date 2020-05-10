import { Model } from '../model/model';
import { Meal } from '../meal/meal';


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
    status: string;
  
    status_label: string;
  
    meals: MealOrder[];
}
