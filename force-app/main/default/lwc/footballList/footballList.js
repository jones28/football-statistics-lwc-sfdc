import { api, LightningElement, wire } from 'lwc';
import getPlayers from '@salesforce/apex/PlayerController.getPlayers';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { subscribe,MessageContext} from 'lightning/messageService';
import SEARCH_PLAYER_CHANNEL from '@salesforce/messageChannel/Search_Player__c';
export default class FootballList extends LightningElement {
    @wire(MessageContext)messageContext;
    subscription=null;
    name;
    @api player;
    players;
    @wire(getPlayers)wireFunction({data,error}){
        if(data)
        {
            this.players=data;
        }
        else if(error)
        {
            console.log(error);
        }
    }
    actions = [
        { label: 'View', name: 'view' },
    ];
    columns=[
        { label:'Name', fieldName:'Name'},
        { label:'Club', fieldName:'Club__c'},
        { label:'Position', fieldName:'Title'},
        { type:'action', typeAttributes:{rowActions:this.actions}}
    ];
    subscribeMethod(){
        this.subscription=subscribe(this.messageContext,SEARCH_PLAYER_CHANNEL,(message)=>{
            this.players=message.players;
        });
    }
    connectedCallback(){
        this.subscribeMethod();
    }
    handleRowAction(event){
        const row=event.detail.row;
        this.player=row;
        this.dispatchEvent(new ShowToastEvent({
            title:"Viewed Successfully",
            message:this.player.Name+" has been successfully retrieved",
            variant:"success"
        }));
    }
}