import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) { 
    this.form = this.fb.group(
      {
        usuario: ['',Validators.required],
        password: ['',Validators.required]
      }
    )

  }

  ingresar()
  {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == "a" && password=="a") {
      this.router.navigate(['modulo']);
    }
    else{
      alert("error");
    }
  }
  ngOnInit(): void {
  }

}
