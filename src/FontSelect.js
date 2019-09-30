import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

function FontSelect(props) {
  const classes = useStyles();
  const { fonts, onChange, selectedFont } = props;
  const style = {
    fontFamily: selectedFont,
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={selectedFont}
          style={style}
          inputProps={{
            name: 'font',
            id: 'font',
          }}
          onChange={onChange}
        >
          {fonts.map(font => {
            const style = {
              fontFamily: font,
            }
            return (
              <MenuItem
                style={style}
                value={font}
                key={font}
              >
                {font}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
}

export default FontSelect;
