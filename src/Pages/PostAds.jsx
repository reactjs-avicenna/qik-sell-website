import React from "react";
import Header from "../Componenets/Header/Header";
import Footer from "../Componenets/Footer";

import laptop from "../Images/laptop.png"
import PostAd from "../Componenets/PostAd";


const PostAds = () => {

   

    return (
        <div className=" min-h-screen flex flex-col">
            {/* Header Section */}
            <Header searchView={false} />

            <div className="flex  flex-col w-[100%] justify-center items-center">
                <div className="flex  flex-col w-[85%] justify-center items-center">
                  <PostAd/>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PostAds;
