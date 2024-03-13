package org.project.servergame;

import org.springframework.stereotype.Service;

@Service
public class GameService {
    IGameRepository repo;
    private int lastHintId = 0;

    public GameService(IGameRepository repo) {
        this.repo = repo;
    }

    public String getHintStringByLevel(int hintId) {
        String hint = repo.findHintStringByLevel(hintId);
        return hint != null ? hint : "No hint available for this level";
    }

    public String getKeyById(int keyId) {
        String key = repo.findKeyById(keyId);
        return key;
    }
    public void incrementHintId(int hint) {
        lastHintId++;
    }
}