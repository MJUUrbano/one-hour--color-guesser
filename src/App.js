import styles from "./App.module.css";
import React, { useState, useEffect } from "react";

function App() {
  const hexAlphabet = "0123456789ABCDEF";

  const randomizeColor = () => {
    let newColor = [];
    for (let i = 0; i < 6; i++) {
      newColor.push(hexAlphabet[Math.floor(Math.random() * 16)]);
    }
    return "#" + newColor.join("");
  };

  const [colors, setColors] = useState([
    randomizeColor(),
    randomizeColor(),
    randomizeColor(),
  ]);

  const [correctColor, setCorrectColor] = useState(
    colors[Math.floor(Math.random() * 3)]
  );

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = (e) => {
    console.log(e);
    const chosenColor = e.target.attributes.color.value;
    setTotal((prev) => prev + 1);
    if (chosenColor === correctColor) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    setColors([randomizeColor(), randomizeColor(), randomizeColor()]);
  };

  useEffect(() => {
    setCorrectColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [colors]);

  return (
    <div className={styles.App}>
      <div
        className={styles.ChooseColor}
        style={{ backgroundColor: randomizeColor(), color: randomizeColor() }}
      >
        CHOOSE: <h4>{correctColor}</h4>
      </div>
      <div className={styles.ColorsList}>
        <div
          className={styles.Color}
          style={{ backgroundColor: colors[0] }}
          color={colors[0]}
          onClick={handleClick}
        ></div>
        <div
          className={styles.Color}
          style={{ backgroundColor: colors[1] }}
          color={colors[1]}
          onClick={handleClick}
        ></div>
        <div
          className={styles.Color}
          style={{ backgroundColor: colors[2] }}
          color={colors[2]}
          onClick={handleClick}
        ></div>
      </div>
      <div
        className={styles.Score}
        style={{ backgroundColor: randomizeColor(), color: randomizeColor() }}
      >
        SCORE:
        <h4>
          {score}/{total}
        </h4>
        STREAK:<h4> {streak}</h4>
      </div>
    </div>
  );
}

export default App;
