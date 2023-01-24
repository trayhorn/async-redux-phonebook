import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


export default function Filter() {
  // const dispatch = useDispatch();


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
        // onChange={handleChange}
        // value={filterQuery}
      />
    </div>
  );
}