import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import FontControls from './FontControls';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    textAlign: 'left',
  },
  card: {
    padding: theme.spacing(4),
    minWidth: 400,
    textAlign: 'center'
  },
  title: {
    fontSize: 48,
    lineHeight: 1,
  },
}));

function FontDemo(props) {
  const classes = useStyles();
  const { fontFamily } = props;
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const style = {
    fontFamily,
    fontWeight: bold ? 700 : 400,
    fontStyle: italic ? 'italic' : 'normal',
  };

  return (
    <div className={classes.root}>
      <FontControls
        bold={bold}
        italic={italic}
        onClickBold={() => setBold(!bold)}
        onClickItalic={() => setItalic(!italic)}
      />
      <Card className={classes.card}>
        <Typography
          className={classes.title}
          style={style}
        >
          {'Hello, World!'}
        </Typography>
      </Card>
    </div>
  );
}

export default FontDemo;
