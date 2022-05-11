package com.S3V.Event.Sign.In.Tracker.dao;

import com.S3V.Event.Sign.In.Tracker.model.Person;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository("fakeDao")
public class FakePersonDataAccessService implements PersonDao {
    private static final List<Person> DB = new ArrayList<>();

    @Override
    public int insertPerson(int id, int ticketNumber, Person person) {
        DB.add(new Person(id, person.getName(), ticketNumber));
        return 1;
    }

    @Override
    public List<Person> selectAllPeople() {
        return DB;
    }

    @Override
    public Optional<Person> selectPerson(int finder) {
        return DB.stream()
                .filter(person -> person.getId() == finder || person.getTicketNumber() == finder)
                .findFirst();
    }

    @Override
    public int deletePerson(int finder) {
        Optional<Person> personMaybe = selectPerson(finder);
        if (personMaybe.isEmpty()) {
            return 0;
        }
        DB.remove(personMaybe.get());
        return 1;
    }

    @Override
    public int updatePerson(int finder, Person update) {
        return selectPerson(finder)
                .map(person -> {
                    int indexOfPersonToUpdate = DB.indexOf(person);
                    if (indexOfPersonToUpdate >= 0) {
                        DB.set(indexOfPersonToUpdate, new Person(update.getId(), update.getName(), update.getTicketNumber()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }
}
