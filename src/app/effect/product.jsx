export const ProductCard = (props) => {
    const {product} = props;
    return (
        <div className="bg-white shadow rounded p-4">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40" />
            <h3 className="text-lg font-meduim text-gray-800">Product Name</h3>
            <p className="text-gray-500 text-sm">Short product description.</p>
            <p className="text-blue-600 font-bold mt-2">$29.99</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add to cart</button>
        </div>
    );
};
