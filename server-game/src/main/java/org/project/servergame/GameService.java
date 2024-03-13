package org.project.servergame;

import org.project.servergame.tables.CurrentGame;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
//@Transactional
public class GameService {
    IHintRepository repo;
    IKeyRepository repoKey;
    ICurrentGameRepository repoCurrentGame;
    private int lastHintId = 0;

    public GameService(IHintRepository repo, IKeyRepository repoKey, ICurrentGameRepository repoCurrentGame) {
        this.repo = repo;
        this.repoKey = repoKey;
        this.repoCurrentGame = repoCurrentGame;
    }

    public String getHintStringByLevel(int hintId) {
        String hint = repo.findHintStringByLevel(hintId);
        return hint != null ? hint : "No hint available for this level";
    }

    public String getKeyById(int keyId) {
        String key = repoKey.findKeyById(keyId);
        return key;
    }
    public void incrementHintId(int hint) {
        lastHintId++;
    }

    public CurrentGame findBySessionIdAndEndDateIsNull(String userId) {
        return repoCurrentGame.findBySessionIdAndEndDateIsNull(userId);
    }

    public void save(CurrentGame newGame) {
        newGame.setStartDate(newGame.getStartDate());
        repoCurrentGame.save(newGame);
    }

}