import { LightningElement,track,wire } from 'lwc';

import getContactList from '@salesforce/apex/ContactsController.getContactList'

export default class CoemGetContacts extends LightningElement {

   

    @track contactsData;

    @track errorData;



    @wire(getContactList)

    GetContacts({error,data}){

        if(data){

            this.contactsData = data;

            console.log('this.contactsData........',this.contactsData);

        }else if(error){

            this.errorData = error;
            
        
            }
        
        
        
            
            
            
        
            
        
        
        
           
        
            

        }

    



   

}






