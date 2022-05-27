package com.S3V.Event.Check.In.Tracker.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "people")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "countyId")
    private int countyId;

    @Column(name = "name")
    @NotBlank
    private String name;

    @Column
    private int ticketNumber;


    public Person() {

    }

    public Person(@JsonProperty("countyId") int countyId,
                  @JsonProperty("name") String name,
                  @JsonProperty("ticket") int ticketNumber) {
        this.countyId = countyId;
        this.name = name;
        this.ticketNumber = ticketNumber;
    }

    public int getId() {
        return countyId;
    }

    public String getName() {
        return name;
    }

    public int getTicketNumber() {
        return ticketNumber;
    }
}