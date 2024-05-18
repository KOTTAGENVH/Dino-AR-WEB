import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'archaeopteryx': "url('/background-images/archaeopteryx.jpeg')",
        'animated_t_rex': "url('/background-images/animated_t_rex.png')",
        'flying_pteradactal': "url('/background-images/flying_pteradactal.png')",
        'godzilla_amphibia': "url('/background-images/godzilla_amphibia.jpeg')",
        'stego': "url('/background-images/stego.jpeg')",
        'suchominus': "url('/background-images/suchominus.jpeg')",
        'ticeratops_skeleton': "url('/background-images/ticeratops_skeleton.jpeg')",
        'ticeratops': "url('/background-images/ticeratops.jpeg')",
        'trex': "url('/background-images/trex.jpeg')",
      },
    },
  },
  plugins: [],
};

export default config;
