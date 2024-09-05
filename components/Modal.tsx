import React, { FC } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface ModalProps {
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const cvUrl = "/my_resume.pdf";

  return (
    <div className="fixed inset-0 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-10 sm:top-20 mx-auto p-3 sm:p-5 border w-full sm:w-11/12 md:w-3/4 lg:w-2/4 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-base sm:text-lg leading-5 sm:leading-6 font-medium text-gray-900">
            My CV/Resume
          </h3>
          <div className="mt-2 px-4 sm:px-7 py-3">
            <p className="text-xs sm:text-sm text-gray-500">
              Here is my CV. Take a look at my experience and skills.
            </p>
            <div className="mt-4">
              <Worker
                workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
              >
                <Viewer
                  fileUrl={cvUrl}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>
          </div>
          <div className="items-center px-3 sm:px-4 py-3">
            <button
              className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white text-xs sm:text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
