import { Model } from '../model/model';

export class ComputerStation extends Model{
    name: string;
    ip_address: string;
    user_group_id: string;
    user_group: any;
}
