interface Props {
     locale: string;
}

const ProductParams: React.FC<Props> = ({ locale }) => {
     const params = [
          {
               id: 0,
               title: "Холодопроизводительность",
               value: "2.5 кВт",
          },
          {
               id: 1,
               title: "Теплопроизводительность",
               value: "2.8 кВт",
          },
          {
               id: 2,
               title: "Площадь помещения",
               value: "до 25 м²",
          },
          {
               id: 3,
               title: "Тип кондиционера",
               value: "сплит-система сплит-системасплит-система",
          },
          {
               id: 4,
               title: "Тип установки",
               value: "настенный",
          },
          {
               id: 5,
               title: "Тип компрессора",
               value: "инверторный",
          },
     ];
     return (
          <ul className="grid grid-cols-4 justify-between mt-10 gap-10" id="productParams">
               {params.map((el) => {
                    return (
                         <li key={el.id} className="flex flex-col gap-2.5">
                              <p className="text-[#989898] font-medium">{el.title}</p>
                              <p>{el.value}</p>
                         </li>
                    );
               })}
          </ul>
     );
};

export default ProductParams;
