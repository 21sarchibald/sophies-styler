import appleSilhouette from "../assets/images/apple-silhouette.png";
import hourglassSilhouette from "../assets/images/hourglass-silhouette.png";
import invertedTriangleSilhouette from '../assets/images/inverted-triangle-silhouette.png';
import pearSilhouette from "../assets/images/pear-silhouette.png";
import rectangleSilhouette from "../assets/images/rectangle-silhouette.png";


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
    },]