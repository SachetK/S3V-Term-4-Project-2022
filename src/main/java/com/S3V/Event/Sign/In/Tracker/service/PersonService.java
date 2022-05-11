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

    public Optional<Person> getPersonById(int id) {
        return personDao.selectPersonById(id);
    }

    public Optional<Person> getPersonByTicket(int ticket){
        return  personDao.selectPersonByTicket(ticket);
    }

    public int deletePerson(int id) {
        return personDao.deletePersonById(id);
    }

    public int deletePersonByTicket(int ticket) {
        return personDao.deletePersonByTicket(ticket);
    }

    public int updatePerson(int id, Person person) {
        return personDao.updatePersonById(id, person);
    }

    public int updatePersonByTicket(int ticket, Person person) {
        return personDao.updatePersonByTicket(ticket, person);
    }
}
