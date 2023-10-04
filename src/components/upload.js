import React, { useRef } from 'react';
const url = process.env.REACT_APP_API_URL;
const urlimg = process.env.REACT_APP_API_URL_UPLOAD_IMG;

export const Upload = ({handleImageUpload}) => {
    const fileInputRef = useRef(null);
    // const openFilePicker = () => {
    //     fileInputRef.current.click();
    // };
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Archivo seleccionado:", file.name);
            const formData = new FormData();
            formData.append('image', file);
            try {
                const response = await fetch(`${url}${urlimg}`, {
                    method: "POST",
                    body: formData
                });
                const data = await response.json();
                handleImageUpload(data.url);
                console.log(data.url);
            } catch (error) {
                console.log("Error:", error);
            }
        }
    };
    return (
        <>
            <div>
                <input
                    id='uploadimage'
                    type="file"
                    accept='image/*'
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <button type="button" className="btn btn-success" onClick={() => fileInputRef.current.click()}>Seleccionar imagen</button>
            </div>
        </>
    );
}