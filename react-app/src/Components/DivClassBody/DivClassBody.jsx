import './DivClassBody.css';

function DivClassBody(props){
    return(
        <div className="body">
            {props.content}
        </div>
    )
}

export default DivClassBody;