import { Table } from 'semantic-ui-react';
import React from 'react'
import './Topics.css';
import { Link } from 'react-router-dom';
 import historyOFMedicine from './historyOFMedicine'; 


const Science = () => {
        
    return (
         <div >
      <Table className='topicsTable'>
      <tr>
       <th>BookName</th>
       <th>Author</th>
       <th>Publish Date</th>
     </tr>
     <tr>
       <td><Link to = '/bookForAnotomy' >Book of Anotomy </Link> </td>
       <td>John</td>
       <td>2020</td>
     </tr>
     <tr>
       <td><Link to = '/historyOFMedicine'>History of Medical Sciences</Link></td>
       <td>2018</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2016</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2018</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>1918</td>
       <td>Brook</td>
     </tr>
     <tr>
       <td>History of Medical Sciences</td>
       <td>2010</td>
       <td>Brook</td>
     </tr>
      </Table>
      </div>
     ); 
 }

 export default Science;


 