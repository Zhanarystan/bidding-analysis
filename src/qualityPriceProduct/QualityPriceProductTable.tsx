import React from "react";
import productData from "../app/qualityPriceProductDatabase";
import products from "../app/qualityPriceProductDatabase";
import subProductData from "../app/subProductDatabase";
import QualityPriceProductTableRow from "./QualityPriceProductTableRow";

const QualityPriceProductTable = () => {
    let products = productData;
    let subProducts = subProductData;
    return (
        <div className="container">
            <table className="table table-bordered text-center" style={{fontSize: 10, width: "2000px", border: "1px solid"}}>
            <thead>
                <tr>
                    <th rowSpan={3}>№</th>
                    <th rowSpan={3}>Предложение (подпродукт)</th>
                    <th rowSpan={3}>Требование к решению</th>
                    <th colSpan={11}>Поставщики</th>
                </tr>
                <tr>
                    {products.map(p => <th>{p.name}</th>)}
                    <th>Вес</th>
                    {products.map(p => <th>{p.name}</th>)}
                </tr>
                <tr>
                    <th colSpan={5}></th>
                    <th></th>
                    <th colSpan={5}>Цена, тенге</th>
                </tr>
            </thead>
            <tbody>
                {subProducts.map(p => <QualityPriceProductTableRow subProduct={p}/>)}
            </tbody>
            </table>
        </div>
        
    )
}

export default QualityPriceProductTable;