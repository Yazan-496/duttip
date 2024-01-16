import {
  TEModal,
  TEModalBody,
  TEModalContent,
  TEModalDialog,
  TEModalHeader,
} from "tw-elements-react";
import React from "react";

const ModalComponent = ({
  openModal,
  _openModal,
  _closeModal,
  edit,
  title,
  children,
  fullScreen,
  isClose,
  noHeader,
}) => {
  return (
    <TEModal
      className="backdrop-blur-[5.5px] bg-transparent overflow-y-hidden h-full"
      show={openModal}
      setShow={_openModal}
    >
      <TEModalDialog
        size={fullScreen ? "fullscreen" : ""}
        className={`h-full right-0 ${
          fullScreen ? " min-w-[100%]" : " min-w-[90%]"
        } min-h-[100%] duration-150`}
        position="top-right"
        theme={{
          show: "translate-x-0 opacity-100",
          hidden: "translate-x-[100%] opacity-0",
        }}
      >
        <TEModalContent className="h-full flex w-[100vw]">
          <TEModalHeader className={`${noHeader ? "hidden" : ""} flex-1`}>
            <h5 className="text-5xl h-full font-bold w-full text-center leading-normal text-neutral-800 dark:text-neutral-200">
              {title}
            </h5>
          </TEModalHeader>
          <TEModalBody className="flex-1 mb-10 !p-0">
            {isClose && (
              <button
                type="button"
                className="box-content fixed p-5 right-0 rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={_closeModal}
                aria-label="Close"
              >
                X
              </button>
            )}
            <div className="pb-10 h-full">{children}</div>
          </TEModalBody>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  );
};
export default ModalComponent;
