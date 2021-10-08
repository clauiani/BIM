import "./Video.css";
export interface IVideoProps {}

export const Video = ({}: IVideoProps) => {
  return (
    <div className="aa">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/YbJOTdZBX1"></iframe>
    </div>
  );
};
