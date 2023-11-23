import Link from "next/link"

export default function (props:any /*luego crear member interface*/ ) {

    return (
        <article id={/*member name ex */} singer={/**member name ex needed? luego vemos */} className="tooltip etc">
                    <div  className="">
                        <img src="" alt=""/>
                    </div>
                    <div className="info"> 
                        <h3 className="tit-tool" >{/**name */}</h3>
                        <p>{/**mini bio resumen short */}</p>
                        <div className="btn-cont-tool">
                            <Link href={/** extended bio, page personal  */}></Link>
                        </div>
                    </div>
               
        </article>
    )

}