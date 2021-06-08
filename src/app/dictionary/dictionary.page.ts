import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage  {

  public words: any=[];
  
  constructor(private storage: Storage,public navCtrl:NavController,private platform:Platform) { 
   this.listKeys();
  }
  ngOnInit(){
    
   
  }
  listKeys() {
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
     // console.log("key " + key);
     // console.log("iterationNumber " + iterationNumber);
     // console.log("value " + value);
      let obj={key:key,value:value};
      this.words.push(obj);

    });
  }
  removeKey() {
   /* this.storage.remove("value ").then(() => {
      console.log("removed")
    }).catch((error) => {
      console.log('removed error for ' + "merhaba" + '', error);
    });*/
  }

  
}
