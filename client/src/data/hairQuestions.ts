import diamondHead from "../assets/images/diamond-head.png";
import heartHead from "../assets/images/heart-head.png";
import longHead from '../assets/images/long-head.png';
import ovalHead from "../assets/images/oval-head.png";
import roundHead from "../assets/images/round-head.png";
import squareHead from "../assets/images/square-head.png";


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
    },]