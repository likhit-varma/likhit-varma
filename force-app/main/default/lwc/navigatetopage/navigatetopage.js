import { LightningElement } from 'lwc';
/*** Class should "extends NavigationMixin(LightningElement)" ***/
import { NavigationMixin } from 'lightning/navigation';
export default class Navigatetopage extends NavigationMixin(LightningElement) {
 // Navigate to New Opportunity Page

  navigateToNewOpportunityPage() {

    this[NavigationMixin.Navigate]({

        type: 'standard__objectPage',

        attributes: {

            recordId: this.recordId,

            objectApiName: 'Account',

            actionName: 'new'

        },

    });
  }
    navigateToAccountListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
}
navigateToContactRelatedList() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordRelationshipPage',
        attributes: {
            recordId: this.recordId,
            objectApiName: 'Account',
            relationshipApiName: 'Contacts',
            actionName: 'view'
        },
    });
}
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://wallpaper-house.com/data/out/9/wallpaper2you_360808.jpg"
            },
        });
    }
}