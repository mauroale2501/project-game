package org.project.servergame;

import org.project.servergame.tables.Hint;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class GameService {
    GameRepository repo;

    public GameService (GameRepository repo) {
        this.repo = repo;
    }

    public String getHint() {
        return repo.getHintsLevel1().getFirst();
    }
    public String getKey(){
        return repo.getKeyLevel1();
    }

}


//    public void halfTime() {
//        remainingTime /= 2;
//    }
//

