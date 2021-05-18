package com.examenmariopuma.demo.Logica;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.examenmariopuma.demo.Entidad.Persona;
import com.examenmariopuma.demo.Entidad.costumer;
import com.examenmariopuma.demo.Repository.PersonaRepository;
import com.examenmariopuma.demo.dto.Personadto;
public interface Logicainterface   {

	
	public String Guardardatos (Personadto personadto  );
	public String GuardarCliente (costumer costumers  );
	public String updateCliente (costumer costumers  );
	public String deleteCliente (costumer costumers  );
	public List<costumer>   listaCliente (costumer costumers  );
}
