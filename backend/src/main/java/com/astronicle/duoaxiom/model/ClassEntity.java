package com.astronicle.duoaxiom.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "classes")
public class ClassEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;

    // Owner
    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    // Members
    @OneToMany(mappedBy = "classEntity")
    private List<ClassMembership> memberships;

    // Flashcard sets
    @OneToMany(mappedBy = "classEntity")
    private List<FlashcardSet> flashcardSets;
}