import React, { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import ProgressBar from "@ramonak/react-progress-bar";
import { generateString } from "../utils/utils";

const Upload = ({ setValue, setUrlImg, error, image_url }) => {
  const [ready, setReady] = useState(false);
  const [lastImage, setLastImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("No URL");
  const [image, setImage] = useState({ name: "No Image" });

  useEffect(() => {
    if(image_url){
      setUrl(image_url);
      setReady(true);
      setProgress(100);
    }
  }, [])

  useEffect(() => {
    if (image.name !== "No Image") {
      if (lastImage !== "") {
        storage
          .ref("/")
          .child(lastImage)
          .delete()
          .then(() => console.log("Done!"))
          .catch(() => console.log("Error"));
      }
      let splitImage = image.name.split(".");
      let newName = generateString(30) + "." + splitImage[1];
      handleUpload(newName);
    }
  }, [image]);

  const handleUpload = (newName) => {
    console.log(newName);
    const uploadTask = storage.ref(`/${newName}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("/")
          .child(newName)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setValue('image_url', url);
            setUrlImg(newName);
          });
        setLastImage(newName);
        setReady(true);
      }
    );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      {ready ? (
        <>
          <input
            type="file"
            style={{ display: "none" }}
            id="img"
            onChange={handleChange}
          />
          <button
            className="img-upload"
            style={{
              backgroundImage: `url(${url})`,
              imageResolution: "from-image",
            }}
            id="btn-upload"
          >
            <label htmlFor="img" className="img-label">
              +
            </label>
          </button>
        </>
      ) : (
        <>
          <input
            type="file"
            style={{ display: "none" }}
            id="img"
            onChange={handleChange}
          />
          <button className="img-add" id="btn-add">
            <label htmlFor="img" className="img-label">
              +
            </label>
          </button>
        </>
      )}
      <ProgressBar
        completed={progress}
        width="50%"
        bgcolor="#21AB91"
        margin="20px auto 10px auto"
        labelAlignment="right"
      />
      {error && <div className="error-img">Seleccione una imagen</div>}
    </div>
  );
};

export default Upload;
