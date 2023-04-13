import {
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArticleItem } from "../components/ArticleItem";
import { Modal } from "../components/Modal";
import CustomButton from "../components/customized/CustomButton";

export default function Articles() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [newArticle, setNewArticle] = useState({title: "", body: "", userId: 5});

  useEffect(() => {
    axios.get("https://dummyjson.com/posts/search?limit=6&q=" + search).then((response) => {
      setArticles(response.data.posts);
    });
  }, [search, reload]);

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleChangeNewArticle = (e) => {
    setNewArticle({...newArticle, [e.target.name]: e.target.value})
  }

  const handlePost = () => {
    axios.post('https://dummyjson.com/posts/add', newArticle, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => { 
      if (response.status === 200) {
        setOpenModal(false)
        setOpenSnackbar(true)
        setReload(!reload)
      }
      
    })
  }

  return (
    <div style={{ margin: 15 }}>
      <h1>My articles</h1>
      <div style={{marginBottom: 20, display: 'flex', justifyContent: 'space-between'}}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic"
          label="Recherche"
          variant="outlined"
        />
        <div>
        <CustomButton size="large" variant="contained" color='secondary'>Soumettre</CustomButton>
        </div>
      </div>
      <Grid container spacing={2}>
        {articles.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={4}>
              <ArticleItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Modal 
        open={openModal} 
        handleClose={handleCloseModal} 
        handlePost={handlePost} 
        newArticle={newArticle} 
        handleChangeNewArticle={handleChangeNewArticle} 
      />
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="success">Article bien ajouté !</Alert> 
      </Snackbar>
    </div>
  );
}
