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
            {posts?.map(({ id, title, text }) => (
              <div className="col-auto mb-4" key={id}>
                <div className="card fixed-card">
                  <img
                    src={"https://picsum.photos/200"}
                    className="card-img-top"
                    alt={title}
                  />
                  <div className="card-body">
                    <Link to={`/Details/${id}`}>
                      <h5 className="card-title">{title}</h5>
                    </Link>
                    <p className="card-text">{text}</p>
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
