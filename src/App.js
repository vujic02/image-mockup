import { useState } from "react";
import "./App.css";
import CanvasSolution from "./components/CanvasSolution";
import { FaCloudUploadAlt } from "react-icons/fa";

function App() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [selectedImg, setSelectedImg] = useState(1);

  return (
    <div className="h-full flex flex-col justify-center items-center mb-16">
      <CanvasSolution image={image} setImage={setImage} selectedImg={selectedImg} />
      <div className="mt-2 flex space-x-1">
        <img
          src="bg-img1.png"
          className={`w-[360px] h-[240px] border-2 ${selectedImg === 1 && "border-red-500"}`}
          onClick={() => {
            setSelectedImg(1);
            setImage(image);
          }}
        />
        <img
          src="bg-img2.png"
          className={`w-[360px] h-[240px] border-2 ${selectedImg === 2 && "border-red-500"}`}
          onClick={() => {
            setSelectedImg(2);
            setImage(image);
          }}
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setImage(url);
        }}
        className="flex space-x-1 mt-4 mb-2"
      >
        <input className="border border-black outline-none px-1" onChange={(e) => setUrl(e.target.value)} value={url} type="url" />
        <button
          className="px-4 py-1 bg-black text-white font-normal text-xl hover:bg-[rgba(0,0,0,0.84)] transition-colors cursor-pointer"
          type="submit"
        >
          Add image
        </button>
      </form>
      <p>OR</p>
      <label class="custom-file-upload mt-2 text-white flex">
        <input
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
          type="file"
          accept="image/png, image/gif, image/jpeg"
        />
        <FaCloudUploadAlt className="fill-white inline-block w-5 h-5 -mt-1"></FaCloudUploadAlt> Custom Upload
      </label>
    </div>
  );
}

export default App;
