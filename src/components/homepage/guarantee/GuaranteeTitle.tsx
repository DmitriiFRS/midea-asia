interface Props {
     locale: string;
}

const GuaranteeTitle: React.FC<Props> = ({ locale }) => {
     return (
          <div className="w-full flex flex-col gap-[30px] items-center">
               <h2 className="text-center uppercase font-bold leading-130% max-w-[650px] text-[30px] md:text-[42px]">экстра гарантия и сервисное обслуживание</h2>
               <p className="font-medium leading-120% max-w-[500px] text-center">Каждому изделию мы предлагаем 18 месячную гарантию и сервисное обслуживание</p>
          </div>
     );
};

export default GuaranteeTitle;
