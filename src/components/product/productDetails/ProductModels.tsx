"use client"

import { i } from "motion/react-client";

interface Props {
    locale: string;
}

const ProductModels: React.FC<Props> = ({ locale }) => {
    const models = [
        {
            id: 0,
            title: "Alba Midea 7000 BTU",
            coolingKwPower: 2.1,
        },
        {
            id: 1,
            title: "Alba Midea 9000 BTU",
            coolingKwPower: 2.6,
        },
        {
            id: 2,
            title: "Alba Midea 12000 BTU",
            coolingKwPower: 3.5,
        },
        {
            id: 3,
            title: "Alba Midea 18000 BTU",
            coolingKwPower: 5.2,
        },
        {
            id: 4,
            title: "Alba Midea 24000 BTU",
            coolingKwPower: 7.0,
        }
    ]
    return <div className="grid grid-cols-2 gap-5 mt-5">
        {models.map(el => {
            return <div key={el.id} className="flex justify-between items-center gap-10 bg-white h-[80px] px-[10px] rounded-xl">
                <p className="leading-130% text-[16px] font-medium">{el.title}</p>
                <p className="leading-130% text-[16px] font-medium">{el.coolingKwPower} kW</p>
            </div>
        })}
    </div>
}

export default ProductModels;