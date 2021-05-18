package com.examenmariopuma.demo.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.examenmariopuma.demo.Entidad.Persona;
import com.examenmariopuma.demo.Entidad.costumer;

public interface RepositoryCliente extends MongoRepository<costumer, ObjectId> {

}
