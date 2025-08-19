import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Container */}
        <div className="container p-4">
          {/* Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            {/* Github */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Social media */}
          {/* Text */}
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
          {/* Text */}
          {/* Links */}
          <section>
            <div className="row">
              {/* Column */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-reset">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              {/* Column */}
              {/* Ripeti le altre colonne se servono */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-reset">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-reset">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-reset">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Links */}
        </div>
        {/* Container */}
        {/* Copyright */}
        <div className="text-center p-3 bg-body-tertiary">
          © 2025 Copyright:
          <a className="text-reset fw-bold" href="https://getbootstrap.com/">
            Bootstrap
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
