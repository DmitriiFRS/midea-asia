import CommonButton2 from "@/components/common/commonButton/CommonButton2";

interface Props {
     locale: string;
}

const GuaranteeText: React.FC<Props> = ({ locale }) => {
     return (
          <div className="flex-[0_1_40%] my-[30px] flex flex-col">
               <h2 className="text-[36px] font-semibold leading-120%">МИССИЯ BIG PUFF & SOFA - СОЗДАВАТЬ ЗОНЫ КОМФОРТА И МЕСТА СИЛЫ</h2>
               <h3 className="mt-5 text-[24px] font-medium leading-120%">В мире, где ценится естественность и комфорт, мы создаем уголки благополучия и вдохновения более 6 лет</h3>
               <div className="mt-[30px] flex flex-col gap-5 text-[16px] font-light leading-120% flex-[1_1_auto]">
                    <p>Производство максимально комфортной мебели премиум-класса, которая становится надежным спутником в повседневной жизни.</p>
                    <p>
                         Лидером продаж в нашем ассортименте являются наши облачные пуфы - эргономичные, стильные и многофункциональные, а также наши уютные диваны, предлагающие
                         идеальное сочетание комфорта и элегантности.
                    </p>
                    <p>Наш стиль — это абсолютная безопасность материалов и непревзойденный уровень комфорта. </p>
               </div>
               <CommonButton2>Смотреть все новости</CommonButton2>
          </div>
     );
};

export default GuaranteeText;
