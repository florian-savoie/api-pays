import React from 'react'

export default function ShowTache(props) {
  return (
    <div className="tache">
        {props.listetache.map((tache, index) => (
            
                <div className='divtodolist' key={index}>
                    <h2>tache : {tache.text}</h2>
                    <p className='description'>  description :{tache.description}</p>
                    <button className='btn btn-danger' onClick={() => props.handledeletetache(index)}>Supprimer</button>
                </div>
            
        ))}</div>
  )
}
