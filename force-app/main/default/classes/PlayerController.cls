public with sharing class PlayerController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getPlayers(){
        try {
            return [SELECT Name,Id,Profile__c,AccountId,Appearances__c,Goals__c,Assists__c,Club__c,Title,Description,Department FROM Contact WHERE Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> searchPlayers(String n){
        try {
            String sk='%'+n+'%';
            return [SELECT Name,Id,Profile__c,AccountId,Appearances__c,Goals__c,Assists__c,Club__c,Title,Description,Department FROM Contact WHERE Name LIKE :sk AND Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> getDefault(){
        try {
            return [SELECT Name,Id,Profile__c,AccountId,Appearances__c,Goals__c,Assists__c,Club__c,Title,Description,Department FROM Contact WHERE Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> getForward(){
        try {
            return [SELECT Name,Id,Profile__c,AccountId,Appearances__c,Goals__c,Assists__c,Club__c,Title,Description,Department FROM Contact WHERE Title='Forward' AND Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> getMidfield(){
        try {
            return [SELECT Name,Id,Profile__c,AccountId,Appearances__c,Goals__c,Assists__c,Club__c,Title,Description,Department FROM Contact WHERE Title='Midfielder' AND Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> getDefender(){
        try {
            return [SELECT Name,Id,Profile__c,AccountId,Appearances__c,Goals__c,Assists__c,Club__c,Title,Description,Department FROM Contact WHERE Title='Defender' AND Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> getKeeper(){
        try {
            return [SELECT Name,Id,Profile__c,AccountId,Appearances__c,Goals__c,Assists__c,Club__c,Title,Description,Department FROM Contact WHERE Title='Goal Keeper' AND Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> getCoach(){
        try {
            return [SELECT Name,Id,Profile__c,AccountId,Club__c,Title,Description,Department FROM Contact WHERE Title='Head Coach' AND Department='Football' ORDER BY LastModifiedDate DESC
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Football_Stats__c> getStats(Contact play){
        try {
            Id pid=play.Id;
            return [SELECT Appearances__c,Id,Goals__c,Assists__c,Player__c FROM Football_Stats__c WHERE Player__c=:pid ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static Football_Stats__c setStats(Football_Stats__c stat,Contact play){
        try {
            stat.Player__c=play.Id;
            upsert stat;
            return stat;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
