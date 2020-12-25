// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'system-ui'],
      'serif': ['Inter', 'Georgia'],
      'mono': ['Inter', 'SFMono-Regular'],
      'display': ['Inter'],
      'body': ['Inter']}
      ,

    extend: {
      colors: {
        'TDBase': '#1A1F36',
        'TDGreen': '#69DF65',
        'TDRed':'#FF0000',
        "TDGreenHighlight": "#69df65",
        "TDRedHighlight": "#df6565",
        "TDSubdue": "#9facbb",
        "TDBGBaseLight": "#2e3554",
        "TDOffWhite": "#e8e6f1",
        "TDStringRed": "#ff0000",
        "TDRed": "#ff5050",
        "TDBGBase": "#1a1f36",
        "TDBGBaseLighter": "#40486e"
      }
    },
  },
  variants: {},
  plugins: [],
}