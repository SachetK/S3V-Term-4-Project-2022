package com.S3V.Event.Sign.In.Tracker.service;

import com.S3V.Event.Sign.In.Tracker.dao.PersonDao;
import com.S3V.Event.Sign.In.Tracker.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {
    private final PersonDao personDao;

    @Autowired
    public PersonService(@Qualifier("fakeDao") PersonDao personDao) {
        this.personDao = personDao;
    }

    public int addPerson(Person person) {
        return personDao.insertPerson(person);
    }

    public List<Person> getAllPeople() {
        return personDao.selectAllPeople();
    }

    public Optional<Person> getPerson(int finder) {
        return personDao.selectPerson(finder);
    }

    public int deletePerson(int finder) {
        return personDao.deletePerson(finder);
    }

    public int updatePerson(int finder, Person person) {
        return personDao.updatePerson(finder, person);
    }
}
