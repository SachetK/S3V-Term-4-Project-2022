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

    Optional<Person> selectPerson(int finder);

    int deletePerson(int finder);

    int updatePerson(int finder, Person person);
}
