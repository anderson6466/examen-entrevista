package com.examenmariopuma.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.examenmariopuma.demo.Entidad.Persona;
import com.examenmariopuma.demo.Entidad.costumer;
import com.examenmariopuma.demo.Logica.Logicainterface;
import com.examenmariopuma.demo.dto.Personadto;

@RestController
@RequestMapping("/recargas")
public class controllers {

	@Autowired
	private Logicainterface Logicainterfaces;
	
	
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/RegitrarPersona", method=RequestMethod.POST)
	public String updateOrSave(@RequestBody Personadto personadto){
	   
		
		
		
	    return Logicainterfaces.Guardardatos(personadto);
	}
	
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String  add(@RequestBody costumer personadto){
	   
		
		
		
	    return Logicainterfaces.GuardarCliente(personadto) ;
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public String  delete(@RequestBody costumer personadto){
	   
		
		
		
	    return Logicainterfaces.deleteCliente(personadto) ;
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String  update(@RequestBody costumer personadto){
	   
		
		
		
	    return Logicainterfaces.updateCliente(personadto) ;
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/listaclientes", method=RequestMethod.POST)
	public List<costumer>  listaclientes(@RequestBody costumer personadto){
	   
		
		
		
	    return Logicainterfaces.listaCliente(personadto) ;
	}
}
