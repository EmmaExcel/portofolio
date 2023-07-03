const data = [
   
    {
        id:2,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"REACT",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:6,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"HTML",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:7,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"CSS",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:8,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"JAVASCRIPT",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:9,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"NEXTJS",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:10,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"FIREBASE",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:11,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"TAILWIND",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:12,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"REACT NATIVE",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
    {
        id:12,
        image:"https://images.unsplash.com/photo-1585072064778-6ae3d60d63fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        name:"REACT NATIVE",
        text:"Collaborating with teams for a synergistic boost in delivering exceptional solutions.",
    },
]


const Skills = () => {
   
  return (
    <>
        <section className="skillSection">
            <div className="skillContainer">

            
                <div className="skillHeader">
                    <h1>SERVICES.</h1>
                </div>

               <marquee  className="skillMain" direction="left" >
               {
                    data.map((skill)=>(
                        <div key={skill.id} className="skill">
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                            <h1>
                               {skill.name}.
                            </h1>
                        </div>
                    ))
                }
               </marquee>
            </div>
        </section>
    </>
  )
}

export default Skills