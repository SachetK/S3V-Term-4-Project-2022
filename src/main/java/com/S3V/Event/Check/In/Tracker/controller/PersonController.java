package com.S3V.Event.Check.In.Tracker.controller;

import com.S3V.Event.Check.In.Tracker.model.Person;
import com.S3V.Event.Check.In.Tracker.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    // get all people
    @GetMapping("/people")
    public List<Person> getAllPeople(){
        return personRepository.findAll();
    }
}