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
        return personService.getPersonById(finder)
                .orElse(personService
                        .getPersonByTicket(finder)
                        .orElse(null)
                );
    }

    @DeleteMapping(path = "{finder}")
    public void deletePerson(@PathVariable("finder") int finder) {
        personService.deletePerson(finder);
    }

    @DeleteMapping(path = "{ticket}")
    public void deletePersonByTicket(@PathVariable("ticket") int ticket){
        personService.deletePersonByTicket(ticket);
    }

    @PutMapping(path = "{ticket}")
    public void updatePersonByTicket(@PathVariable("ticket") int ticket, @RequestBody Person update){
        personService.updatePersonByTicket(ticket, update);
    }

    @PutMapping(path = "{id}")
    public void updatePerson(@PathVariable("id") int id, @RequestBody Person personToUpdate) {
        personService.updatePerson(id, personToUpdate);
    }
}
