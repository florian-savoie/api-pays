import "./home.css";
export default function Home(){
    return (
<div>
    <h1>mon premier site avec react</h1>
    <p> - toutes sorte d'exercices et de mise en pratique </p>
   <div className="img"><img src={process.env.PUBLIC_URL + '/assert/img/reactimg.gif'} alt="" /></div> 
</div>
    );
}