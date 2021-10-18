import { useState } from "react";
import { Fragment } from "react";
import { PageHero } from "../../components/PageHero/PageHero/PageHero";
import { Header } from "../../components/Header/Header";
import "./SubmitProject.css";
import { SubmitProjectName } from "../../components/SubmitProjectName/SubmitProjectName";
import { SubmitProjectMember } from "../../components/SubmitProjectName/SubmitProjectMember";
import { Footer } from "../../components/Footer/Footer";
import { DropDown } from "./DragandDrop";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
export interface ISubmitProjectPageProps {}

export const SubmitProjectPage = ({}: ISubmitProjectPageProps) => {
  const [inputField, setInputField] = useState([{ members: "" }]);

  const handleAdd = () => {
    setInputField([...inputField, { members: "" }]);
  };

  const removeField = (index: any) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField(values);
  };
  return (
    <>
      <Header />
      <PageHero
        title="BEST INNOVATIVE MINDS 2021"
        subtitle="BEST INNOVATIVE MINDS"
      />
      <div className="submitpage">
        <form className="submitpage__form">
          <div className="submitpage__form-title">Submit Project</div>
          <div className="submitpage__form-names">
            <SubmitProjectName
              title="Project Name*"
              name="What is your project name?"
              widthprop={383}
              heightprop={52}
            />
            <SubmitProjectName
              title="Team Name*"
              name="What is your team name?"
              widthprop={383}
              heightprop={52}
            />
          </div>
          <div className="submitpage__form-description">
            <SubmitProjectName
              title="Describe project*"
              name="Describe your project including important details"
              widthprop={795}
              heightprop={194}
            />
          </div>
          <div className="submitpage__form-teammember">
            {inputField.map((input, index) => (
              <div key={index} className="aa">
                <SubmitProjectMember name="Team Member Name" />

                <Fragment>
                  {index === 0 ? (
                    <></>
                  ) : (
                    <RemoveCircleOutlineIcon
                      className="teammember-icon"
                      onClick={() => removeField(index)}
                    />
                  )}
                </Fragment>
              </div>
            ))}
            <button
              className="submitpage__form-teammember-button"
              type="button"
              onClick={handleAdd}>
              Add team member +
            </button>
          </div>
          <button type="submit" className="submitpage__form-button">
            <p className="submitpage__form-button-name">Submit Project </p>
          </button>
        </form>
        <div className="submitpage__upload">
          <DropDown />
        </div>
      </div>
      <Footer />
    </>
  );
};
