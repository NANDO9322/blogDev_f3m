import React from 'react';
import { useParams } from 'react-router-dom';
import { userFetchDocument } from '../../hooks/userFetchDocument';
import styles from './Post.module.css';

export default function Post() {
  const { id } = useParams();
  const { document, error, loading } = userFetchDocument('posts', id);

  if (loading) {
    return (
      <div className="container load">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.post_container}>
      <h1>{document?.title}</h1>
      <img src={document?.image} alt="Post Image" />
      <p>{document?.body}</p>
      <h3>Este post trata sobre:</h3>
      <div className={styles.tags}>
        {document?.tags?.map((tag, index) => (
          <p key={index}><span>#</span>{tag}</p>
        ))}
      </div>
    </div>
  );
}
