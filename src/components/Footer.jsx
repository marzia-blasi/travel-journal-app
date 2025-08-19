import { Link, NavLink } from "react-router-dom";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

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
              <FontAwesomeIcon icon="fab fa-facebook-f" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon="fab fa-linkedin-in" />
            </a>
            {/* Github */}
            <a
              className="btn btn-primary rounded-circle m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon="fab fa-github" />
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
