"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const rooms = [
  {
    roomID: 1,
    room_number: 1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image:
      "https://images.pexels.com/photos/11515830/pexels-photo-11515830.jpeg?auto=compress&cs=tinysrgb&w=600",
    room_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID: 2,
    room_number: 1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image:
      "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID: 3,
    room_number: 1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image:
      "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID: 4,
    room_number: 1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image:
      "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    roomID: 5,
    room_number: 1,
    room_name: "Room 1",
    room_type: "Single Room",
    room_price: 100,
    room_image:
      "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800",
    room_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];


const page = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | undefined>(
    undefined
  );

  const [selectedRoomData, setSelectedRoomData] = useState<any>()

  function handleRoomSelectClick(id: number) {
    if (selectedRoom === id) return setSelectedRoom(undefined);
    setSelectedRoom(id);
  }

  function getElementById<T extends { roomID: string | number }>(
    rooms: T[],
    id: string | number
  ): T | undefined {
    return rooms.find(item => item.roomID === id);
  }

  useEffect(() => {
    if (selectedRoom) {
      let data = getElementById(rooms, selectedRoom)
      setSelectedRoomData(data)
      console.log(data);
    }
  }, [selectedRoom]);

  return (
    <div className="w-screen h-screen">
      <div className="flex max-w-7xl mx-auto mt-20 items-start gap-2">
        <div className="flex-1 flex flex-wrap gap-2 space-y-5">
          <div className="w-full max-w-7xl mx-auto ">
            <h1 className="font-medium text-2xl text-gray-700">Pick a Room</h1>
            <p className="text-sm text-gray-400 w-80">
              We've created a list of rooms that match your preference. Pick
              your best match.
            </p>
          </div>
          {rooms.map((item, index) => {
            const isSelected =
              item.roomID === selectedRoom ? "border-slate-800" : "";
            return (
              <div
                key={index}
                className={`${isSelected} border-2 h-16 w-16 flex justify-center items-center rounded hover:cursor-pointer`}
                onClick={() => handleRoomSelectClick(item.roomID)}
              >
                {item.roomID}
              </div>
            );
          })}
        </div>
        <div className="flex-1 ">
          {selectedRoom ? (
            <div className="">
              <div className="grid grid-cols-12 gap-2">
                <div className="relative col-span-12 h-60 rounded overflow-hidden">
                  <Image
                    src={
                      selectedRoomData?.room_image
                    }
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {/* <div className="relative col-span-6 h-60 rounded overflow-hidden">
                  <Image
                    src={
                      "https://images.pexels.com/photos/11515830/pexels-photo-11515830.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div> */}
              </div>
              <div className="pt-5">
                <h3 className="text-2xl font-medium">Room {selectedRoom}</h3>
                {JSON.stringify(selectedRoomData)}
              </div>
              
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-2">
              <div className="relative col-span-12 h-60 rounded overflow-hidden">
                <Image
                  src={
                    "https://images.pexels.com/photos/9170356/pexels-photo-9170356.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative col-span-6 h-60 rounded overflow-hidden">
                <Image
                  src={
                    "https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=800"
                  }
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative col-span-6 h-60 rounded overflow-hidden">
                <Image
                  src={
                    "https://images.pexels.com/photos/11515830/pexels-photo-11515830.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative col-span-12 h-60 rounded overflow-hidden">
                <Image
                  src={
                    "https://images.pexels.com/photos/10983050/pexels-photo-10983050.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
