import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SentieriPage() {
  const api_post = "http://localhost:3030/posts";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(api_post)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-start mt-5">
            {posts?.map(({ id, title, text, img }) => (
              <div className="col-6 col-md-4 col-lg-3 mb-4" key={id}>
                <div className="card fixed-card  h-50 d-flex flex-column">
                  <img src={`/${img}`} className="card-img-top" alt={title} />
                  <div className="card-body d-flex flex-column p-4">
                    <Link to={`/Details/${id}`}>
                      <h5 className="card-title">{title}</h5>
                    </Link>
                    <p className="card-text flex-grow-1 mb-1">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
