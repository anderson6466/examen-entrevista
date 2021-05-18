package com.examenmariopuma.demo.Logica;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.examenmariopuma.demo.Entidad.Persona;
import com.examenmariopuma.demo.Entidad.costumer;
import com.examenmariopuma.demo.Repository.PersonaRepository;
import com.examenmariopuma.demo.Repository.RepositoryCliente;
import com.examenmariopuma.demo.dto.Personadto;

import lombok.experimental.var;

@Service("Logicainterface")
@Transactional
public class Logicaimplemen  implements    Logicainterface {

 public  Persona persona;
 @Autowired
 private RepositoryCliente RepositoryClientes;
 @Autowired
private PersonaRepository personaRepository; 
@Autowired
public  Logicaimplemen (PersonaRepository PersonaRepositoryss)
	{
		
		this.personaRepository=PersonaRepositoryss;
		
		
	}
	
public	String Guardardatos (Personadto personadto) {
	
	
	 persona = new Persona( )  ;
	 persona.setEdad(personadto.getEdad());
	 
	 
	
	personaRepository.save(persona);
	
	
	
	
	return "Registrado";
}

@Override
public String GuardarCliente(costumer costumers) {
	 try {
		 
		 RepositoryClientes.save(costumers);
		 

			return "cliente guardado";
	 } catch (Exception ex ){
		 
		 return ex.toString();
		 
	 }
	
	
}

@Override
public String updateCliente(costumer costumers) {
 try {
		 
	 
	  
	 
		 RepositoryClientes.save(costumers);
		 

			return "cliente actualizado";
	 } catch (Exception ex ){
		 
		 return ex.toString();
		 
	 }
	
}

@Override
public String deleteCliente(costumer costumers) {
 try {
		 
		 RepositoryClientes.delete(costumers);
		 

			return "cliente delete";
	 } catch (Exception ex ){
		 
		 return ex.toString();
		 
	 }
	
}

@Override
public List<costumer> listaCliente(costumer costumers) {
	 
	
	return RepositoryClientes.findAll();
	
	 
}
	
}
