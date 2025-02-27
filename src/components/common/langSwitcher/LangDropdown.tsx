import Link from "next/link";

interface Props {
     locale: string;
     isOpen: boolean;
     redirectedPathName: (locale: string) => string;
     localesArray: string[];
     locales: Record<string, string>;
     toggleDropdown: (currentLng?: string) => void;
}

const LangDropdown: React.FC<Props> = ({ locale, locales, isOpen, redirectedPathName, localesArray, toggleDropdown }) => {
     return (
          <div
               className={`z-[70] text-[16px] absolute left-0 top-6 w-full h-auto flex ml-2 flex-col gap-4 duration-300  ${
                    isOpen ? "translate-y-4 visible opacity-100" : "translate-y-0 invisible opacity-0"
               }`}
          >
               {localesArray.map((el, index) => {
                    return (
                         <Link className="" key={index} href={redirectedPathName(el)}>
                              <button onClick={() => toggleDropdown(el)}>
                                   <span className={`${locale === el ? "opacity-50" : ""}`}>{locales[el]}</span>
                              </button>
                         </Link>
                    );
               })}
          </div>
     );
};

export default LangDropdown;
