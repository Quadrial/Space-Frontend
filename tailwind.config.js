/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        // HOME-BG
        Hdesktop: "url('/images/home/background-home-desktop.jpg')",
        Hmobile: "url('/images/home/background-home-mobile.jpg')",
        Htablet: "url('/images/home/background-home-tablet.jpg')",

        // Destination-BG
        Ddesktop:
          "url('/images/destination/background-destination-desktop.jpg')",
        Dmobile: "url('/images/destination/background-destination-mobile.jpg')",
        Dtablet: "url('/images/destination/background-destination-tablet.jpg')",

        // CREW-BG
        Cdesktop: "url('/images/crew/background-crew-desktop.jpg')",
        Cmobile: "url('/images/crew/background-crew-mobile.jpg')",
        Ctablet: "url('/images/crew/background-crew-tablet.jpg')",

        // TECH-BG
        Tdesktop: "url('/images/technology/background-technology-desktop.jpg')",
        Tmobile: "url('/images/technology/background-technology-mobile.jpg')",
        Ttablet: "url('/images/technology/background-technology-tablet.jpg')",

        // MOON
        Moonp: "url('/images/destination/image-moon.png')"
      },
    },
  },
  plugins: [],
};
