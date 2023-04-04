import React from "react";
import Publish from "./Publish";
import Attachfile from "./Attachfile";
import { useRef, useState } from "react";
import Uploadedfile from "./Uploadedfile";
import { announcement } from "../teacher/content/main";
import pfp from "../assets/profile/profileholder.png";

const Newannounce = ({ addItem }) => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [Acontent, setContent] = useState({});

  const newItem = {
    profilepicture: pfp,
    person: "Imed Bousakhria",
    content: Acontent.description,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContent((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const handleFileUpload = () => {
    inputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div className="rounded-[10px] bg-white px-8 py-6">
      <p className=" mb-3 text-lg font-semibold text-nightblue">
        Add a new announcement
      </p>
      <div className="  flex justify-between">
        <div className="flex w-[45%] flex-col gap-6 ">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className=" rounded-[10px] border border-darkgray px-3 py-3.5 outline-none"
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className=" resize-none rounded-[10px] border border-darkgray px-3 pt-3.5 pb-24 outline-none"
          />
        </div>

        <div className="flex w-[45%] flex-col justify-between">
          <div className=" basis-[80%] ">
            <div className="flex flex-col">
              {files.map((file) => (
                <Uploadedfile fileName={file.name} />
              ))}
            </div>
            <input
              type="file"
              accept=".pdf, image/*"
              multiple="true"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleFileSelected}
            />
          </div>
          <div className="flex gap-4 place-self-end">
            <Attachfile onClick={handleFileUpload} />
            <Publish
              onClick={() => {
                addItem((prevItems) => [newItem, ...prevItems]);
                console.log("added Item");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newannounce;
