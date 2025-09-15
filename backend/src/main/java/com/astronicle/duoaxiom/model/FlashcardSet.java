package com.astronicle.duoaxiom.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "flashcard_sets")
public class FlashcardSet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    // Belongs to class
    @ManyToOne
    @JoinColumn(name = "class_id", nullable = false)
    private ClassEntity classEntity;

    // Created by user
    @ManyToOne
    @JoinColumn(name = "creator_id", nullable = false)
    private User creator;

    // Flashcards inside this set
    @OneToMany(mappedBy = "flashcardSet")
    private List<Flashcard> flashcards;
}
