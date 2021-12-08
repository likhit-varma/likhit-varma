import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import fetchcons from '@salesforce/apex/ContactsController.getContactList';
export default class LWCPratice extends NavigationMixin(LightningElement) {
    @track responseData;
    @track errMsg;
    connectedCallback(){ 
        fetchcons()
            .then((result) => {
                console.log('response from apex.......',result);
               this.responseData = result;
               console.log('response after assigning into other variable from apex.......',this.responseData);

            })
            .catch((error) => {
                console.log('error response from apex.......',error);
                this.errMsg = error;
            });
        }
   
        }

