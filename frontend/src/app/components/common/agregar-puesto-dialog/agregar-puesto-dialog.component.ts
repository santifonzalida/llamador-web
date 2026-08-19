import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-agregar-puesto-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './agregar-puesto-dialog.component.html',
})
export class AgregarPuestoDialogComponent {
  nombre = '';

  constructor(public dialogRef: MatDialogRef<AgregarPuestoDialogComponent>) {}

  onCancelar(): void {
    this.dialogRef.close();
  }

  onAceptar(): void {
    const nombreLimpio = this.nombre.trim();
    if (!nombreLimpio) {
      return;
    }
    this.dialogRef.close(nombreLimpio);
  }
}
