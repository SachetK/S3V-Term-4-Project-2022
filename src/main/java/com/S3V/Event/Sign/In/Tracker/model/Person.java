package com.S3V.Event.Sign.In.Tracker.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Person {
    private final int id;
    private final int ticketNumber;
    private final String name;

    public Person(@JsonProperty("id") int id,
                  @JsonProperty("name") String name,
                  @JsonProperty("ticket") int ticketNumber) {
        this.id = id;
        this.name = name;
        this.ticketNumber = ticketNumber;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getTicketNumber() {
        return ticketNumber;
    }
}
