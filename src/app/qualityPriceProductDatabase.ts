import { QualityPriceProduct } from "./qualityPriceProduct";
import subProducts from "./subProductDatabase";



let productData: QualityPriceProduct[] = [
    {
        id: 1,
        name: "Продукт 1",
        subProducts: subProducts,
        totalPercentage: 0
    },
    {
        id: 2,
        name: "Продукт 2",
        subProducts: subProducts,
        totalPercentage: 0
    },
    {
        id: 3,
        name: "Продукт 3",
        subProducts: subProducts,
        totalPercentage: 0
    },
    {
        id: 4,
        name: "Продукт 4",
        subProducts: subProducts,
        totalPercentage: 0
    },
    {
        id: 5,
        name: "Продукт 5",
        subProducts: subProducts,
        totalPercentage: 0
    }
];

export default productData;