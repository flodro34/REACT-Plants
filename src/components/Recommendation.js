function Recommendation() {
    const currentMonth = new Date().getMonth;
    const isSpring = currentMonth >= 2 && currentMonth <= 5 ;

    if(!isSpring){
        return "Ce n'est pas le moment de rempoter."
    }
    
    return "C'est le Printemps, rempotez ! 🌱";
    
}



export default Recommendation;