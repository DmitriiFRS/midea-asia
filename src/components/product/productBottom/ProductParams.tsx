interface Props {
     locale: string;
     params: null;
}

const ProductParams: React.FC<Props> = ({ locale, params }) => {
     return <ul className="grid grid-cols-4 justify-between mt-10 gap-10" id="productParams"></ul>;
};

export default ProductParams;
