import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

const Product = ({ data }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      className="relative overflow-hidden md:col-span-3 sm:col-span-6 col-span-12 xs:col-span-10 border border-gray-200 rounded-md shadow-lg md:my-8 my-2  mx-3 md:mx-0  h-auto"
    >
      <ProductItem data={data} />
    </motion.div>
  );
};

export default Product;
