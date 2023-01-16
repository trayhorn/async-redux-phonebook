import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filterSlice';


export default function Filter() {
  const filterQuery = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
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
        value={filterQuery}
      />
    </div>
  );
}