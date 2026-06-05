import goldColor from "../assets/images/gold-color.png";
import silverColor from "../assets/images/silver-color.png";
import goldSilverColors from '../assets/images/gold-silver-colors.png';

import whiteFabric from '../assets/images/white-fabric.png';
import creamFabric from '../assets/images/cream-fabric.png';
import whiteCreamFabric from '../assets/images/white-cream-fabric.png';

import tanColor from '../assets/images/tan-color.png';
import burntColor from '../assets/images/burnt-color.png';
import tanBurntColor from '../assets/images/tan-burnt-color.png';

import brightVivid from '../assets/images/bright-vivid.png';
import softDusty from '../assets/images/soft-dusty.png';
import deepRich from '../assets/images/deep-rich.png';
import lightAiry from '../assets/images/light-airy.png';

import lowContrast from '../assets/images/low-contrast.png';
import mediumContrast from '../assets/images/medium-contrast.png';
import highContrast from '../assets/images/high-contrast.png';

import pinkBerry from '../assets/images/pink-berry.png';
import peachCoral from '../assets/images/peach-coral.png';
import nudeSoft from '../assets/images/nude-soft.png';
import boldDramatic from '../assets/images/bold-dramatic.png';

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