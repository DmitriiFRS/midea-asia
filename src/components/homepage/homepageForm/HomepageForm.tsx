"use client";

import Container from "@/components/common/container/Container";
import HomepageFormSection from "./HomepageFormSection";
import { useState } from "react";

interface Props {
  locale: string;
}

const HomepageForm: React.FC<Props> = ({ locale }) => {
  const [success, setSuccess] = useState(false);
  return (
    <section className="my-[100px]">
      <Container className="py-20 bg-black text-white text-center">
        {!success && (
          <div>
            <div className="text-[36px] leading-120% font-bold uppercase">остались вопросы?</div>
            <div className="mt-5 text-[20px] leading-120% font-medium">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </div>
          </div>
        )}
        <div className="px-10">
          <HomepageFormSection locale={locale} success={success} setSuccess={setSuccess} />
        </div>
      </Container>
    </section>
  );
};

export default HomepageForm;
