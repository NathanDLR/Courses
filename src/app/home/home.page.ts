import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Items } from '../classes/items';
import { ItemsArrayService } from '../services/items-array.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Items[]
  courseForm: FormGroup;

  constructor(private itemsArrayService: ItemsArrayService, public alertController: AlertController) {
    this.items = this.itemsArrayService.items;
  }

  ngOnInit(): void{
    this.courseForm = new FormGroup({
      courseName: new FormControl('',[
        Validators.required
      ]),
      rating: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ])
    })
  }

  ionViewWillEnter(){
   console.log("it entered");
  }

  async validate(title: string, rating: number){
    // Comprobamos que ambos campos sean válidos
    if(title == "" || rating < 1 || rating > 5){
      const alert =await this.alertController.create({
          header: 'Sorry!',
          message: 'Course name is required and rating must \nbe between 1 and 5',
          buttons: ['OK']  
      })

      await alert.present();
    }

    // Si no hay nigún problema añadimos el curso
    else this.addCourse(title, rating);
  }

  addCourse(title: string, rating: number){
    // Creamos el nuevo curso y lo añadimos al array del servicio
    this.itemsArrayService.addItem(this.itemsArrayService.createNewItem(title, rating));
    console.log(this.itemsArrayService.items);

  }

}
