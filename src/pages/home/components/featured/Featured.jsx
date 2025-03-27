import React from 'react';
import img1 from '../../../../assets/imgs/web.jpg'
import img2 from '../../../../assets/imgs/writing.jpg'
import img3 from '../../../../assets/imgs/design.jpg'
import img4 from '../../../../assets/imgs/sales-marketing.jpg'
import img5 from '../../../../assets/imgs/video.png'
import { Link } from 'react-router-dom';
const FeaturedCategories = () => {
  const categories = [
    { name: 'Development & IT', image: img1 },
    { name: 'Writing & Translation', image: img2 },
    { name: 'Design & Creative', image: img3 },
    { name: 'Sales & Marketing', image: img4 },
    { name: 'Video Editing', image: img5 },
    { name: 'SEO', image: img1 },
  ];

  return (
    <section className="py-16 bg-gray-50 ">
        <div className='max-w-[80%] mx-auto'>
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                    <Link to={"/services/"+ category.name}>
                      <div key={index} className="bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                      <img className="w-full h-40 object-cover" src={category.image} alt={category.name} />
                      <div className="p-4 text-center">
                          <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
                      </div>
                      </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturedCategories;
