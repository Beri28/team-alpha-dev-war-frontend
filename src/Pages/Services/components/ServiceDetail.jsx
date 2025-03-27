import React from "react";
import { Card, CardContent, Avatar, Typography, Button, responsiveFontSizes } from "@mui/material";
import Navbar from "../../../Components/navbar/Navbar";
import Footer from "../../../Components/footer/Footer";
import { Payment } from "../../../functions/apiCalls";
import img1 from '../../../Assets/imgsweb.jpg'
import img2 from '../../../assets/imgs/writing.jpg'
import img3 from '../../../assets/imgs/design.jpg'
import img4 from '../../../assets/imgs/sales-marketing.jpg'
import img5 from '../../../assets/imgs/video.png'

const mockPortfolio = [
  { id: 1, title: "Website Design", url: img1 },
  { id: 2, title: "Logo Design", url:img3 },
  { id: 3, title: "App Development", url:img5},
];

const mockReviews = [
  { id: 1, user: "Client A", rating: 5, comment: "Excellent work!",isPositive: true, },
  { id: 2, user: "Client B", rating: 4, comment: "Very professional.",isPositive: false, },
  { id: 3, user: "Client C", rating: 3, comment: "Good service but could improve.",isPositive: true, },
];

const ServiceDetails = () => {
  const userProfile = {
    name: "John Doe",
    email:'johnDoe@gmail.com',
    location: "Yaoundé, Cameroon",
    hourlyRate: 250,
    skills: ["Web Development", "Graphic Design", "Content Writing"],
    rating: 4,
    about: 'I am a passionate developer with over 5 years of experience working with React.js and Node.js. I enjoy building clean, scalable, and user-friendly web applications.',
    
  };
  const handlePayment=async()=>{
    try {
      console.log("Hold on....")
      const res=await Payment({
        amount:userProfile.hourlyRate,
        email:userProfile.email,
        message:userProfile.skills[0],
        redirectUrl: 'https://yahustle.onrender.com'
      })
      console.log(res)
      if(res && res.status===200){
        window.location.href=res.data.link
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <Navbar />
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto mt-6 py-8 bg-white">
        {/* User Profile Information */}
        <div className='flex justify-between items-start'>
          <div className="flex items-start mb-8">
            <Avatar alt={userProfile.name} src="/path/to/avatar.jpg" sx={{ width: 100, height: 100 }} />
            <div className="ml-4">
              <Typography variant="h4" className="font-bold">{userProfile.name}</Typography>
              <Typography variant="subtitle1" className="text-gray-600">{userProfile.email}</Typography>
              <Typography variant="subtitle1" className="text-gray-600">{userProfile.location}</Typography>
              <Typography variant="subtitle1" className="text-gray-600">{userProfile.hourlyRate} / hour</Typography>
              <Typography variant="subtitle2" className="text-gray-600">
                Skills: {userProfile.skills.join(", ")}
              </Typography>
              <div className="flex items-center justify-center lg:justify-start space-x-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < userProfile.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.62 2.95 1.08-6.29L.88 6.95l6.34-.55L10 0l2.78 5.35 6.34.55-4.58 5.71 1.08 6.29L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="text-gray-600">{userProfile.rating} / 5</span>
              </div>
            </div>
          </div>
          <Button variant='contained' size='large' color='inherit' className='bg-[black!important] hover:bg-[white!important] outline-1 outline-black text-[white!important] hover:text-[black!important]' sx={{position:'fixed',zIndex:99,right:'10%'}} onClick={handlePayment}>Hire</Button>
        </div>
        <h5 className="text-2xl font-bold mb-2">Description</h5>
        <p className="text-lg text-gray-600 my-2">{userProfile.about}</p>
        {/* Portfolio Section */}
        <h5 className="text-2xl font-bold mb-4">Portfolio</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockPortfolio.map((item) => (
            <Card key={item.id} className="shadow-md">
              <img src={item.url} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews and Ratings Section */}
        <h5 className="text-2xl font-bold mb-4">Reviews and Ratings</h5>
        <div className="space-y-4">
          {mockReviews.map((review) => (
            <div key={review.id} className={`border border-gray-300 p-4 rounded-lg shadow-md ${review.isPositive ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'}`}>
              <Typography variant="subtitle1" className="font-semibold">{review.user}</Typography>
              {/* <Typography variant="body2" className="text-gray-600">Rating: {review.rating} </Typography> */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.62 2.95 1.08-6.29L.88 6.95l6.34-.55L10 0l2.78 5.35 6.34.55-4.58 5.71 1.08 6.29L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="text-gray-600">{review.rating} / 5</span>
              </div>
              <Typography variant="body1">{review.comment}</Typography>
            </div>
          ))}
        </div>
      </div>
    <Footer />
    </>
  );
};

export default ServiceDetails;