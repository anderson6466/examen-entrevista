package com.examenmariopuma.demo.Entidad;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;


 @Document(collection="Persona")
public class Persona {

@Id
private String Personaid;
 
public String getPersonaid() {
	return Personaid;
}

public void setPersonaid(String personaid) {
	Personaid = personaid;
}

public String getDni() {
	return dni;
}

public void setDni(String dni) {
	this.dni = dni;
}

public String getNombres() {
	return Nombres;
}

public void setNombres(String nombres) {
	Nombres = nombres;
}

public String getApellidos() {
	return Apellidos;
}

public void setApellidos(String apellidos) {
	Apellidos = apellidos;
}

public String getEdad() {
	return Edad;
}

public void setEdad(String edad) {
	Edad = edad;
}

private String  dni;
 
private String Nombres;
 
private String Apellidos;
 
private String Edad;
	
}
