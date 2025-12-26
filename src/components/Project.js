import React from 'react';

const Project = () => {
  const cardData = [
    {
      title: "Calculator Project",
      text: "Front-end applications built using HTML CSS Javascript",
      link:"https://github.com/Muhammad-afzaal881/Calclator-app",
      img : "https://images.unsplash.com/photo-1711344397160-b23d5deaa012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "ToDo App",
      text: "Front-end applications built using HTML CSS Javascript",
      link:"https://github.com/Muhammad-afzaal881/Todo-app",
      img : "https://media.istockphoto.com/id/2214686927/photo/checklist-clipboard-with-chat-icon-to-do-list-goal-achievement-concept-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=k268W4TThNJyKWp2FKRe6-nR3KQYPzhpDRS5GeWwOts="
    },
    {
      title: "Digital Clock ",
      text: "Front-end applications built using HTML CSS Javascript",
      link:"https://github.com/Muhammad-afzaal881/Digital-clock",
      img : "https://images.unsplash.com/photo-1591436123200-5ccc6511c0e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMGNsb2NrfGVufDB8fDB8fHww"
    },
    {
      title: " ecommerence app",
      text: "Front-end applications built using HTML CSS Javascript",
         link:"https://github.com/Muhammad-afzaal881/ecommerce-app",
      img : "https://media.istockphoto.com/id/683352248/photo/3d-isometric-style-shop-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=zZ1OfmlIbRCIjLYlVkoniumUKqDptlemSQhsDbaRXkU="
    },
    {
      title: "Chat Bot",
      text: "Front-end applications built using HTML CSS Javascript",
      link:"https://github.com/Muhammad-afzaal881/Chat-bot",
      img : "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdCUyMGJvdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Movie Poster app",
      text: " Dynamic React apps with routing, filtering, and API integration for real-time data",
         link:"https://github.com/Muhammad-afzaal881/Movie-App",
      img : "https://plus.unsplash.com/premium_photo-1710962537846-dca5c74f5c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBhcHB8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Login and Sign in page",
      text: "Front-end applications built using HTML CSS Javascript",
         link:"https://github.com/Muhammad-afzaal881/Registration-form",
      img : "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW4lMjBwYWdlfGVufDB8fDB8fHww"
    },
     {
      title: "Hotel simulation app",
      text: "Front-end applications built using HTML CSS Javascript",
         link:"http://github.com/Muhammad-afzaal881/Hotel-simulation",
      img : "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjBzaW11bHRhaW9uJTIwdGV4dHxlbnwwfHwwfHx8MA%3D%3D"
    },
      {
      title: " ecommerence app",
      text: " Dynamic React apps with routing, filtering, and API integration for real-time data",
         link:"https://github.com/Muhammad-afzaal881/Digital-clock",
      img : "https://t3.ftcdn.net/jpg/03/34/52/38/240_F_334523803_IS9zrOfd6hvqVjlsDCKnqbNoCJavW2Qf.jpg"
    },
     {
      title: "Personal  protofolio",
      text: " Dynamic React apps with routing, filtering, and API integration for real-time data", 
        link:"https://github.com/Muhammad-afzaal881/Portfolio",
      img : "https://plus.unsplash.com/premium_photo-1722859265830-dc1a77853885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <img src={card.img} class="card-img-top" alt="..." style={{width : "320px", height :"200px"}}></img>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;