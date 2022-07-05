import React from 'react'

const Pres = () => {
  return (
   
    <div>
    <section>
 
   <h3 className='listed'>Liste de présence mensuelle</h3>
 <div class="tbl-header">
   <table cellpadding="0" cellspacing="0" border="0">
     <thead>
       <tr>
         <th>CIN</th>
         <th>Nom et prénom du patient</th>
         <th>Mois</th>
         <th>Nombre d'absence</th>
         
 
       </tr>
     </thead>
   </table>
 </div>
 <div class="tbl-content">
   <table cellpadding="0" cellspacing="0" border="0">
     <tbody>
       <tr>
         <td>1111111111</td>
         <td>Mohamed  </td>
         <td className='mois'><input type="text" placeholder='0' min="0" max="12"/></td>
         <td className='mois'><input  type="text" placeholder='0' min="0" max="12"/></td>

         
       </tr>
       </tbody>
  </table>
</div>
</section>
    </div>
  
       
  )
}

export default Pres;