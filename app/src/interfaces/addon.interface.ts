import {Currency, Price} from "./price.interface.ts";

export type Addon = { name: string, price: {[k in Currency]: Price}, icon: string, subtitle: string}
