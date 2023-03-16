import exp from "constants";

export interface QualityPriceProduct {
    id: number;
    name: string;
    subProducts: SubProduct[];
    totalPercentage: number;
}

export interface SubProduct {
    id: number;
    name: string;
    price: number;
    requirementMap: Map<SubProductRequirement, boolean>;
}

export interface SubProductRequirement {
    id: number, 
    name: string;
    weight: number;
}