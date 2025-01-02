import GuaranteeSwiper from "./GuaranteeSwiper";
import GuaranteeText from "./GuaranteeText";

interface Props {
  locale: string;
}

const GuaranteeMain: React.FC<Props> = ({ locale }) => {
  return (
    <div className="flex gap-[30px]">
      <GuaranteeSwiper locale={locale} />
      <GuaranteeText locale={locale} />
    </div>
  );
};

export default GuaranteeMain;
