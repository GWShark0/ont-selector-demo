import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'inline-block',
    padding: theme.spacing(4),
    minWidth: 300,
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
  const style = { fontFamily }

  return (
    <Card className={classes.card}>
      <Typography
        className={classes.title}
        style={style}
      >
        {'Hello, World!'}
      </Typography>
    </Card>
  );
}

export default FontDemo;
