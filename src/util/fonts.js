import { stringify } from 'query-string';
import WebFont from 'webfontloader';
import fonts from '../fonts';

const GOOGLE_FONTS_API = 'https://fonts.googleapis.com/css';

export function constructFontsUrl() {
  const query = stringify({
    display: 'swap',
    family: selectGoogleFonts(fonts).map(font => font.family).join('|'),
  });
  return `${GOOGLE_FONTS_API}?${query}`;
}

export function getSelectedFont(fontFamily) {
  if (isGoogleFont(findByFontFamily(fonts, fontFamily))) {
    WebFont.load({
      google: { families: [`${fontFamily}:400,400i,700,700i`] }
    });
  }
}

function findByFontFamily(fonts, fontFamily) {
  return fonts.find(font => font.family === fontFamily);
}

function isGoogleFont(font) {
  return font.source === 'google';
}

function selectGoogleFonts(fonts) {
  return fonts.filter(font => font.source === 'google');
}

