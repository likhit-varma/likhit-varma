import { LightningElement } from 'lwc';

export default class DetailsofEmployee extends LightningElement {get options() {

    return [

        { label: 'Administrator', value: 'Administrator' },

        { label: 'Developer', value: 'Developer' },

        { label: 'Manager', value: 'Manager' },

    ];

}
value = '';



    get options1() {

        return [

            { label: 'Male', value: 'option1' },

            { label: 'Female', value: 'option2' },
            {label: 'Others', value: 'option3'}

        ];

       

    }

handleChange(event) {

    this.value = event.detail.value;

}}