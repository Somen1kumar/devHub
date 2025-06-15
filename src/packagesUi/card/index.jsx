import React from "react";
import { CardLightStyles, CardDarkStyles } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCurrentDeveloperData } from "../../redux/reducer";

const DeveloperCard = ({ developer, selector }) => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const onClickHandler = () => {
        console.log("Card clicked for developer:", developer.id);
        dispatch(addCurrentDeveloperData(developer));
        navigation(`/developer/${developer.id}`);
        // You can add more functionality here, like navigating to a detailed view
    }
    const CardSelector = selector ? CardDarkStyles : CardLightStyles;
  return (
    <div className={CardSelector.cardContainer} onClick={onClickHandler}>
      <img
        src={developer.avatar}
        alt={developer.name}
        className={CardSelector.imageStyle}
      />
      <h2 className={CardSelector.h2Style}>{developer.name}</h2>
      <p className={CardSelector.bioStyle}>{developer.bio}</p>
      <div className="w-full">
        <span className={CardSelector.skillsStyle}>Skills: </span>
        <span className={CardSelector.skillDeveloper}>
          {developer.skills.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default DeveloperCard;