package org.project.servergame;

import org.project.servergame.tables.CurrentGame;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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

    public Optional<CurrentGame> findGameByUserId(String userId) {
        return repoCurrentGame.findBySessionId(userId);
    }



    public List<CurrentGame> getAllCurrentGames() {
       return (List<CurrentGame>) repoCurrentGame.findAll();
    }

    public CurrentGame findGameByUserIdAndLevel(String userId, int level) {
        List<CurrentGame> list = repoCurrentGame.findAllBySessionIdAndLevelId(userId, level);
        if(list.isEmpty()){
            return null;
        }else if (list.size() > 1) {
            throw new IllegalStateException("more than one game");
        }
        CurrentGame currentGame = list.get(0);
        return currentGame;
    }

    public CurrentGame findGameByUserIdAndLevelIdAndEndDate(String userId, int level) {
        List<CurrentGame> list = repoCurrentGame.findAllBySessionIdAndLevelIdAndEndDateNull(userId, level);
        if(list.isEmpty()){
            return null;
        }else if (list.size() > 1) {
            throw new IllegalStateException("more than one game");
        }
        CurrentGame currentGame = list.get(0);
        return currentGame;
    }
}