import './FileUploader.css';

import { FileUpload } from 'primereact/fileupload';
import PropTypes from 'prop-types';
import React from 'react';

import { labelConfig } from '../../../../pages/NewTeacher/js/config';




const FileUploader = ({
    label,
    id,
    uploadedFiles,
    handleFileUpload,
    index,
    name = "file",
}) => {
    return (
        <div className="file-uploader align-items-center flex flex-column gap-2 justify-content-between p-2 surface-200">
            <label
                className={labelConfig}
                htmlFor={`${id}-${index}`}
            >{label}</label>
            <FileUpload
                auto
                cancelLabel="Cancelar"
                chooseLabel="Upload"
                chooseOptions={
                    {
                        label: "Upload",
                        icon: "pi pi-upload",
                        className: "surface-400 border-400 hover:bg-yellow-400 hover:border-yellow-400"
                    }
                }
                className="w-full"
                customUpload
                id={`${id}-${index}`}
                multiple
                name={name}
                uploadHandler={(e) => handleFileUpload(e, index)}
                uploadLabel="Enviar"
            />
        </div>
    );
};

FileUploader.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    uploadedFiles: PropTypes.array,
    handleFileUpload: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string,
};

FileUploader.defaultProps = {
    uploadedFiles: [],
};

export default FileUploader;