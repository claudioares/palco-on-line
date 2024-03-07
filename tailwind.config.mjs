export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundOpacity: ['active'],
      backgroundImage: {
        'bg-logo': "url('./logoSVG.svg')",
      }
    },
    fontFamily: {
      'Architects-Daughter': ['"Architects Daughter", cursive;'],
      "Roboto": ['"Roboto", sans-serif;'],
      "Dosis": ['"Dosis", sans-serif;']
    }
  }
}