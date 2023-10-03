import React, { useRef } from 'react'

const url = process.env.REACT_APP_API_URL;
const urlimg = process.env.REACT_APP_API_URL_UPLOAD_IMG;

export const Upload = () => {
    const fileInputRef = useRef(null);
    //const [selectedImage, setSelectedImage] = useState(null);
    const handleUploadButtonClick = async () => {
        fileInputRef.current.click();
        console.log("Clicleando", fileInputRef.current.files[0])
        // if (file) {
            const formData = new FormData();
            formData.append('image', fileInputRef.current.files[0]);
            await fetch(`${url}${urlimg}`, {
                method: "POST",
                body: formData
                // headers: {
                //     "Content-type": "application/json"
                // },
            })
                .then((data) => {
                    return data.json();
                })
                .then((resp) => {
                    console.log(resp)
                })
                .catch((error) => {
                    console.log("Error", error)
                });
            //setSelectedImage(formData);
            //   onImageSelect(file);
            //console.log('Archivo seleccionado:', file.name);
       // }

        
    };

    return (
        <>
            <div>
                <input id='uploadimage' type="file" accept='image/*' ref={fileInputRef} style={{ display: 'none' }} />
                <label htmlFor='uploadimage'>
                    <button type="button" className="btn btn-success" onClick={handleUploadButtonClick}>Seleccionar imagen</button>
                </label>
            </div>
        </>
    );
};

