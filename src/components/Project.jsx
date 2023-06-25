const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    name: "WEB MASTERY",
    text: "Innovative, attractive websites that’ll leave your visitors wanting more .",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3BvbnNpdmUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "RESPONSIVE DESIGN",
    text: "Seamlessly adapting to deliver a stunning experience, regardless of device.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1616138276663-5041438a8476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsZWFuJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "CLEAN CODE",
    text: "Efficient and maintainable code, neatly organized for optimal performance.",
  },
];

const Project = () => {
  return (
    <>
      <section className="projectSection">
        <div className="projectContainer">
          <div className="projectHeader">Some Projects</div>

          <div className="projectListContainer">
            {data.map((project) => (
              <div key={project.id} className="project">
                <div className="projectImageContainer">
                  <img src={project.image} alt="" />
                </div>
                <h2>{project.name}</h2>
                <p>{project.text}</p>
              </div>
            ))}
          </div>

          <button>view all</button>
        </div>

        <div className="Pfooter">
          <p>© 2023 Emma Excel - Weaving digital wonders</p>

          <div className="pfooter-icons">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path
                  d="M 0 0 L 32 0 L 32 32 L 0 32 Z"
                  fill="transparent"
                ></path>
                <path
                  d="M 30.713 9.712 L 26.938 13.475 C 26.188 22.212 18.813 29 10 29 C 8.188 29 6.688 28.712 5.55 28.15 C 4.638 27.687 4.263 27.2 4.163 27.05 C 3.995 26.795 3.953 26.478 4.047 26.189 C 4.142 25.899 4.364 25.668 4.65 25.562 C 4.675 25.55 7.625 24.425 9.538 22.262 C 8.351 21.418 7.309 20.388 6.45 19.212 C 4.738 16.887 2.925 12.85 4.013 6.825 C 4.082 6.46 4.346 6.163 4.7 6.05 C 5.055 5.934 5.446 6.025 5.713 6.287 C 5.75 6.337 9.913 10.437 15 11.762 L 15 11 C 15.01 9.399 15.656 7.867 16.795 6.742 C 17.934 5.617 19.474 4.99 21.075 5 C 23.192 5.03 25.137 6.169 26.2 8 L 30 8 C 30.404 7.999 30.769 8.24 30.925 8.612 C 31.072 8.989 30.989 9.417 30.713 9.712 Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </a>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path
                  d="M 29 16 C 28.992 22.575 24.083 28.112 17.556 28.907 C 17.414 28.924 17.272 28.878 17.166 28.783 C 17.059 28.687 16.999 28.55 17 28.407 L 17 19 L 20 19 C 20.277 19.001 20.542 18.886 20.732 18.684 C 20.921 18.482 21.018 18.21 21 17.934 C 20.954 17.4 20.504 16.993 19.969 17 L 17 17 L 17 14 C 17 12.895 17.895 12 19 12 L 21 12 C 21.277 12.001 21.542 11.886 21.732 11.684 C 21.921 11.482 22.018 11.21 22 10.934 C 21.954 10.399 21.503 9.991 20.966 10 L 19 10 C 16.791 10 15 11.791 15 14 L 15 17 L 12 17 C 11.723 16.999 11.458 17.114 11.268 17.316 C 11.079 17.518 10.982 17.79 11 18.066 C 11.046 18.601 11.497 19.009 12.034 19 L 15 19 L 15 28.41 C 15.001 28.553 14.941 28.689 14.835 28.785 C 14.729 28.88 14.587 28.926 14.445 28.91 C 7.731 28.092 2.762 22.27 3.009 15.511 C 3.259 8.761 8.726 3.274 15.481 3.011 C 19.015 2.874 22.452 4.181 25.002 6.631 C 27.552 9.081 28.996 12.464 29 16 Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </a>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path
                  d="M 0 0 L 32 0 L 32 32 L 0 32 Z"
                  fill="transparent"
                ></path>
                <path
                  d="M 12 16 C 12 13.791 13.791 12 16 12 C 18.209 12 20 13.791 20 16 C 20 18.209 18.209 20 16 20 C 13.791 20 12 18.209 12 16 Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M 21.5 3.5 L 10.5 3.5 C 6.634 3.5 3.5 6.634 3.5 10.5 L 3.5 21.5 C 3.5 25.366 6.634 28.5 10.5 28.5 L 21.5 28.5 C 25.366 28.5 28.5 25.366 28.5 21.5 L 28.5 10.5 C 28.5 6.634 25.366 3.5 21.5 3.5 Z M 16 22 C 12.686 22 10 19.314 10 16 C 10 12.686 12.686 10 16 10 C 19.314 10 22 12.686 22 16 C 22 19.314 19.314 22 16 22 Z M 22.5 11 C 21.672 11 21 10.328 21 9.5 C 21 8.672 21.672 8 22.5 8 C 23.328 8 24 8.672 24 9.5 C 24 10.328 23.328 11 22.5 11 Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </a>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path
                  d="M 26 4 L 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 8 26 L 8 30 C 8 30.388 8.224 30.741 8.576 30.906 C 8.927 31.071 9.342 31.017 9.64 30.769 L 15.363 26 L 20.638 26 C 21.106 26 21.559 25.836 21.919 25.536 L 27.28 21.067 C 27.737 20.688 28.001 20.125 28 19.531 L 28 6 C 28 4.895 27.105 4 26 4 Z M 16 17 C 16 17.552 15.552 18 15 18 C 14.448 18 14 17.552 14 17 L 14 11 C 14 10.448 14.448 10 15 10 C 15.552 10 16 10.448 16 11 Z M 22 17 C 22 17.552 21.552 18 21 18 C 20.448 18 20 17.552 20 17 L 20 11 C 20 10.448 20.448 10 21 10 C 21.552 10 22 10.448 22 11 Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
