import { useState } from "react"
import { TextField } from '@mui/material';


export default function Filter({ onChange, value }) {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <div>
      <TextField
        fullWidth
        autoComplete="off"
        name="name"
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        size="small"
        sx={{ marginTop: '20px' }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}