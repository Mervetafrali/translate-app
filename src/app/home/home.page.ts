import { Component } from '@angular/core';
import { HMSVoiceServiceProvider, HMSMLKit } from '@hmscore/ionic-native-hms-ml';
import { Platform, ToastController } from "@ionic/angular";
import { Storage } from '@ionic/storage';@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage,public platform: Platform,private toastController:ToastController) {}
  ionViewWillEnter() {
    this.platform.ready().then(() => {
      var configInput = {
        apiKey: "CV5HZ3MSQZ...UdQaru34jC+OO/bIE/+E4..4ddTBEorDgXh",
      };
      HMSMLKit.serviceInitializer(configInput);
    });
  }
  ngOnInit(){
    this.permissions();
  }
  to="";
  from="";
  translated="";
  translateInputText="";
  switch(){
    let temp=this.from;
    this.from=this.to;
    this.to=temp;
  }
  async translate(){
    var translateInput = {
      USE_SYNC:false,
      targetLangCode: this.to,
      sourceText: this.translateInputText,
  };
    try {
      const result = await HMSVoiceServiceProvider.remoteTranslator(translateInput);
      this.translated = result;
    } catch (ex) {
      alert(JSON.stringify(ex))
    }
    
  }
  public async permissions(){
    try {
      await HMSMLKit.requestPermissions({
        permissionList: ["camera", "readExternalStorage", "audio", "writeExternalStorage"],
      });
    } catch (ex) {
      console.log(JSON.stringify(ex));
    }
  }
  async add(){
    let key=this.translateInputText;
    let value=this.translated;
    this.storage.set(key, value);
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Added successfully',
      
    });
    await toast.present();
  }
}
