"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendForm } from "@/services/form";
import CommonButton from "@/components/common/commonButton/CommonButton";
import Loader from "@/components/common/loader/Loader";
import InputField from "@/components/common/formComponents/InputField";
import PhoneInputField from "@/components/common/formComponents/PhoneInputField";

interface Props {
  locale: string;
  success: boolean;
  setSuccess: (success: boolean) => void;
}

const HomepageFormSection: React.FC<Props> = ({ locale, success, setSuccess }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Имя обязательное поле").min(3, "Минимум 3 символа"),
      phone: Yup.string().required("Номер обязательное поле").min(12, "Номер обязательное поле"),
      email: Yup.string().max(50),
      comment: Yup.string().max(255),
    }),

    onSubmit: async ({ name, phone, email, comment }) => {
      try {
        setLoading(true);
        const result = await sendForm({
          name,
          phone,
          email,
          comment,
          lng: locale,
          url: window.location.href,
          referrer: document.referrer || "",
          utm: decodeURI(sessionStorage.getItem("utm") || "") || decodeURI(location.href),
        });
        if (result?.error) {
          return;
        }
        setLoading(false);
        setSuccess(true);
        formik.resetForm();
      } catch (err) {
        console.log("form error: ", err);
        setLoading(false);
      }
    },
  });

  return (
    <>
      {success ? (
        <div className="lg:text-[24px] font-medium tracking-tightest text-neutral-gray">
          Мы свяжемся с вами в ближайшее время.
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-[1fr_1fr_20%] gap-[30px] mt-20">
            <InputField
              locale={locale}
              name="name"
              placeholder="Как вас зовут?"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired
              touched={formik.touched.name}
              errors={formik.errors.name}
              className="w-full"
            />
            <PhoneInputField
              locale={locale}
              value={formik.values.phone}
              onChange={(v, country, e, formattedValue) => formik.setFieldValue("phone", v)}
              onFocus={() => {
                if (!formik.values.phone) {
                  formik.setFieldValue("phone", "+998");
                }
              }}
              onBlur={formik.handleBlur}
              touched={formik.touched.phone}
              errors={formik.errors.phone}
            />
            <div className="mt-4 md:flex md:items-start max-h-[48px]">
              {loading ? (
                <div className="flex w-full items-center justify-center">
                  <Loader />
                </div>
              ) : (
                <CommonButton>Отправить</CommonButton>
              )}
            </div>
          </div>
          <div className="">
            <InputField
              locale={locale}
              name="comment"
              placeholder="Сообщение"
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired={false}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default HomepageFormSection;
