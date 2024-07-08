import Image from "next/image";
import React from "react";

const rooms = [
  {
    roomID:1,
    room_number:1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image: "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID:1,
    room_number:1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image: "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID:1,
    room_number:1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image: "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID:1,
    room_number:1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image: "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID:1,
    room_number:1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image: "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID:1,
    room_number:1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image: "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  
]
const page = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full max-w-7xl mx-auto mt-10">
        <h1 className="font-medium text-2xl text-gray-700">Pick a Room</h1>
        <p className="text-sm text-gray-400 w-80">
          We've created a list of rooms that match your preference. Pick your
          best match.
        </p>
      </div>
      <div className="flex max-w-7xl mx-auto mt-10 items-start gap-2">
        <div className="flex-1 flex flex-wrap gap-2">
          {rooms.map((item, index) => (
            <div className=" border-2 h-16 w-16 flex justify-center items-center rounded">
              1
            </div>
          ))}
        </div>
        <div className="flex-1 ">
          <div className="grid grid-cols-12 gap-2">
            <div className="relative col-span-6 h-60 rounded overflow-hidden">
              <Image
                src={
                  "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                alt=""
                fill
              />
            </div>
            <div className="relative col-span-6 h-60 rounded overflow-hidden">
              <Image
                src={
                  "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                alt=""
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
