package com.S3V.Event.Sign.In.Tracker.dao;

import com.S3V.Event.Sign.In.Tracker.model.Person;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PersonDao {
    int insertPerson(int id, int ticketNumber, Person person);

    default int insertPerson(Person person) {
        int id = (int) Math.random() * 4000;
        int ticket = (int) Math.random() * 300;
        return insertPerson(id, ticket, person);
    }

    List<Person> selectAllPeople();

    Optional<Person> selectPersonById(int id);

    Optional<Person> selectPersonByTicket(int ticket);

    int deletePersonById(int id);

    int deletePersonByTicket(int ticket);

    int updatePersonByTicket(int ticket, Person person);

    int updatePersonById(int id, Person person);
}
