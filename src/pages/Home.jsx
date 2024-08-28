import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (posts.length === 0) {
    return (
      <div className={`w-full py-8 mt-4 text-center text-animation `}>
        <h1 className="text-center text-[30px] font-bold">Group 69 (2.0)</h1>
        <Container>
          <div className={`bg-[url('/images/IMG_0709.JPG')] bg-cover bg-no-repeat bg-center min-h-screen bg-opacity-80 rounded-[20%] flex justify-center  animated-bg border-blue-600 border-2 shadow-blue-600 shadow-2xl` }>
          <h1 className="text-[80px] font-bold ">
                Login to read the value of 69 Friend's
              </h1>
          </div>
              
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.$id} className="p-2">
              <PostCard {...post} />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Home;
