import React from "react";
import { SubProduct } from "../app/qualityPriceProduct";

interface Props {
    subProduct: SubProduct
}
const QualityPriceProductTableRow = ({subProduct}: Props) => {
    function isOdd(index: number) : boolean {
        return index % 2 != 0;
    }

    function rowBorderStyle(index: number) {
        if(index == 0)
            return {borderBottom: "none"};
        else if(index == 1)
            return { border: "none"};
        return {borderTop: "none"};
    }
    return (
        <>  
            <tr>
                <td>{subProduct.id}</td>
                <td>{subProduct.name}</td>
                <td>{Array.from(subProduct.requirementMap.keys()).map(r => (
                    <tr><td>{r.name}</td></tr>
                ))}</td>
            </tr>
            {/* {Array.from(subProduct.requirementMap.keys()).map((k, index) => (
                <tr style={rowBorderStyle(index)}>
                    <td>{isOdd(index) ? subProduct.id : ""}</td>
                    <td>{isOdd(index) ? subProduct.name : ""}</td>
                    <td>{k.name}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            ))} */}
        </>
    )
}

export default QualityPriceProductTableRow;