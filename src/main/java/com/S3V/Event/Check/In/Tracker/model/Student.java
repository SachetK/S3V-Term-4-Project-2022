package com.S3V.Event.Check.In.Tracker.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "people")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "ticket_number")
    @NotNull
    private int ticket;

    @Column(name = "county_id")
    private Integer countyId;

    @Column(name = "first_name", nullable = false)
    @NotBlank
    private String firstName;

    @Column(name = "last_name", nullable = false)
    @NotBlank
    private String lastName;

    @Column(name = "middle_initial", nullable = false)
    private String middleInitial;

    @Column(name = "grade")
    private Integer grade;

    @Column(name = "payment")
    private String paymentMethod;

    @Column(name = "guest_YN")
    @NotNull
    private char guest;

    @Column(name = "guest_ticket")
    private Integer guestTicket;

    public Student() {

    }

    public Student(long id, Integer countyId, Integer guestTicket, String firstName, String lastName, String middleInitial, int ticket, Integer grade, String paymentMethod, char guest) {
        this.id = id;
        this.countyId = countyId;
        this.guestTicket = guestTicket;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.ticket = ticket;
        this.grade = grade;
        this.paymentMethod = paymentMethod;
        this.guest = guest;
    }

    public long getId() {
        return id;
    }

    public Integer getCountyId() {
        return countyId;
    }

    public int getTicket() {
        return ticket;
    }

    public char getGuest() {
        return guest;
    }

    public Integer getGrade() {
        return grade;
    }

    public String getMiddleInitial() {
        return middleInitial;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public Integer getGuestTicket() {
        return guestTicket;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }
}