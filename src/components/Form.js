import { TextField, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { createContact } from "../redux/contactsSlice";
import './Form.css';



export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(createContact([name, number]));
    form.reset();
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        sx={{ marginBottom: '20px' }}
      />
      <br />
      <TextField
        fullWidth
        name="number"
        id="outlined-basic"
        label="Number"
        variant="outlined"
        size="small"
      />
      <br />
      <Button
        fullWidth
        type="submit"
        sx={{ marginTop: '20px' }}
        variant="contained"
      >
        Add contact
      </Button>
    </form>
  );
}