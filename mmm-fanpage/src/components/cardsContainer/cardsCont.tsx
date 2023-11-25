import Card from "../card/card"

export default function () {
    const members = [
        {   name:'',
            bio:'',
            profile_pic:'',
        }
    ]
    return(
        <section>
            <h2>Integrantes</h2>
            <div>
                {members.map((member, i)=>(
                    <Card key={i} props= {member} ></Card>
                ))}
            </div>
        </section>
    )
}