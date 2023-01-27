import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { onFilterChange } from 'redux/PhonebookSlice';


export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(onFilterChange(e.target.value));
  }

  return (
    <div>
      <TextField
        fullWidth
        autoComplete="off"
        name="filter"
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        size="small"
        sx={{ marginTop: '20px' }}
        onChange={handleChange}
      />
    </div>
  );
}