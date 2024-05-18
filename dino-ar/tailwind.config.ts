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
        'marker':"url('/markers/marker.png')",
        'marker1':"url('/markers/marker1.jpg')",
        'marker2':"url('/markers/marker2.png')",
        'marker3':"url('/markers/marker3.jpg')",
        'marker4':"url('/markers/marker4.png')",
        'marker5':"url('/markers/marker5.png')",
        'marker6':"url('/markers/marker6.jpg')",
        'marker7':"url('/markers/marker7.jpeg')",
        'marker8':"url('/markers/marker8.jpeg')",
        'marker9':"url('/markers/marker9.jpeg')",
      },
    },
  },
  plugins: [],
};

export default config;
