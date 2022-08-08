import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import RoomsCard from "./RoomsCard";
import axios from "axios";

const StudyRooms = ({ onClick }) => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/get-topics")
    .then(res => setRooms(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="divide-y-2">
        <div className="flex items-center justify-between mb-2">
          <div className="">
            <h1 className="font-bold">STUDY ROOMS</h1>
            <p>3 rooms available</p>
          </div>
          <div className="flex">
            <button
              className="flex items-center rounded-lg px-4 py-2 bg-[#5E39C4] hover:bg-[#9881DA] transition duration-200 shadow-md"
              onClick={onClick}
            >
              <div className="flex items-center gap-2">
                <AiOutlinePlus /> Create Room
              </div>
            </button>
          </div>
        </div>
        <div className="">
          {rooms.map((room) => (
            <RoomsCard room={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudyRooms;
