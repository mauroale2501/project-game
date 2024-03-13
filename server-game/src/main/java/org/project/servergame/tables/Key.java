package org.project.servergame.tables;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "keys")
public class Key {
 
    @Id
    @Column(name = "key_id")
    private int id;

    @Column(name = "key_string")
    private String key;
    public Key(int id, String key) {
        this.id = id;
        this.key = key;
    }

    public Key(){
    };



}
