import './profile.css';
import Card from '../../components/Card';

export default function Initial() {
    return (    
        <div className="container">
            <div className="perfil">
            <div className="image">
                <img src="https://avatars.githubusercontent.com/u/197772966?v=4"  alt="" />
                <p>Caio 00 do curso</p>
            </div>
            <Card title={"Descrição"} text={"Olá meu nome é Caio, tenho 17 anos, no momento estou cursando Desenvolvimento de sistema no Senai Valinhos."} />
            <Card title={"Descrição"} text={"Desenvolvedor Full Stack"} />
            <Card title={"Descrição"} text={"Desenvolvedor Banco de dados"} />
            <Card title={"Descrição"} text={<div
                  className="skillsContainer"
                  style={{ display: "flex", gap: "10px", width: "100px", height:"100px" }}
                >
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"/>
                </div>} />
            </div>
            <div className="b1"></div>
            <div className="b2"></div>
            <div className="b3"></div>
            <div className="b4"></div>
        </div>
    )
}