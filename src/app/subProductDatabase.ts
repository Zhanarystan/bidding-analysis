import { SubProduct, SubProductRequirement } from "./qualityPriceProduct";
import subProductRequirements from "./subProductRequirementDatabase";

let subProductData: SubProduct[] = [
    {
        id: 1,
        name: "Подпродукт 1",
        price: 100,
        requirementMap: new Map([
            [subProductRequirements[0], false],
            [subProductRequirements[1], false],
            [subProductRequirements[2], false]])
    },
    {
        id: 2,
        name: "Подпродукт 2",
        price: 100,
        requirementMap: new Map([
            [subProductRequirements[3], false],
            [subProductRequirements[4], false],
            [subProductRequirements[5], false]])
    },
    {
        id: 3,
        name: "Подпродукт 3",
        price: 100,
        requirementMap: new Map([
            [subProductRequirements[6], false],
            [subProductRequirements[7], false],
            [subProductRequirements[8], false]])
    },
    {
        id: 4,
        name: "Подпродукт 4",
        price: 100,
        requirementMap: new Map([
            [subProductRequirements[9], false],
            [subProductRequirements[10], false],
            [subProductRequirements[11], false]])
    },
    {
        id: 5,
        name: "Подпродукт 5",
        price: 100,
        requirementMap: new Map([
            [subProductRequirements[12], false],
            [subProductRequirements[13], false],
            [subProductRequirements[14], false]])
    },
    {
        id: 6,
        name: "Подпродукт 6",
        price: 100,
        requirementMap: new Map([
            [subProductRequirements[15], false],
            [subProductRequirements[16], false],
            [subProductRequirements[17], false]])
    },
    {
        id: 7,
        name: "Подпродукт 7",
        price: 100,
        requirementMap: new Map([
            [subProductRequirements[18], false],
            [subProductRequirements[19], false],
            [subProductRequirements[20], false]])
    },
]

export default subProductData;