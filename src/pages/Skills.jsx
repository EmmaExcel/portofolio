const data = [
    {
        id:1,
        image:"",
        name:"WEB MASTERY",
        text:"Innovative, attractive websites that’ll leave your visitors wanting more .",

    },
    {
        id:2,
        image:"",
        name:"RESPONSIVE DESIGN",
        text:"Seamlessly adapting to deliver a stunning experience, regardless of device.",
    },
    {
        id:3,
        image:"",
        name:"CLEAN CODE",
        text:"Efficient and maintainable code, neatly organized for optimal performance.",
    },
    {
        id:4,
        image:"",
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
                        <div key={skill.id} className=""></div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Skills