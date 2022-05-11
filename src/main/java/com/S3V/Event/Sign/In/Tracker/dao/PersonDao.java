package com.S3V.Event.Sign.In.Tracker.dao;

import com.S3V.Event.Sign.In.Tracker.model.Person;

import java.util.List;
import java.util.Optional;

public interface PersonDao {
    int insertPerson(int id, int ticketNumber, Person person);

    default int insertPerson(Person person) {
        return insertPerson(person.getId(), person.getTicketNumber(), person);
    }

    List<Person> selectAllPeople();

    Optional<Person> selectPersonById(int id);

    Optional<Person> selectPersonByTicket(int ticket);

    int deletePersonById(int id);

    int deletePersonByTicket(int ticket);

    int updatePersonByTicket(int ticket, Person person);

    int updatePersonById(int id, Person person);
}
