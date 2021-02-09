import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateResume.css";

export const CreateResume = () => {
  const [photoHolder, setPhotoHolder] = useState({ length: 0 });
  const [srcPhoto, setSrcPhoto] = useState("");
  const [fileType, setFileType] = useState([
    "image/jpeg",
    "image/pjpeg",
    "image/png",
  ]);
  const [textOfUncorrectFileType, setTextOfUncorrectFileType] = useState();
  const [imgDiv, setImgDiv] = useState("");
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [skills, setSkills] = useState();
  const [skillsRate, setSkillsRate] = useState("");
  const [profile, setProfile] = useState();
  const [experience, setExperience] = useState();
  const [education, setEducation] = useState();
  const [projects, setProjects] = useState();
  const [skillsFromInput, setSkillsFromInput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const skillRateHandler = (value) => {
    if (value == 1 || value == 2 || value == 3 || value == 4 || value == 5) {
      setSkillsRate(value);
    }
  };

  const deleteSomeSkill = (id) => {
    console.log(id);
    setSkillsFromInput(skillsFromInput.filter((el) => el.id != id));
  };
  const addNewSkill = () => {
    if (skillsRate != "") {
      setSkillsFromInput([
        ...skillsFromInput,
        {
          id: skillsFromInput.length,
          skillsText: (
            <>
              <p className="skillsWarningText">{skills}</p>
              <p className="skillsWarningText">&nbsp;</p>
            </>
          ),
          rate: skillsRate,
        },
      ]);
      setSkillsRate("");
    } else {
      setSkillsFromInput([
        ...skillsFromInput,
        {
          id: skillsFromInput.length,
          skillsText: <p className="skillsWarningText">{skills}</p>,
          rate: (
            <>
              <p className="skillsWarningText">&nbsp;</p>
              <p className="skillsWarningMesssage">
                You need to rate your skill
              </p>
            </>
          ),
        },
      ]);
    }
  };
  useEffect(() => {
    console.log(photoHolder);
    if (photoHolder == undefined) {
      var photoSrc = photoHolder;
    } else if (photoHolder != undefined && photoHolder.length != 0) {
      if (
        photoHolder["0"].type == fileType[0] ||
        photoHolder["0"].type == fileType[1] ||
        photoHolder["0"].type == fileType[2]
      ) {
        var photoSrc = photoHolder["0"];
        setSrcPhoto(window.URL.createObjectURL(photoSrc));
        setImgDiv("imgDiv");
        setTextOfUncorrectFileType("");
      } else {
        setTextOfUncorrectFileType(
          <p>
            This is uncorrect type of file. You need choose : jpeg, png, pjpeg
            types
          </p>
        );
        setSrcPhoto("");
      }
    } else {
      console.log("gotit");
    }
  }, [photoHolder]);

  var mappingSkillsFromInput = skillsFromInput.map((el) => (
    <div className="textOfInput">
      {el.skillsText}
      {el.rate}
      <button onClick={() => deleteSomeSkill(el.id)}>Delete</button>
    </div>
  ));
  const edit_cv = () => {
    setIsLoading(true);
    axios.put(
      "https://cv-hub.herokuapp.com/api/edit-cv",
      {
        cv: "!!!!",
      }
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {})
        .finally(() => {
          setIsLoading(false);
        })
    );
  };
  return (
    <div className="wrapper">
      <div className="AppCreateCV">
        <div className="photoHolder">
          <input
            onChange={(e) => {
              setPhotoHolder(e.target.files);
            }}
            type="file"
            id="inputPhotoEditor"
            className="inputPhotoHolder"
          ></input>
          <label for="inputPhotoEditor">Choose a photo</label>
          {textOfUncorrectFileType}
        </div>
        <div className="divForImg">
          <img className={imgDiv} src={srcPhoto}></img>
        </div>
        <div className="name">
          <input
            className="nameInput"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </div>
        <div className="surname">
          <input
            className="surnameInput"
            onChange={(e) => setSurname(e.target.value)}
            placeholder="surname"
          />
        </div>
        <div className="skills">
          <input
            className="skillsInput"
            onChange={(e) => setSkills(e.target.value)}
            placeholder="skills"
          />
          <form id="select" className="form">
            <select
              className="select"
              onChange={(e) => skillRateHandler(e.target.value)}
            >
              <option>Choose rate</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button
              onClick={addNewSkill}
              type="reset"
              from="select"
              className="skillsButton"
            >
              +
            </button>
          </form>
        </div>
        <div className="userSkills">{mappingSkillsFromInput}</div>
        <div className="profile">
          <textarea
            className="profileInput"
            onChange={(e) => setProfile(e.target.value)}
            placeholder="Profile"
          />
        </div>
        <div className="experience">
          <input
            className="experienceInput"
            onChange={(e) => setExperience(e.target.value)}
            placeholder="experience"
          />
        </div>
        <div className="eduction">
          <input
            className="educationInput"
            onChange={(e) => setEducation(e.target.value)}
            placeholder="education"
          />
        </div>

        <div className="projects">
          <textarea
            className="projectsInput"
            onChange={(e) => setProjects(e.target.value)}
            placeholder="Projects"
          />
        </div>
        <div className="submitAll">
          <button className="buttonSubmitAll" onClick={edit_cv}>Create CV</button>
          {isLoading ? <h1>Loading</h1> : ""}
        </div>
      </div>
    </div>
  );
};
