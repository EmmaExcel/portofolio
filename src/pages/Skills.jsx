const data = [
    {
        id:1,
        image:"https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        name:"WEB MASTERY",
        text:"Innovative, attractive websites that’ll leave your visitors wanting more .",

    },
    {
        id:2,
        image:"https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3BvbnNpdmUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name:"RESPONSIVE DESIGN",
        text:"Seamlessly adapting to deliver a stunning experience, regardless of device.",
    },
    {
        id:3,
        image:"https://images.unsplash.com/photo-1616138276663-5041438a8476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsZWFuJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"CLEAN CODE",
        text:"Efficient and maintainable code, neatly organized for optimal performance.",
    },
    {
        id:4,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"TEAM PLAYER",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
]


const Skills = () => {
   
  return (
    <>
        <section className="skillSection">
            <div className="skillContainer">
                {
                    data.map((skill)=>(
                        <div key={skill.id} className="skill">
                            <img src={skill.image} />
                            <h1>{skill.name}</h1>
                            <p>{skill.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Skills