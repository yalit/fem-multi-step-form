import {Addon} from "../../interfaces/addon.interface.ts";

export const addons: Addon[] = [
    {name: 'Online service', price: {'$': {monthly: 1, yearly: 10}}, icon: '', subtitle: 'Access to multiplayer games'},
    {name: 'Larger Storage', price: {'$': {monthly:2, yearly: 20}}, icon: '', subtitle: 'Extra 1TB of cloud save'},
    {name: 'Customizable profile', price: {'$': {monthly: 2, yearly: 20}}, icon: '', subtitle: 'Custom theme on your profile'},
]
