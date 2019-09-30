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
  const { families, onChange, selectedFontFamily } = props;
  const style = { fontFamily: selectedFontFamily };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={selectedFontFamily}
          style={style}
          inputProps={{
            name: 'font',
            id: 'font',
          }}
          onChange={onChange}
        >
          {families.map(family => {
            const style = {
              fontFamily: family,
            }
            return (
              <MenuItem
                style={style}
                value={family}
                key={family}
              >
                {family}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
}

export default FontSelect;
