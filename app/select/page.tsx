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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. the cat jumped over the cow",
    room_status: "Available",
    room_slots: "4/4",
  },
];

const Roomies = [];

const page = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | undefined>(
    undefined
  );

  const [selectedRoomData, setSelectedRoomData] = useState<any>();

  function handleRoomSelectClick(id: number) {
    if (selectedRoom === id) return setSelectedRoom(undefined);
    setSelectedRoom(id);
  }

  function getElementById<T extends { roomID: string | number }>(
    rooms: T[],
    id: string | number
  ): T | undefined {
    return rooms.find((item) => item.roomID === id);
  }

  useEffect(() => {
    if (selectedRoom) {
      let data = getElementById(rooms, selectedRoom);
      setSelectedRoomData(data);
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
                    src={selectedRoomData?.room_image}
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
              <div className="pt-5 space-y-4">
                <div className="flex justify-between items-start ">
                  <h3 className="text-2xl font-medium">
                    Room {selectedRoom}{" "}
                    <span className="text-sm text-gray-500 font-normal">
                      | {selectedRoomData?.room_type!}
                    </span>{" "}
                  </h3>
                  <div className="">
                    <p className="text-sm text-green-600 font-normal">
                      {selectedRoomData?.room_status!}
                    </p>
                    <p className="text-sm text-gray-500 font-normal text-end">
                      {selectedRoomData?.room_slots!}
                    </p>
                  </div>
                </div>
                <hr />
                <p className="w-full text-gray-500">
                  {selectedRoomData?.room_description!}
                </p>
                {/* {JSON.stringify(selectedRoomData)} */}
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
