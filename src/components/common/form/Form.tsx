"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendForm } from "@/services/form";
import CommonButton from "@/components/common/commonButton/CommonButton";
import Loader from "@/components/common/loader/Loader";
import InputField from "@/components/common/form/formComponents/InputField";
import PhoneInputField from "@/components/common/form/formComponents/PhoneInputField";

interface Props {
     locale: string;
     success: boolean;
     setSuccess: (success: boolean) => void;
     additionalFields?: "comment"[];
     wrapperClassName?: string;
     sendButtonTitle?: string;
     commonBtnClassName?: string;
}

const Form: React.FC<Props> = ({ locale, success, setSuccess, additionalFields, wrapperClassName, commonBtnClassName, sendButtonTitle }) => {
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
                    <div className="lg:text-[24px] font-medium tracking-tightest text-neutral-gray text-center">Мы свяжемся с вами в ближайшее время.</div>
               ) : (
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 backdrop-blur-sm w-full h-full">
                         <div className={`grid mt-10 ${wrapperClassName}`}>
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
                              <div>
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
                              </div>
                              {additionalFields && additionalFields.includes("comment") && (
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
                              )}
                              <div className="md:flex md:items-end">
                                   {loading ? (
                                        <div className="flex w-full items-center justify-center">
                                             <Loader />
                                        </div>
                                   ) : (
                                        <CommonButton className={`max-w-[300px] hover:bg-transparent border border-black hover:text-black duration-500 ${commonBtnClassName}`}>
                                             {sendButtonTitle || "Отправить"}
                                        </CommonButton>
                                   )}
                              </div>
                         </div>
                    </form>
               )}
          </>
     );
};

export default Form;
