import diamondHead from "../assets/images/diamond-head.png";
import heartHead from "../assets/images/heart-head.png";
import longHead from '../assets/images/long-head.png';
import ovalHead from "../assets/images/oval-head.png";
import roundHead from "../assets/images/round-head.png";
import squareHead from "../assets/images/square-head.png";

import whiteSilverHair from "../assets/images/white-silver-hair.png"
import blondeHair from "../assets/images/blonde-hair.png"
import lightBrownHair from "../assets/images/light-brown-hair.png"
import redAuburnHair from "../assets/images/red-auburn-hair.png"
import darkBrownHair from "../assets/images/dark-brown-hair.png"
import blackHair from "../assets/images/black-hair.png"

import straightHair from "../assets/images/type-1-hair.png"
import wavyHair from "../assets/images/type-2-hair.png"
import curlyHair from "../assets/images/type-3-hair.png"
import coilyHair from "../assets/images/type-4-hair.png"

export const hairQuestions = [
    {
      id: "faceShape",
      heading: "Which face shape best matches yours?",
      answers: [
        {
          id: "diamond",
          text: "Diamond",
          image: [diamondHead],
          weights: {
            warm: 3
          }
        },
        {
          id: "heart",
          text: "Heart",
          image: [heartHead],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "long",
          text: "Long",
          image: [longHead],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "oval",
          text: "Oval",
          image: [ovalHead],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "round",
          text: "Round",
          image: [roundHead],
          weights: {
            cool: 3
          }
        },
        {
          id: "square",
          text: "Square",
          image: [squareHead],
          weights: {
            cool: 3
          }
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
          weights: {
            warm: 3
          }
        },
        {
          id: "blonde",
          text: "Blonde",
          image: [blondeHair],
          weights: {
            warm: 3
          }
        },
        {
          id: "light-brown",
          text: "Light Brown",
          image: [lightBrownHair],
          weights: {
            warm: 3
          }
        },
        {
          id: "red-auburn",
          text: "Red / Auburn",
          image: [redAuburnHair],
          weights: {
            warm: 3
          }
        },
        {
          id: "dark-brown",
          text: "Dark Brown",
          image: [darkBrownHair],
          weights: {
            warm: 3
          }
        },
        {
          id: "black",
          text: "Black",
          image: [blackHair],
          weights: {
            warm: 3
          }
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
            weights: {
              warm: 3
            }
          },
          {
            id: "wavy",
            text: "Wavy",
            image: [wavyHair],
            weights: {
              warm: 3
            }
          },
          {
            id: "curly",
            text: "Curly",
            image: [curlyHair],
            weights: {
              warm: 3
            }
          },
          {
            id: "coily",
            text: "Coily",
            image: [coilyHair],
            weights: {
              warm: 3
            }
          },
        ]
      },
]