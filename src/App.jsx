import React, { useState, useRef } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Star } from "lucide-react"

const HeartIcon = ({ className = "w-5 h-5 inline-block ml-2" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

function ProductDescription({

  storeLogo_name = {
    name: "Fashion by inz",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s",
  },

  products = [
    {
      id: "abc123",
      title: "Casual Shirt For Men - Full Sleeve",
      price: 678,
      rating: 4,
      image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s"
      // you have to add navigate url for visit store
    },
    {
      id: "def456",
      title: "MK Garments - Long Sleeve T-Shirt",
      price: 499,
      rating: 5,
      image: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s"
      // you have to add navigate url for visit store
    },
    {
      id: "ghi789",
      title: "HY Boutique Zipper Coat",
      price: 1087,
      rating: 4,
      image: "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=600",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s"
      // you have to add navigate url for visit store
    },
    {
      id: "jkl101",
      title: "Formal Party Wear Shirt",
      price: 678,
      rating: 3,
      image: "https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=600",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s"
      // you have to add navigate url for visit store
    },
    {
      id: "abc124",
      title: "Casual Shirt For Men - Full Sleeve",
      price: 678,
      rating: 4,
      image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s"
      // you have to add navigate url for visit store
    },
    {
      id: "abc125",
      title: "Casual Shirt For Men - Full Sleeve",
      price: 678,
      rating: 4,
      image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s"
      // you have to add navigate url for visit store
    },
  ],

  reviews = [
    {
      username: 'JohnDoe',
      rating: 4,
      comment: 'Great shoes! Comfortable and stylish.',
      media: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      username: 'JaneSmith',
      rating: 5,
      comment: 'Absolutely love them!',
      media: 'https://videos.pexels.com/video-files/30833637/13185770_1920_1080_24fps.mp4'
    },

    {
      username: 'JohnDoe',
      rating: 4,
      comment: 'Great shoes! Comfortable and stylish.',
      media: 'https://videos.pexels.com/video-files/31646042/13482724_2732_1440_30fps.mp4'
    },
    {
      username: 'AlexStone',
      rating: 3,
      comment: 'Decent shoes for the price hghjvhvjhvhjvhjvhjvhjvhjvjhvjh.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius?',
      media: ''

    }
  ],

  imageUrls = [
    "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg",
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
  ],
  Title = "Nike Sneakers Shoes For Running Men",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
  highlights = ["Made with Full Cotton", "Slim fit for any Body", "Quality Control by JC"],
  availableSizes = [40, 30, 90],
  price = 200,
  currencySymbol = '$',
  rating = 4.5,
  visitStore,
  onAddToCart,                  //add  function
  onAddToWishlist,              //add  function
  onSizeSelect,                 //add  function
  onSelectedQuantity,           //add  function
  product_catalog_func,         //add  function
  product_catalog_visit_store,  //add  function
  Footer_Tell_us_Button,        //add  function
}) {

  const [selectedSize, setSelectedSize] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const reviewContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (reviewContainerRef.current) {
      const scrollAmount = 400;
      reviewContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleSizeClick = (sizeValue) => {
    setSelectedSize(sizeValue);
    if (onSizeSelect) onSizeSelect(sizeValue);
  };

  const minQuantity = 1;
  const maxQuantity = Infinity;

  const handleDecrement = () => {
    const newQuantity = Math.max(minQuantity, currentQuantity - 1);
    if (newQuantity !== currentQuantity) {
      setCurrentQuantity(newQuantity);
      if (onSelectedQuantity) onSelectedQuantity(newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = Math.min(maxQuantity, currentQuantity + 1);
    if (newQuantity !== currentQuantity) {
      setCurrentQuantity(newQuantity);
      if (onSelectedQuantity) onSelectedQuantity(newQuantity);
    }
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:w-1/3 px-4 mb-6 md:mb-0">
            {imageUrls && imageUrls.length > 0 ? (
              <Carousel
                showThumbs={true}
                showStatus={false}
                infiniteLoop
                autoPlay
                className="rounded-lg shadow-md border"
              >
                {imageUrls.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Product Image ${index + 1}`}
                      className="object-cover max-h-[400px] rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500 border">
                No Image Available
              </div>
            )}
          </div>
          <div className="md:w-2/3 px-4 flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">{Title}</h1>
            <p className="text-justify text-gray-600 mb-5 leading-relaxed text-lg font-normal mt-10">{description}</p>
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
            {/* Star Rating */}
            {typeof rating === 'number' && (
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 20 20"
                    fill={rating >= star ? '#FFD700' : rating >= star - 0.5 ? 'url(#half)' : '#E5E7EB'}
                  >
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#E5E7EB" />
                      </linearGradient>
                    </defs>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.146 3.51a1 1 0 00.95.69h3.692c.969 0 1.371 1.24.588 1.81l-2.988 2.172a1 1 0 00-.364 1.118l1.147 3.51c.3.921-.755 1.688-1.54 1.118l-2.988-2.172a1 1 0 00-1.176 0l-2.988 2.172c-.784.57-1.838-.197-1.539-1.118l1.146-3.51a1 1 0 00-.364-1.118L2.674 8.937c-.783-.57-.38-1.81.588-1.81h3.692a1 1 0 00.951-.69l1.144-3.51z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">{rating.toFixed(1)} / 5</span>
              </div>
            )}
            {/* Store Info */}
            {storeLogo_name && (
              <div className="flex items-center mb-6 justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={storeLogo_name.logoUrl}
                      alt={storeLogo_name.name}
                      className="w-12 h-12 rounded-xl"
                    />
                  </div>
                  <span className="text-gray-800 font-bold text-3xl">{storeLogo_name.name}</span>
                </div>
                <button onClick={visitStore} className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
                  Visit Store
                </button>
              </div>
            )}

            <div className="bg-gray-100 p-4 rounded-lg flex items-start justify-between mb-6">
              <div className="flex items-start space-x-6 md:space-x-8">
                <div>
                  <label className="block text-sm uppercase text-gray-500 mb-1 tracking-wide font-medium">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded overflow-hidden w-fit mt-1">
                    <button onClick={handleDecrement} disabled={currentQuantity <= minQuantity} className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">−</button>
                    <span className="px-4 py-1 font-medium border-l border-r border-gray-300">{currentQuantity}</span>
                    <button onClick={handleIncrement} disabled={currentQuantity >= maxQuantity} className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">+</button>
                  </div>
                </div>
                <div>
                  <div className="text-sm uppercase text-gray-500 mb-1 tracking-wide">Size</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {availableSizes.length > 0 ? (
                      availableSizes.map((sizeValue) => (
                        <button key={sizeValue} onClick={() => handleSizeClick(sizeValue)} className={`px-3 py-1 rounded border text-sm font-medium ${selectedSize === sizeValue ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-black'}`}>
                          {sizeValue}
                        </button>
                      ))
                    ) : (
                      <span className="text-sm font-medium text-gray-900">Not Available in Stock</span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">{currencySymbol}{price.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => onAddToCart({ quantity: currentQuantity, size: selectedSize })}
                disabled={!selectedSize}
                className={`flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 ${!selectedSize ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Add to cart
              </button>
              <button
                onClick={onAddToWishlist}
                className="flex-1 flex items-center justify-center border border-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-100"
              >
                Add to wishlist <HeartIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          {/* Product Images & Details code stays unchanged above... */}

          {reviews && reviews.length > 0 && (
            <div className="mt-10 relative">
              <h2 className="text-2xl font-bold mb-4">User Reviews</h2>

              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
                onClick={() => handleScroll('left')}
              >
                ◀
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
                onClick={() => handleScroll('right')}
              >
                ▶
              </button>

              <div
                ref={reviewContainerRef}
                className="flex overflow-x-auto space-x-6 pb-4 snap-x scroll-smooth"
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="w-[300px] sm:w-[400px] snap-start bg-white shadow-md border border-gray-200 rounded-xl p-4 flex-shrink-0"
                  >
                    <div className="flex items-center mb-2">
                      <h4 className="font-semibold text-gray-800 mr-2">{review.username}</h4>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4"
                            fill={review.rating >= star ? '#FFD700' : '#E5E7EB'}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.146 3.51a1 1 0 00.95.69h3.692c.969 0 1.371 1.24.588 1.81l-2.988 2.172a1 1 0 00-.364 1.118l1.147 3.51c.3.921-.755 1.688-1.54 1.118l-2.988-2.172a1 1 0 00-1.176 0l-2.988 2.172c-.784.57-1.838-.197-1.539-1.118l1.146-3.51a1 1 0 00-.364-1.118L2.674 8.937c-.783-.57-.38-1.81.588-1.81h3.692a1 1 0 00.951-.69l1.144-3.51z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    {review.media ? (
                      review.media.endsWith('.mp4') ? (
                        <video
                          src={review.media}
                          controls
                          className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                      ) : (
                        <img
                          src={review.media}
                          alt="review"
                          className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                      )
                    ) : null}
                    <p className="text-gray-700 text-sm break-words overflow-hidden text-ellipsis">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 px-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">You may also like</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[200px] min-w-[200px] bg-white shadow-md border border-gray-200 rounded-lg p-3 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                onClick={product_catalog_func}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-2"
                />
                <div className="flex text-yellow-500 mt-1 ">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < product.rating ? "currentColor" : "none"}
                      strokeWidth={2.5}
                    />
                  ))}
                </div>
                <p className="text-red-600 font-semibold mt-1">Rs. {product.price}</p>
                <div className="flex items-center justify-between px-4 py-3 border rounded-lg mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={product.logo} 
                        alt="Store logo"
                        className="w-10 h-10 rounded"
                      />
                    </div>
                  </div>
                  <button onClick={product_catalog_visit_store} className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
                    Visit Store
                  </button>
                </div>
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-[#0C2A4D] text-white py-12 px-6 sm:px-12 w-full mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
            <p className="mb-6">
              Have questions or need help with your order? Joven from our support team is here to help and will connect you with the right person if needed.
            </p>
            <button onClick={Footer_Tell_us_Button} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200">
              Tell us If you have any Query
            </button>
          </div>

          {/* Right Section */}
          <div className="text-sm flex flex-col gap-4">
            <div>
              <span className="font-bold block">Email</span>
              <a href="mailto:hello@buauk.com" className="text-blue-400 hover:underline">FabrIQ@gmail.com</a>
            </div>
            <div>
              <span className="font-bold block">Phone</span>
              <a href="tel:+6598735984" className="text-blue-400 hover:underline">(+65) 98735984</a>
            </div>
            <div>
              <span className="font-bold block">Address</span>
              <p className="text-blue-400 leading-snug">
                1 Paya Lebar Link<br />
                #04-01, Paya Lebar Quarter<br />
                Singapore, 408533
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-4 text-gray-400">
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default ProductDescription;












