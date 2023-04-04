import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const Modal = ({open, handleClose, handlePost, newArticle, handleChangeNewArticle}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"sm"} fullWidth>
      <DialogTitle>Nouvel article</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          value={newArticle.title}
          onChange={handleChangeNewArticle}
          name={"title"}
          margin="dense"
          label="Titre"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          value={newArticle.body}
          onChange={handleChangeNewArticle}
          name={"body"}
          label="Contenu"
          fullWidth
          variant="standard"
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handlePost}>Publier</Button>
      </DialogActions>
    </Dialog>
  );
};
