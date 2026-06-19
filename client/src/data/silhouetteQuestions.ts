import appleSilhouette from "../assets/images/silhouette/apple-silhouette.png";
import hourglassSilhouette from "../assets/images/silhouette/hourglass-silhouette.png";
import invertedTriangleSilhouette from '../assets/images/silhouette/inverted-triangle-silhouette.png';
import pearSilhouette from "../assets/images/silhouette/pear-silhouette.png";
import rectangleSilhouette from "../assets/images/silhouette/rectangle-silhouette.png";

import proportionPlaceholder from "../assets/images/silhouette/placeholder-proportions.png";
import shortTorsoLongLegs from "../assets/images/silhouette/short-torso-long-legs.png";
import balancedTorsoLegs from "../assets/images/silhouette/balanced-torso-legs.png";
import longTorsoShortLegs from "../assets/images/silhouette/long-torso-short-legs.png";


export const silhouetteQuestions = [
    {
      id: "silhouette",
      heading: "Which silhouette best matches yours?",
      answers: [
        {
          id: "apple",
          text: "Apple",
          image: [appleSilhouette],
          weights: {
            warm: 3
          }
        },
        {
          id: "hourglass",
          text: "Hourglass",
          image: [hourglassSilhouette],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "inverted-triangle",
          text: "Inverted Triangle",
          image: [invertedTriangleSilhouette],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "pear",
          text: "Pear",
          image: [pearSilhouette],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "rectangle",
          text: "Rectangle",
          image: [rectangleSilhouette],
          weights: {
            cool: 3
          }
        }
      ]
    },
    {
      id: "proportions",
      heading: "Which torso/leg proportions best match yours?",
      answers: [
        {
          id: "short-torso-long-legs",
          text: "Short Torso / Long Legs",
          image: [shortTorsoLongLegs],
          weights: {
            warm: 3
          }
        },
        {
          id: "balanced-torso-balanced-legs",
          text: "Balanced Torso / Legs",
          image: [balancedTorsoLegs],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "long-torso-short-legs",
          text: "Long Torso / Short Legs",
          image: [longTorsoShortLegs],
          weights: {
            warm: 1,
            cool: 1
          }
        },
  ]},
  
  ]