package com.S3V.Event.Check.In.Tracker.repository;

import com.S3V.Event.Check.In.Tracker.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}