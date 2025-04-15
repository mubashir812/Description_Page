import React, { useState } from 'react';
import './App.css'; 

// Simple Heart icon used in wishlist button
const HeartIcon = ({ className = "w-5 h-5 inline-block ml-2" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

function ProductDescription({

    // DUMMY DATA YOU HAVE TO PASS FROM DATABASE  
  
    imageUrl = "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Title = "Nike Sneakers Shoes For Running Men",
    description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, libero magnam expedita, earum maxime ipsum quidem numquam fugiat iure harum ducimus unde nisi id. Tempore asperiores officiis ducimus deleniti dolorum",
    highlights = ["Made with Full Cotton", "Slim fit for any Body", "Quality Control by JC"],
    availableSizes = [40, 30, 90], 
    price = 200,
    currencySymbol = '$',

    // Callback props expected from parent

    onAddToCart,         // add function of add to cart 
    onAddToWishlist ,    // add function of add to wish list
    onSizeSelect ,       // add function of selected SIZE to store in database 
    onSelectedQuantity,  // add function of selected Quantity to store in database 
}) {

    const [selectedSize, setSelectedSize] = useState(null);
    const [currentQuantity, setCurrentQuantity] = useState(1); 

    const handleSizeClick = (sizeValue) => {
        setSelectedSize(sizeValue);
        if (onSizeSelect) {
            onSizeSelect(sizeValue);
        }
    };

    const minQuantity = 1;
    const maxQuantity = Infinity; 

    const handleDecrement = () => {
        const newQuantity = Math.max(minQuantity, currentQuantity - 1);
        if (newQuantity !== currentQuantity) {
            setCurrentQuantity(newQuantity);
            if (onQuantitySelect) {
              onSelectedQuantity(newQuantity);
          }
        }
    };

    const handleIncrement = () => {
        const newQuantity = Math.min(maxQuantity, currentQuantity + 1);
        if (newQuantity !== currentQuantity) {
            setCurrentQuantity(newQuantity);
            if (onQuantitySelect) {
              onSelectedQuantity(newQuantity);
          }
        }

    };
    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:w-1/3 px-4 mb-6 md:mb-0">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={Title || 'Product Image'}
                            className="w-full h-auto object-cover rounded-lg shadow-md border"
                            style={{ maxHeight: '600px', maxWidth: '400px' }}
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500 border">
                            No Image Available
                        </div>
                    )}
                </div>
                <div className="md:w-2/3 px-4 flex flex-col">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
                        {Title || 'Product Title'}
                    </h1>
                    <p className="text-justify text-gray-600 mb-5 leading-relaxed text-lg font-normal mt-10">
                        {description || 'No description available.'}
                    </p>
                    {highlights && highlights.length > 0 && (
                        <div className="mb-5">
                            <h3 className="text-left text-md text-2xl font-bold mb-5 text-black-800">Highlights:</h3>
                            <ul className="text-left list-disc list-inside text-gray-600 space-y-1 text-lg font-normal">
                                {highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="bg-gray-100 p-4 rounded-lg flex items-start justify-between mb-6"> 
                        <div className="flex items-start space-x-6 md:space-x-8">
                            <div>
                                <label className="block text-sm uppercase text-gray-500 mb-1 tracking-wide font-medium">
                                    Quantity
                                </label>
                                <div className="flex items-center border border-gray-300 rounded overflow-hidden w-fit mt-1">
                                    <button
                                        type="button"
                                        onClick={handleDecrement}
                                        disabled={currentQuantity <= minQuantity}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        &minus;
                                    </button>
                                    <span
                                        className="px-4 py-1 text-center font-medium border-l border-r border-gray-300"
                                        style={{ minWidth: '40px' }}
                                        aria-live="polite"
                                    >
                                        {currentQuantity}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={handleIncrement}
                                        disabled={currentQuantity >= maxQuantity}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Increase quantity"
                                    >
                                        &#43;
                                    </button>
                                </div>
                            </div>
                          
                            <div>
                                <div className="text-sm uppercase text-gray-500 mb-1 tracking-wide">Size</div>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {availableSizes && availableSizes.length > 0 ? (
                                        availableSizes.map((sizeValue) => {
                                            const isSelected = selectedSize === sizeValue;
                                            return (
                                                <button
                                                    key={sizeValue}
                                                    onClick={() => handleSizeClick(sizeValue)}
                                                    className={`
                                                        px-3 py-1 rounded border text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black
                                                        ${isSelected
                                                            ? 'bg-black text-white border-black ring-2 ring-black ring-offset-1 shadow-md'
                                                            : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
                                                        }
                                                    `}
                                                >
                                                    {sizeValue}
                                                </button>
                                            );
                                        })
                                    ) : (
                                        <span className="text-sm font-medium text-gray-900">Not Available in Stock</span>
                                    )}
                                </div>
                            </div>
                            
                        </div> 
                       
                        <div>
                            <span className="text-2xl font-bold text-gray-900">
                                {currencySymbol}{price !== undefined && price !== null ? price.toFixed(2) : 'N/A'}
                            </span>
                        </div>
                    </div> 

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={() => onAddToCart({ quantity: currentQuantity, size: selectedSize })}
                            disabled={!selectedSize} 
                            className={`flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-200 text-center font-semibold ${!selectedSize ? 'opacity-50 cursor-not-allowed' : ''}`} // Optional: style disabled button
                        >
                            Add to cart
                        </button>
                        <button
                            onClick={onAddToWishlist}
                            className="flex-1 flex items-center justify-center border border-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-200 text-center font-semibold"
                        >
                            Add to wishlist <HeartIcon />
                        </button>
                    </div>
                </div> 
            </div> 
        </div> 
    );
}

export default ProductDescription;