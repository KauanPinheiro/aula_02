function TestList(){
    const dados = [
        {nome: "Maria", idade: 26, altura: 1.65},
        {nome: "João", idade: 30, altura: 1.70},
        {nome: "Joana", idade: 22, altura: 1.80},
    ]
    return(
        <>
            {
                dados.map((dado) => 
                <p>                    
                Nome: {dado.nome} <br/>
                Idade: {dado.idade}<br/>
                Altura: {dado.altura}
                </p>
                    )   
                }
        </>    
    )

}

export default TestList;