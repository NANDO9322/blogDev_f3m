import styles from "./CreatePost.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { userInsertDocument } from "../../hooks/userInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { insertDocument, error, loading } = userInsertDocument("posts");

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL valida, my friendo");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !body || !tags) {
      setFormError(
        "Por favor meu amigo, preencncha com atenção todos os campos"
      );
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createBy: user.displayName,
    });

    if (formError) return;

    try {
      const refDoc = insertDocument({
        title,
        image,
        body,
        tags: tagsArray,
        uid: user.uid,
        createBy: user.displayName,
      });
      
      if(refDoc) {
        navigate('/')
      }
    } catch (error) {
      
    }

  };

  return (
    <>
      <div className={styles.create_post}>
        <h2>Novo Post Malone</h2>
        <p>Compartilhe sua experiência no mundo desenvolvedor</p>
        <form onSubmit={handlerSubmit}>
          <label>
            <span>Titulo</span>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Titulo da postagem"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>
          <label>
            <span>URL da imagem</span>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Endereço da imagem da postagem"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              required
            />
          </label>
          <label>
            <span>Conteúdo da postagem</span>
            <textarea
              name="body"
              id="body"
              placeholder="Ensira  conteúdo da sua postagem aqui"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              required
            ></textarea>
          </label>
          <label>
            <span>Tags</span>
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="Insira tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              required
            />
          </label>
          {!loading && <button className="btn">Criar Postagem</button>}
          {loading && (
            <button className="btn" disabled>
              Postando...
            </button>
          )}
          {error && (
            <p className="error">{error || formError}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default CreatePost;
