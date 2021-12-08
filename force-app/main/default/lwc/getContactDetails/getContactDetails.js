import { LightningElement } from 'lwc';

export default class GetContactDetails extends LightningElement {
    da;

    handleClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordpage',
            attributes: {
                recordId:'0036D00000QeBGxQAN',
                objectApiName: 'contact',
                actionName: 'view'
            }
        }

        )
      

        var inputs = this.template.querySelector(".email");

        var emailD = inputs.value;

        console.log('emailD...',emailD);

        var inputs1 = this.template.querySelector(".firstname");

        var first = inputs1.value;

        console.log('first...',first);

        var inputs2 = this.template.querySelector(".lastname");

        var last = inputs2.value;

        console.log('last...',last);

        this.da = emailD + first + last;

        console.log('this.da...',this.da);



    }
}