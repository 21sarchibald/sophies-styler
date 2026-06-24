import diamondHead from "../assets/images/hair/diamond-head.png";
import heartHead from "../assets/images/hair/heart-head.png";
import longHead from '../assets/images/hair/long-head.png';
import ovalHead from "../assets/images/hair/oval-head.png";
import roundHead from "../assets/images/hair/round-head.png";
import squareHead from "../assets/images/hair/square-head.png";

import whiteSilverHair from "../assets/images/hair/white-silver-hair.png"
import blondeHair from "../assets/images/hair/blonde-hair.png"
import lightBrownHair from "../assets/images/hair/light-brown-hair.png"
import redAuburnHair from "../assets/images/hair/red-auburn-hair.png"
import darkBrownHair from "../assets/images/hair/dark-brown-hair.png"
import blackHair from "../assets/images/hair/black-hair.png"

import straightHair from "../assets/images/hair/type-1-hair.png"
import wavyHair from "../assets/images/hair/type-2-hair.png"
import curlyHair from "../assets/images/hair/type-3-hair.png"
import coilyHair from "../assets/images/hair/type-4-hair.png"

export const hairQuestions = [
    {
      id: "faceShape",
      heading: "Which face shape best matches yours?",
      answers: [
        {
          id: "diamond",
          text: "Diamond",
          image: [diamondHead],
          code: "diamond"
        },
        {
          id: "heart",
          text: "Heart",
          image: [heartHead],
          code: "heart"
        },
        {
          id: "long",
          text: "Long",
          image: [longHead],
          code: "long"
        },
        {
          id: "oval",
          text: "Oval",
          image: [ovalHead],
          code: "oval"
        },
        {
          id: "round",
          text: "Round",
          image: [roundHead],
          code: "round"
        },
        {
          id: "square",
          text: "Square",
          image: [squareHead],
          code: "square"
        }
  
      ]
    },
    {
    id: "hairColor",
      heading: "Which hair color best matches yours?",
      answers: [
        {
          id: "white-silver",
          text: "White / Silver",
          image: [whiteSilverHair],
          code: "silver"
        },
        {
          id: "blonde",
          text: "Blonde",
          image: [blondeHair],
          code: "blonde"
        },
        {
          id: "light-brown",
          text: "Light Brown",
          image: [lightBrownHair],
          code: "light_brown"
        },
        {
          id: "red-auburn",
          text: "Red / Auburn",
          image: [redAuburnHair],
          code: "red"
        },
        {
          id: "dark-brown",
          text: "Dark Brown",
          image: [darkBrownHair],
          code: "dark_brown"
        },
        {
          id: "black",
          text: "Black",
          image: [blackHair],
          code: "black"
        },
      ]
    },
    {
      id: "hairTexture",
        heading: "Which hair texture best matches yours?",
        answers: [
          {
            id: "straight",
            text: "Straight",
            image: [straightHair],
            code: "straight"
          },
          {
            id: "wavy",
            text: "Wavy",
            image: [wavyHair],
            code: "wavy"
          },
          {
            id: "curly",
            text: "Curly",
            image: [curlyHair],
            code: "curly"
          },
          {
            id: "coily",
            text: "Coily",
            image: [coilyHair],
            code: "coily"
          },
        ]
      },
]