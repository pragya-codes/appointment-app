import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-app',
  templateUrl: './appointment-app.component.html',
  styleUrl: './appointment-app.component.css'
})
export class AppointmentAppComponent {
  newAppointment: string = ""
  newDate: Date = new Date()
  appointments: Appointment[] = []

  handleAdd() {

    if (this.newAppointment != "" && this.newDate) {
      let appt: Appointment = {
        id: Date.now(),
        title: this.newAppointment,
        date: this.newDate
      }
      this.appointments.push(appt)


    }
    this.newAppointment = ""
    this.newDate = new Date()
    console.log(this.appointments)
  }


}
