import './App.css';
import { NavBar } from './components/NavBar.tsx';
import { Button, Container, Stack } from '@mui/material';
import { PeopleTable } from './components/PeopleTable.tsx';
import { useState } from 'react';
import { AddNewContactDialog } from './components/AddNewContactDialog.tsx';

function App() {
  const [AddNewContactOpen, setAddNewContactOpen] = useState<boolean>(false);

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Stack>
          <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              py: 6,
            }}>
            <h2>Contacts</h2>
            <Button onClick={() => setAddNewContactOpen(true)}>Add New Contact</Button>

            <AddNewContactDialog
              open={AddNewContactOpen}
              onSubmit={() => {}}
              onCancel={() => setAddNewContactOpen(false)}
            />
          </Stack>
          <PeopleTable />
        </Stack>
      </Container>
    </>
  );
}

export default App;
