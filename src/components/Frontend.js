import React from "react";
import "../components/Frontend.css";

const Frontend = () => {
  return (
    <main>
      <section className="my-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 text-white mt-5 ml-5">
              <div className="text mx-5">
                <h1>Ever Dreamed of a Career in Tech? Start Coding Today!</h1>
                <p className="my-5 fs-4">
                  Embark on your coding journey with Everest Tech Hub's
                  Developer Bootcamp.
                </p>
              </div>
            </div>
            <div className="info__card p-5 text-center">
              <div className="info__date">
                <p className="fs-5 lead">Application is open</p>
              </div>
              <div className="info__link">
                <a className="btn btn-danger" href="" target="_blank">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-block text-block--card">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="text fadeIn">
                <h2 className="fs-1 text-primary">software engineering</h2>
                <p>
                  <span className="fs-5">
                    In the ever-changing terrain of the tech ecosystem, there is
                    a dire need for innovators who can sculpt pioneering
                    solutions, amalgamating the essence of engineering
                    principles with adept programming capabilities. Amidst this
                    setting, software development is burgeoning as a discipline,
                    presenting some of the most rewarding and enthralling career
                    vistas. Organizations are on the hunt for tech aficionados
                    who possess the prowess to address the complexities of the
                    21st century.
                  </span>
                </p>
                <p>
                  <span className="fs-5">
                    In the dynamic world of technology, the secret to
                    accomplishment lies in agile learning, being in sync with
                    the latest technological upheavals, and cultivating
                    expertise that paves the way for progressive growth. At
                    Everest Tech Hub, our Software Engineering Plus Programme
                    encompasses the esteemed 3-month ALX Foundations module,
                    ensuring our students are equipped with the most coveted
                    professional competencies befitting the contemporary digital
                    age.
                  </span>
                </p>
                <p></p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card-box text bg-secondary text fadeIn">
                <h2 className="font-weight">
                  What career will this <br /> programme prepare me for?
                </h2>
                <ul>
                  <li aria-level="1">
                    <span className="font-weight">Front-End Engineering</span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">Back-End Engineering</span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">Full-Stack Engineering</span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">Graphics Engineering</span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">DevOps Engineering</span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">Mobile App Developer</span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">
                      Embedded system Engineer
                    </span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">
                      Systems Administrator&nbsp;
                    </span>
                  </li>
                  <li aria-level="1">
                    <span className="font-weight">Cyber Security Engineer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light mt-3">
        <div className="container-lg mt-3 pt-1">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-7 text-center d-none d-md-block second-img">
              <img
                className="img-fluid rounded m-1 offset-lg-1"
                src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vdGNhbXB8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="e-book cover"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "20px",
                }}
              />
            </div>

            <div className="col-lg-5 text-center text-md-start text--color text fadeIn">
              <ul className="ul-list">
              <h2 className="section-title text-primary fs-1">what you'll learn</h2>
                <li>
                  Server-Side Programming Languages: Backend developers work
                  with languages like Python, Ruby, Java, or JavaScript
                  (Node.js) to build the server logic.
                </li>
                <li>
                  Databases: Understanding database management is crucial.
                  Students may learn about SQL databases (e.g., MySQL) and NoSQL
                  databases (e.g., MongoDB).
                </li>
                <li>
                  APIs (Application Programming Interfaces): How to create and
                  work with APIs to connect the frontend and backend, enabling
                  data exchange.
                </li>
                <li>
                  Authentication and Security: Ensuring the security of user
                  data through encryption, authentication methods, and best
                  practices for secure coding.
                </li>
                <li>
                  Server Management: Deployment and management of web
                  applications on servers, including cloud services like AWS,
                  Azure, or Heroku
                </li>
                <li>
                  Middleware and Frameworks: Knowledge of backend frameworks
                  like Express.js for Node.js or Ruby on Rails for Ruby.
                </li>
                <li>
                  Scalability and Performance: Learning how to optimize
                  applications for high performance and scalability as user
                  traffic grows.
                </li>
                <li>
                  Error Handling and Debugging: Debugging techniques and error
                  handling to maintain the reliability of web applications.
                </li>
                <li>
                  Testing and Quality Assurance: Techniques for testing and
                  ensuring the quality of backend code.
                </li>
                <li>
                  Version Control: Similar to frontend development, backend
                  developers use Git for version control and collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg mt-5 pt-5">
        <div class="container-lg">
          <div class="text-center ">
            <h2 className="text-primary">FAQS</h2>
          </div>
          <div class="row my-5 g-5 justify-content-around align-items-center">
            <div class="col-lg-6">
              <div class="accordion" id="chapters">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-1">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-1"
                      aria-expanded="true"
                      aria-controls="chapter-1"
                    >
                      Chapter 1 - Your First Web Page
                    </button>
                  </h2>
                  <div
                    id="chapter-1"
                    class="accordion-collapse collapse show"
                    aria-labelledby="heading-1"
                    data-bs-parent="#chapters"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-2"
                      aria-expanded="false"
                      aria-controls="chapter-2"
                    >
                      Chapter 2 - Mastering CSS
                    </button>
                  </h2>
                  <div
                    id="chapter-2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#chapters"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-3"
                      aria-expanded="false"
                      aria-controls="chapter-1"
                    >
                      Chapter 3 - The Power of JavaScript
                    </button>
                  </h2>
                  <div
                    id="chapter-3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#chapters"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-4">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-4"
                      aria-expanded="false"
                      aria-controls="chapter-4"
                    >
                      Chapter 4 - Storing Data (Firebase Databases)
                    </button>
                  </h2>
                  <div
                    id="chapter-4"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#chapters"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-5">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-5"
                      aria-expanded="false"
                      aria-controls="chapter-5"
                    >
                      Chapter 5 - User Authentication
                    </button>
                  </h2>
                  <div
                    id="chapter-5"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#chapters"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                    </div>
                  </div>
                  <div
                    id="chapter-5"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#chapters"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis assumenda delectus sapiente quidem
                        consequatur odit adipisci necessitatibus nemo aliquid
                        minus modi tempore quibusdam quas vitae, animi ipsam
                        nulla sunt alias.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Frontend;
