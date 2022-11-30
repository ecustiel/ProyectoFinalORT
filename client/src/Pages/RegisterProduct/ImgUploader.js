import { useRef, useState } from "react";
import { Uploader, Button } from "rsuite";
import { Toast } from "../../Helpers/SwalHelpers";

//Tener en cuenta que el Uploader tiene un data
const ImgUploader = () => {
  const [value, setValue] = useState([]);
  const uploader = useRef();
  return (
    <>
      <Uploader
        listType="picture-text"
        value={value}
        autoUpload={false}
        onChange={setValue}
        ref={uploader}
        action="//jsonplaceholder.typicode.com/posts/"
        onSuccess={Toast.fire({
          icon: "success",
          title: "Imagenes Cargadas Correctamente!",
        })}
        onError={Toast.fire({
          icon: "error",
          title: "Error al cargar las imagenes, revise nuevamente!",
        })}
      />

      <hr />
      <Button
        disabled={!value.length}
        onClick={() => {
          uploader.current.start();
        }}
      >
        Start Upload
      </Button>
    </>
  );
};

export default ImgUploader;
