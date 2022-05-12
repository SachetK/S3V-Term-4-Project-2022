package com.S3V.Event.Sign.In.Tracker.dao;

import com.S3V.Event.Sign.In.Tracker.model.Person;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("postgres")
public class PersonDataAccessService implements PersonDao{
    @Override
    public int insertPerson(int id, int ticketNumber, Person person) {
        return 0;
    }

    @Override
    public List<Person> selectAllPeople() {
        return null;
    }

    @Override
    public Optional<Person> selectPerson(int finder) {
        return Optional.empty();
    }

    @Override
    public int deletePerson(int finder) {
        return 0;
    }

    @Override
    public int updatePerson(int finder, Person person) {
        return 0;
    }
}
