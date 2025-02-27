interface Props {
     locale: string;
     placeholder: string;
     name: string;
     value: string;
     onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
     onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
     className?: string;
     isRequired: boolean;
     touched?: boolean | undefined;
     errors?: string | undefined;
}

const InputField: React.FC<Props> = ({ locale, placeholder, name, value, onChange, onBlur, className, isRequired, touched, errors }) => {
     return name === "comment" ? (
          <div className={`w-full ${className}`}>
               <textarea
                    className=" bg-transparent focus:outline-none border rounded-lg p-5 w-full resize-none leading-130% text-[16px] h-[120px]"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
               />
          </div>
     ) : (
          <div className={` ${className}`}>
               <input
                    className="pb-4 pl-2 bg-transparent focus:outline-none border-b w-full text-[16px]"
                    type="text"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
               />
               {isRequired && touched && <div className="text-red-500 mt-2">{errors}</div>}
          </div>
     );
};

export default InputField;
