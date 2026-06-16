import goldColor from "../assets/images/colorPalette/gold-color.png";
import silverColor from "../assets/images/colorPalette/silver-color.png";
import goldSilverColors from '../assets/images/colorPalette/gold-silver-colors.png';

import whiteFabric from '../assets/images/colorPalette/white-fabric.png';
import creamFabric from '../assets/images/colorPalette/cream-fabric.png';
import whiteCreamFabric from '../assets/images/colorPalette/white-cream-fabric.png';

import tanColor from '../assets/images/colorPalette/tan-color.png';
import burntColor from '../assets/images/colorPalette/burnt-color.png';
import tanBurntColor from '../assets/images/colorPalette/tan-burnt-color.png';

import brightVivid from '../assets/images/colorPalette/bright-vivid.png';
import softDusty from '../assets/images/colorPalette/soft-dusty.png';
import deepRich from '../assets/images/colorPalette/deep-rich.png';
import lightAiry from '../assets/images/colorPalette/light-airy.png';

import lowContrast from '../assets/images/colorPalette/low-contrast.png';
import mediumContrast from '../assets/images/colorPalette/medium-contrast.png';
import highContrast from '../assets/images/colorPalette/high-contrast.png';

import pinkBerry from '../assets/images/colorPalette/pink-berry.png';
import peachCoral from '../assets/images/colorPalette/peach-coral.png';
import nudeSoft from '../assets/images/colorPalette/nude-soft.png';
import boldDramatic from '../assets/images/colorPalette/bold-dramatic.png';

export const colorQuestions = [
    {
      id: "jewelry",
      heading: "Which jewelry looks better on you?",
      answers: [
        {
          id: "gold",
          text: "Gold",
          image: [goldColor],
          weights: {
            warm: 3
          }
        },
        {
          id: "both",
          text: "Both",
          image: [goldSilverColors],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "silver",
          text: "Silver",
          image: [silverColor],
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
          image: [whiteFabric],
          weights: {
            cool: 2,
            bright: 2
          }
        },
        {
          id: "both",
          text: "Both",
          image: [whiteCreamFabric],
          weights: {
            warm: 1,
            cool: 1
          }
        },
        {
          id: "cream-ivory",
          text: "Cream / Ivory",
          image: [creamFabric],
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
          image: [tanColor],
          weights: {
            warm: 2,
            dark: 1
          }
        },
  
        {
          id: "burn-then-tan",
          text: "Burn Then Tan",
          image: [tanBurntColor],
          weights: {
            warm: 1,
            cool: 1
          }
        },
  
        {
          id: "burn",
          text: "Burn Easily",
          image: [burntColor],
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
          image: [brightVivid],
          weights: {
            bright: 3,
            highContrast: 1
          }
        },
  
        {
          id: "soft-dusty",
          text: "Soft & Dusty",
          image: [softDusty],
          weights: {
            muted: 3,
            lowContrast: 1
          }
        },
  
        {
          id: "deep-rich",
          text: "Deep & Rich",
          image: [deepRich],
          weights: {
            dark: 3
          }
        },
  
        {
          id: "light-airy",
          text: "Light & Airy",
          image: [lightAiry],
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
          text: "Low",
          image: [lowContrast],
          weights: {
            lowContrast: 3,
            muted: 1
          }
        },
  
        {
          id: "medium",
          text: "Medium",
          image: [mediumContrast],
          weights: {
            highContrast: 1,
            lowContrast: 1
          }
        },
  
        {
          id: "high",
          text: "High",
          image: [highContrast],
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
          image: [pinkBerry],
          weights: {
            cool: 2
          }
        },
  
        {
          id: "peach-coral",
          text: "Peach / Coral",
          image: [peachCoral],
          weights: {
            warm: 2
          }
        },
  
        {
          id: "nude-soft",
          text: "Nude / Soft",
          image: [nudeSoft],
          weights: {
            muted: 2,
            lowContrast: 1
          }
        },
  
        {
          id: "bold-dramatic",
          text: "Bold / Dramatic",
          image: [boldDramatic],
          weights: {
            bright: 2,
            dark: 1,
            highContrast: 1
          }
        }
      ]
    }
  ]