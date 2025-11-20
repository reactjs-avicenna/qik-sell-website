import { Divider } from "@mui/material";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import {
    RiInformationFill,
    RiPhoneFill,
    RiCloseFill,
    RiMessage2Fill,
    RiSendPlaneFill,
    RiCloseCircleFill
} from "react-icons/ri";

export default function ChatInbox({
    tabs,
    chats,
    adData,
    selectedUser,
    onTabChange,
    onOpenAd,
}) {
    const [activeTab, setActiveTab] = useState(tabs?.[0] || "All");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onTabChange && onTabChange(tab);
    };

    // Filter Chats
    const filteredChats =
        activeTab === "All"
            ? chats
            : activeTab === "Important"
                ? chats.filter((c) => c.important)
                : chats.filter((c) => c.unread);

    return (
        <div className="w-full flex gap-4">

            {/* LEFT SIDEBAR */}
            <div className="w-1/3 bg-white  rounded-lg shadow-sm border ">
                <h2 className="text-center font-bold border-b bg-blue-50 h-[60px]   text-xl flex justify-center items-center text-gray-700">
                    Inbox
                </h2>

                {/* Tabs */}
                <div className="flex gap-2  flex-wrap p-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`px-4 py-1 rounded-full text-sm border transition ${activeTab === tab
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <Divider></Divider>
                {/* Chat List */}
                <div className="mt-2 p-3">
                    {filteredChats.length === 0 ? (
                        <p className="text-gray-400 text-center text-sm">No chats found.</p>
                    ) : (
                        filteredChats.map((chat) => (
                            <div
                                key={chat.id}
                                className="p-3 border rounded-lg mb-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                            >
                                <img
                                    src={chat.avatar}
                                    alt={chat.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>
                                    <p className="font-semibold">{chat.name}</p>
                                    <p className="text-gray-600 text-sm">{chat.lastMessage}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* RIGHT SIDE CHAT AREA */}
            <div className="w-2/3 bg-white rounded-lg border shadow-sm flex flex-col">

                {/* Chat Header */}
                <div className="flex items-center justify-between h-[60px] pl-4 pr-4  bg-blue-50 border-b">
                    <div className="flex items-center gap-3">
                        <img
                            src={selectedUser.avatar}
                            className="w-10 h-10 rounded-full object-cover"
                            alt="avatar"
                        />
                        <div>
                            <p className="font-semibold text-gray-800">{selectedUser.name}</p>
                            <p className="text-xs text-gray-500">Active Now</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-blue-600 text-lg">
                        <RiInformationFill className="cursor-pointer hover:text-blue-800" title="Info" />
                        <RiPhoneFill className="cursor-pointer hover:text-blue-800" title="Call" />
                        <RiCloseCircleFill  className="cursor-pointer hover:text-blue-800" title="Close Chat" />
                        <RiMessage2Fill className="cursor-pointer hover:text-blue-800" title="New Message" />
                    </div>


                </div>

                {/* Ad Preview Area */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                        <img
                            src={adData.image}
                            className="w-16 h-16 rounded object-cover"
                            alt="ad"
                        />
                        <div>
                            <p className="font-semibold text-gray-800">{adData.title}</p>
                            <p className="text-gray-600 text-sm">{adData.price}</p>
                        </div>
                    </div>

                    <button
                        onClick={onOpenAd}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                    >
                        View Ad
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto text-gray-500 text-sm">
                    Messages will appear here...
                </div>

                {/* Input */}
                <div className="p-3 bg-blue-50 border-t flex items-center gap-2">
                    <GrAttachment />
                    <input
                        type="text"
                        placeholder="Type Message"
                        className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-400"
                    />
                    <button className="text-blue-600  text-[25px] rounded-full hover:text-blue-700">
                        <IoIosSend />
                    </button>
                </div>
            </div>
        </div>
    );
}
