import PhoneInput from "react-phone-input-2";
//onChange={(v, country, e, formattedValue) => formik.setFieldValue("phone", v)}
interface Props {
  locale: string;
  value: string;
  onChange: (value: string, country: string, e: React.ChangeEvent<HTMLInputElement>, formattedValue: string) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched: boolean | undefined;
  errors: string | undefined;
}

const PhoneInputField: React.FC<Props> = ({ locale, value, onChange, onBlur, onFocus, touched, errors }) => {
  return (
    <div className={`phone-input-wrapper`}>
      <PhoneInput
        inputClass={`pl-2 w-full bg-transparent focus:outline-none border-b pb-4 m-0 text-[16px]`}
        specialLabel=""
        preferredCountries={["uz"]}
        placeholder="Введите свой телефон"
        containerStyle={{ margin: "20px" }}
        inputProps={{
          required: true,
          name: "phone",
        }}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {touched && <div className="text-red-500 mt-2">{errors}</div>}
    </div>
  );
};

export default PhoneInputField;
