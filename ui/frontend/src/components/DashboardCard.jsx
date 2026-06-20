import "../styles/card.css";

function DashboardCard({title,value}){

return(

<div className="card">

<h4>{title}</h4>

<h1>{value}</h1>

</div>

)

}

export default DashboardCard;