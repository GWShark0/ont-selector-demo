import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { constructFontsUrl, getSelectedFont } from './util/fonts';

function FontLoader(props) {
  const { selectedFontFamily } = props;

  useEffect(() => {
    getSelectedFont(selectedFontFamily)
  }, [selectedFontFamily]);

  return (
    <Helmet>
      <link rel="stylesheet" href={constructFontsUrl()} />
    </Helmet>
  )
}

export default FontLoader;
