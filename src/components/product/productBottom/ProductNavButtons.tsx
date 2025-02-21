interface Props {
     locale: string;
}

const ProductNavButtons: React.FC<Props> = ({ locale }) => {
     return (
          <div className="bg-slate-200 flex gap-2 rounded-full justify-center w-max font-medium text-[16px]">
               <a href="#productDescription" className="bg-black rounded-full text-white px-5 py-3">
                    Описание
               </a>
               <a href="#productParams" className="bg-transparent rounded-full text-black px-5 py-3">
                    Технические характеристики
               </a>
          </div>
     );
};

export default ProductNavButtons;
