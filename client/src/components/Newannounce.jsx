import React from "react";
import Publish from "./Publish";
import Attachfile from "./Attachfile";
import { useRef, useState } from "react";
import Uploadedfile from "./Uploadedfile";
import { announcement } from "../teacher/content/main";
import pfp from "../assets/profile/profileholder.png";
import { useContext } from "react";
import { AnnouncementContext } from "../teacher/Teacherannounce";
import Save from "./Save";
import Cancel from "./Cancel";

const Newannounce = ({ setItem, setActiveCardIndex, edit }) => {
  const inputRef = useRef(null);
  const focusRef = useRef(null);
  const changeRef = useRef(null);
  const [files, setFiles] = useState([]);
  const { editMode, contentToEdit, setContentToEdit, Acontent, setContent } =
    useContext(AnnouncementContext);
  editMode ? focusRef.current.focus() : null;
  let allowEdit = false;

  const newItem = {
    profilepicture: pfp,
    person: "Imed",
    content: Acontent.description,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    editMode
      ? setContentToEdit((prevContentToEdit) => ({
          ...prevContentToEdit,
          description: value,
        }))
      : setContent((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const handleFileUpload = () => {
    inputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div
      className={` ${
        editMode ? " shadow-2xl" : " shadow-md"
      } mb-7 rounded-[10px] bg-white px-8 py-6`}
    >
      <p className=" mb-3 text-lg font-semibold text-nightblue">
        {editMode ? "Edit announcement" : "Add a new announcement"}
      </p>
      <div className="  flex justify-between">
        <div className="flex w-[45%] flex-col gap-6 ">
          <input
            ref={focusRef}
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className=" rounded-[10px] border border-darkgray px-3 py-3.5 outline-none"
          />
          <textarea
            ref={changeRef}
            onFocus={() => {
              allowEdit = true;
              console.log(allowEdit);
            }}
            value={editMode ? contentToEdit.content : Acontent.description}
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
            {
              editMode ? <Cancel /> : null
              // no change on the content
            }
            <Attachfile onClick={handleFileUpload} />
            {!editMode ? (
              <Publish
                onClick={() => {
                  setItem((prevItems) => [newItem, ...prevItems]);
                  setActiveCardIndex((prev) => prev + 1);
                  console.log("added Item");
                }}
              />
            ) : (
              <Save /> // set the content to the edited one;
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newannounce;
