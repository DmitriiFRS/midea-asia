interface Props {
     locale: string;
     params: null;
}

const ProductParams: React.FC<Props> = ({ locale, params }) => {
     return <ul className="grid grid-cols-1 justify-between mt-5 gap-5 md:gap-10 xs:grid-cols-2 md:mt-10 md:grid-cols-3 lg:grid-cols-4" id="productParams"></ul>;
};

export default ProductParams;
