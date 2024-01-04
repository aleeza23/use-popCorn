import React, {useState} from "react";
import Star from "./Star";

const starContainer = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starStyle = {
  display: "flex",
};
const StarRating = ({
  ratingLength = 5,
  color = "#fcc419",
  size = "39px",
  message = [],
  onSetRating
}) => {
  const [rating, setrating] = useState(0);
  const [temRating, settemRating] = useState(0);


  return (
    <>
      <div style={starContainer}>
        <div style={starStyle}>
          {Array.from({length: ratingLength}, (_, index) => (
            <Star
              key={index}
              full={temRating ? temRating >= index + 1 : rating >= index + 1}

              onClick={() =>{
                onSetRating(index + 1);
                setrating(index + 1)                
              }}

              onMouseEnter={() => settemRating(index + 1)}
              onMouseLeave={() => settemRating(0)}
              color={color}
              size={size}
            />
          ))}
        </div>
        <p style={{lineHeight: "0", marginTop: "1rem", color: color}}>
          {message.length === ratingLength
            ? temRating
              ? message[temRating - 1]
              : message[rating - 1]
            : temRating || rating || ""}
        </p>
      </div>
    </>
  );
};

export default StarRating;
