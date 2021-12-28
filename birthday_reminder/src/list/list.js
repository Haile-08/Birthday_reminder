import React from "react";
import './list.css';

const List =({people})=>{
    return(
        <React.Fragment>
            {
                people.map((person)=>{
                     const {id,name,age,image} = person;
                     return(
                         <article key={id} className="person container font-mono my-3 flex mx-auto">
                             <img src={image} className="img  h-20 w-20 mx-10 rounded-full"/>
                             <div>
                                 <h4 className="name text-base text-center">{name}</h4>
                                 <p className="age text-sm">{age} years</p>
                             </div>
                         </article>
                     );  
                })
            }
        </React.Fragment>
    )
}

export default List;