package org.project.servergame.tables;

import java.util.UUID;

public class Hint {

    private UUID id;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    private String hint;
    public Hint(UUID id, String hint) {
        this.id = id;
        this.hint = hint;
    }


}
