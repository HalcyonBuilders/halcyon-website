/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        navBar: 'margin-left, margin-right, border-radius, height',
        blueBorderLeft: 'left, right'
      },
      keyframes: {
        slidein: {
          '0%': { height: '0.2rem', marginRight: '50rem', marginLeft: '50rem', display: 'none' },
          '50%': { height: '0.2rem' },
          '75%': { height: '0.2rem' },
          '85%': { height: '0.2rem' }
        },
        hideImage: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '95%': { opacity: '1' }
        },
        hideBlueBorder: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '95%': { opacity: '1' }
        },
        hideNavBarContent: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '95%': { opacity: '1' }
        },
        fadeInOut: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        slidein: 'slidein 1.2s',
        hideImage: 'hideImage 1.9s',
        hideNavBarContent: 'hideNavBarContent 1.2s',
        hideBlueBorder: 'hideBlueBorder 0.6s',
        fadeInOut: 'fadeInOut 1.2s',
      },
      backgroundImage: {
        "roadmap-bg": 'url(/static/images/Roadmap/bg-roadmap.png)',
        "roadmap-tunnel": 'url(/static/images/Roadmap/roadmap_tunnel_futuriste.svg)',
        "roadmap-man-silouette" : 'url(/static/images/Roadmap/roadmap_man_silouette.svg)',
        "roadmap-hexagone-nft" : 'url(/static/images/Roadmap/roadmap_hexagone_nft.svg)',
        "test": 'url(/static/images/Roadmap/roadmap_tunnel_futuriste.svg), url(/static/images/Roadmap/roadmap_man_silouette.svg), url(/static/images/Roadmap/roadmap_hexagone_nft.svg)'
      },
    }
  },
  plugins: []
};
