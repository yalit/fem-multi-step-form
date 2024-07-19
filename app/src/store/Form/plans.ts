import {Plan} from "../../interfaces/plan.interface.ts";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

export const plans: Plan[] = [
    {name: 'Arcade', price: {'$': {monthly: 9 , yearly: 90}}, icon: arcadeIcon},
    {name: 'Advanced', price: {'$': {monthly: 12, yearly: 120}}, icon: proIcon},
    {name: 'Pro', price: {'$': {monthly: 15, yearly: 150}}, icon: advancedIcon},
]
