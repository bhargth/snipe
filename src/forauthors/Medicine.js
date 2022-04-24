import { Table } from 'semantic-ui-react';
import React from 'react'
import './Topics.css';


const Medicine = () => {
        
    return (
         <div >
      <Table className='topicsTable'>
      <tr>
       <th>BookName</th>
       <th>Author</th>
       <th>Publish Date</th>
     </tr>
     <tr>
       <td>Book of Anotomy</td>
       <td>John</td>
       <td>2020</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2018</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2018</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2018</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2018</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2018</td>
       <td>Brook</td>
     </tr>
     
      </Table>
      </div>
     ); 
 }

 export default Medicine;