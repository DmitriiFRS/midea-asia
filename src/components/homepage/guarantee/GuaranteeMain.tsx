import GuaranteeSwiper from "./GuaranteeSwiper";
import GuaranteeText from "./GuaranteeText";

interface Props {
     locale: string;
}

const GuaranteeMain: React.FC<Props> = ({ locale }) => {
     return (
          <div className="grid grid-cols-2 gap-10">
               <GuaranteeSwiper locale={locale} />
               <GuaranteeText locale={locale} />
          </div>
     );
};

export default GuaranteeMain;
