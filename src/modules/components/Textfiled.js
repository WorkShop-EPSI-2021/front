import * as React from 'react';

function renderSwitch(param){
    switch (param){
        case '1':
            return (<iframe width="560" height="315" src="https://www.youtube.com/embed/_6GwqzuYGus"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>);
        case '2':
            return(<iframe width="560" height="315" src="https://www.youtube.com/embed/NY1IoJcE_hA"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>);
        case '3':
            return(<iframe width="560" height="315" src="https://www.youtube.com/embed/XuUxhRoif1w"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>);
        default:
            return null
    }
}
function addlien(params){
    if(params != ""){
        return (<a href={params}>Lien de l'article</a>)
    }else{
        return "Lien pas disponible :("
    }
}
function Textfield(props) {
    return (
        <div>
            <div className={props.class}>
                {renderSwitch(props.video)}
                <p>
                    {props.text}<br/><br/>
                    {addlien(props.lien)}
                </p>
            </div>
        </div>
    );
}
export default Textfield;
