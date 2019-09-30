import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormatBoldOutlinedIcon from '@material-ui/icons/FormatBoldOutlined';
import FormatItalicRoundedIcon from '@material-ui/icons/FormatItalicRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'inline-block',
    marginBottom: theme.spacing(2),
  },
}));

function FontControls(props) {
  const {
    bold,
    italic,
    onClickBold,
    onClickItalic,
  } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <IconButton
        aria-label="bold"
        color={bold ? 'primary' : 'default'}
        onClick={onClickBold}
      >
        <FormatBoldOutlinedIcon />
      </IconButton>
      <IconButton
        aria-label="italic"
        color={italic ? 'primary' : 'default'}
        onClick={onClickItalic}
      >
        <FormatItalicRoundedIcon />
      </IconButton>
    </Paper>
  );
}

export default FontControls;
