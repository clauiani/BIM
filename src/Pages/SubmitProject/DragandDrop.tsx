import { Upload, message } from "antd";
import "./DragandDrop.css";
export interface IDropDownProps {}
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info: any) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
export const DropDown = ({}: IDropDownProps) => {
  return (
    <>
      <div className="drop__title">Add files</div>
      <div className="drop__paragraph">Drag your file</div>
      <div className="drop__paragraph">or</div>
      <Dragger {...props}>
        <button className="drop__button">Browse your files</button>
      </Dragger>
    </>
  );
};
