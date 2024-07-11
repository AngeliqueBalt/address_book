import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/material';

export function AddNewContactDialog({
  open,
  // onSubmit,
  onCancel,
}: Readonly<{
  open: boolean;
  onSubmit: (formJson: Record<string, any>) => void;
  onCancel: () => void;
}>) {
  return (
    <>
      <Dialog
        fullWidth={true}
        open={open}
        PaperProps={{
          component: 'form',
          // onSubmit: (event: FormEvent<HTMLFormElement>) => {
          //   event.preventDefault();
          //   const formData = new FormData(event.currentTarget);
          //   const formJson = Object.fromEntries((formData as any).entries());
          //   console.log(JSON.stringify(formJson, undefined, 4));
          //   onSubmit(formJson);
          // },
        }}>
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <Stack>
            <TextField id="first-name" label="Enter first name" variant="standard" />
            <TextField id="last-name" label="Enter last name" variant="standard" />
            <TextField id="age" label="Enter age" variant="standard" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
