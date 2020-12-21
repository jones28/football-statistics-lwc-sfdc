import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import getStats from '@salesforce/apex/PlayerController.getStats';
import APPEARANCES from '@salesforce/schema/Contact.Appearances__c';
import GOALS from '@salesforce/schema/Contact.Goals__c';
import ASSISTS from '@salesforce/schema/Contact.Assists__c';
export default class FootballDetail extends LightningElement {
    @api player;
    show=false;
    stats;
    edit=false;
    fields = [APPEARANCES, GOALS, ASSISTS];
    handleStats(){
        this.show=true;
        getStats({play:this.player})
            .then(result=>{
                this.stats=result;
            })
            .catch(error=>{
                console.log(error);
            });
    }
    handleEdit(){
        this.edit=true;
    }
    handleClose(){
        this.show=false;
        this.edit=false;
    }
    handleSuccess(){
        this.dispatchEvent(new ShowToastEvent({
            message:"Succesfully updated for "+this.player.Name,
            variant:"success"
        }))
    }
}