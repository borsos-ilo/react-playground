function Heading(props){
    return (
        <>
        <h1>Learning plan</h1>
        <h2>Right now I'm learning {props.currentFramework}, soon I'll start learning {props.nextFramework}</h2> 
        </>
    );
};
export default Heading;