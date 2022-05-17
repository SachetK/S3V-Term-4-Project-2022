package com.S3V.Event.Sign.In.Tracker.dao;

import com.S3V.Event.Sign.In.Tracker.model.Person;
import org.flywaydb.core.internal.jdbc.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("postgres")
public class PersonDataAccessService implements PersonDao{

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PersonDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertPerson(int id, int ticketNumber, Person person) {
        return 0;
    }

    @Override
    public List<Person> selectAllPeople() {
        final String sql = "Select ID, name FROM person, ticket FROM person";
        return List.of(new Person((int) (Math.random() * 500000 + 100000), "from POSTGRES DB", (int) (Math.random() * 500000 + 100000)));
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
