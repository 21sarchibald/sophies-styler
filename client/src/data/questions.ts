import goldColor from "../assets/images/gold-color.png";
import silverColor from "../assets/images/silver-color.png";
import goldSilverColors from '../assets/images/gold-silver-colors.png';

import whiteFabric from '../assets/images/white-fabric.png';
import creamFabric from '../assets/images/cream-fabric.png';
import whiteCreamFabric from '../assets/images/white-cream-fabric.png';


export const questions = [
    {
      id: "jewelry",
      heading: "Which jewelry looks better on you?",
      answers: [
        {
          id: "gold",
          text: "Gold",
          images: [goldColor],
          weights: {
            warm: 3
          }
        },
        {
          id: "both",
          text: "Both",
          images: [goldSilverColors],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "silver",
          text: "Silver",
          images: [silverColor],
          weights: {
            cool: 3
          }
        }
  
      ]
    },
  
    {
      id: "white",
      heading: "Which white looks best near your face?",
      answers: [
        {
          id: "bright-white",
          text: "Bright White",
          images: [whiteFabric],
          weights: {
            cool: 2,
            bright: 2
          }
        },
        {
          id: "both",
          text: "Both",
          images: [whiteCreamFabric],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "cream-ivory",
          text: "Cream / Ivory",
          images: [creamFabric],
          weights: {
            warm: 2,
            muted: 1
          }
        }
  
      ]
    },
  
    {
      id: "sun-reaction",
      heading: "How does your skin react to the sun?",
      answers: [
        {
          id: "tan",
          text: "Tan Easily",
          colors: ['#C67F4C'],
          weights: {
            warm: 2,
            dark: 1
          }
        },
  
        {
          id: "burn-then-tan",
          text: "Burn Then Tan",
          colors: ['#C67F4C', '#FF9375'],
          weights: {
            warm: 1,
            cool: 1
          }
        },
  
        {
          id: "burn",
          text: "Burn Easily",
          colors: ['#FF9375'],
          weights: {
            cool: 2,
            light: 1
          }
        }
      ]
    },
  
    {
      id: "healthy-colors",
      heading: "Which colors make you look healthiest?",
      answers: [
        {
          id: "bright-vivid",
          text: "Bright & Vivid",
          colors: ['#34C8FE', '#FA54AC', '#F5E648', '#48F5AA'],
          weights: {
            bright: 3,
            highContrast: 1
          }
        },
  
        {
          id: "soft-dusty",
          text: "Soft & Dusty",
          colors: ['#ABD7F4', '#E5A9C9', '#F7E7AD', '#8CD7B7'],
          weights: {
            muted: 3,
            lowContrast: 1
          }
        },
  
        {
          id: "deep-rich",
          text: "Deep & Rich",
          colors: ['#084BA2', '#B82504', '#EACC0D', '#087025'],
          weights: {
            dark: 3
          }
        },
  
        {
          id: "light-airy",
          text: "Light & Airy",
          colors: ['#96D5FF', '#FFD4E3', '#FFFFA4', '#C7FFBC'],
          weights: {
            light: 3
          }
        }
      ]
    },
  
    {
      id: "contrast",
      heading: "How much contrast do your features have?",
      answers: [
        {
          id: "low",
          text: "Low Contrast",
          colors: ['#744726', '#4E2D15'],
          weights: {
            lowContrast: 3,
            muted: 1
          }
        },
  
        {
          id: "medium",
          text: "Medium Contrast",
          colors: ['#F3AD7B', '#BE621F'],
          weights: {
            highContrast: 1,
            lowContrast: 1
          }
        },
  
        {
          id: "high",
          text: "High Contrast",
          colors: ['#FFDCC3', '#48250C'],
          weights: {
            highContrast: 3,
            dark: 1,
            bright: 1
          }
        }
      ]
    },
  
    {
      id: "lipstick",
      heading: "Which lipstick tones look best on you?",
      answers: [
        {
          id: "pink-berry",
          text: "Pink / Berry",
          colors: ['#EE70E5', '#FA54AC', '#E40270', '#CD78B5'],
          weights: {
            cool: 2
          }
        },
  
        {
          id: "peach-coral",
          text: "Peach / Coral",
          colors: ['#FAB3B3', '#FF6668', '#FF7A6B', '#E34446'],
          weights: {
            warm: 2
          }
        },
  
        {
          id: "nude-soft",
          text: "Nude / Soft",
          colors: ['#DA8C7F', '#974E47', '#803C35', '#C5645A'],
          weights: {
            muted: 2,
            lowContrast: 1
          }
        },
  
        {
          id: "bold-dramatic",
          text: "Bold / Dramatic",
          colors: ['#DB0000', '#F82FA1', '#6A0303', '#A914A7'],
          weights: {
            bright: 2,
            dark: 1,
            highContrast: 1
          }
        }
      ]
    }
  ]