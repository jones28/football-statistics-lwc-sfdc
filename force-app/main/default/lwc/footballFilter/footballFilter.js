import { LightningElement, wire } from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import SEARCH_PLAYER_CHANNEL from '@salesforce/messageChannel/Search_Player__c';
import searchPlayers from '@salesforce/apex/PlayerController.searchPlayers';
import getForward from '@salesforce/apex/PlayerController.getForward';
import getDefender from '@salesforce/apex/PlayerController.getDefender';
import getMidfield from '@salesforce/apex/PlayerController.getMidfield';
import getCoach from '@salesforce/apex/PlayerController.getCoach';
import getKeeper from '@salesforce/apex/PlayerController.getKeeper';
import getDefault from '@salesforce/apex/PlayerController.getDefault';
export default class FootballFilter extends LightningElement {
    @wire(MessageContext)messageContext;
    name='';
    players;
    handleForward(){
        getForward()
            .then(result=>{
                this.players=result;
            })
            .catch(error=>{
                console.log(error);
            });
        const payload={
            players:this.players
        };
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
    }
    handleDefault(){
        getDefault()
            .then(result=>{
                this.players=result;
            })
            .catch(error=>{
                console.log(error);
            });
        const payload={
            players:this.players
        };
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
    }
    handleDefender(){
        getDefender()
            .then(result=>{
                this.players=result;
            })
            .catch(error=>{
                console.log(error);
            });
        const payload={
            players:this.players
        };
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
    }
    handleMiddle(){
        getMidfield()
            .then(result=>{
                this.players=result;
            })
            .catch(error=>{
                console.log(error);
            });
        const payload={
            players:this.players
        };
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
    }
    handleKeeper(){
        getKeeper()
            .then(result=>{
                this.players=result;
            })
            .catch(error=>{
                console.log(error);
            });
        const payload={
            players:this.players
        };
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
    }
    handleCoach(){
        getCoach()
            .then(result=>{
                this.players=result;
            })
            .catch(error=>{
                console.log(error);
            });
        const payload={
            players:this.players
        };
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
    }
    handleSearch(event){
        this.name=event.target.value;
        searchPlayers({n:this.name})
            .then(result=>{
                this.players=result;
            })
            .catch(error=>{
                console.log(error);
            });
        const payload={
            players:this.players
        };
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
        publish(this.messageContext,SEARCH_PLAYER_CHANNEL,payload);
    }
    
}