import Username from '@salesforce/schema/User.Username';

import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation'

export default class loginpage
 extends NavigationMixin (LightningElement) {

     signupClick(){

         this[NavigationMixin.Navigate]({

            type: "standard__navItemPage",

            attributes : {

                apiName: "SignIn_Form",

               

              }

         

    });

  }

 

}