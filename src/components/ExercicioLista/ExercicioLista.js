import morango from"../../img/morango.webp"
import melamcia from"../../img/melanciaa.jpg"
import orange from"../../img/laranja.jpg"
import goiaba from"../../img/goiaba.webp"
import manga from"../../img/manga.jpg"






function ExercicioLista(){
    const fruit = [
        {nome: "Manga", codigo: "001",  img: morango },
        {nome: "Laranja", codigo: "002",  img: melamcia},
        {nome: "Morango", codigo: "003",  img: orange},
        {nome: "Goiaba", codigo: "004",  img: goiaba},
        {nome: "Melancia", codigo: "005", img: manga},
    ]
    return(
        <>
            {
                fruit.map((add) =>
                <>
                <p>
                    Nome: {add.nome}<br/>
                    Codígo: {add.codigo}<br/>
                </p>
                <img src={add.img} alt="" />
                </>
                )
            }
        </>
    )
}

export default ExercicioLista;