package com.S3V.Event.Sign.In.Tracker.api;

import com.S3V.Event.Sign.In.Tracker.model.Person;
import com.S3V.Event.Sign.In.Tracker.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/person")
@RestController
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping
    public void addPerson(@RequestBody Person person) {
        personService.addPerson(person);
    }

    @GetMapping
    public List<Person> getAllPeople() {
        return personService.getAllPeople();
    }

    @GetMapping(path = "{finder}")
    public Person getPerson(@PathVariable("finder") int finder) {
        return personService.getPerson(finder)
                .orElse(null);
    }

    @DeleteMapping(path = "{finder}")
    public void deletePerson(@PathVariable("finder") int finder) {
        personService.deletePerson(finder);
    }

    @PutMapping(path = "{finder}")
    public void updatePerson(@PathVariable("finder") int finder, @RequestBody Person personToUpdate) {
        personService.updatePerson(finder, personToUpdate);
    }
}
