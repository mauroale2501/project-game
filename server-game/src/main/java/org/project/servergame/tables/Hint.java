package org.project.servergame.tables;

import jakarta.persistence.*;

@Entity
@Table(name = "hints")
public class Hint {

    @Id
    @Column(name = "hint_id")
    private int id;

    @Column(name = "hint_string")
    private String hint;

    public Hint(int id, String hint) {
        this.id = id;
        this.hint = hint;
    }

    public Hint() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }
}
