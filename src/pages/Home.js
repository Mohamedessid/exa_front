import React from 'react'

export const Home = () => {
  return (
    <>
      {/* <h2 className='h2-'>Formulaire d'ajout d'employer</h2> */}
   
<div className='adde'>
      
        <h2 style={{Color:"white"}}>Sign Up</h2>
        
     <label>Nom et Prenon </label>
     <input type="text"/>
     <label>CIN employer </label>
     <input type="text"/>
     <label> Téléphone</label>
     <input type="text"/>
     <label>Adresse</label>
     <input type="text"/>
     

      </div>
      <div>
      <button className='btn-sign' type="submit">save</button>
      </div>
       
   
    </>
  )
}
export default Home;