import "./HomePage.css";
import Group from "../../assets/Group.png";
import { SectionIntro } from "../../components/SectionIntro/SectionIntro";
import { Benefits } from "../../components/Benefit/Benefits/Benefits";
import { Testimonials } from "../../components/Testimonial/Testimonials/Testimonials";
import PrizeGroup from "../../assets/PrizeGroup.png";
import { Prizes } from "../../components/Prize/Prizes/Prizes";
import { Footer } from "../../components/Footer/Footer";
import { Video } from "../../components/VideoThumbnail/Video";
import { HeaderButton } from "../../components/Header/HeaderButton/HeaderButton";
import YouTubeLogo from "../../assets/YoutubeLogo.png";
import Vector2 from "../../assets/Vector2.png";
import { Header } from "../../components/Header/Header";
export interface IHomePageProps {}

export const HomePage = ({}: IHomePageProps) => {
  return (
    <>
      <Header />
      <div className="homePage">
        <div className="homePage__title">
          <p className="homePage__title-paragraph"> Innov</p>
          <p className="homePage__title-paragraph"> ation.</p>
          <div className="homePage__vector" />
          <p className="homePage__title-quote">
            Create value by applying novel solutions to meaningful problems
          </p>
          <img
            src={Vector2}
            alt="No image found"
            className="homePage__arrow-img"
          />
        </div>
        <img
          src={Group}
          alt="No image found"
          className="homePage__group-icon"
        />
      </div>
      <div className="homePage__section-intro">
        <SectionIntro
          centered={true}
          title="WHY TO JOIN?"
          subtitle=" Benefits & Advantages"
          description="While we can customize your plan to suit your needs, most clients schedule regular services:"
        />
      </div>
      <div className="homePage__benefits">
        <Benefits />
      </div>
      <span className="brlarge" />
      <div className="homePage__testimonial-intro">
        <SectionIntro
          centered={false}
          title="TESTIMONIALS"
          subtitle="  What Participants Say"
          description="These are things that participants who have used our features and works says."
        />
      </div>
      <div className="homePage__testimonials">
        <Testimonials />
      </div>
      <span className="brlarge" />
      <div className="homePage__prizes">
        <img src={PrizeGroup} />

        <div className="prize_section">
          <SectionIntro
            title="PRIZES"
            subtitle="  What you can win?"
            description="These are things that participants who have used our features and works says."
          />

          <Prizes />
        </div>
      </div>
      <span className="brlarge" />
      <div className="homePage__video">
        <div>
          <SectionIntro
            title=" HOW TO JOIN "
            subtitle="  Easier than you think"
            description="These are things that participants who have used our features and works says."
          />
          <div className="video-buttons">
            <HeaderButton name={"Apply now"} background="black" color="white" />{" "}
            <div className="youtube">
              <img src={YouTubeLogo} alt="No image found" />
              <a className="youtube-ref" href="https://www.youtube.com/">
                View more videos{" "}
              </a>
            </div>
          </div>
        </div>
        <Video />
      </div>
      <span className="brlarge" />
      <Footer />
    </>
  );
};
