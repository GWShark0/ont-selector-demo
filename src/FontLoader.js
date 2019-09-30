import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { stringify } from 'query-string';
import WebFont from 'webfontloader';
import families from './fonts';

const GOOGLE_FONTS_API = 'https://fonts.googleapis.com/css';

function constructFontsUrl() {
  const query = stringify({
    display: 'swap',
    family: families.join('|'),
  });
  return `${GOOGLE_FONTS_API}?${query}`;
}

function getSelectedFont(fontFamily) {
  WebFont.load({
    google: {
      families: [`${fontFamily}:400,400i,700,700i`],
    }
  });
}

function FontLoader(props) {
  const { selectedFont } = props;

  useEffect(() => {
    getSelectedFont(selectedFont)
  }, [selectedFont]);

  return (
    <Helmet>
      <link rel="stylesheet" href={constructFontsUrl()} />
    </Helmet>
  )
}

export default FontLoader;
