import React from "react";
import Header from "../Componenets/Header/Header";
import Categories from "../Componenets/Categories";
import Footer from "../Componenets/Footer";
import ChatInbox from "../Componenets/ChatInbox";

import avatar1 from "../Images/laptop.png";
import avatar2 from "../Images/laptop.png";
import avatar3 from "../Images/laptop.png";
import adLaptop from "../Images/laptop.png";
import CategoriesWithoutImage from "../Componenets/CategoriesWithoutImage";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col w-[85%] justify-center items-center">
          <CategoriesWithoutImage />

          <ChatInbox
            tabs={["All", "Unread Chats", "Important"]}
            chats={[
              {
                id: 1,
                name: "John Doe",
                lastMessage: "Hey, still available?",
                unread: true,
                important: false,
                avatar: avatar1,
              },
              {
                id: 2,
                name: "Sarah Khan",
                lastMessage: "Please respond",
                unread: false,
                important: true,
                avatar: avatar2,
              },
              {
                id: 3,
                name: "Ali Raza",
                lastMessage: "Can we negotiate?",
                unread: true,
                important: true,
                avatar: avatar3,
              },
            ]}
            selectedUser={{
              name: "John Doe",
              avatar: avatar1,
            }}
            adData={{
              image: adLaptop,
              title: "Apple IMAC all models 2015...",
              price: "Rs 120,800",
            }}
            onTabChange={(tab) => console.log("Switched to:", tab)}
            onOpenAd={() => console.log("Ad opened")}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chat;
