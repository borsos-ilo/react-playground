function Heading(){
    let title="I'm learning React!"
    return (
        <h2>{title}</h2> 
        // Curly brackets have to be applied to use the text from the variable,
        // not just text "title" itself.
    );
};
export default Heading;