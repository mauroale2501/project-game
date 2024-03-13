package org.project.servergame;

import org.project.servergame.tables.CurrentGame;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;

@Service
//@Transactional
public class GameService {
    IHintRepository repo;
    IKeyRepository repoKey;
    ICurrentGameRepository repoCurrentGame;
    int lastHintId = 0;

    public GameService(IHintRepository repo, IKeyRepository repoKey, ICurrentGameRepository repoCurrentGame) {
        this.repo = repo;
        this.repoKey = repoKey;
        this.repoCurrentGame = repoCurrentGame;
    }

    public String getHintStringByLevel(int hintId) {
        String hint = repo.findHintStringByLevel(hintId);
        if (hint == null) {
            return "No hint available for this level";
        } else {
            return hint;
        }
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

    public CurrentGame save(CurrentGame newGame) {
        newGame.setStartDate(newGame.getStartDate());
       CurrentGame game= repoCurrentGame.save(newGame);
        return  game;
    }
}