public with sharing class ContactsController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        List<Contact> cont = new List<Contact>();
        cont  = [SELECT Id, FirstName, LastName, Email FROM Contact limit 20];
        return cont;

    }  

}