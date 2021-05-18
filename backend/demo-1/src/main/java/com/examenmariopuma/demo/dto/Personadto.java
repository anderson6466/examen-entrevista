package com.examenmariopuma.demo.dto;

import lombok.Getter;
import lombok.Setter;

public class Personadto {
	
	

 
public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEdad() {
		return edad;
	}

	public void setEdad(String edad) {
		this.edad = edad;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

private String nombre;

 
private String apellido;
 
private String edad;
 
private  String direccion;

@Override
	public String toString() {
		return "Personadto [nombre=" + nombre + ", apellido=" + apellido + ", edad=" + edad + ", direccion=" + direccion
				+ "]";
	}
 
}