package com.examenmariopuma.demo.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.examenmariopuma.demo.Entidad.Persona;

public interface PersonaRepository  extends MongoRepository<Persona, ObjectId>  {

}
