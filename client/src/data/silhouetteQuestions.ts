import appleSilhouette from "../assets/images/silhouette/apple-silhouette.png";
import hourglassSilhouette from "../assets/images/silhouette/hourglass-silhouette.png";
import invertedTriangleSilhouette from '../assets/images/silhouette/inverted-triangle-silhouette.png';
import pearSilhouette from "../assets/images/silhouette/pear-silhouette.png";
import rectangleSilhouette from "../assets/images/silhouette/rectangle-silhouette.png";

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
          code: "apple"
        },
        {
          id: "hourglass",
          text: "Hourglass",
          image: [hourglassSilhouette],
          code: "hourglass"
        },
        {
          id: "inverted-triangle",
          text: "Inverted Triangle",
          image: [invertedTriangleSilhouette],
          code: "inverted_triangle"
        },
        {
          id: "pear",
          text: "Pear",
          image: [pearSilhouette],
          code: "pear"
        },
        {
          id: "rectangle",
          text: "Rectangle",
          image: [rectangleSilhouette],
          code: "rectangle"
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
          code: "short_torso"
        },
        {
          id: "balanced-torso-balanced-legs",
          text: "Balanced Torso / Legs",
          image: [balancedTorsoLegs],
          code: "balanced_torso"
        },
        {
          id: "long-torso-short-legs",
          text: "Long Torso / Short Legs",
          image: [longTorsoShortLegs],
          code: "long_torso"
        },
  ]},
  
  ]